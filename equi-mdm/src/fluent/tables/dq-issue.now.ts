import '@servicenow/sdk/global';
import {
    Table,
    StringColumn,
    ChoiceColumn,
    ReferenceColumn,
} from '@servicenow/sdk/core';

export const x_snc_nrm_dq_issue = Table({
    name: 'x_snc_nrm_dq_issue',
    label: 'Data Quality Issue',
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    schema: {
        run: ReferenceColumn({ label: 'Reconciliation Run', referenceTable: 'x_snc_nrm_run' }),
        sap_record: ReferenceColumn({ label: 'SAP Record', referenceTable: 'x_snc_nrm_sap_equipment' }),
        issue_type: ChoiceColumn({
            label: 'Issue Type',
            choices: {
                missing_mandatory: { label: 'Missing Mandatory', sequence: 1 },
                invalid_format: { label: 'Invalid Format', sequence: 2 },
                inconsistent_value: { label: 'Inconsistent Value', sequence: 3 },
                stale_record: { label: 'Stale Record', sequence: 4 },
                referential_integrity: { label: 'Referential Integrity', sequence: 5 },
                suspected_duplicate: { label: 'Suspected Duplicate', sequence: 6 },
            },
        }),
        field_name: StringColumn({ label: 'Field', maxLength: 80 }),
        severity: ChoiceColumn({
            label: 'Severity',
            choices: {
                critical: { label: 'Critical', sequence: 1 },
                high: { label: 'High', sequence: 2 },
                medium: { label: 'Medium', sequence: 3 },
                low: { label: 'Low', sequence: 4 },
            },
        }),
        detail: StringColumn({ label: 'Detail', maxLength: 300 }),
        status: ChoiceColumn({
            label: 'Status',
            choices: {
                open: { label: 'Open', sequence: 1 },
                auto_corrected: { label: 'Auto-Corrected', sequence: 2 },
                held_for_steward: { label: 'Held for Steward', sequence: 3 },
                suppressed: { label: 'Suppressed', sequence: 4 },
                resolved: { label: 'Resolved', sequence: 5 },
            },
        }),
        recommended_action: StringColumn({ label: 'Recommended Action', maxLength: 200 }),
    },
});
