import '@servicenow/sdk/global';
import { Dashboard } from '@servicenow/sdk/core';
import { travelWorkspace } from './workspace.now';

Dashboard({
    $id: Now.ID['trv-management-dashboard'],
    name: 'Travel Management Dashboard',
    tabs: [
        {
            $id: Now.ID['trv-dashboard-overview-tab'],
            name: 'Overview',
            widgets: [
                // Row 1: Score cards
                {
                    $id: Now.ID['trv-widget-total-requests'],
                    component: 'single-score',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Travel Request',
                                sourceType: 'table',
                                tableOrViewName: 'x_snc_moreau_trv_request',
                                filterQuery: '',
                                id: 'data_source_1',
                            },
                        ],
                        headerTitle: 'Total Requests',
                        metrics: [
                            {
                                dataSource: 'data_source_1',
                                id: 'metric_1',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        sortBy: 'value',
                    },
                    height: 14,
                    width: 16,
                    position: { x: 0, y: 0 },
                },
                {
                    $id: Now.ID['trv-widget-pending-count'],
                    component: 'single-score',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Travel Request',
                                sourceType: 'table',
                                tableOrViewName: 'x_snc_moreau_trv_request',
                                filterQuery: 'approval_status=pending',
                                id: 'data_source_1',
                            },
                        ],
                        headerTitle: 'Pending Approval',
                        metrics: [
                            {
                                dataSource: 'data_source_1',
                                id: 'metric_1',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        sortBy: 'value',
                    },
                    height: 14,
                    width: 16,
                    position: { x: 16, y: 0 },
                },
                {
                    $id: Now.ID['trv-widget-by-type'],
                    component: 'donut',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Travel Request',
                                sourceType: 'table',
                                tableOrViewName: 'x_snc_moreau_trv_request',
                                filterQuery: '',
                                id: 'data_source_1',
                            },
                        ],
                        headerTitle: 'Domestic vs International',
                        metrics: [
                            {
                                dataSource: 'data_source_1',
                                id: 'metric_1',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource: 'data_source_1',
                                        groupByField: 'travel_type',
                                    },
                                ],
                                maxNumberOfGroups: 5,
                                showOthers: false,
                            },
                        ],
                        sortBy: 'value',
                    },
                    height: 14,
                    width: 16,
                    position: { x: 32, y: 0 },
                },

                // Row 2: Charts
                {
                    $id: Now.ID['trv-widget-by-status'],
                    component: 'vertical-bar',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Travel Request',
                                sourceType: 'table',
                                tableOrViewName: 'x_snc_moreau_trv_request',
                                filterQuery: '',
                                id: 'data_source_1',
                            },
                        ],
                        headerTitle: 'Requests by Approval Status',
                        metrics: [
                            {
                                dataSource: 'data_source_1',
                                id: 'metric_1',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource: 'data_source_1',
                                        groupByField: 'approval_status',
                                    },
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
                    $id: Now.ID['trv-widget-by-destination'],
                    component: 'vertical-bar',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Travel Request',
                                sourceType: 'table',
                                tableOrViewName: 'x_snc_moreau_trv_request',
                                filterQuery: '',
                                id: 'data_source_1',
                            },
                        ],
                        headerTitle: 'Top Destinations',
                        metrics: [
                            {
                                dataSource: 'data_source_1',
                                id: 'metric_1',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource: 'data_source_1',
                                        groupByField: 'destination_city',
                                    },
                                ],
                                maxNumberOfGroups: 8,
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
                    $id: Now.ID['trv-widget-by-purpose'],
                    component: 'pie',
                    componentProps: {
                        dataSources: [
                            {
                                label: 'Travel Request',
                                sourceType: 'table',
                                tableOrViewName: 'x_snc_moreau_trv_request',
                                filterQuery: '',
                                id: 'data_source_1',
                            },
                        ],
                        headerTitle: 'Requests by Purpose',
                        metrics: [
                            {
                                dataSource: 'data_source_1',
                                id: 'metric_1',
                                aggregateFunction: 'COUNT',
                                axisId: 'primary',
                            },
                        ],
                        groupBy: [
                            {
                                groupBy: [
                                    {
                                        dataSource: 'data_source_1',
                                        groupByField: 'purpose',
                                    },
                                ],
                                maxNumberOfGroups: 6,
                                showOthers: false,
                            },
                        ],
                        sortBy: 'value',
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
            $id: Now.ID['trv-dashboard-visibility'],
            experience: travelWorkspace,
        },
    ],
    permissions: [],
});
