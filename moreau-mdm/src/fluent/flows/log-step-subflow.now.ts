import '@servicenow/sdk/global';
import { Subflow, wfa, action } from '@servicenow/sdk/automation';
import { IntegerColumn, StringColumn } from '@servicenow/sdk/core';

export const logStepSubflow = Subflow(
    {
        $id: Now.ID['subflow-log-step'],
        name: 'MDM Log Step',
        description: 'Writes one activity log entry to x_snc_eqmdm_ingestion_log',
        runAs: 'system',
        inputs: {
            run_sys_id: StringColumn({ label: 'Run Sys ID' }),
            sequence: IntegerColumn({ label: 'Sequence' }),
            stage: StringColumn({ label: 'Stage' }),
            action_label: StringColumn({ label: 'Action' }),
            status: StringColumn({ label: 'Status' }),
            detail: StringColumn({ label: 'Detail' }),
            duration_ms: IntegerColumn({ label: 'Duration (ms)' }),
        },
    },
    (params) => {
        wfa.action(
            action.core.createRecord,
            { $id: Now.ID['log-step-create'] },
            {
                table_name: 'x_snc_eqmdm_ingestion_log',
                values: TemplateValue({
                    run: wfa.dataPill(params.inputs.run_sys_id, 'string'),
                    sequence: wfa.dataPill(params.inputs.sequence, 'integer'),
                    stage: wfa.dataPill(params.inputs.stage, 'string'),
                    action: wfa.dataPill(params.inputs.action_label, 'string'),
                    status: wfa.dataPill(params.inputs.status, 'string'),
                    detail: wfa.dataPill(params.inputs.detail, 'string'),
                    duration_ms: wfa.dataPill(params.inputs.duration_ms, 'integer'),
                }),
            },
        );
    },
);
