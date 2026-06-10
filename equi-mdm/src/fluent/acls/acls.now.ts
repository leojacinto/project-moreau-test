import '@servicenow/sdk/global';
import { Acl } from '@servicenow/sdk/core';
import { nrmUser, nrmSteward, nrmAdmin } from '../roles/roles.now';

// ── SAP Equipment ACLs ────────────────────────────────────────────────────────
Acl({ $id: Now.ID['nrm_sap_read'], type: 'record', table: 'x_snc_nrm_sap_equipment', operation: 'read', roles: [nrmUser] });
Acl({ $id: Now.ID['nrm_sap_write'], type: 'record', table: 'x_snc_nrm_sap_equipment', operation: 'write', roles: [nrmSteward] });
Acl({ $id: Now.ID['nrm_sap_create'], type: 'record', table: 'x_snc_nrm_sap_equipment', operation: 'create', roles: [nrmSteward] });
Acl({ $id: Now.ID['nrm_sap_delete'], type: 'record', table: 'x_snc_nrm_sap_equipment', operation: 'delete', roles: [nrmAdmin] });

// ── Equipment Master ACLs ─────────────────────────────────────────────────────
Acl({ $id: Now.ID['nrm_master_read'], type: 'record', table: 'x_snc_nrm_equipment_master', operation: 'read', roles: [nrmUser] });
Acl({ $id: Now.ID['nrm_master_write'], type: 'record', table: 'x_snc_nrm_equipment_master', operation: 'write', roles: [nrmSteward] });
Acl({ $id: Now.ID['nrm_master_create'], type: 'record', table: 'x_snc_nrm_equipment_master', operation: 'create', roles: [nrmSteward] });
Acl({ $id: Now.ID['nrm_master_delete'], type: 'record', table: 'x_snc_nrm_equipment_master', operation: 'delete', roles: [nrmAdmin] });

// ── Match Pair ACLs ───────────────────────────────────────────────────────────
Acl({ $id: Now.ID['nrm_pair_read'], type: 'record', table: 'x_snc_nrm_match_pair', operation: 'read', roles: [nrmUser] });
Acl({ $id: Now.ID['nrm_pair_write'], type: 'record', table: 'x_snc_nrm_match_pair', operation: 'write', roles: [nrmSteward] });
Acl({ $id: Now.ID['nrm_pair_create'], type: 'record', table: 'x_snc_nrm_match_pair', operation: 'create', roles: [nrmSteward] });
Acl({ $id: Now.ID['nrm_pair_delete'], type: 'record', table: 'x_snc_nrm_match_pair', operation: 'delete', roles: [nrmAdmin] });

// ── DQ Issue ACLs ─────────────────────────────────────────────────────────────
Acl({ $id: Now.ID['nrm_dq_read'], type: 'record', table: 'x_snc_nrm_dq_issue', operation: 'read', roles: [nrmUser] });
Acl({ $id: Now.ID['nrm_dq_write'], type: 'record', table: 'x_snc_nrm_dq_issue', operation: 'write', roles: [nrmSteward] });
Acl({ $id: Now.ID['nrm_dq_create'], type: 'record', table: 'x_snc_nrm_dq_issue', operation: 'create', roles: [nrmSteward] });
Acl({ $id: Now.ID['nrm_dq_delete'], type: 'record', table: 'x_snc_nrm_dq_issue', operation: 'delete', roles: [nrmAdmin] });

// ── Reconciliation Run ACLs ───────────────────────────────────────────────────
Acl({ $id: Now.ID['nrm_run_read'], type: 'record', table: 'x_snc_nrm_run', operation: 'read', roles: [nrmUser] });
Acl({ $id: Now.ID['nrm_run_write'], type: 'record', table: 'x_snc_nrm_run', operation: 'write', roles: [nrmSteward] });
Acl({ $id: Now.ID['nrm_run_create'], type: 'record', table: 'x_snc_nrm_run', operation: 'create', roles: [nrmSteward] });
Acl({ $id: Now.ID['nrm_run_delete'], type: 'record', table: 'x_snc_nrm_run', operation: 'delete', roles: [nrmAdmin] });

// ── Ingestion Log ACLs ────────────────────────────────────────────────────────
Acl({ $id: Now.ID['nrm_log_read'], type: 'record', table: 'x_snc_nrm_ingestion_log', operation: 'read', roles: [nrmUser] });
Acl({ $id: Now.ID['nrm_log_write'], type: 'record', table: 'x_snc_nrm_ingestion_log', operation: 'write', roles: [nrmSteward] });
Acl({ $id: Now.ID['nrm_log_create'], type: 'record', table: 'x_snc_nrm_ingestion_log', operation: 'create', roles: [nrmSteward] });
Acl({ $id: Now.ID['nrm_log_delete'], type: 'record', table: 'x_snc_nrm_ingestion_log', operation: 'delete', roles: [nrmAdmin] });

// ── Workspace Route ACL ───────────────────────────────────────────────────────
Acl({
    $id: Now.ID['nrm_workspace_route'],
    localOrExisting: 'Existing',
    type: 'ux_route',
    operation: 'read',
    roles: [nrmUser],
    name: 'equipment-mdm.*',
});
