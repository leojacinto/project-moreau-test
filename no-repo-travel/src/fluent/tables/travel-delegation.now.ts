import '@servicenow/sdk/global';
import {
    Table,
    DateColumn,
    BooleanColumn,
    ReferenceColumn,
} from '@servicenow/sdk/core';

export const x_snc_nrt_travel_delegation = Table({
    name: 'x_snc_nrt_travel_delegation',
    label: 'Travel Delegation',
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    schema: {
        delegator: ReferenceColumn({
            label: 'Delegator',
            referenceTable: 'sys_user',
            mandatory: true,
        }),
        delegate: ReferenceColumn({
            label: 'Delegate',
            referenceTable: 'sys_user',
            mandatory: true,
        }),
        start_date: DateColumn({ label: 'Start Date', mandatory: true }),
        end_date: DateColumn({ label: 'End Date', mandatory: true }),
        active: BooleanColumn({ label: 'Active', defaultValue: true }),
    },
});
