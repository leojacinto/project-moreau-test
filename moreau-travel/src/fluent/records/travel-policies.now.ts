import '@servicenow/sdk/global';
import { Record } from '@servicenow/sdk/core';

export const policyGlobal = Record({
    $id: Now.ID['trv-policy-global'],
    table: 'x_snc_moreau_trv_policy',
    data: {
        policy_name: 'Global Default',
        applies_to_country: '*',
        max_daily_hotel: 200,
        max_daily_meals: 75,
        max_flight_class: 'economy',
        requires_finance_approval_above: 5000,
        active: true,
    },
});

export const policyUSA = Record({
    $id: Now.ID['trv-policy-usa'],
    table: 'x_snc_moreau_trv_policy',
    data: {
        policy_name: 'United States',
        applies_to_country: 'United States',
        max_daily_hotel: 300,
        max_daily_meals: 100,
        max_flight_class: 'economy',
        requires_finance_approval_above: 5000,
        active: true,
    },
});

export const policyJapan = Record({
    $id: Now.ID['trv-policy-japan'],
    table: 'x_snc_moreau_trv_policy',
    data: {
        policy_name: 'Japan',
        applies_to_country: 'Japan',
        max_daily_hotel: 350,
        max_daily_meals: 120,
        max_flight_class: 'premium_economy',
        requires_finance_approval_above: 8000,
        active: true,
    },
});

export const policyUK = Record({
    $id: Now.ID['trv-policy-uk'],
    table: 'x_snc_moreau_trv_policy',
    data: {
        policy_name: 'United Kingdom',
        applies_to_country: 'United Kingdom',
        max_daily_hotel: 280,
        max_daily_meals: 90,
        max_flight_class: 'economy',
        requires_finance_approval_above: 5000,
        active: true,
    },
});

export const policyAustralia = Record({
    $id: Now.ID['trv-policy-australia'],
    table: 'x_snc_moreau_trv_policy',
    data: {
        policy_name: 'Australia',
        applies_to_country: 'Australia',
        max_daily_hotel: 250,
        max_daily_meals: 85,
        max_flight_class: 'economy',
        requires_finance_approval_above: 5000,
        active: true,
    },
});
