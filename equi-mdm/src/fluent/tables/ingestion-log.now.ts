import '@servicenow/sdk/global';
import {
    Table,
    StringColumn,
    ChoiceColumn,
    IntegerColumn,
    DateTimeColumn,
    ReferenceColumn,
} from '@servicenow/sdk/core';

export const x_snc_nrm_ingestion_log = Table({
    name: 'x_snc_nrm_ingestion_log',
    label: 'Ingestion Activity Log',
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    schema: {
        run: ReferenceColumn({ label: 'Run', referenceTable: 'x_snc_nrm_run' }),
        sequence: IntegerColumn({ label: 'Sequence' }),
        stage: ChoiceColumn({
            label: 'Stage',
            choices: {
                ingest: { label: 'Ingest', sequence: 1 },
                match: { label: 'Match', sequence: 2 },
                resolve: { label: 'Resolve', sequence: 3 },
                publish: { label: 'Publish', sequence: 4 },
            },
        }),
        action: StringColumn({ label: 'Action', maxLength: 200 }),
        status: ChoiceColumn({
            label: 'Status',
            choices: {
                pending: { label: 'Pending', sequence: 1 },
                in_flight: { label: 'In Flight', sequence: 2 },
                success: { label: 'Success', sequence: 3 },
                failed: { label: 'Failed', sequence: 4 },
            },
        }),
        detail: StringColumn({ label: 'Detail', maxLength: 500 }),
        timestamp: DateTimeColumn({ label: 'Timestamp' }),
        duration_ms: IntegerColumn({ label: 'Duration (ms)' }),
    },
});
