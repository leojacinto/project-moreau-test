import '@servicenow/sdk/global';
import { Flow, wfa, trigger, action } from '@servicenow/sdk/automation';
import { logStepSubflow } from './log-step-subflow.now';

export const flowResolveAndPromote = Flow(
    {
        $id: Now.ID['flow-resolve-and-promote'],
        name: 'Resolve & Promote to Golden',
        description: 'Applies survivorship rules, merges pairs, rejects stale records, auto-corrects issues, creates golden master records.',
        runAs: 'system',
    },
    wfa.trigger(
        trigger.record.updated,
        { $id: Now.ID['flow-resolve-trigger'] },
        {
            table: 'x_snc_eqmdm_run',
            condition: 'state=resolving',
            trigger_strategy: 'always',
        },
    ),
    (params) => {
        wfa.subflow(logStepSubflow, { $id: Now.ID['res-log-s1'] }, { run_sys_id: wfa.dataPill(params.trigger.current, 'string'), sequence: 1, stage: 'resolve', action_label: 'Applying survivorship rules', status: 'in_flight', detail: 'Survivorship rule: most complete record wins, tie-broken by most recently changed in SAP. Golden record references all source EQUNRs.', duration_ms: 1500, waitForCompletion: true });

        const aSurv = wfa.action(action.core.lookUpRecord, { $id: Now.ID['res-lu-a-s'] }, { table: 'x_snc_eqmdm_sap_equipment', conditions: 'sap_equipment_no=000000010000457' });
        const aNonS = wfa.action(action.core.lookUpRecord, { $id: Now.ID['res-lu-a-ns'] }, { table: 'x_snc_eqmdm_sap_equipment', conditions: 'sap_equipment_no=000000010000981' });
        const bSurv = wfa.action(action.core.lookUpRecord, { $id: Now.ID['res-lu-b-s'] }, { table: 'x_snc_eqmdm_sap_equipment', conditions: 'sap_equipment_no=000000010001120' });
        const bNonS = wfa.action(action.core.lookUpRecord, { $id: Now.ID['res-lu-b-ns'] }, { table: 'x_snc_eqmdm_sap_equipment', conditions: 'sap_equipment_no=000000010001188' });
        const pairA = wfa.action(action.core.lookUpRecord, { $id: Now.ID['res-lu-pair-a'] }, { table: 'x_snc_eqmdm_match_pair', conditions: 'match_type=exact' });
        const pairB = wfa.action(action.core.lookUpRecord, { $id: Now.ID['res-lu-pair-b'] }, { table: 'x_snc_eqmdm_match_pair', conditions: 'match_type=probable' });
        wfa.action(action.core.updateRecord, { $id: Now.ID['res-upd-pair-a'] }, { table_name: 'x_snc_eqmdm_match_pair', record: wfa.dataPill(pairA.Record, 'reference'), values: TemplateValue({ resolution: 'merged', survivor: wfa.dataPill(aSurv.Record, 'reference') }) });
        wfa.action(action.core.updateRecord, { $id: Now.ID['res-upd-pair-b'] }, { table_name: 'x_snc_eqmdm_match_pair', record: wfa.dataPill(pairB.Record, 'reference'), values: TemplateValue({ resolution: 'merged', survivor: wfa.dataPill(bSurv.Record, 'reference') }) });
        wfa.action(action.core.updateRecord, { $id: Now.ID['res-ns-a'] }, { table_name: 'x_snc_eqmdm_sap_equipment', record: wfa.dataPill(aNonS.Record, 'reference'), values: TemplateValue({ ingestion_status: 'merged' }) });
        wfa.action(action.core.updateRecord, { $id: Now.ID['res-ns-b'] }, { table_name: 'x_snc_eqmdm_sap_equipment', record: wfa.dataPill(bNonS.Record, 'reference'), values: TemplateValue({ ingestion_status: 'merged' }) });
        wfa.subflow(logStepSubflow, { $id: Now.ID['res-log-s2'] }, { run_sys_id: wfa.dataPill(params.trigger.current, 'string'), sequence: 2, stage: 'resolve', action_label: 'Merging duplicate pairs', status: 'in_flight', detail: 'Pair A merged: survivor EQUNR 000000010000457. Pair B merged: survivor EQUNR 000000010001120. Non-survivors marked Merged.', duration_ms: 1500, waitForCompletion: true });

        const stale = wfa.action(action.core.lookUpRecord, { $id: Now.ID['res-lu-stale'] }, { table: 'x_snc_eqmdm_sap_equipment', conditions: 'sap_equipment_no=000000010003598' });
        wfa.action(action.core.updateRecord, { $id: Now.ID['res-reject-stale'] }, { table_name: 'x_snc_eqmdm_sap_equipment', record: wfa.dataPill(stale.Record, 'reference'), values: TemplateValue({ ingestion_status: 'rejected' }) });
        wfa.subflow(logStepSubflow, { $id: Now.ID['res-log-s3'] }, { run_sys_id: wfa.dataPill(params.trigger.current, 'string'), sequence: 3, stage: 'resolve', action_label: 'Rejecting stale / deletion-flagged records', status: 'in_flight', detail: '1 record rejected (EQUNR 000000010003598 — deletion flag, valid-to expired 2019-12-31). Not promoted.', duration_ms: 1000, waitForCompletion: true });

        wfa.action(action.core.updateMultipleRecords, { $id: Now.ID['res-fix-cc'] }, { table_name: 'x_snc_eqmdm_sap_equipment', conditions: 'cost_centre=CC-4410', field_values: TemplateValue({ cost_centre: '4410330000' }) });
        wfa.action(action.core.updateMultipleRecords, { $id: Now.ID['res-dq-ac'] }, { table_name: 'x_snc_eqmdm_dq_issue', conditions: 'status=open^severity!=critical', field_values: TemplateValue({ status: 'auto_corrected' }) });
        wfa.subflow(logStepSubflow, { $id: Now.ID['res-log-s4'] }, { run_sys_id: wfa.dataPill(params.trigger.current, 'string'), sequence: 4, stage: 'resolve', action_label: 'Auto-correcting fixable issues', status: 'in_flight', detail: 'Manufacturer standardisation applied. Cost centre CC-4410 reformatted to 4410330000. 4 DQ issues auto-corrected.', duration_ms: 1000, waitForCompletion: true });

        const gHT = wfa.action(action.core.createRecord, { $id: Now.ID['res-gld-ht'] }, { table_name: 'x_snc_eqmdm_equipment_master', values: TemplateValue({ equipment_desc: 'Haul Truck 793F #04', object_type: 'Haul Truck', manufacturer: 'Caterpillar', model_number: '793F', serial_number: 'CAT793F-7XR04521', manufacture_year: '2019', maintenance_plant: '2020', functional_location: 'GLD-PORT-FLEET-HT04', cost_centre: '4410220000', company_code: '1000', sap_source_ids: '000000010000457,000000010000981', data_quality_score: 100, master_status: 'draft', survivorship_note: 'Merged from 000000010000457 (survivor) and 000000010000981 (plant transfer duplicate).' }) });
        wfa.action(action.core.updateRecord, { $id: Now.ID['res-link-ht'] }, { table_name: 'x_snc_eqmdm_sap_equipment', record: wfa.dataPill(aSurv.Record, 'reference'), values: TemplateValue({ golden_record: wfa.dataPill(gHT.record, 'reference'), ingestion_status: 'promoted' }) });

        const gExc = wfa.action(action.core.createRecord, { $id: Now.ID['res-gld-exc'] }, { table_name: 'x_snc_eqmdm_equipment_master', values: TemplateValue({ equipment_desc: 'Excavator PC8000 #02', object_type: 'Hydraulic Excavator', manufacturer: 'Komatsu', model_number: 'PC8000-6', serial_number: 'PC8000-K2291', manufacture_year: '2021', maintenance_plant: '2010', functional_location: 'MKO-MINE-LOAD-EX02', cost_centre: '4410220000', company_code: '1000', sap_source_ids: '000000010001120,000000010001188', data_quality_score: 95, master_status: 'draft', survivorship_note: 'Merged from 000000010001120 (survivor) and 000000010001188 (near-duplicate, 1-char serial transposition).' }) });
        wfa.action(action.core.updateRecord, { $id: Now.ID['res-link-exc'] }, { table_name: 'x_snc_eqmdm_sap_equipment', record: wfa.dataPill(bSurv.Record, 'reference'), values: TemplateValue({ golden_record: wfa.dataPill(gExc.record, 'reference'), ingestion_status: 'promoted' }) });

        const rP650 = wfa.action(action.core.lookUpRecord, { $id: Now.ID['res-lu-p650'] }, { table: 'x_snc_eqmdm_sap_equipment', conditions: 'sap_equipment_no=000000010002044' });
        const gP650 = wfa.action(action.core.createRecord, { $id: Now.ID['res-gld-p650'] }, { table_name: 'x_snc_eqmdm_equipment_master', values: TemplateValue({ equipment_desc: 'Slurry Pump Warman 650', object_type: 'Slurry Pump', manufacturer: 'Weir Minerals', model_number: 'Warman 650MCR', serial_number: 'WM650-AU-77310', manufacture_year: '2020', maintenance_plant: '2020', functional_location: 'GLD-PROC-PUMP-A1', cost_centre: '4410330000', company_code: '1000', sap_source_ids: '000000010002044', data_quality_score: 100, master_status: 'draft', survivorship_note: 'Single clean source.' }) });
        wfa.action(action.core.updateRecord, { $id: Now.ID['res-link-p650'] }, { table_name: 'x_snc_eqmdm_sap_equipment', record: wfa.dataPill(rP650.Record, 'reference'), values: TemplateValue({ golden_record: wfa.dataPill(gP650.record, 'reference'), ingestion_status: 'promoted' }) });

        const rP550 = wfa.action(action.core.lookUpRecord, { $id: Now.ID['res-lu-p550'] }, { table: 'x_snc_eqmdm_sap_equipment', conditions: 'sap_equipment_no=000000010002051' });
        const gP550 = wfa.action(action.core.createRecord, { $id: Now.ID['res-gld-p550'] }, { table_name: 'x_snc_eqmdm_equipment_master', values: TemplateValue({ equipment_desc: 'Slurry Pump Warman 550', object_type: 'Slurry Pump', manufacturer: 'Weir Minerals', model_number: 'Warman 550MCR', serial_number: 'WM550-AU-77822', manufacture_year: '2020', maintenance_plant: '2020', functional_location: 'GLD-PROC-PUMP-A2', cost_centre: '4410330000', company_code: '1000', sap_source_ids: '000000010002051', data_quality_score: 100, master_status: 'draft', survivorship_note: "Single source. Manufacturer standardised from 'Weir'." }) });
        wfa.action(action.core.updateRecord, { $id: Now.ID['res-link-p550'] }, { table_name: 'x_snc_eqmdm_sap_equipment', record: wfa.dataPill(rP550.Record, 'reference'), values: TemplateValue({ golden_record: wfa.dataPill(gP550.record, 'reference'), ingestion_status: 'promoted' }) });

        const rP450 = wfa.action(action.core.lookUpRecord, { $id: Now.ID['res-lu-p450'] }, { table: 'x_snc_eqmdm_sap_equipment', conditions: 'sap_equipment_no=000000010002066' });
        const gP450 = wfa.action(action.core.createRecord, { $id: Now.ID['res-gld-p450'] }, { table_name: 'x_snc_eqmdm_equipment_master', values: TemplateValue({ equipment_desc: 'Slurry Pump Warman 450', object_type: 'Slurry Pump', manufacturer: 'Weir Minerals', model_number: 'Warman 450MCR', serial_number: 'WM450-AU-77930', manufacture_year: '2022', maintenance_plant: '2020', functional_location: 'GLD-PROC-PUMP-A3', cost_centre: '4410330000', company_code: '1000', sap_source_ids: '000000010002066', data_quality_score: 100, master_status: 'draft', survivorship_note: "Single source. Manufacturer standardised from 'WEIR MINERALS AUST'." }) });
        wfa.action(action.core.updateRecord, { $id: Now.ID['res-link-p450'] }, { table_name: 'x_snc_eqmdm_sap_equipment', record: wfa.dataPill(rP450.Record, 'reference'), values: TemplateValue({ golden_record: wfa.dataPill(gP450.record, 'reference'), ingestion_status: 'promoted' }) });

        const rTX = wfa.action(action.core.lookUpRecord, { $id: Now.ID['res-lu-tx'] }, { table: 'x_snc_eqmdm_sap_equipment', conditions: 'sap_equipment_no=000000010003012' });
        const gTX = wfa.action(action.core.createRecord, { $id: Now.ID['res-gld-tx'] }, { table_name: 'x_snc_eqmdm_equipment_master', values: TemplateValue({ equipment_desc: 'Power Transformer 33kV', object_type: 'Power Transformer', manufacturer: 'ABB', model_number: 'TXN-33-2500', serial_number: 'ABB-33-220041', manufacture_year: '2018', maintenance_plant: '2010', functional_location: 'MKO-SUB-TX-01', cost_centre: '', company_code: '1000', sap_source_ids: '000000010003012', data_quality_score: 70, master_status: 'held', survivorship_note: 'HELD: Missing mandatory cost centre. Requires steward input before publishing.' }) });
        wfa.action(action.core.updateRecord, { $id: Now.ID['res-link-tx'] }, { table_name: 'x_snc_eqmdm_sap_equipment', record: wfa.dataPill(rTX.Record, 'reference'), values: TemplateValue({ golden_record: wfa.dataPill(gTX.record, 'reference'), ingestion_status: 'promoted' }) });

        const rCV12 = wfa.action(action.core.lookUpRecord, { $id: Now.ID['res-lu-cv12'] }, { table: 'x_snc_eqmdm_sap_equipment', conditions: 'sap_equipment_no=000000010003110' });
        const gCV12 = wfa.action(action.core.createRecord, { $id: Now.ID['res-gld-cv12'] }, { table_name: 'x_snc_eqmdm_equipment_master', values: TemplateValue({ equipment_desc: 'Conveyor Drive CV-12', object_type: 'Belt Conveyor', manufacturer: 'Sandvik', model_number: 'CV-DRIVE-1200', serial_number: 'SDV-CV12-5567', manufacture_year: '2015', maintenance_plant: '2010', functional_location: 'MKO-PROC-CONV-12', cost_centre: '4410330000', company_code: '1000', sap_source_ids: '000000010003110', data_quality_score: 90, master_status: 'draft', survivorship_note: "Single source. Cost centre auto-corrected from 'CC-4410'." }) });
        wfa.action(action.core.updateRecord, { $id: Now.ID['res-link-cv12'] }, { table_name: 'x_snc_eqmdm_sap_equipment', record: wfa.dataPill(rCV12.Record, 'reference'), values: TemplateValue({ golden_record: wfa.dataPill(gCV12.record, 'reference'), ingestion_status: 'promoted' }) });

        const rDL = wfa.action(action.core.lookUpRecord, { $id: Now.ID['res-lu-dl'] }, { table: 'x_snc_eqmdm_sap_equipment', conditions: 'sap_equipment_no=000000010004001' });
        const gDL = wfa.action(action.core.createRecord, { $id: Now.ID['res-gld-dl'] }, { table_name: 'x_snc_eqmdm_equipment_master', values: TemplateValue({ equipment_desc: 'Dragline BE 1370W', object_type: 'Walking Dragline', manufacturer: 'Bucyrus-Erie', model_number: '1370W', serial_number: 'BE1370-DL-0009', manufacture_year: '2011', maintenance_plant: '2010', functional_location: 'MKO-MINE-DRAG-01', cost_centre: '4410220000', company_code: '1000', sap_source_ids: '000000010004001', data_quality_score: 100, master_status: 'draft', survivorship_note: 'Single clean source.' }) });
        wfa.action(action.core.updateRecord, { $id: Now.ID['res-link-dl'] }, { table_name: 'x_snc_eqmdm_sap_equipment', record: wfa.dataPill(rDL.Record, 'reference'), values: TemplateValue({ golden_record: wfa.dataPill(gDL.record, 'reference'), ingestion_status: 'promoted' }) });

        const rWL = wfa.action(action.core.lookUpRecord, { $id: Now.ID['res-lu-wl'] }, { table: 'x_snc_eqmdm_sap_equipment', conditions: 'sap_equipment_no=000000010004220' });
        const gWL = wfa.action(action.core.createRecord, { $id: Now.ID['res-gld-wl'] }, { table_name: 'x_snc_eqmdm_equipment_master', values: TemplateValue({ equipment_desc: 'Loader 994K #01', object_type: 'Wheel Loader', manufacturer: 'Caterpillar', model_number: '994K', serial_number: 'CAT994K-LL00231', manufacture_year: '2020', maintenance_plant: '2010', functional_location: 'MKO-MINE-LOAD-WL01', cost_centre: '4410220000', company_code: '1000', sap_source_ids: '000000010004220', data_quality_score: 100, master_status: 'draft', survivorship_note: 'Single clean source.' }) });
        wfa.action(action.core.updateRecord, { $id: Now.ID['res-link-wl'] }, { table_name: 'x_snc_eqmdm_sap_equipment', record: wfa.dataPill(rWL.Record, 'reference'), values: TemplateValue({ golden_record: wfa.dataPill(gWL.record, 'reference'), ingestion_status: 'promoted' }) });

        const rCP = wfa.action(action.core.lookUpRecord, { $id: Now.ID['res-lu-cp'] }, { table: 'x_snc_eqmdm_sap_equipment', conditions: 'sap_equipment_no=000000010004388' });
        const gCP = wfa.action(action.core.createRecord, { $id: Now.ID['res-gld-cp'] }, { table_name: 'x_snc_eqmdm_equipment_master', values: TemplateValue({ equipment_desc: 'Cooling Pump CP-7', object_type: 'Centrifugal Pump', manufacturer: 'Grundfos', model_number: 'NK-200-400', serial_number: 'GF-NK200-88123', manufacture_year: '2023', maintenance_plant: '2020', functional_location: 'GLD-PROC-PUMP-B7', cost_centre: '4410330000', company_code: '1000', sap_source_ids: '000000010004388', data_quality_score: 100, master_status: 'draft', survivorship_note: 'Single clean source.' }) });
        wfa.action(action.core.updateRecord, { $id: Now.ID['res-link-cp'] }, { table_name: 'x_snc_eqmdm_sap_equipment', record: wfa.dataPill(rCP.Record, 'reference'), values: TemplateValue({ golden_record: wfa.dataPill(gCP.record, 'reference'), ingestion_status: 'promoted' }) });

        wfa.subflow(logStepSubflow, { $id: Now.ID['res-log-s5'] }, { run_sys_id: wfa.dataPill(params.trigger.current, 'string'), sequence: 5, stage: 'resolve', action_label: 'Creating golden master records', status: 'in_flight', detail: '10 golden master records created. 9 in Draft. 1 Held (Power Transformer — missing cost centre).', duration_ms: 1000, waitForCompletion: true });

        wfa.action(action.core.updateRecord, { $id: Now.ID['res-update-run'] }, { table_name: 'x_snc_eqmdm_run', record: wfa.dataPill(params.trigger.current, 'reference'), values: TemplateValue({ golden_records_created: 10, state: 'resolved' }) });
        wfa.subflow(logStepSubflow, { $id: Now.ID['res-log-s6'] }, { run_sys_id: wfa.dataPill(params.trigger.current, 'string'), sequence: 6, stage: 'resolve', action_label: 'Updating reconciliation run', status: 'success', detail: 'Golden Records Created: 10. State: Resolved. Proceed to Publish to Operational.', duration_ms: 500, waitForCompletion: true });
    },
);
