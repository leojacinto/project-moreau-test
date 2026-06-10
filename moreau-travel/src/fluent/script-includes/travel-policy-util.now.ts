import '@servicenow/sdk/global';
import { ScriptInclude } from '@servicenow/sdk/core';

export const TravelPolicyUtil = ScriptInclude({
    $id: Now.ID['si-travel-policy-util'],
    name: 'TravelPolicyUtil',
    description: 'Server-side utility: getPolicyForCountry(country), getFinanceThreshold(), isWithinPolicy(request)',
    script: Now.include('../../server/script-includes/travel-policy-util.js'),
    accessibleFrom: 'public',
    active: true,
});
