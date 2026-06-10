import '@servicenow/sdk/global';
import { Workspace, Acl } from '@servicenow/sdk/core';
import { travelListConfig } from './list-menu.now';

export const travelWorkspace = Workspace({
    $id: Now.ID['trv-management-workspace'],
    title: 'Travel Management',
    path: 'moreau-travel',
    tables: [
        'x_snc_moreau_trv_request',
        'x_snc_moreau_trv_expense',
        'x_snc_moreau_trv_policy',
        'x_snc_moreau_trv_delegation',
    ],
    listConfig: travelListConfig,
});

Acl({
    $id: Now.ID['trv-workspace-route-acl'],
    localOrExisting: 'Existing',
    type: 'ux_route',
    operation: 'read',
    roles: ['x_snc_moreau_trv.user', 'x_snc_moreau_trv.admin'],
    name: 'moreau-travel.*',
});
