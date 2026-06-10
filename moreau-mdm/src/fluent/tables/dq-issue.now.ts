import '@servicenow/sdk/global';
import {
    Table,
    ReferenceColumn,
    StringColumn,
    ChoiceColumn,
} from '@servicenow/sdk/core';

export const x_snc_eqmdm_dq_issue = Table({
    name: 'x_snc_eqmdm_dq_issue',
    label: 'Data Quality Issue',
    schema: {
        run: ReferenceColumn({ label: 'Reconciliation Run', referenceTable: 'x_snc_eqmdm_run' }),
        sap_record: ReferenceColumn({ label: 'SAP Record', referenceTable: 'x_snc_eqmdm_sap_equipment' }),
        issue_type: ChoiceColumn({
            label: 'Issue Type',
            choices: {
                missing_mandatory: 'Missing Mandatory',
                invalid_format: 'Invalid Format',
                inconsistent_value: 'Inconsistent Value',
                stale_record: 'Stale Record',
                referential_integrity: 'Referential Integrity',
                suspected_duplicate: 'Suspected Duplicate',
            },
        }),
        field_name: StringColumn({ label: 'Field', maxLength: 80 }),
        severity: ChoiceColumn({
            label: 'Severity',
            choices: {
                critical: 'Critical',
                high: 'High',
                medium: 'Medium',
                low: 'Low',
            },
        }),
        detail: StringColumn({ label: 'Detail', maxLength: 300 }),
        status: ChoiceColumn({
            label: 'Status',
            defaultValue: 'open',
            choices: {
                open: 'Open',
                auto_corrected: 'Auto-Corrected',
                held_for_steward: 'Held for Steward',
                suppressed: 'Suppressed',
                resolved: 'Resolved',
            },
        }),
        recommended_action: StringColumn({ label: 'Recommended Action', maxLength: 200 }),
    },
});
