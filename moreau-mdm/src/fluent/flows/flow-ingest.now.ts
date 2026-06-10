import '@servicenow/sdk/global';
import { Flow, wfa, trigger, action } from '@servicenow/sdk/automation';
import { logStepSubflow } from './log-step-subflow.now';

export const flowIngestFromSap = Flow(
    {
        $id: Now.ID['flow-ingest-from-sap'],
        name: 'Ingest Equipment from SAP',
        description: 'Simulates ingestion of SAP PM equipment records (EQUI) via WDF Zero Copy. Reads from local staging table x_snc_eqmdm_sap_equipment.',
        runAs: 'system',
    },
    wfa.trigger(
        trigger.record.updated,
        { $id: Now.ID['flow-ingest-trigger'] },
        {
            table: 'x_snc_eqmdm_run',
            condition: 'state=ingesting',
            trigger_strategy: 'always',
        },
    ),
    (params) => {
        wfa.subflow(logStepSubflow, { $id: Now.ID['ingest-log-s1'] }, {
            run_sys_id: wfa.dataPill(params.trigger.current, 'string'),
            sequence: 1,
            stage: 'ingest',
            action_label: 'Connecting to SAP S/4HANA via WDF Zero Copy Connector for ERP',
            status: 'in_flight',
            detail: 'Federating SAP PM via published BAPI/OData. NOTE: simulated source — reading local staging table.',
            duration_ms: 2000,
            waitForCompletion: true,
        });

        wfa.subflow(logStepSubflow, { $id: Now.ID['ingest-log-s2'] }, {
            run_sys_id: wfa.dataPill(params.trigger.current, 'string'),
            sequence: 2,
            stage: 'ingest',
            action_label: 'Reading equipment master (EQUI / EQUZ / EQKT)',
            status: 'in_flight',
            detail: '13 equipment records returned from EQUI. Inbound from SAP PM plant maintenance.',
            duration_ms: 1500,
            waitForCompletion: true,
        });

        wfa.action(
            action.core.updateMultipleRecords,
            { $id: Now.ID['ingest-update-staging'] },
            {
                table_name: 'x_snc_eqmdm_sap_equipment',
                conditions: 'ingestion_status=not_ingested',
                field_values: TemplateValue({ ingestion_status: 'ingested' }),
            },
        );

        wfa.subflow(logStepSubflow, { $id: Now.ID['ingest-log-s3'] }, {
            run_sys_id: wfa.dataPill(params.trigger.current, 'string'),
            sequence: 3,
            stage: 'ingest',
            action_label: 'Landing records into staging',
            status: 'in_flight',
            detail: '13 equipment records landed. Ingestion status set to Ingested.',
            duration_ms: 1200,
            waitForCompletion: true,
        });

        wfa.subflow(logStepSubflow, { $id: Now.ID['ingest-log-s4'] }, {
            run_sys_id: wfa.dataPill(params.trigger.current, 'string'),
            sequence: 4,
            stage: 'ingest',
            action_label: 'Profiling inbound data',
            status: 'in_flight',
            detail: 'Profiling complete. Inconsistencies and gaps flagged for match & quality scan.',
            duration_ms: 1000,
            waitForCompletion: true,
        });

        wfa.action(
            action.core.updateRecord,
            { $id: Now.ID['ingest-update-run'] },
            {
                table_name: 'x_snc_eqmdm_run',
                record: wfa.dataPill(params.trigger.current, 'reference'),
                values: TemplateValue({
                    records_ingested: 13,
                    state: 'ingested',
                    overall_status: 'in_progress',
                }),
            },
        );

        wfa.subflow(logStepSubflow, { $id: Now.ID['ingest-log-s5'] }, {
            run_sys_id: wfa.dataPill(params.trigger.current, 'string'),
            sequence: 5,
            stage: 'ingest',
            action_label: 'Updating reconciliation run',
            status: 'success',
            detail: 'Run updated. Records Ingested: 13. State: Ingested. Proceed to Run Match & Dedupe.',
            duration_ms: 500,
            waitForCompletion: true,
        });
    },
);
