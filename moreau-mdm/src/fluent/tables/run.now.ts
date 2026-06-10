import '@servicenow/sdk/global';
import {
    Table,
    StringColumn,
    ChoiceColumn,
    IntegerColumn,
    ReferenceColumn,
    DateTimeColumn,
} from '@servicenow/sdk/core';

export const x_snc_eqmdm_run = Table({
    name: 'x_snc_eqmdm_run',
    label: 'Reconciliation Run',
    autoNumber: { prefix: 'MDR', number: 1, numberOfDigits: 4 },
    schema: {
        source_system: StringColumn({ label: 'Source System', maxLength: 80 }),
        state: ChoiceColumn({
            label: 'State',
            defaultValue: 'draft',
            choices: {
                draft: 'Draft',
                ingesting: 'Ingesting',
                ingested: 'Ingested',
                matching: 'Matching',
                matched: 'Matched',
                resolving: 'Resolving',
                resolved: 'Resolved',
                publishing: 'Publishing',
                published: 'Published',
            },
        }),
        records_ingested: IntegerColumn({ label: 'Records Ingested', defaultValue: 0 }),
        duplicates_found: IntegerColumn({ label: 'Duplicate Pairs Found', defaultValue: 0 }),
        dq_issues_found: IntegerColumn({ label: 'DQ Issues Found', defaultValue: 0 }),
        golden_records_created: IntegerColumn({ label: 'Golden Records Created', defaultValue: 0 }),
        run_by: ReferenceColumn({ label: 'Run By', referenceTable: 'sys_user' }),
        run_date: DateTimeColumn({ label: 'Run Date' }),
        overall_status: ChoiceColumn({
            label: 'Overall Status',
            defaultValue: 'not_started',
            choices: {
                not_started: 'Not Started',
                in_progress: 'In Progress',
                complete: 'Complete',
            },
        }),
    },
});
