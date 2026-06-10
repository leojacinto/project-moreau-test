import '@servicenow/sdk/global';
import { Workspace, Acl } from '@servicenow/sdk/core';
import { mdmListConfig } from './list-menu.now';

export const mdmWorkspace = Workspace({
    $id: Now.ID['mdm-management-workspace'],
    title: 'Equipment Master Stewardship Console',
    path: 'equipment-mdm',
    tables: [
        'x_snc_eqmdm_run',
        'x_snc_eqmdm_sap_equipment',
        'x_snc_eqmdm_equipment_master',
        'x_snc_eqmdm_match_pair',
        'x_snc_eqmdm_dq_issue',
        'x_snc_eqmdm_ingestion_log',
    ],
    listConfig: mdmListConfig,
});

Acl({
    $id: Now.ID['mdm-workspace-route-acl'],
    localOrExisting: 'Existing',
    type: 'ux_route',
    operation: 'read',
    roles: ['x_snc_eqmdm.user', 'x_snc_eqmdm.admin'],
    name: 'equipment-mdm.*',
});
