import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['nrt_si_travel_policy_util'],
    name: 'TravelPolicyUtil',
    active: true,
    apiName: 'x_snc_nrt.TravelPolicyUtil',
    accessibleFrom: 'public',
    description: 'Utilities for evaluating travel policies by country',
    script: Now.include('../../server/script-includes/TravelPolicyUtil.js'),
})
