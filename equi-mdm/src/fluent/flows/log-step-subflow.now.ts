import '@servicenow/sdk/global';
import { Subflow, wfa, action } from '@servicenow/sdk/automation';
import { StringColumn, IntegerColumn, ReferenceColumn } from '@servicenow/sdk/core';

export const logStepSubflow = Subflow(
    {
        $id: Now.ID['nrm_log_step_subflow'],
        name: 'NRM Log Reconciliation Step',
        description: 'Writes one activity log entry to x_snc_nrm_ingestion_log.',
        runAs: 'system',
        inputs: {
            run: ReferenceColumn({ label: 'Run', referenceTable: 'x_snc_nrm_run' }),
            sequence: IntegerColumn({ label: 'Sequence' }),
            stage: StringColumn({ label: 'Stage' }),
            action_text: StringColumn({ label: 'Action' }),
            status: StringColumn({ label: 'Status' }),
            detail: StringColumn({ label: 'Detail' }),
            duration_ms: IntegerColumn({ label: 'Duration (ms)' }),
        },
        outputs: {},
    },
    (params) => {
        wfa.action(
            action.core.createRecord,
            { $id: Now.ID['nrm_log_step_create'] },
            {
                table_name: 'x_snc_nrm_ingestion_log',
                values: TemplateValue({
                    run: wfa.dataPill(params.inputs.run, 'reference'),
                    sequence: wfa.dataPill(params.inputs.sequence, 'integer'),
                    stage: wfa.dataPill(params.inputs.stage, 'string'),
                    action: wfa.dataPill(params.inputs.action_text, 'string'),
                    status: wfa.dataPill(params.inputs.status, 'string'),
                    detail: wfa.dataPill(params.inputs.detail, 'string'),
                    duration_ms: wfa.dataPill(params.inputs.duration_ms, 'integer'),
                }),
            }
        );
    }
);
