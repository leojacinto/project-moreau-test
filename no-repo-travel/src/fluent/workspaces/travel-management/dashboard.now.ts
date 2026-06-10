import '@servicenow/sdk/global'
import { Dashboard } from '@servicenow/sdk/core'
import { nrtWorkspace } from './workspace.now'

Dashboard({
    $id: Now.ID['nrt_dashboard'],
    name: 'Travel Management Dashboard',
    tabs: [
        {
            $id: Now.ID['nrt_dashboard_tab'],
            name: 'Overview',
            widgets: [
                // Row 1: Scorecards + Donut
                {
                    $id: Now.ID['nrt_widget_total_requests'],
                    component: 'single-score',
                    componentProps: {
                        headerTitle: 'Total Requests',
                        dataSources: [
                            {
                                id: 'ds_total',
                                label: 'Travel Request',
                                sourceType: 'table',
                                tableOrViewName: 'x_snc_nrt_travel_request',
                                filterQuery: '',
                            },
                        ],
                        metrics: [
                            {
                                id: 'metric_total',
                                dataSource: 'ds_total',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                    },
                    height: 14,
                    width: 14,
                    position: { x: 0, y: 0 },
                },
                {
                    $id: Now.ID['nrt_widget_pending'],
                    component: 'single-score',
                    componentProps: {
                        headerTitle: 'Pending Approval',
                        dataSources: [
                            {
                                id: 'ds_pending',
                                label: 'Travel Request',
                                sourceType: 'table',
                                tableOrViewName: 'x_snc_nrt_travel_request',
                                filterQuery: 'approval_status=pending',
                            },
                        ],
                        metrics: [
                            {
                                id: 'metric_pending',
                                dataSource: 'ds_pending',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                    },
                    height: 14,
                    width: 14,
                    position: { x: 14, y: 0 },
                },
                {
                    $id: Now.ID['nrt_widget_domestic_intl'],
                    component: 'donut',
                    componentProps: {
                        headerTitle: 'Domestic vs International',
                        dataSources: [
                            {
                                id: 'ds_travel_type',
                                label: 'Travel Request',
                                sourceType: 'table',
                                tableOrViewName: 'x_snc_nrt_travel_request',
                                filterQuery: '',
                            },
                        ],
                        metrics: [
                            {
                                id: 'metric_travel_type',
                                dataSource: 'ds_travel_type',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    { dataSource: 'ds_travel_type', groupByField: 'travel_type' },
                                ],
                                maxNumberOfGroups: 5,
                                showOthers: false,
                            },
                        ],
                    },
                    height: 14,
                    width: 20,
                    position: { x: 28, y: 0 },
                },
                // Row 2: Charts
                {
                    $id: Now.ID['nrt_widget_by_status'],
                    component: 'vertical-bar',
                    componentProps: {
                        headerTitle: 'Requests by Approval Status',
                        dataSources: [
                            {
                                id: 'ds_status',
                                label: 'Travel Request',
                                sourceType: 'table',
                                tableOrViewName: 'x_snc_nrt_travel_request',
                                filterQuery: '',
                            },
                        ],
                        metrics: [
                            {
                                id: 'metric_status',
                                dataSource: 'ds_status',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    { dataSource: 'ds_status', groupByField: 'approval_status' },
                                ],
                                maxNumberOfGroups: 10,
                                showOthers: false,
                            },
                        ],
                        sortBy: 'value',
                    },
                    height: 14,
                    width: 16,
                    position: { x: 0, y: 14 },
                },
                {
                    $id: Now.ID['nrt_widget_top_destinations'],
                    component: 'vertical-bar',
                    componentProps: {
                        headerTitle: 'Top Destinations',
                        dataSources: [
                            {
                                id: 'ds_dest',
                                label: 'Travel Request',
                                sourceType: 'table',
                                tableOrViewName: 'x_snc_nrt_travel_request',
                                filterQuery: '',
                            },
                        ],
                        metrics: [
                            {
                                id: 'metric_dest',
                                dataSource: 'ds_dest',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    { dataSource: 'ds_dest', groupByField: 'destination_country' },
                                ],
                                maxNumberOfGroups: 10,
                                showOthers: false,
                            },
                        ],
                        sortBy: 'value',
                    },
                    height: 14,
                    width: 16,
                    position: { x: 16, y: 14 },
                },
                {
                    $id: Now.ID['nrt_widget_by_purpose'],
                    component: 'pie',
                    componentProps: {
                        headerTitle: 'Requests by Purpose',
                        dataSources: [
                            {
                                id: 'ds_purpose',
                                label: 'Travel Request',
                                sourceType: 'table',
                                tableOrViewName: 'x_snc_nrt_travel_request',
                                filterQuery: '',
                            },
                        ],
                        metrics: [
                            {
                                id: 'metric_purpose',
                                dataSource: 'ds_purpose',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    { dataSource: 'ds_purpose', groupByField: 'purpose' },
                                ],
                                maxNumberOfGroups: 10,
                                showOthers: false,
                            },
                        ],
                    },
                    height: 14,
                    width: 16,
                    position: { x: 32, y: 14 },
                },
            ],
        },
    ],
    visibilities: [
        {
            $id: Now.ID['nrt_dashboard_visibility'],
            experience: nrtWorkspace,
        },
    ],
    permissions: [],
})
