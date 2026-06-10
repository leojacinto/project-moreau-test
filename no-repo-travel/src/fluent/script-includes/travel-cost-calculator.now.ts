import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['nrt_si_travel_cost_calculator'],
    name: 'TravelCostCalculator',
    active: true,
    apiName: 'x_snc_nrt.TravelCostCalculator',
    clientCallable: true,
    accessibleFrom: 'public',
    description: 'GlideAjax-callable utility for retrieving policy cost limits',
    script: Now.include('../../server/script-includes/TravelCostCalculator.js'),
})
