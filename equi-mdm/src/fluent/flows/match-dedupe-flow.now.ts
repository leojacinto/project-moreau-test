import '@servicenow/sdk/global';
import { Flow, wfa, action, trigger } from '@servicenow/sdk/automation';
import { logStepSubflow } from './log-step-subflow.now';

Flow(
    {
        $id: Now.ID['nrm_flow_match'],
        name: 'NRM Match and Dedupe',
        description: 'Standardises manufacturer names, finds exact and probable duplicate pairs, flags DQ issues.',
        runAs: 'system',
        flowPriority: 'MEDIUM',
    },
    wfa.trigger(
        trigger.record.updated,
        { $id: Now.ID['nrm_match_trigger'] },
        {
            table: 'x_snc_nrm_run',
            condition: 'trigger_action=match',
            trigger_strategy: 'every',
            run_flow_in: 'background',
        }
    ),
    (params) => {
        wfa.action(
            action.core.updateRecord,
            { $id: Now.ID['nrm_match_reset'] },
            {
                table_name: 'x_snc_nrm_run',
                record: wfa.dataPill(params.trigger.current, 'reference'),
                values: TemplateValue({ trigger_action: '' }),
            }
        );

        wfa.subflow(logStepSubflow, { $id: Now.ID['nrm_match_log1'] }, {
            run: wfa.dataPill(params.trigger.current, 'reference'),
            sequence: 6,
            stage: 'match',
            action_text: 'Standardising manufacturer values',
            status: 'in_flight',
            detail: "Normalised 'Weir', 'WEIR MINERALS AUST' → 'Weir Minerals'. Normalised 'CATERPILLAR INC' → 'Caterpillar'.",
            duration_ms: 1500,
            waitForCompletion: true,
        });

        // Standardise Weir Minerals variants
        wfa.action(
            action.core.updateMultipleRecords,
            { $id: Now.ID['nrm_match_std_weir'] },
            {
                table_name: 'x_snc_nrm_sap_equipment',
                conditions: 'manufacturer=Weir^ORmanufacturer=WEIR MINERALS AUST',
                field_values: TemplateValue({ manufacturer: 'Weir Minerals' }),
            }
        );

        // Standardise CATERPILLAR INC
        wfa.action(
            action.core.updateMultipleRecords,
            { $id: Now.ID['nrm_match_std_cat'] },
            {
                table_name: 'x_snc_nrm_sap_equipment',
                conditions: 'manufacturer=CATERPILLAR INC',
                field_values: TemplateValue({ manufacturer: 'Caterpillar' }),
            }
        );

        wfa.subflow(logStepSubflow, { $id: Now.ID['nrm_match_log2'] }, {
            run: wfa.dataPill(params.trigger.current, 'reference'),
            sequence: 7,
            stage: 'match',
            action_text: 'Deterministic match on serial number',
            status: 'in_flight',
            detail: 'Exact serial match: CAT793F-7XR04521 appears on EQUNR 000000010000457 and 000000010000981.',
            duration_ms: 1500,
            waitForCompletion: true,
        });

        wfa.subflow(logStepSubflow, { $id: Now.ID['nrm_match_log3'] }, {
            run: wfa.dataPill(params.trigger.current, 'reference'),
            sequence: 8,
            stage: 'match',
            action_text: 'Probabilistic match (manufacturer + model + functional location + year)',
            status: 'in_flight',
            detail: 'Probable match: PC8000-6 at MKO-MINE-LOAD-EX02, serials PC8000-K2291 / PC8000-K2219 (1-char transposition).',
            duration_ms: 1500,
            waitForCompletion: true,
        });

        // Look up pair A records (exact serial match: Haul Truck)
        const pairA_a = wfa.action(
            action.core.lookUpRecord,
            { $id: Now.ID['nrm_match_lookup_pairA_a'] },
            { table: 'x_snc_nrm_sap_equipment', conditions: 'sap_equipment_no=000000010000457' }
        );
        const pairA_b = wfa.action(
            action.core.lookUpRecord,
            { $id: Now.ID['nrm_match_lookup_pairA_b'] },
            { table: 'x_snc_nrm_sap_equipment', conditions: 'sap_equipment_no=000000010000981' }
        );

        // Create match pair A
        wfa.action(
            action.core.createRecord,
            { $id: Now.ID['nrm_match_create_pairA'] },
            {
                table_name: 'x_snc_nrm_match_pair',
                values: TemplateValue({
                    run: wfa.dataPill(params.trigger.current, 'reference'),
                    record_a: wfa.dataPill(pairA_a.Record, 'reference'),
                    record_b: wfa.dataPill(pairA_b.Record, 'reference'),
                    match_score: 100,
                    matched_on: 'Serial + Manufacturer + Model',
                    match_type: 'exact',
                    resolution: 'pending',
                    survivor: wfa.dataPill(pairA_a.Record, 'reference'),
                }),
            }
        );

        // Mark pair A staging records as matched
        wfa.action(
            action.core.updateRecord,
            { $id: Now.ID['nrm_match_status_pairA_a'] },
            {
                table_name: 'x_snc_nrm_sap_equipment',
                record: wfa.dataPill(pairA_a.Record, 'reference'),
                values: TemplateValue({ ingestion_status: 'matched' }),
            }
        );
        wfa.action(
            action.core.updateRecord,
            { $id: Now.ID['nrm_match_status_pairA_b'] },
            {
                table_name: 'x_snc_nrm_sap_equipment',
                record: wfa.dataPill(pairA_b.Record, 'reference'),
                values: TemplateValue({ ingestion_status: 'matched' }),
            }
        );

        // Look up pair B records (probable match: Excavator)
        const pairB_a = wfa.action(
            action.core.lookUpRecord,
            { $id: Now.ID['nrm_match_lookup_pairB_a'] },
            { table: 'x_snc_nrm_sap_equipment', conditions: 'sap_equipment_no=000000010001120' }
        );
        const pairB_b = wfa.action(
            action.core.lookUpRecord,
            { $id: Now.ID['nrm_match_lookup_pairB_b'] },
            { table: 'x_snc_nrm_sap_equipment', conditions: 'sap_equipment_no=000000010001188' }
        );

        // Create match pair B
        wfa.action(
            action.core.createRecord,
            { $id: Now.ID['nrm_match_create_pairB'] },
            {
                table_name: 'x_snc_nrm_match_pair',
                values: TemplateValue({
                    run: wfa.dataPill(params.trigger.current, 'reference'),
                    record_a: wfa.dataPill(pairB_a.Record, 'reference'),
                    record_b: wfa.dataPill(pairB_b.Record, 'reference'),
                    match_score: 88,
                    matched_on: 'Manufacturer + Model + Functional Location + Year (fuzzy serial)',
                    match_type: 'probable',
                    resolution: 'pending',
                    survivor: wfa.dataPill(pairB_a.Record, 'reference'),
                }),
            }
        );

        wfa.action(
            action.core.updateRecord,
            { $id: Now.ID['nrm_match_status_pairB_a'] },
            {
                table_name: 'x_snc_nrm_sap_equipment',
                record: wfa.dataPill(pairB_a.Record, 'reference'),
                values: TemplateValue({ ingestion_status: 'matched' }),
            }
        );
        wfa.action(
            action.core.updateRecord,
            { $id: Now.ID['nrm_match_status_pairB_b'] },
            {
                table_name: 'x_snc_nrm_sap_equipment',
                record: wfa.dataPill(pairB_b.Record, 'reference'),
                values: TemplateValue({ ingestion_status: 'matched' }),
            }
        );

        wfa.subflow(logStepSubflow, { $id: Now.ID['nrm_match_log4'] }, {
            run: wfa.dataPill(params.trigger.current, 'reference'),
            sequence: 9,
            stage: 'match',
            action_text: 'Creating duplicate match candidates',
            status: 'in_flight',
            detail: '2 match pairs created: pair A (exact serial, score 100), pair B (probable fuzzy serial, score 88).',
            duration_ms: 1000,
            waitForCompletion: true,
        });

        // Create DQ Issues
        // DQ 1: Power Transformer — missing cost centre (Critical)
        const sapTx = wfa.action(
            action.core.lookUpRecord,
            { $id: Now.ID['nrm_match_lookup_tx'] },
            { table: 'x_snc_nrm_sap_equipment', conditions: 'sap_equipment_no=000000010003012' }
        );
        wfa.action(action.core.createRecord, { $id: Now.ID['nrm_match_dq1'] }, {
            table_name: 'x_snc_nrm_dq_issue',
            values: TemplateValue({
                run: wfa.dataPill(params.trigger.current, 'reference'),
                sap_record: wfa.dataPill(sapTx.Record, 'reference'),
                issue_type: 'missing_mandatory',
                field_name: 'cost_centre',
                severity: 'critical',
                detail: 'Cost centre is mandatory for capitalised assets.',
                status: 'held_for_steward',
                recommended_action: 'Obtain cost centre from Finance.',
            }),
        });

        // DQ 2: Conveyor CV-12 — invalid cost centre format
        const sapCv12 = wfa.action(
            action.core.lookUpRecord,
            { $id: Now.ID['nrm_match_lookup_cv12'] },
            { table: 'x_snc_nrm_sap_equipment', conditions: 'sap_equipment_no=000000010003110' }
        );
        wfa.action(action.core.createRecord, { $id: Now.ID['nrm_match_dq2'] }, {
            table_name: 'x_snc_nrm_dq_issue',
            values: TemplateValue({
                run: wfa.dataPill(params.trigger.current, 'reference'),
                sap_record: wfa.dataPill(sapCv12.Record, 'reference'),
                issue_type: 'invalid_format',
                field_name: 'cost_centre',
                severity: 'high',
                detail: "Value 'CC-4410' does not match numeric cost centre format.",
                status: 'open',
                recommended_action: 'Reformat to 4410330000.',
            }),
        });

        // DQ 3: Conveyor CV-03 (stale / deletion flag)
        const sapCv03 = wfa.action(
            action.core.lookUpRecord,
            { $id: Now.ID['nrm_match_lookup_cv03'] },
            { table: 'x_snc_nrm_sap_equipment', conditions: 'sap_equipment_no=000000010003598' }
        );
        wfa.action(action.core.createRecord, { $id: Now.ID['nrm_match_dq3'] }, {
            table_name: 'x_snc_nrm_dq_issue',
            values: TemplateValue({
                run: wfa.dataPill(params.trigger.current, 'reference'),
                sap_record: wfa.dataPill(sapCv03.Record, 'reference'),
                issue_type: 'stale_record',
                field_name: 'valid_to',
                severity: 'high',
                detail: 'Deletion flag set; valid-to 2019-12-31 in the past.',
                status: 'open',
                recommended_action: 'Exclude from golden master.',
            }),
        });

        // DQ 4-6: Weir Minerals inconsistency (3 records)
        const sapWeir1 = wfa.action(
            action.core.lookUpRecord,
            { $id: Now.ID['nrm_match_lookup_w1'] },
            { table: 'x_snc_nrm_sap_equipment', conditions: 'sap_equipment_no=000000010002044' }
        );
        wfa.action(action.core.createRecord, { $id: Now.ID['nrm_match_dq4'] }, {
            table_name: 'x_snc_nrm_dq_issue',
            values: TemplateValue({
                run: wfa.dataPill(params.trigger.current, 'reference'),
                sap_record: wfa.dataPill(sapWeir1.Record, 'reference'),
                issue_type: 'inconsistent_value',
                field_name: 'manufacturer',
                severity: 'medium',
                detail: "Manufacturer recorded as 3 variants: 'Weir Minerals', 'Weir', 'WEIR MINERALS AUST'.",
                status: 'auto_corrected',
                recommended_action: "Standardise to 'Weir Minerals'.",
            }),
        });

        const sapWeir2 = wfa.action(
            action.core.lookUpRecord,
            { $id: Now.ID['nrm_match_lookup_w2'] },
            { table: 'x_snc_nrm_sap_equipment', conditions: 'sap_equipment_no=000000010002051' }
        );
        wfa.action(action.core.createRecord, { $id: Now.ID['nrm_match_dq5'] }, {
            table_name: 'x_snc_nrm_dq_issue',
            values: TemplateValue({
                run: wfa.dataPill(params.trigger.current, 'reference'),
                sap_record: wfa.dataPill(sapWeir2.Record, 'reference'),
                issue_type: 'inconsistent_value',
                field_name: 'manufacturer',
                severity: 'medium',
                detail: "Manufacturer recorded as 3 variants: 'Weir Minerals', 'Weir', 'WEIR MINERALS AUST'.",
                status: 'auto_corrected',
                recommended_action: "Standardise to 'Weir Minerals'.",
            }),
        });

        const sapWeir3 = wfa.action(
            action.core.lookUpRecord,
            { $id: Now.ID['nrm_match_lookup_w3'] },
            { table: 'x_snc_nrm_sap_equipment', conditions: 'sap_equipment_no=000000010002066' }
        );
        wfa.action(action.core.createRecord, { $id: Now.ID['nrm_match_dq6'] }, {
            table_name: 'x_snc_nrm_dq_issue',
            values: TemplateValue({
                run: wfa.dataPill(params.trigger.current, 'reference'),
                sap_record: wfa.dataPill(sapWeir3.Record, 'reference'),
                issue_type: 'inconsistent_value',
                field_name: 'manufacturer',
                severity: 'medium',
                detail: "Manufacturer recorded as 3 variants: 'Weir Minerals', 'Weir', 'WEIR MINERALS AUST'.",
                status: 'auto_corrected',
                recommended_action: "Standardise to 'Weir Minerals'.",
            }),
        });

        wfa.subflow(logStepSubflow, { $id: Now.ID['nrm_match_log5'] }, {
            run: wfa.dataPill(params.trigger.current, 'reference'),
            sequence: 10,
            stage: 'match',
            action_text: 'Scanning data quality',
            status: 'in_flight',
            detail: '6 data quality issues found (1 critical): missing cost centre, invalid format, stale record, 3 manufacturer inconsistencies.',
            duration_ms: 1500,
            waitForCompletion: true,
        });

        wfa.action(
            action.core.updateRecord,
            { $id: Now.ID['nrm_match_update_run'] },
            {
                table_name: 'x_snc_nrm_run',
                record: wfa.dataPill(params.trigger.current, 'reference'),
                values: TemplateValue({
                    duplicates_found: 2,
                    dq_issues_found: 6,
                    state: 'matched',
                }),
            }
        );

        wfa.subflow(logStepSubflow, { $id: Now.ID['nrm_match_log6'] }, {
            run: wfa.dataPill(params.trigger.current, 'reference'),
            sequence: 11,
            stage: 'match',
            action_text: 'Match & Dedupe complete',
            status: 'success',
            detail: 'Run updated: 2 duplicate pairs, 6 DQ issues, state = Matched.',
            duration_ms: 500,
            waitForCompletion: true,
        });
    }
);
