import '@servicenow/sdk/global';
import { BusinessRule } from '@servicenow/sdk/core';

export const setDepartmentFromTraveler = BusinessRule({
    $id: Now.ID['br-set-department'],
    name: 'Set Department from Traveler',
    table: 'x_snc_moreau_trv_request',
    when: 'before',
    action: ['insert'],
    active: true,
    order: 100,
    script: Now.include('../../server/business-rules/set-department.js'),
});

export const deriveTravelType = BusinessRule({
    $id: Now.ID['br-derive-travel-type'],
    name: 'Derive Travel Type',
    table: 'x_snc_moreau_trv_request',
    when: 'before',
    action: ['insert', 'update'],
    active: true,
    order: 200,
    script: Now.include('../../server/business-rules/derive-travel-type.js'),
});

export const validateDates = BusinessRule({
    $id: Now.ID['br-validate-dates'],
    name: 'Validate Return Date After Departure',
    table: 'x_snc_moreau_trv_request',
    when: 'before',
    action: ['insert', 'update'],
    active: true,
    order: 300,
    script: Now.include('../../server/business-rules/validate-dates.js'),
});

export const escalateToFinance = BusinessRule({
    $id: Now.ID['br-escalate-finance'],
    name: 'Escalate to Finance',
    table: 'x_snc_moreau_trv_request',
    when: 'after',
    action: ['update'],
    active: true,
    order: 100,
    script: Now.include('../../server/business-rules/escalate-to-finance.js'),
});
