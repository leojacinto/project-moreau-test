import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['nrt_br_set_department'],
    name: 'NRT Set Department from Traveler',
    table: 'x_snc_nrt_travel_request',
    when: 'before',
    action: ['insert'],
    active: true,
    script: Now.include('../../server/business-rules/set-department.js'),
})

BusinessRule({
    $id: Now.ID['nrt_br_derive_travel_type'],
    name: 'NRT Derive Travel Type',
    table: 'x_snc_nrt_travel_request',
    when: 'before',
    action: ['insert', 'update'],
    active: true,
    script: Now.include('../../server/business-rules/derive-travel-type.js'),
})

BusinessRule({
    $id: Now.ID['nrt_br_validate_return_date'],
    name: 'NRT Validate Return Date',
    table: 'x_snc_nrt_travel_request',
    when: 'before',
    action: ['insert', 'update'],
    active: true,
    abortAction: false,
    script: Now.include('../../server/business-rules/validate-return-date.js'),
})

BusinessRule({
    $id: Now.ID['nrt_br_escalate_to_finance'],
    name: 'NRT Escalate to Finance',
    table: 'x_snc_nrt_travel_request',
    when: 'after',
    action: ['update'],
    active: true,
    script: Now.include('../../server/business-rules/escalate-to-finance.js'),
})
