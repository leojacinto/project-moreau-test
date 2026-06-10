import '@servicenow/sdk/global';
import { Flow, wfa, trigger, action } from '@servicenow/sdk/automation';
import { logStepSubflow } from './log-step-subflow.now';

export const flowPublishToOperational = Flow(
    {
        $id: Now.ID['flow-publish-to-operational'],
        name: 'Publish to Operational',
        description: 'Validates and publishes golden master records. Holds records that fail mandatory governance rules.',
        runAs: 'system',
    },
    wfa.trigger(
        trigger.record.updated,
        { $id: Now.ID['flow-publish-trigger'] },
        {
            table: 'x_snc_eqmdm_run',
            condition: 'state=publishing',
            trigger_strategy: 'always',
        },
    ),
    (params) => {
        wfa.subflow(logStepSubflow, { $id: Now.ID['pub-log-s1'] }, { run_sys_id: wfa.dataPill(params.trigger.current, 'string'), sequence: 1, stage: 'publish', action_label: 'Validating golden records', status: 'in_flight', detail: '10 golden records validated. 1 held: Power Transformer (EQUNR 000000010003012) — missing mandatory cost centre. 9 eligible for publication.', duration_ms: 1500, waitForCompletion: true });

        wfa.action(action.core.updateMultipleRecords, { $id: Now.ID['pub-update-masters'] }, { table_name: 'x_snc_eqmdm_equipment_master', conditions: 'master_status=draft', field_values: TemplateValue({ master_status: 'published' }) });

        wfa.subflow(logStepSubflow, { $id: Now.ID['pub-log-s2'] }, { run_sys_id: wfa.dataPill(params.trigger.current, 'string'), sequence: 2, stage: 'publish', action_label: 'Publishing to operational equipment master', status: 'in_flight', detail: '9 golden records published. 1 held (Power Transformer 33kV) — platform refuses to publish records that fail mandatory governance rules.', duration_ms: 1500, waitForCompletion: true });

        wfa.subflow(logStepSubflow, { $id: Now.ID['pub-log-s3'] }, { run_sys_id: wfa.dataPill(params.trigger.current, 'string'), sequence: 3, stage: 'publish', action_label: 'Indexing for Equipment Master Assistant', status: 'in_flight', detail: 'Published golden records indexed for AI Search. Equipment Master Assistant can now answer questions from the governed master.', duration_ms: 1000, waitForCompletion: true });

        wfa.action(action.core.updateRecord, { $id: Now.ID['pub-update-run'] }, { table_name: 'x_snc_eqmdm_run', record: wfa.dataPill(params.trigger.current, 'reference'), values: TemplateValue({ state: 'published', overall_status: 'complete' }) });

        wfa.subflow(logStepSubflow, { $id: Now.ID['pub-log-s4'] }, { run_sys_id: wfa.dataPill(params.trigger.current, 'string'), sequence: 4, stage: 'publish', action_label: 'Reconciliation cycle complete', status: 'success', detail: 'Run complete. 9 records published, 1 held pending steward input. State: Published. Overall Status: Complete.', duration_ms: 500, waitForCompletion: true });
    },
);
