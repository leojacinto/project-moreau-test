import '@servicenow/sdk/global';
import { ScriptInclude } from '@servicenow/sdk/core';

export const TravelCostCalculator = ScriptInclude({
    $id: Now.ID['si-travel-cost-calculator'],
    name: 'TravelCostCalculator',
    description: 'Client-callable via GlideAjax: getEstimatedDailyRate(country, expense_type), getPolicyLimit(country)',
    script: Now.include('../../server/script-includes/travel-cost-calculator.js'),
    accessibleFrom: 'public',
    clientCallable: true,
    active: true,
});
