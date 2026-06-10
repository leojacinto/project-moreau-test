import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['nrt_si_travel_delegation_util'],
    name: 'TravelDelegationUtil',
    active: true,
    apiName: 'x_snc_nrt.TravelDelegationUtil',
    accessibleFrom: 'public',
    description: 'Utilities for managing travel approval delegations',
    script: Now.include('../../server/script-includes/TravelDelegationUtil.js'),
})
