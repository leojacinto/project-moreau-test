import '@servicenow/sdk/global';
import {
    Table,
    StringColumn,
    ChoiceColumn,
    IntegerColumn,
    DateTimeColumn,
    ReferenceColumn,
} from '@servicenow/sdk/core';

export const x_snc_nrm_run = Table({
    name: 'x_snc_nrm_run',
    label: 'Reconciliation Run',
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    autoNumber: {
        prefix: 'MDR',
        number: 1,
        numberOfDigits: 4,
    },
    schema: {
        number: StringColumn({ label: 'Run Number', maxLength: 20 }),
        source_system: StringColumn({ label: 'Source System', maxLength: 200 }),
        state: ChoiceColumn({
            label: 'State',
            choices: {
                draft: { label: 'Draft', sequence: 1 },
                ingested: { label: 'Ingested', sequence: 2 },
                matched: { label: 'Matched', sequence: 3 },
                resolved: { label: 'Resolved', sequence: 4 },
                published: { label: 'Published', sequence: 5 },
            },
        }),
        records_ingested: IntegerColumn({ label: 'Records Ingested' }),
        duplicates_found: IntegerColumn({ label: 'Duplicate Pairs Found' }),
        dq_issues_found: IntegerColumn({ label: 'DQ Issues Found' }),
        golden_records_created: IntegerColumn({ label: 'Golden Records Created' }),
        run_by: ReferenceColumn({ label: 'Run By', referenceTable: 'sys_user' }),
        run_date: DateTimeColumn({ label: 'Run Date' }),
        overall_status: ChoiceColumn({
            label: 'Overall Status',
            choices: {
                not_started: { label: 'Not Started', sequence: 1 },
                in_progress: { label: 'In Progress', sequence: 2 },
                complete: { label: 'Complete', sequence: 3 },
            },
        }),
        trigger_action: ChoiceColumn({
            label: 'Trigger Action',
            choices: {
                ingest: { label: 'Ingest', sequence: 1 },
                match: { label: 'Match & Dedupe', sequence: 2 },
                resolve: { label: 'Resolve & Promote', sequence: 3 },
                publish: { label: 'Publish', sequence: 4 },
            },
        }),
    },
});
