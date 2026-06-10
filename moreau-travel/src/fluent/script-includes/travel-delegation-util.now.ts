import '@servicenow/sdk/global';
import { ScriptInclude } from '@servicenow/sdk/core';

export const TravelDelegationUtil = ScriptInclude({
    $id: Now.ID['si-travel-delegation-util'],
    name: 'TravelDelegationUtil',
    description: 'Server-side: getActiveDelegate(manager_sys_id), isDelegationActive(delegator, date)',
    script: Now.include('../../server/script-includes/travel-delegation-util.js'),
    accessibleFrom: 'public',
    active: true,
});
