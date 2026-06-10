import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'
import { nrtUser, nrtApprover, nrtFinance, nrtAdmin } from '../roles/roles.now'

// ── Travel Request ACLs ──────────────────────────────────────────────────────
Acl({
    $id: Now.ID['nrt_treq_read'],
    type: 'record',
    table: 'x_snc_nrt_travel_request',
    operation: 'read',
    roles: [nrtUser],
})

Acl({
    $id: Now.ID['nrt_treq_create'],
    type: 'record',
    table: 'x_snc_nrt_travel_request',
    operation: 'create',
    roles: [nrtUser],
})

Acl({
    $id: Now.ID['nrt_treq_write'],
    type: 'record',
    table: 'x_snc_nrt_travel_request',
    operation: 'write',
    roles: [nrtApprover],
})

Acl({
    $id: Now.ID['nrt_treq_delete'],
    type: 'record',
    table: 'x_snc_nrt_travel_request',
    operation: 'delete',
    roles: [nrtAdmin],
})

// ── Travel Expense ACLs ──────────────────────────────────────────────────────
Acl({
    $id: Now.ID['nrt_texp_read'],
    type: 'record',
    table: 'x_snc_nrt_travel_expense',
    operation: 'read',
    roles: [nrtUser],
})

Acl({
    $id: Now.ID['nrt_texp_create'],
    type: 'record',
    table: 'x_snc_nrt_travel_expense',
    operation: 'create',
    roles: [nrtUser],
})

Acl({
    $id: Now.ID['nrt_texp_write'],
    type: 'record',
    table: 'x_snc_nrt_travel_expense',
    operation: 'write',
    roles: [nrtFinance],
})

Acl({
    $id: Now.ID['nrt_texp_delete'],
    type: 'record',
    table: 'x_snc_nrt_travel_expense',
    operation: 'delete',
    roles: [nrtAdmin],
})

// ── Travel Policy ACLs ───────────────────────────────────────────────────────
Acl({
    $id: Now.ID['nrt_tpol_read'],
    type: 'record',
    table: 'x_snc_nrt_travel_policy',
    operation: 'read',
    roles: [nrtUser],
})

Acl({
    $id: Now.ID['nrt_tpol_create'],
    type: 'record',
    table: 'x_snc_nrt_travel_policy',
    operation: 'create',
    roles: [nrtAdmin],
})

Acl({
    $id: Now.ID['nrt_tpol_write'],
    type: 'record',
    table: 'x_snc_nrt_travel_policy',
    operation: 'write',
    roles: [nrtFinance],
})

Acl({
    $id: Now.ID['nrt_tpol_delete'],
    type: 'record',
    table: 'x_snc_nrt_travel_policy',
    operation: 'delete',
    roles: [nrtAdmin],
})

// ── Travel Delegation ACLs ───────────────────────────────────────────────────
Acl({
    $id: Now.ID['nrt_tdel_read'],
    type: 'record',
    table: 'x_snc_nrt_travel_delegation',
    operation: 'read',
    roles: [nrtApprover],
})

Acl({
    $id: Now.ID['nrt_tdel_create'],
    type: 'record',
    table: 'x_snc_nrt_travel_delegation',
    operation: 'create',
    roles: [nrtAdmin],
})

Acl({
    $id: Now.ID['nrt_tdel_write'],
    type: 'record',
    table: 'x_snc_nrt_travel_delegation',
    operation: 'write',
    roles: [nrtAdmin],
})

Acl({
    $id: Now.ID['nrt_tdel_delete'],
    type: 'record',
    table: 'x_snc_nrt_travel_delegation',
    operation: 'delete',
    roles: [nrtAdmin],
})

// ── Workspace Route ACL ──────────────────────────────────────────────────────
Acl({
    $id: Now.ID['nrt_workspace_route'],
    localOrExisting: 'Existing',
    type: 'ux_route',
    operation: 'read',
    roles: [nrtUser],
    name: 'nrt.*',
})
