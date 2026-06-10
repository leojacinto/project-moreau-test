import '@servicenow/sdk/global';
import { Workspace } from '@servicenow/sdk/core';
import { nrmListMenu } from './list-menu.now';

export const nrmWorkspace = Workspace({
    $id: Now.ID['nrm_workspace'],
    title: 'Equipment Master Stewardship Console',
    path: 'equipment-mdm',
    tables: [
        'x_snc_nrm_run',
        'x_snc_nrm_sap_equipment',
        'x_snc_nrm_equipment_master',
        'x_snc_nrm_match_pair',
        'x_snc_nrm_dq_issue',
        'x_snc_nrm_ingestion_log',
    ],
    listConfig: nrmListMenu,
});
