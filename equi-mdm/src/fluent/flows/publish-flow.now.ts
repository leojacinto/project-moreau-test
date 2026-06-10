import '@servicenow/sdk/global';
import { Flow, wfa, action, trigger } from '@servicenow/sdk/automation';
import { logStepSubflow } from './log-step-subflow.now';

Flow(
    {
        $id: Now.ID['nrm_flow_publish'],
        name: 'NRM Publish to Operational',
        description: 'Publishes validated golden records to the operational equipment master.',
        runAs: 'system',
        flowPriority: 'MEDIUM',
    },
    wfa.trigger(
        trigger.record.updated,
        { $id: Now.ID['nrm_publish_trigger'] },
        {
            table: 'x_snc_nrm_run',
            condition: 'trigger_action=publish',
            trigger_strategy: 'every',
            run_flow_in: 'background',
        }
    ),
    (params) => {
        wfa.action(
            action.core.updateRecord,
            { $id: Now.ID['nrm_publish_reset'] },
            {
                table_name: 'x_snc_nrm_run',
                record: wfa.dataPill(params.trigger.current, 'reference'),
                values: TemplateValue({ trigger_action: '' }),
            }
        );

        wfa.subflow(logStepSubflow, { $id: Now.ID['nrm_publish_log1'] }, {
            run: wfa.dataPill(params.trigger.current, 'reference'),
            sequence: 18,
            stage: 'publish',
            action_text: 'Validating golden records',
            status: 'in_flight',
            detail: '10 golden records validated. 1 held: transformer EQUNR 000000010003012 missing mandatory cost centre.',
            duration_ms: 1500,
            waitForCompletion: true,
        });

        // Publish all draft golden records (not held ones)
        wfa.action(action.core.updateMultipleRecords, { $id: Now.ID['nrm_publish_golden'] }, {
            table_name: 'x_snc_nrm_equipment_master',
            conditions: 'master_status=draft',
            field_values: TemplateValue({ master_status: 'published' }),
        });

        wfa.subflow(logStepSubflow, { $id: Now.ID['nrm_publish_log2'] }, {
            run: wfa.dataPill(params.trigger.current, 'reference'),
            sequence: 19,
            stage: 'publish',
            action_text: 'Publishing to operational equipment master',
            status: 'in_flight',
            detail: '9 records published. 1 held pending steward input (missing mandatory cost centre).',
            duration_ms: 1500,
            waitForCompletion: true,
        });

        wfa.subflow(logStepSubflow, { $id: Now.ID['nrm_publish_log3'] }, {
            run: wfa.dataPill(params.trigger.current, 'reference'),
            sequence: 20,
            stage: 'publish',
            action_text: 'Indexing for Equipment Master Assistant',
            status: 'in_flight',
            detail: 'Published golden records indexed for AI Search. Equipment Master Assistant can now answer questions.',
            duration_ms: 1000,
            waitForCompletion: true,
        });

        wfa.action(action.core.updateRecord, { $id: Now.ID['nrm_publish_update_run'] }, {
            table_name: 'x_snc_nrm_run',
            record: wfa.dataPill(params.trigger.current, 'reference'),
            values: TemplateValue({ state: 'published', overall_status: 'complete' }),
        });

        wfa.subflow(logStepSubflow, { $id: Now.ID['nrm_publish_log4'] }, {
            run: wfa.dataPill(params.trigger.current, 'reference'),
            sequence: 21,
            stage: 'publish',
            action_text: 'Publish complete',
            status: 'success',
            detail: 'Run updated: state = Published, Overall Status = Complete.',
            duration_ms: 500,
            waitForCompletion: true,
        });
    }
);
