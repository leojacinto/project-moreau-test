import '@servicenow/sdk/global';
import {
    Table,
    ReferenceColumn,
    IntegerColumn,
    StringColumn,
    ChoiceColumn,
    DateTimeColumn,
} from '@servicenow/sdk/core';

export const x_snc_eqmdm_ingestion_log = Table({
    name: 'x_snc_eqmdm_ingestion_log',
    label: 'Ingestion Activity Log',
    schema: {
        run: ReferenceColumn({ label: 'Run', referenceTable: 'x_snc_eqmdm_run' }),
        sequence: IntegerColumn({ label: 'Sequence' }),
        stage: ChoiceColumn({
            label: 'Stage',
            choices: {
                ingest: 'Ingest',
                match: 'Match',
                resolve: 'Resolve',
                publish: 'Publish',
            },
        }),
        action: StringColumn({ label: 'Action', maxLength: 200 }),
        status: ChoiceColumn({
            label: 'Status',
            defaultValue: 'pending',
            choices: {
                pending: 'Pending',
                in_flight: 'In Flight',
                success: 'Success',
                failed: 'Failed',
            },
        }),
        detail: StringColumn({ label: 'Detail', maxLength: 500 }),
        timestamp: DateTimeColumn({ label: 'Timestamp' }),
        duration_ms: IntegerColumn({ label: 'Duration (ms)' }),
    },
});
