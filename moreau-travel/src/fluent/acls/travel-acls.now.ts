import '@servicenow/sdk/global';
import { Acl } from '@servicenow/sdk/core';

// Travel Request ACLs
Acl({
    $id: Now.ID['trv-request-read'],
    type: 'record',
    table: 'x_snc_moreau_trv_request',
    operation: 'read',
    roles: ['x_snc_moreau_trv.user'],
    active: true,
});

Acl({
    $id: Now.ID['trv-request-create'],
    type: 'record',
    table: 'x_snc_moreau_trv_request',
    operation: 'create',
    roles: ['x_snc_moreau_trv.user'],
    active: true,
});

Acl({
    $id: Now.ID['trv-request-write'],
    type: 'record',
    table: 'x_snc_moreau_trv_request',
    operation: 'write',
    roles: ['x_snc_moreau_trv.user'],
    active: true,
});

Acl({
    $id: Now.ID['trv-request-delete'],
    type: 'record',
    table: 'x_snc_moreau_trv_request',
    operation: 'delete',
    roles: ['x_snc_moreau_trv.admin'],
    active: true,
});

// Travel Expense ACLs
Acl({
    $id: Now.ID['trv-expense-read'],
    type: 'record',
    table: 'x_snc_moreau_trv_expense',
    operation: 'read',
    roles: ['x_snc_moreau_trv.user'],
    active: true,
});

Acl({
    $id: Now.ID['trv-expense-create'],
    type: 'record',
    table: 'x_snc_moreau_trv_expense',
    operation: 'create',
    roles: ['x_snc_moreau_trv.user'],
    active: true,
});

Acl({
    $id: Now.ID['trv-expense-write'],
    type: 'record',
    table: 'x_snc_moreau_trv_expense',
    operation: 'write',
    roles: ['x_snc_moreau_trv.user'],
    active: true,
});

// Travel Policy ACLs
Acl({
    $id: Now.ID['trv-policy-read'],
    type: 'record',
    table: 'x_snc_moreau_trv_policy',
    operation: 'read',
    roles: ['x_snc_moreau_trv.user'],
    active: true,
});

Acl({
    $id: Now.ID['trv-policy-write'],
    type: 'record',
    table: 'x_snc_moreau_trv_policy',
    operation: 'write',
    roles: ['x_snc_moreau_trv.admin'],
    active: true,
});

// Travel Delegation ACLs
Acl({
    $id: Now.ID['trv-delegation-read'],
    type: 'record',
    table: 'x_snc_moreau_trv_delegation',
    operation: 'read',
    roles: ['x_snc_moreau_trv.approver'],
    active: true,
});

Acl({
    $id: Now.ID['trv-delegation-write'],
    type: 'record',
    table: 'x_snc_moreau_trv_delegation',
    operation: 'write',
    roles: ['x_snc_moreau_trv.approver'],
    active: true,
});
