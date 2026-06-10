import '@servicenow/sdk/global';
import { Flow, wfa, action, trigger } from '@servicenow/sdk/automation';
import { logStepSubflow } from './log-step-subflow.now';

Flow(
    {
        $id: Now.ID['nrm_flow_resolve'],
        name: 'NRM Resolve and Promote to Golden',
        description: 'Applies survivorship rules, merges pairs, rejects stale records, creates golden master records.',
        runAs: 'system',
        flowPriority: 'MEDIUM',
    },
    wfa.trigger(
        trigger.record.updated,
        { $id: Now.ID['nrm_resolve_trigger'] },
        {
            table: 'x_snc_nrm_run',
            condition: 'trigger_action=resolve',
            trigger_strategy: 'every',
            run_flow_in: 'background',
        }
    ),
    (params) => {
        wfa.action(
            action.core.updateRecord,
            { $id: Now.ID['nrm_resolve_reset'] },
            {
                table_name: 'x_snc_nrm_run',
                record: wfa.dataPill(params.trigger.current, 'reference'),
                values: TemplateValue({ trigger_action: '' }),
            }
        );

        wfa.subflow(logStepSubflow, { $id: Now.ID['nrm_resolve_log1'] }, {
            run: wfa.dataPill(params.trigger.current, 'reference'),
            sequence: 12,
            stage: 'resolve',
            action_text: 'Applying survivorship rules',
            status: 'in_flight',
            detail: 'Survivor = most complete record, tie-broken by most recently changed in SAP. Golden record references all source EQUNRs.',
            duration_ms: 1500,
            waitForCompletion: true,
        });

        // Merge pair A: non-survivor EQUNR 000000010000981 → Merged
        const nonSurvivorA = wfa.action(
            action.core.lookUpRecord,
            { $id: Now.ID['nrm_resolve_lookup_nsA'] },
            { table: 'x_snc_nrm_sap_equipment', conditions: 'sap_equipment_no=000000010000981' }
        );
        wfa.action(action.core.updateRecord, { $id: Now.ID['nrm_resolve_merge_nsA'] }, {
            table_name: 'x_snc_nrm_sap_equipment',
            record: wfa.dataPill(nonSurvivorA.Record, 'reference'),
            values: TemplateValue({ ingestion_status: 'merged' }),
        });

        // Merge pair B: non-survivor EQUNR 000000010001188 → Merged
        const nonSurvivorB = wfa.action(
            action.core.lookUpRecord,
            { $id: Now.ID['nrm_resolve_lookup_nsB'] },
            { table: 'x_snc_nrm_sap_equipment', conditions: 'sap_equipment_no=000000010001188' }
        );
        wfa.action(action.core.updateRecord, { $id: Now.ID['nrm_resolve_merge_nsB'] }, {
            table_name: 'x_snc_nrm_sap_equipment',
            record: wfa.dataPill(nonSurvivorB.Record, 'reference'),
            values: TemplateValue({ ingestion_status: 'merged' }),
        });

        // Update match pairs to Merged resolution
        wfa.action(action.core.updateMultipleRecords, { $id: Now.ID['nrm_resolve_pairs_merged'] }, {
            table_name: 'x_snc_nrm_match_pair',
            conditions: `run=${wfa.dataPill(params.trigger.current, 'document_id')}`,
            field_values: TemplateValue({ resolution: 'merged' }),
        });

        wfa.subflow(logStepSubflow, { $id: Now.ID['nrm_resolve_log2'] }, {
            run: wfa.dataPill(params.trigger.current, 'reference'),
            sequence: 13,
            stage: 'resolve',
            action_text: 'Merging duplicate pairs',
            status: 'in_flight',
            detail: 'Pair A survivor: 000000010000457 (last changed 2026-03-02). Pair B survivor: 000000010001120 (last changed 2026-01-19).',
            duration_ms: 1500,
            waitForCompletion: true,
        });

        // Reject stale record EQUNR 000000010003598
        const staleRec = wfa.action(
            action.core.lookUpRecord,
            { $id: Now.ID['nrm_resolve_lookup_stale'] },
            { table: 'x_snc_nrm_sap_equipment', conditions: 'sap_equipment_no=000000010003598' }
        );
        wfa.action(action.core.updateRecord, { $id: Now.ID['nrm_resolve_reject_stale'] }, {
            table_name: 'x_snc_nrm_sap_equipment',
            record: wfa.dataPill(staleRec.Record, 'reference'),
            values: TemplateValue({ ingestion_status: 'rejected' }),
        });

        wfa.subflow(logStepSubflow, { $id: Now.ID['nrm_resolve_log3'] }, {
            run: wfa.dataPill(params.trigger.current, 'reference'),
            sequence: 14,
            stage: 'resolve',
            action_text: 'Rejecting stale / deletion-flagged records',
            status: 'in_flight',
            detail: '1 record rejected (EQUNR 000000010003598): deletion flag set, valid-to 2019-12-31 in the past.',
            duration_ms: 1000,
            waitForCompletion: true,
        });

        // Auto-correct fixable DQ issues: invalid cost centre 000000010003110
        wfa.action(action.core.updateMultipleRecords, { $id: Now.ID['nrm_resolve_fix_cc'] }, {
            table_name: 'x_snc_nrm_sap_equipment',
            conditions: 'sap_equipment_no=000000010003110',
            field_values: TemplateValue({ cost_centre: '4410330000' }),
        });
        wfa.action(action.core.updateMultipleRecords, { $id: Now.ID['nrm_resolve_fix_dq_cc'] }, {
            table_name: 'x_snc_nrm_dq_issue',
            conditions: `run=${wfa.dataPill(params.trigger.current, 'document_id')}^issue_type=invalid_format`,
            field_values: TemplateValue({ status: 'auto_corrected' }),
        });

        wfa.subflow(logStepSubflow, { $id: Now.ID['nrm_resolve_log4'] }, {
            run: wfa.dataPill(params.trigger.current, 'reference'),
            sequence: 15,
            stage: 'resolve',
            action_text: 'Auto-correcting fixable issues',
            status: 'in_flight',
            detail: "Manufacturer variants normalised. Conveyor CV-12 cost centre reformatted to '4410330000'. 4 DQ issues auto-corrected.",
            duration_ms: 1000,
            waitForCompletion: true,
        });

        // ── Create 10 golden master records ────────────────────────────────────

        // Golden 1: Pair A survivor (Haul Truck 793F) — combined EQUNRs
        const sapHaulTruck = wfa.action(
            action.core.lookUpRecord,
            { $id: Now.ID['nrm_resolve_sap_ht'] },
            { table: 'x_snc_nrm_sap_equipment', conditions: 'sap_equipment_no=000000010000457' }
        );
        const golden1 = wfa.action(action.core.createRecord, { $id: Now.ID['nrm_resolve_gold1'] }, {
            table_name: 'x_snc_nrm_equipment_master',
            values: TemplateValue({
                equipment_desc: wfa.dataPill(sapHaulTruck.Record.equipment_desc, 'string'),
                object_type: wfa.dataPill(sapHaulTruck.Record.object_type, 'string'),
                manufacturer: 'Caterpillar',
                model_number: wfa.dataPill(sapHaulTruck.Record.model_number, 'string'),
                serial_number: wfa.dataPill(sapHaulTruck.Record.serial_number, 'string'),
                manufacture_year: wfa.dataPill(sapHaulTruck.Record.manufacture_year, 'string'),
                maintenance_plant: wfa.dataPill(sapHaulTruck.Record.maintenance_plant, 'string'),
                functional_location: wfa.dataPill(sapHaulTruck.Record.functional_location, 'string'),
                cost_centre: wfa.dataPill(sapHaulTruck.Record.cost_centre, 'string'),
                company_code: wfa.dataPill(sapHaulTruck.Record.company_code, 'string'),
                sap_source_ids: '000000010000457,000000010000981',
                data_quality_score: 100,
                master_status: 'draft',
                survivorship_note: 'Merged from 2 duplicates (exact serial match). Survivor: most recently changed in SAP (2026-03-02).',
            }),
        });
        wfa.action(action.core.updateRecord, { $id: Now.ID['nrm_resolve_upd_sap_ht'] }, {
            table_name: 'x_snc_nrm_sap_equipment',
            record: wfa.dataPill(sapHaulTruck.Record, 'reference'),
            values: TemplateValue({ golden_record: wfa.dataPill(golden1.record, 'reference'), ingestion_status: 'promoted' }),
        });

        // Golden 2: Pair B survivor (Excavator PC8000)
        const sapExcavator = wfa.action(
            action.core.lookUpRecord,
            { $id: Now.ID['nrm_resolve_sap_ex'] },
            { table: 'x_snc_nrm_sap_equipment', conditions: 'sap_equipment_no=000000010001120' }
        );
        const golden2 = wfa.action(action.core.createRecord, { $id: Now.ID['nrm_resolve_gold2'] }, {
            table_name: 'x_snc_nrm_equipment_master',
            values: TemplateValue({
                equipment_desc: wfa.dataPill(sapExcavator.Record.equipment_desc, 'string'),
                object_type: wfa.dataPill(sapExcavator.Record.object_type, 'string'),
                manufacturer: wfa.dataPill(sapExcavator.Record.manufacturer, 'string'),
                model_number: wfa.dataPill(sapExcavator.Record.model_number, 'string'),
                serial_number: wfa.dataPill(sapExcavator.Record.serial_number, 'string'),
                manufacture_year: wfa.dataPill(sapExcavator.Record.manufacture_year, 'string'),
                maintenance_plant: wfa.dataPill(sapExcavator.Record.maintenance_plant, 'string'),
                functional_location: wfa.dataPill(sapExcavator.Record.functional_location, 'string'),
                cost_centre: wfa.dataPill(sapExcavator.Record.cost_centre, 'string'),
                company_code: wfa.dataPill(sapExcavator.Record.company_code, 'string'),
                sap_source_ids: '000000010001120,000000010001188',
                data_quality_score: 95,
                master_status: 'draft',
                survivorship_note: 'Merged from probable serial-transposition duplicate. Survivor: most recently changed in SAP (2026-01-19).',
            }),
        });
        wfa.action(action.core.updateRecord, { $id: Now.ID['nrm_resolve_upd_sap_ex'] }, {
            table_name: 'x_snc_nrm_sap_equipment',
            record: wfa.dataPill(sapExcavator.Record, 'reference'),
            values: TemplateValue({ golden_record: wfa.dataPill(golden2.record, 'reference'), ingestion_status: 'promoted' }),
        });

        // Golden 3–5: Weir Minerals pumps
        const sapW1 = wfa.action(action.core.lookUpRecord, { $id: Now.ID['nrm_resolve_sap_w1'] }, { table: 'x_snc_nrm_sap_equipment', conditions: 'sap_equipment_no=000000010002044' });
        const gW1 = wfa.action(action.core.createRecord, { $id: Now.ID['nrm_resolve_gold3'] }, {
            table_name: 'x_snc_nrm_equipment_master',
            values: TemplateValue({ equipment_desc: wfa.dataPill(sapW1.Record.equipment_desc, 'string'), object_type: wfa.dataPill(sapW1.Record.object_type, 'string'), manufacturer: 'Weir Minerals', model_number: wfa.dataPill(sapW1.Record.model_number, 'string'), serial_number: wfa.dataPill(sapW1.Record.serial_number, 'string'), manufacture_year: wfa.dataPill(sapW1.Record.manufacture_year, 'string'), maintenance_plant: wfa.dataPill(sapW1.Record.maintenance_plant, 'string'), functional_location: wfa.dataPill(sapW1.Record.functional_location, 'string'), cost_centre: wfa.dataPill(sapW1.Record.cost_centre, 'string'), company_code: wfa.dataPill(sapW1.Record.company_code, 'string'), sap_source_ids: wfa.dataPill(sapW1.Record.sap_equipment_no, 'string'), data_quality_score: 100, master_status: 'draft', survivorship_note: 'Manufacturer normalised to Weir Minerals.' }),
        });
        wfa.action(action.core.updateRecord, { $id: Now.ID['nrm_resolve_upd_w1'] }, { table_name: 'x_snc_nrm_sap_equipment', record: wfa.dataPill(sapW1.Record, 'reference'), values: TemplateValue({ golden_record: wfa.dataPill(gW1.record, 'reference'), ingestion_status: 'promoted' }) });

        const sapW2 = wfa.action(action.core.lookUpRecord, { $id: Now.ID['nrm_resolve_sap_w2'] }, { table: 'x_snc_nrm_sap_equipment', conditions: 'sap_equipment_no=000000010002051' });
        const gW2 = wfa.action(action.core.createRecord, { $id: Now.ID['nrm_resolve_gold4'] }, {
            table_name: 'x_snc_nrm_equipment_master',
            values: TemplateValue({ equipment_desc: wfa.dataPill(sapW2.Record.equipment_desc, 'string'), object_type: wfa.dataPill(sapW2.Record.object_type, 'string'), manufacturer: 'Weir Minerals', model_number: wfa.dataPill(sapW2.Record.model_number, 'string'), serial_number: wfa.dataPill(sapW2.Record.serial_number, 'string'), manufacture_year: wfa.dataPill(sapW2.Record.manufacture_year, 'string'), maintenance_plant: wfa.dataPill(sapW2.Record.maintenance_plant, 'string'), functional_location: wfa.dataPill(sapW2.Record.functional_location, 'string'), cost_centre: wfa.dataPill(sapW2.Record.cost_centre, 'string'), company_code: wfa.dataPill(sapW2.Record.company_code, 'string'), sap_source_ids: wfa.dataPill(sapW2.Record.sap_equipment_no, 'string'), data_quality_score: 100, master_status: 'draft', survivorship_note: 'Manufacturer normalised to Weir Minerals.' }),
        });
        wfa.action(action.core.updateRecord, { $id: Now.ID['nrm_resolve_upd_w2'] }, { table_name: 'x_snc_nrm_sap_equipment', record: wfa.dataPill(sapW2.Record, 'reference'), values: TemplateValue({ golden_record: wfa.dataPill(gW2.record, 'reference'), ingestion_status: 'promoted' }) });

        const sapW3 = wfa.action(action.core.lookUpRecord, { $id: Now.ID['nrm_resolve_sap_w3'] }, { table: 'x_snc_nrm_sap_equipment', conditions: 'sap_equipment_no=000000010002066' });
        const gW3 = wfa.action(action.core.createRecord, { $id: Now.ID['nrm_resolve_gold5'] }, {
            table_name: 'x_snc_nrm_equipment_master',
            values: TemplateValue({ equipment_desc: wfa.dataPill(sapW3.Record.equipment_desc, 'string'), object_type: wfa.dataPill(sapW3.Record.object_type, 'string'), manufacturer: 'Weir Minerals', model_number: wfa.dataPill(sapW3.Record.model_number, 'string'), serial_number: wfa.dataPill(sapW3.Record.serial_number, 'string'), manufacture_year: wfa.dataPill(sapW3.Record.manufacture_year, 'string'), maintenance_plant: wfa.dataPill(sapW3.Record.maintenance_plant, 'string'), functional_location: wfa.dataPill(sapW3.Record.functional_location, 'string'), cost_centre: wfa.dataPill(sapW3.Record.cost_centre, 'string'), company_code: wfa.dataPill(sapW3.Record.company_code, 'string'), sap_source_ids: wfa.dataPill(sapW3.Record.sap_equipment_no, 'string'), data_quality_score: 100, master_status: 'draft', survivorship_note: 'Manufacturer normalised to Weir Minerals.' }),
        });
        wfa.action(action.core.updateRecord, { $id: Now.ID['nrm_resolve_upd_w3'] }, { table_name: 'x_snc_nrm_sap_equipment', record: wfa.dataPill(sapW3.Record, 'reference'), values: TemplateValue({ golden_record: wfa.dataPill(gW3.record, 'reference'), ingestion_status: 'promoted' }) });

        // Golden 6: Power Transformer 33kV (HELD — missing cost centre)
        const sapTxResolve = wfa.action(action.core.lookUpRecord, { $id: Now.ID['nrm_resolve_sap_tx'] }, { table: 'x_snc_nrm_sap_equipment', conditions: 'sap_equipment_no=000000010003012' });
        const gTx = wfa.action(action.core.createRecord, { $id: Now.ID['nrm_resolve_gold6'] }, {
            table_name: 'x_snc_nrm_equipment_master',
            values: TemplateValue({ equipment_desc: wfa.dataPill(sapTxResolve.Record.equipment_desc, 'string'), object_type: wfa.dataPill(sapTxResolve.Record.object_type, 'string'), manufacturer: wfa.dataPill(sapTxResolve.Record.manufacturer, 'string'), model_number: wfa.dataPill(sapTxResolve.Record.model_number, 'string'), serial_number: wfa.dataPill(sapTxResolve.Record.serial_number, 'string'), manufacture_year: wfa.dataPill(sapTxResolve.Record.manufacture_year, 'string'), maintenance_plant: wfa.dataPill(sapTxResolve.Record.maintenance_plant, 'string'), functional_location: wfa.dataPill(sapTxResolve.Record.functional_location, 'string'), company_code: wfa.dataPill(sapTxResolve.Record.company_code, 'string'), sap_source_ids: wfa.dataPill(sapTxResolve.Record.sap_equipment_no, 'string'), data_quality_score: 70, master_status: 'held', survivorship_note: 'Held pending mandatory cost centre from Finance.' }),
        });
        wfa.action(action.core.updateRecord, { $id: Now.ID['nrm_resolve_upd_tx'] }, { table_name: 'x_snc_nrm_sap_equipment', record: wfa.dataPill(sapTxResolve.Record, 'reference'), values: TemplateValue({ golden_record: wfa.dataPill(gTx.record, 'reference'), ingestion_status: 'promoted' }) });

        // Golden 7: Conveyor CV-12
        const sapCv12R = wfa.action(action.core.lookUpRecord, { $id: Now.ID['nrm_resolve_sap_cv12'] }, { table: 'x_snc_nrm_sap_equipment', conditions: 'sap_equipment_no=000000010003110' });
        const gCv12 = wfa.action(action.core.createRecord, { $id: Now.ID['nrm_resolve_gold7'] }, {
            table_name: 'x_snc_nrm_equipment_master',
            values: TemplateValue({ equipment_desc: wfa.dataPill(sapCv12R.Record.equipment_desc, 'string'), object_type: wfa.dataPill(sapCv12R.Record.object_type, 'string'), manufacturer: wfa.dataPill(sapCv12R.Record.manufacturer, 'string'), model_number: wfa.dataPill(sapCv12R.Record.model_number, 'string'), serial_number: wfa.dataPill(sapCv12R.Record.serial_number, 'string'), manufacture_year: wfa.dataPill(sapCv12R.Record.manufacture_year, 'string'), maintenance_plant: wfa.dataPill(sapCv12R.Record.maintenance_plant, 'string'), functional_location: wfa.dataPill(sapCv12R.Record.functional_location, 'string'), cost_centre: '4410330000', company_code: wfa.dataPill(sapCv12R.Record.company_code, 'string'), sap_source_ids: wfa.dataPill(sapCv12R.Record.sap_equipment_no, 'string'), data_quality_score: 95, master_status: 'draft', survivorship_note: 'Cost centre reformatted from CC-4410 to 4410330000.' }),
        });
        wfa.action(action.core.updateRecord, { $id: Now.ID['nrm_resolve_upd_cv12'] }, { table_name: 'x_snc_nrm_sap_equipment', record: wfa.dataPill(sapCv12R.Record, 'reference'), values: TemplateValue({ golden_record: wfa.dataPill(gCv12.record, 'reference'), ingestion_status: 'promoted' }) });

        // Golden 8: Dragline BE 1370W
        const sapDl = wfa.action(action.core.lookUpRecord, { $id: Now.ID['nrm_resolve_sap_dl'] }, { table: 'x_snc_nrm_sap_equipment', conditions: 'sap_equipment_no=000000010004001' });
        const gDl = wfa.action(action.core.createRecord, { $id: Now.ID['nrm_resolve_gold8'] }, {
            table_name: 'x_snc_nrm_equipment_master',
            values: TemplateValue({ equipment_desc: wfa.dataPill(sapDl.Record.equipment_desc, 'string'), object_type: wfa.dataPill(sapDl.Record.object_type, 'string'), manufacturer: wfa.dataPill(sapDl.Record.manufacturer, 'string'), model_number: wfa.dataPill(sapDl.Record.model_number, 'string'), serial_number: wfa.dataPill(sapDl.Record.serial_number, 'string'), manufacture_year: wfa.dataPill(sapDl.Record.manufacture_year, 'string'), maintenance_plant: wfa.dataPill(sapDl.Record.maintenance_plant, 'string'), functional_location: wfa.dataPill(sapDl.Record.functional_location, 'string'), cost_centre: wfa.dataPill(sapDl.Record.cost_centre, 'string'), company_code: wfa.dataPill(sapDl.Record.company_code, 'string'), sap_source_ids: wfa.dataPill(sapDl.Record.sap_equipment_no, 'string'), data_quality_score: 100, master_status: 'draft', survivorship_note: 'Clean record. Promoted directly.' }),
        });
        wfa.action(action.core.updateRecord, { $id: Now.ID['nrm_resolve_upd_dl'] }, { table_name: 'x_snc_nrm_sap_equipment', record: wfa.dataPill(sapDl.Record, 'reference'), values: TemplateValue({ golden_record: wfa.dataPill(gDl.record, 'reference'), ingestion_status: 'promoted' }) });

        // Golden 9: Loader 994K
        const sapLd = wfa.action(action.core.lookUpRecord, { $id: Now.ID['nrm_resolve_sap_ld'] }, { table: 'x_snc_nrm_sap_equipment', conditions: 'sap_equipment_no=000000010004220' });
        const gLd = wfa.action(action.core.createRecord, { $id: Now.ID['nrm_resolve_gold9'] }, {
            table_name: 'x_snc_nrm_equipment_master',
            values: TemplateValue({ equipment_desc: wfa.dataPill(sapLd.Record.equipment_desc, 'string'), object_type: wfa.dataPill(sapLd.Record.object_type, 'string'), manufacturer: wfa.dataPill(sapLd.Record.manufacturer, 'string'), model_number: wfa.dataPill(sapLd.Record.model_number, 'string'), serial_number: wfa.dataPill(sapLd.Record.serial_number, 'string'), manufacture_year: wfa.dataPill(sapLd.Record.manufacture_year, 'string'), maintenance_plant: wfa.dataPill(sapLd.Record.maintenance_plant, 'string'), functional_location: wfa.dataPill(sapLd.Record.functional_location, 'string'), cost_centre: wfa.dataPill(sapLd.Record.cost_centre, 'string'), company_code: wfa.dataPill(sapLd.Record.company_code, 'string'), sap_source_ids: wfa.dataPill(sapLd.Record.sap_equipment_no, 'string'), data_quality_score: 100, master_status: 'draft', survivorship_note: 'Clean record. Promoted directly.' }),
        });
        wfa.action(action.core.updateRecord, { $id: Now.ID['nrm_resolve_upd_ld'] }, { table_name: 'x_snc_nrm_sap_equipment', record: wfa.dataPill(sapLd.Record, 'reference'), values: TemplateValue({ golden_record: wfa.dataPill(gLd.record, 'reference'), ingestion_status: 'promoted' }) });

        // Golden 10: Cooling Pump CP-7
        const sapCp = wfa.action(action.core.lookUpRecord, { $id: Now.ID['nrm_resolve_sap_cp'] }, { table: 'x_snc_nrm_sap_equipment', conditions: 'sap_equipment_no=000000010004388' });
        const gCp = wfa.action(action.core.createRecord, { $id: Now.ID['nrm_resolve_gold10'] }, {
            table_name: 'x_snc_nrm_equipment_master',
            values: TemplateValue({ equipment_desc: wfa.dataPill(sapCp.Record.equipment_desc, 'string'), object_type: wfa.dataPill(sapCp.Record.object_type, 'string'), manufacturer: wfa.dataPill(sapCp.Record.manufacturer, 'string'), model_number: wfa.dataPill(sapCp.Record.model_number, 'string'), serial_number: wfa.dataPill(sapCp.Record.serial_number, 'string'), manufacture_year: wfa.dataPill(sapCp.Record.manufacture_year, 'string'), maintenance_plant: wfa.dataPill(sapCp.Record.maintenance_plant, 'string'), functional_location: wfa.dataPill(sapCp.Record.functional_location, 'string'), cost_centre: wfa.dataPill(sapCp.Record.cost_centre, 'string'), company_code: wfa.dataPill(sapCp.Record.company_code, 'string'), sap_source_ids: wfa.dataPill(sapCp.Record.sap_equipment_no, 'string'), data_quality_score: 100, master_status: 'draft', survivorship_note: 'Clean record. Promoted directly.' }),
        });
        wfa.action(action.core.updateRecord, { $id: Now.ID['nrm_resolve_upd_cp'] }, { table_name: 'x_snc_nrm_sap_equipment', record: wfa.dataPill(sapCp.Record, 'reference'), values: TemplateValue({ golden_record: wfa.dataPill(gCp.record, 'reference'), ingestion_status: 'promoted' }) });

        wfa.subflow(logStepSubflow, { $id: Now.ID['nrm_resolve_log5'] }, {
            run: wfa.dataPill(params.trigger.current, 'reference'),
            sequence: 16,
            stage: 'resolve',
            action_text: 'Creating golden master records',
            status: 'in_flight',
            detail: '10 golden master records created: 2 merged, 7 individual, 1 held (missing cost centre).',
            duration_ms: 1000,
            waitForCompletion: true,
        });

        wfa.action(action.core.updateRecord, { $id: Now.ID['nrm_resolve_update_run'] }, {
            table_name: 'x_snc_nrm_run',
            record: wfa.dataPill(params.trigger.current, 'reference'),
            values: TemplateValue({ golden_records_created: 10, state: 'resolved' }),
        });

        wfa.subflow(logStepSubflow, { $id: Now.ID['nrm_resolve_log6'] }, {
            run: wfa.dataPill(params.trigger.current, 'reference'),
            sequence: 17,
            stage: 'resolve',
            action_text: 'Resolve & Promote complete',
            status: 'success',
            detail: 'Run updated: 10 golden records created, state = Resolved.',
            duration_ms: 500,
            waitForCompletion: true,
        });
    }
);
