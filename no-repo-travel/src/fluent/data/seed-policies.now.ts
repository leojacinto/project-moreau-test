import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Global default policy
Record({
    table: 'x_snc_nrt_travel_policy',
    $id: Now.ID['nrt_policy_global'],
    $meta: { installMethod: 'demo' },
    data: {
        policy_name: 'Global Default Policy',
        applies_to_country: '*',
        max_daily_hotel: 200,
        max_daily_meals: 75,
        max_flight_class: 'economy',
        requires_finance_approval_above: 3000,
        active: true,
    },
})

// United States policy
Record({
    table: 'x_snc_nrt_travel_policy',
    $id: Now.ID['nrt_policy_us'],
    $meta: { installMethod: 'demo' },
    data: {
        policy_name: 'United States Policy',
        applies_to_country: 'US',
        max_daily_hotel: 250,
        max_daily_meals: 100,
        max_flight_class: 'economy',
        requires_finance_approval_above: 5000,
        active: true,
    },
})

// United Kingdom policy
Record({
    table: 'x_snc_nrt_travel_policy',
    $id: Now.ID['nrt_policy_uk'],
    $meta: { installMethod: 'demo' },
    data: {
        policy_name: 'United Kingdom Policy',
        applies_to_country: 'UK',
        max_daily_hotel: 280,
        max_daily_meals: 90,
        max_flight_class: 'premium_economy',
        requires_finance_approval_above: 6000,
        active: true,
    },
})

// Singapore policy
Record({
    table: 'x_snc_nrt_travel_policy',
    $id: Now.ID['nrt_policy_sg'],
    $meta: { installMethod: 'demo' },
    data: {
        policy_name: 'Singapore Policy',
        applies_to_country: 'SG',
        max_daily_hotel: 320,
        max_daily_meals: 80,
        max_flight_class: 'business',
        requires_finance_approval_above: 8000,
        active: true,
    },
})

// Germany policy
Record({
    table: 'x_snc_nrt_travel_policy',
    $id: Now.ID['nrt_policy_de'],
    $meta: { installMethod: 'demo' },
    data: {
        policy_name: 'Germany Policy',
        applies_to_country: 'DE',
        max_daily_hotel: 230,
        max_daily_meals: 85,
        max_flight_class: 'economy',
        requires_finance_approval_above: 4500,
        active: true,
    },
})
