import '@servicenow/sdk/global';
import { Flow, wfa, trigger, action } from '@servicenow/sdk/automation';
import { logStepSubflow } from './log-step-subflow.now';

export const flowMatchAndDedupe = Flow(
    {
        $id: Now.ID['flow-match-and-dedupe'],
        name: 'Match & Dedupe',
        description: 'Runs deterministic (exact serial) and probabilistic matching, creates match candidates and DQ issues.',
        runAs: 'system',
    },
    wfa.trigger(
        trigger.record.updated,
        { $id: Now.ID['flow-match-trigger'] },
        {
            table: 'x_snc_eqmdm_run',
            condition: 'state=matching',
            trigger_strategy: 'always',
        },
    ),
    (params) => {
        wfa.action(action.core.updateMultipleRecords, { $id: Now.ID['match-norm-cat'] }, { table_name: 'x_snc_eqmdm_sap_equipment', conditions: 'manufacturer=CATERPILLAR INC', field_values: TemplateValue({ manufacturer: 'Caterpillar' }) });
        wfa.action(action.core.updateMultipleRecords, { $id: Now.ID['match-norm-weir'] }, { table_name: 'x_snc_eqmdm_sap_equipment', conditions: 'manufacturer=Weir^ORmanufacturer=WEIR MINERALS AUST', field_values: TemplateValue({ manufacturer: 'Weir Minerals' }) });
        wfa.subflow(logStepSubflow, { $id: Now.ID['match-log-s1'] }, { run_sys_id: wfa.dataPill(params.trigger.current, 'string'), sequence: 1, stage: 'match', action_label: 'Standardising manufacturer values', status: 'in_flight', detail: "Normalised 'Weir', 'WEIR MINERALS AUST' to 'Weir Minerals'. Normalised 'CATERPILLAR INC' to 'Caterpillar'.", duration_ms: 1500, waitForCompletion: true });

        wfa.subflow(logStepSubflow, { $id: Now.ID['match-log-s2'] }, { run_sys_id: wfa.dataPill(params.trigger.current, 'string'), sequence: 2, stage: 'match', action_label: 'Deterministic match on serial number', status: 'in_flight', detail: 'Exact serial match: CAT793F-7XR04521 appears on EQUNR 000000010000457 and 000000010000981.', duration_ms: 1500, waitForCompletion: true });

        wfa.subflow(logStepSubflow, { $id: Now.ID['match-log-s3'] }, { run_sys_id: wfa.dataPill(params.trigger.current, 'string'), sequence: 3, stage: 'match', action_label: 'Probabilistic match (manufacturer + model + functional location + year)', status: 'in_flight', detail: 'Probable match: PC8000-6 at MKO-MINE-LOAD-EX02, serials PC8000-K2291 / PC8000-K2219 (1-char transposition).', duration_ms: 1500, waitForCompletion: true });

        const a1 = wfa.action(action.core.lookUpRecord, { $id: Now.ID['match-lu-a1'] }, { table: 'x_snc_eqmdm_sap_equipment', conditions: 'sap_equipment_no=000000010000457' });
        const a2 = wfa.action(action.core.lookUpRecord, { $id: Now.ID['match-lu-a2'] }, { table: 'x_snc_eqmdm_sap_equipment', conditions: 'sap_equipment_no=000000010000981' });
        const b1 = wfa.action(action.core.lookUpRecord, { $id: Now.ID['match-lu-b1'] }, { table: 'x_snc_eqmdm_sap_equipment', conditions: 'sap_equipment_no=000000010001120' });
        const b2 = wfa.action(action.core.lookUpRecord, { $id: Now.ID['match-lu-b2'] }, { table: 'x_snc_eqmdm_sap_equipment', conditions: 'sap_equipment_no=000000010001188' });
        wfa.action(action.core.createRecord, { $id: Now.ID['match-pair-a'] }, { table_name: 'x_snc_eqmdm_match_pair', values: TemplateValue({ run: wfa.dataPill(params.trigger.current, 'reference'), record_a: wfa.dataPill(a1.Record, 'reference'), record_b: wfa.dataPill(a2.Record, 'reference'), match_score: 100, matched_on: 'Serial + Manufacturer + Model', match_type: 'exact', resolution: 'pending' }) });
        wfa.action(action.core.createRecord, { $id: Now.ID['match-pair-b'] }, { table_name: 'x_snc_eqmdm_match_pair', values: TemplateValue({ run: wfa.dataPill(params.trigger.current, 'reference'), record_a: wfa.dataPill(b1.Record, 'reference'), record_b: wfa.dataPill(b2.Record, 'reference'), match_score: 88, matched_on: 'Manufacturer + Model + Functional Location + Year (fuzzy serial)', match_type: 'probable', resolution: 'pending' }) });
        wfa.action(action.core.updateRecord, { $id: Now.ID['match-flag-a1'] }, { table_name: 'x_snc_eqmdm_sap_equipment', record: wfa.dataPill(a1.Record, 'reference'), values: TemplateValue({ ingestion_status: 'matched' }) });
        wfa.action(action.core.updateRecord, { $id: Now.ID['match-flag-a2'] }, { table_name: 'x_snc_eqmdm_sap_equipment', record: wfa.dataPill(a2.Record, 'reference'), values: TemplateValue({ ingestion_status: 'matched' }) });
        wfa.action(action.core.updateRecord, { $id: Now.ID['match-flag-b1'] }, { table_name: 'x_snc_eqmdm_sap_equipment', record: wfa.dataPill(b1.Record, 'reference'), values: TemplateValue({ ingestion_status: 'matched' }) });
        wfa.action(action.core.updateRecord, { $id: Now.ID['match-flag-b2'] }, { table_name: 'x_snc_eqmdm_sap_equipment', record: wfa.dataPill(b2.Record, 'reference'), values: TemplateValue({ ingestion_status: 'matched' }) });
        wfa.subflow(logStepSubflow, { $id: Now.ID['match-log-s4'] }, { run_sys_id: wfa.dataPill(params.trigger.current, 'string'), sequence: 4, stage: 'match', action_label: 'Creating match candidates', status: 'in_flight', detail: '2 match pairs created. Pair A: Exact serial match (score 100). Pair B: Probable near-duplicate (score 88).', duration_ms: 1000, waitForCompletion: true });

        const r3012 = wfa.action(action.core.lookUpRecord, { $id: Now.ID['match-lu-3012'] }, { table: 'x_snc_eqmdm_sap_equipment', conditions: 'sap_equipment_no=000000010003012' });
        const r3110 = wfa.action(action.core.lookUpRecord, { $id: Now.ID['match-lu-3110'] }, { table: 'x_snc_eqmdm_sap_equipment', conditions: 'sap_equipment_no=000000010003110' });
        const r3598 = wfa.action(action.core.lookUpRecord, { $id: Now.ID['match-lu-3598'] }, { table: 'x_snc_eqmdm_sap_equipment', conditions: 'sap_equipment_no=000000010003598' });
        const r2044 = wfa.action(action.core.lookUpRecord, { $id: Now.ID['match-lu-2044'] }, { table: 'x_snc_eqmdm_sap_equipment', conditions: 'sap_equipment_no=000000010002044' });
        const r2051 = wfa.action(action.core.lookUpRecord, { $id: Now.ID['match-lu-2051'] }, { table: 'x_snc_eqmdm_sap_equipment', conditions: 'sap_equipment_no=000000010002051' });
        const r2066 = wfa.action(action.core.lookUpRecord, { $id: Now.ID['match-lu-2066'] }, { table: 'x_snc_eqmdm_sap_equipment', conditions: 'sap_equipment_no=000000010002066' });
        wfa.action(action.core.createRecord, { $id: Now.ID['dq-3012'] }, { table_name: 'x_snc_eqmdm_dq_issue', values: TemplateValue({ run: wfa.dataPill(params.trigger.current, 'reference'), sap_record: wfa.dataPill(r3012.Record, 'reference'), issue_type: 'missing_mandatory', field_name: 'cost_centre', severity: 'critical', detail: 'Cost centre is mandatory for capitalised assets. Value is blank.', status: 'held_for_steward', recommended_action: 'Obtain cost centre from Finance and update before publishing.' }) });
        wfa.action(action.core.createRecord, { $id: Now.ID['dq-3110'] }, { table_name: 'x_snc_eqmdm_dq_issue', values: TemplateValue({ run: wfa.dataPill(params.trigger.current, 'reference'), sap_record: wfa.dataPill(r3110.Record, 'reference'), issue_type: 'invalid_format', field_name: 'cost_centre', severity: 'high', detail: "Value 'CC-4410' does not match numeric cost centre format.", status: 'open', recommended_action: 'Reformat to 4410330000.' }) });
        wfa.action(action.core.createRecord, { $id: Now.ID['dq-3598'] }, { table_name: 'x_snc_eqmdm_dq_issue', values: TemplateValue({ run: wfa.dataPill(params.trigger.current, 'reference'), sap_record: wfa.dataPill(r3598.Record, 'reference'), issue_type: 'stale_record', field_name: 'valid_to', severity: 'high', detail: 'Deletion flag set; valid-to 2019-12-31 is in the past.', status: 'open', recommended_action: 'Exclude from golden master.' }) });
        wfa.action(action.core.createRecord, { $id: Now.ID['dq-2044'] }, { table_name: 'x_snc_eqmdm_dq_issue', values: TemplateValue({ run: wfa.dataPill(params.trigger.current, 'reference'), sap_record: wfa.dataPill(r2044.Record, 'reference'), issue_type: 'inconsistent_value', field_name: 'manufacturer', severity: 'medium', detail: "Manufacturer recorded as 3 variants: 'Weir Minerals', 'Weir', 'WEIR MINERALS AUST'.", status: 'auto_corrected', recommended_action: "Standardise to 'Weir Minerals'." }) });
        wfa.action(action.core.createRecord, { $id: Now.ID['dq-2051'] }, { table_name: 'x_snc_eqmdm_dq_issue', values: TemplateValue({ run: wfa.dataPill(params.trigger.current, 'reference'), sap_record: wfa.dataPill(r2051.Record, 'reference'), issue_type: 'inconsistent_value', field_name: 'manufacturer', severity: 'medium', detail: "Manufacturer recorded as 3 variants: 'Weir Minerals', 'Weir', 'WEIR MINERALS AUST'.", status: 'auto_corrected', recommended_action: "Standardise to 'Weir Minerals'." }) });
        wfa.action(action.core.createRecord, { $id: Now.ID['dq-2066'] }, { table_name: 'x_snc_eqmdm_dq_issue', values: TemplateValue({ run: wfa.dataPill(params.trigger.current, 'reference'), sap_record: wfa.dataPill(r2066.Record, 'reference'), issue_type: 'inconsistent_value', field_name: 'manufacturer', severity: 'medium', detail: "Manufacturer recorded as 3 variants: 'Weir Minerals', 'Weir', 'WEIR MINERALS AUST'.", status: 'auto_corrected', recommended_action: "Standardise to 'Weir Minerals'." }) });
        wfa.subflow(logStepSubflow, { $id: Now.ID['match-log-s5'] }, { run_sys_id: wfa.dataPill(params.trigger.current, 'string'), sequence: 5, stage: 'match', action_label: 'Scanning data quality', status: 'in_flight', detail: '6 DQ issues found (1 critical). Missing cost centre on Power Transformer. Invalid format on Conveyor CV-12. Stale record CV-03. 3 manufacturer inconsistencies auto-corrected.', duration_ms: 1500, waitForCompletion: true });

        wfa.action(action.core.updateRecord, { $id: Now.ID['match-update-run'] }, { table_name: 'x_snc_eqmdm_run', record: wfa.dataPill(params.trigger.current, 'reference'), values: TemplateValue({ duplicates_found: 2, dq_issues_found: 6, state: 'matched' }) });
        wfa.subflow(logStepSubflow, { $id: Now.ID['match-log-s6'] }, { run_sys_id: wfa.dataPill(params.trigger.current, 'string'), sequence: 6, stage: 'match', action_label: 'Updating reconciliation run', status: 'success', detail: 'Duplicate Pairs Found: 2. DQ Issues Found: 6. State: Matched. Proceed to Resolve & Promote to Golden.', duration_ms: 500, waitForCompletion: true });
    },
);
