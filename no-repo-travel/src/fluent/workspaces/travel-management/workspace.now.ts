import '@servicenow/sdk/global'
import { Workspace } from '@servicenow/sdk/core'
import { nrtListMenu } from './list-menu.now'

export const nrtWorkspace = Workspace({
    $id: Now.ID['nrt_workspace'],
    title: 'Travel Management',
    path: 'nrt',
    tables: [
        'x_snc_nrt_travel_request',
        'x_snc_nrt_travel_expense',
        'x_snc_nrt_travel_policy',
        'x_snc_nrt_travel_delegation',
    ],
    listConfig: nrtListMenu,
})
