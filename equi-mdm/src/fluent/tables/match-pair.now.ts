import '@servicenow/sdk/global';
import {
    Table,
    StringColumn,
    ChoiceColumn,
    IntegerColumn,
    ReferenceColumn,
} from '@servicenow/sdk/core';

export const x_snc_nrm_match_pair = Table({
    name: 'x_snc_nrm_match_pair',
    label: 'Duplicate Match Candidate',
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    schema: {
        run: ReferenceColumn({ label: 'Reconciliation Run', referenceTable: 'x_snc_nrm_run' }),
        record_a: ReferenceColumn({ label: 'SAP Record A', referenceTable: 'x_snc_nrm_sap_equipment' }),
        record_b: ReferenceColumn({ label: 'SAP Record B', referenceTable: 'x_snc_nrm_sap_equipment' }),
        match_score: IntegerColumn({ label: 'Match Score' }),
        matched_on: StringColumn({ label: 'Matched On', maxLength: 100 }),
        match_type: ChoiceColumn({
            label: 'Match Type',
            choices: {
                exact: { label: 'Exact', sequence: 1 },
                high_confidence: { label: 'High Confidence', sequence: 2 },
                probable: { label: 'Probable', sequence: 3 },
                weak: { label: 'Weak', sequence: 4 },
            },
        }),
        resolution: ChoiceColumn({
            label: 'Resolution',
            choices: {
                pending: { label: 'Pending', sequence: 1 },
                auto_merge: { label: 'Auto-Merge', sequence: 2 },
                merged: { label: 'Merged', sequence: 3 },
                kept_separate: { label: 'Kept Separate', sequence: 4 },
            },
        }),
        survivor: ReferenceColumn({ label: 'Surviving Record', referenceTable: 'x_snc_nrm_sap_equipment' }),
    },
});
