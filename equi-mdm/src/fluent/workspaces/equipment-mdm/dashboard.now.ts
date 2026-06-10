import '@servicenow/sdk/global';
import { Dashboard } from '@servicenow/sdk/core';
import { nrmWorkspace } from './workspace.now';

Dashboard({
    $id: Now.ID['nrm_dashboard'],
    name: 'Equipment MDM Dashboard',
    tabs: [
        {
            $id: Now.ID['nrm_tab_overview'],
            name: 'Overview',
            widgets: [
                {
                    $id: Now.ID['nrm_widget_total_sap'],
                    component: 'single-score',
                    componentProps: {
                        dataSources: [{ label: 'SAP Records', sourceType: 'table', tableOrViewName: 'x_snc_nrm_sap_equipment', filterQuery: '', id: 'ds_sap' }],
                        headerTitle: 'SAP Records',
                        metrics: [{ dataSource: 'ds_sap', id: 'metric_sap', aggregateFunction: 'COUNT', axisId: 'primary' }],
                    },
                    height: 14, width: 12, position: { x: 0, y: 0 },
                },
                {
                    $id: Now.ID['nrm_widget_golden'],
                    component: 'single-score',
                    componentProps: {
                        dataSources: [{ label: 'Published', sourceType: 'table', tableOrViewName: 'x_snc_nrm_equipment_master', filterQuery: 'master_status=published', id: 'ds_pub' }],
                        headerTitle: 'Published Records',
                        metrics: [{ dataSource: 'ds_pub', id: 'metric_pub', aggregateFunction: 'COUNT', axisId: 'primary' }],
                    },
                    height: 14, width: 12, position: { x: 12, y: 0 },
                },
                {
                    $id: Now.ID['nrm_widget_dq_open'],
                    component: 'single-score',
                    componentProps: {
                        dataSources: [{ label: 'DQ Issues', sourceType: 'table', tableOrViewName: 'x_snc_nrm_dq_issue', filterQuery: 'status=open^ORstatus=held_for_steward', id: 'ds_dq' }],
                        headerTitle: 'Open DQ Issues',
                        metrics: [{ dataSource: 'ds_dq', id: 'metric_dq', aggregateFunction: 'COUNT', axisId: 'primary' }],
                    },
                    height: 14, width: 12, position: { x: 24, y: 0 },
                },
                {
                    $id: Now.ID['nrm_widget_held'],
                    component: 'single-score',
                    componentProps: {
                        dataSources: [{ label: 'Held', sourceType: 'table', tableOrViewName: 'x_snc_nrm_equipment_master', filterQuery: 'master_status=held', id: 'ds_held' }],
                        headerTitle: 'Held for Steward',
                        metrics: [{ dataSource: 'ds_held', id: 'metric_held', aggregateFunction: 'COUNT', axisId: 'primary' }],
                    },
                    height: 14, width: 12, position: { x: 36, y: 0 },
                },
                {
                    $id: Now.ID['nrm_widget_ingestion_status'],
                    component: 'donut',
                    componentProps: {
                        dataSources: [{ label: 'SAP Equipment', sourceType: 'table', tableOrViewName: 'x_snc_nrm_sap_equipment', filterQuery: '', id: 'ds_ing' }],
                        headerTitle: 'Records by Ingestion Status',
                        metrics: [{ dataSource: 'ds_ing', id: 'metric_ing', aggregateFunction: 'COUNT', axisId: 'primary' }],
                        groupBy: [{ groupBy: [{ dataSource: 'ds_ing', groupByField: 'ingestion_status' }], maxNumberOfGroups: 6, showOthers: false }],
                    },
                    height: 20, width: 24, position: { x: 0, y: 14 },
                },
                {
                    $id: Now.ID['nrm_widget_dq_severity'],
                    component: 'vertical-bar',
                    componentProps: {
                        dataSources: [{ label: 'DQ Issues', sourceType: 'table', tableOrViewName: 'x_snc_nrm_dq_issue', filterQuery: '', id: 'ds_dq2' }],
                        headerTitle: 'DQ Issues by Severity',
                        metrics: [{ dataSource: 'ds_dq2', id: 'metric_dq2', aggregateFunction: 'COUNT', axisId: 'primary' }],
                        groupBy: [{ groupBy: [{ dataSource: 'ds_dq2', groupByField: 'severity' }], maxNumberOfGroups: 4, showOthers: false }],
                        sortBy: 'value',
                    },
                    height: 20, width: 24, position: { x: 24, y: 14 },
                },
            ],
        },
    ],
    visibilities: [{ $id: Now.ID['nrm_dashboard_visibility'], experience: nrmWorkspace }],
    permissions: [],
});
