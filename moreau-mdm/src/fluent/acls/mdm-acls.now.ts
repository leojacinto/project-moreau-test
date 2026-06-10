import '@servicenow/sdk/global';
import { Acl, Role } from '@servicenow/sdk/core';

export const mdmUserRole = Role({
    $id: Now.ID['mdm-user-role'],
    name: 'x_snc_eqmdm.user',
    description: 'Equipment MDM User — read access to all MDM tables and workspace',
    canDelegate: false,
    containsRoles: ['canvas_user'],
});

export const mdmAdminRole = Role({
    $id: Now.ID['mdm-admin-role'],
    name: 'x_snc_eqmdm.admin',
    description: 'Equipment MDM Admin — full access including run management',
    canDelegate: false,
    containsRoles: ['x_snc_eqmdm.user', 'canvas_admin'],
});

// Generate ACLs for each table × operation
export const aclSapEqRead = Acl({ $id: Now.ID['acl-sap-eq-read'], localOrExisting: 'Existing', type: 'record', operation: 'read', table: 'x_snc_eqmdm_sap_equipment', roles: ['x_snc_eqmdm.user'] });
export const aclSapEqWrite = Acl({ $id: Now.ID['acl-sap-eq-write'], localOrExisting: 'Existing', type: 'record', operation: 'write', table: 'x_snc_eqmdm_sap_equipment', roles: ['x_snc_eqmdm.admin'] });
export const aclSapEqCreate = Acl({ $id: Now.ID['acl-sap-eq-create'], localOrExisting: 'Existing', type: 'record', operation: 'create', table: 'x_snc_eqmdm_sap_equipment', roles: ['x_snc_eqmdm.admin'] });
export const aclSapEqDelete = Acl({ $id: Now.ID['acl-sap-eq-delete'], localOrExisting: 'Existing', type: 'record', operation: 'delete', table: 'x_snc_eqmdm_sap_equipment', roles: ['x_snc_eqmdm.admin'] });

export const aclMasterRead = Acl({ $id: Now.ID['acl-master-read'], localOrExisting: 'Existing', type: 'record', operation: 'read', table: 'x_snc_eqmdm_equipment_master', roles: ['x_snc_eqmdm.user'] });
export const aclMasterWrite = Acl({ $id: Now.ID['acl-master-write'], localOrExisting: 'Existing', type: 'record', operation: 'write', table: 'x_snc_eqmdm_equipment_master', roles: ['x_snc_eqmdm.admin'] });
export const aclMasterCreate = Acl({ $id: Now.ID['acl-master-create'], localOrExisting: 'Existing', type: 'record', operation: 'create', table: 'x_snc_eqmdm_equipment_master', roles: ['x_snc_eqmdm.admin'] });
export const aclMasterDelete = Acl({ $id: Now.ID['acl-master-delete'], localOrExisting: 'Existing', type: 'record', operation: 'delete', table: 'x_snc_eqmdm_equipment_master', roles: ['x_snc_eqmdm.admin'] });

export const aclMatchRead = Acl({ $id: Now.ID['acl-match-read'], localOrExisting: 'Existing', type: 'record', operation: 'read', table: 'x_snc_eqmdm_match_pair', roles: ['x_snc_eqmdm.user'] });
export const aclMatchWrite = Acl({ $id: Now.ID['acl-match-write'], localOrExisting: 'Existing', type: 'record', operation: 'write', table: 'x_snc_eqmdm_match_pair', roles: ['x_snc_eqmdm.admin'] });
export const aclMatchCreate = Acl({ $id: Now.ID['acl-match-create'], localOrExisting: 'Existing', type: 'record', operation: 'create', table: 'x_snc_eqmdm_match_pair', roles: ['x_snc_eqmdm.admin'] });
export const aclMatchDelete = Acl({ $id: Now.ID['acl-match-delete'], localOrExisting: 'Existing', type: 'record', operation: 'delete', table: 'x_snc_eqmdm_match_pair', roles: ['x_snc_eqmdm.admin'] });

export const aclDqRead = Acl({ $id: Now.ID['acl-dq-read'], localOrExisting: 'Existing', type: 'record', operation: 'read', table: 'x_snc_eqmdm_dq_issue', roles: ['x_snc_eqmdm.user'] });
export const aclDqWrite = Acl({ $id: Now.ID['acl-dq-write'], localOrExisting: 'Existing', type: 'record', operation: 'write', table: 'x_snc_eqmdm_dq_issue', roles: ['x_snc_eqmdm.admin'] });
export const aclDqCreate = Acl({ $id: Now.ID['acl-dq-create'], localOrExisting: 'Existing', type: 'record', operation: 'create', table: 'x_snc_eqmdm_dq_issue', roles: ['x_snc_eqmdm.admin'] });
export const aclDqDelete = Acl({ $id: Now.ID['acl-dq-delete'], localOrExisting: 'Existing', type: 'record', operation: 'delete', table: 'x_snc_eqmdm_dq_issue', roles: ['x_snc_eqmdm.admin'] });

export const aclRunRead = Acl({ $id: Now.ID['acl-run-read'], localOrExisting: 'Existing', type: 'record', operation: 'read', table: 'x_snc_eqmdm_run', roles: ['x_snc_eqmdm.user'] });
export const aclRunWrite = Acl({ $id: Now.ID['acl-run-write'], localOrExisting: 'Existing', type: 'record', operation: 'write', table: 'x_snc_eqmdm_run', roles: ['x_snc_eqmdm.admin'] });
export const aclRunCreate = Acl({ $id: Now.ID['acl-run-create'], localOrExisting: 'Existing', type: 'record', operation: 'create', table: 'x_snc_eqmdm_run', roles: ['x_snc_eqmdm.admin'] });
export const aclRunDelete = Acl({ $id: Now.ID['acl-run-delete'], localOrExisting: 'Existing', type: 'record', operation: 'delete', table: 'x_snc_eqmdm_run', roles: ['x_snc_eqmdm.admin'] });

export const aclLogRead = Acl({ $id: Now.ID['acl-log-read'], localOrExisting: 'Existing', type: 'record', operation: 'read', table: 'x_snc_eqmdm_ingestion_log', roles: ['x_snc_eqmdm.user'] });
export const aclLogWrite = Acl({ $id: Now.ID['acl-log-write'], localOrExisting: 'Existing', type: 'record', operation: 'write', table: 'x_snc_eqmdm_ingestion_log', roles: ['x_snc_eqmdm.admin'] });
export const aclLogCreate = Acl({ $id: Now.ID['acl-log-create'], localOrExisting: 'Existing', type: 'record', operation: 'create', table: 'x_snc_eqmdm_ingestion_log', roles: ['x_snc_eqmdm.admin'] });
export const aclLogDelete = Acl({ $id: Now.ID['acl-log-delete'], localOrExisting: 'Existing', type: 'record', operation: 'delete', table: 'x_snc_eqmdm_ingestion_log', roles: ['x_snc_eqmdm.admin'] });

export const aclWorkspaceRoute = Acl({
    $id: Now.ID['acl-workspace-route'],
    localOrExisting: 'Existing',
    type: 'ux_route',
    operation: 'read',
    roles: ['x_snc_eqmdm.user', 'x_snc_eqmdm.admin'],
    name: 'equipment-mdm.*',
});
