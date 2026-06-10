import '@servicenow/sdk/global';
import {
    Table,
    ReferenceColumn,
    IntegerColumn,
    StringColumn,
    ChoiceColumn,
} from '@servicenow/sdk/core';

export const x_snc_eqmdm_match_pair = Table({
    name: 'x_snc_eqmdm_match_pair',
    label: 'Duplicate Match Candidate',
    schema: {
        run: ReferenceColumn({ label: 'Reconciliation Run', referenceTable: 'x_snc_eqmdm_run' }),
        record_a: ReferenceColumn({ label: 'SAP Record A', referenceTable: 'x_snc_eqmdm_sap_equipment' }),
        record_b: ReferenceColumn({ label: 'SAP Record B', referenceTable: 'x_snc_eqmdm_sap_equipment' }),
        match_score: IntegerColumn({ label: 'Match Score' }),
        matched_on: StringColumn({ label: 'Matched On', maxLength: 200 }),
        match_type: ChoiceColumn({
            label: 'Match Type',
            choices: {
                exact: 'Exact',
                high_confidence: 'High Confidence',
                probable: 'Probable',
                weak: 'Weak',
            },
        }),
        resolution: ChoiceColumn({
            label: 'Resolution',
            defaultValue: 'pending',
            choices: {
                pending: 'Pending',
                auto_merge: 'Auto-Merge',
                merged: 'Merged',
                kept_separate: 'Kept Separate',
            },
        }),
        survivor: ReferenceColumn({ label: 'Surviving Record', referenceTable: 'x_snc_eqmdm_sap_equipment' }),
    },
});
