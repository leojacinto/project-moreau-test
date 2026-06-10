import '@servicenow/sdk/global';
import { Flow, wfa, action, trigger } from '@servicenow/sdk/automation';
import { logStepSubflow } from './log-step-subflow.now';

Flow(
    {
        $id: Now.ID['nrm_flow_ingest'],
        name: 'NRM Ingest Equipment from SAP',
        description: 'Simulates ingestion from SAP PM via WDF Zero Copy Connector.',
        runAs: 'system',
        flowPriority: 'MEDIUM',
    },
    wfa.trigger(
        trigger.record.updated,
        { $id: Now.ID['nrm_ingest_trigger'] },
        {
            table: 'x_snc_nrm_run',
            condition: 'trigger_action=ingest',
            trigger_strategy: 'every',
            run_flow_in: 'background',
        }
    ),
    (params) => {
        // Reset trigger_action to prevent re-firing
        wfa.action(
            action.core.updateRecord,
            { $id: Now.ID['nrm_ingest_reset'] },
            {
                table_name: 'x_snc_nrm_run',
                record: wfa.dataPill(params.trigger.current, 'reference'),
                values: TemplateValue({ trigger_action: '' }),
            }
        );

        wfa.subflow(logStepSubflow, { $id: Now.ID['nrm_ingest_log1'] }, {
            run: wfa.dataPill(params.trigger.current, 'reference'),
            sequence: 1,
            stage: 'ingest',
            action_text: 'Connecting to SAP S/4HANA via WDF Zero Copy Connector for ERP',
            status: 'in_flight',
            detail: 'Federating SAP PM via published BAPI/OData. NOTE: simulated — reading local staging table.',
            duration_ms: 2000,
            waitForCompletion: true,
        });

        wfa.subflow(logStepSubflow, { $id: Now.ID['nrm_ingest_log2'] }, {
            run: wfa.dataPill(params.trigger.current, 'reference'),
            sequence: 2,
            stage: 'ingest',
            action_text: 'Reading equipment master (EQUI / EQUZ / EQKT)',
            status: 'in_flight',
            detail: '13 equipment records returned from EQUI.',
            duration_ms: 1500,
            waitForCompletion: true,
        });

        // Mark all not-ingested staging records as ingested
        wfa.action(
            action.core.updateMultipleRecords,
            { $id: Now.ID['nrm_ingest_update_staging'] },
            {
                table_name: 'x_snc_nrm_sap_equipment',
                conditions: 'ingestion_status=not_ingested',
                field_values: TemplateValue({ ingestion_status: 'ingested' }),
            }
        );

        wfa.subflow(logStepSubflow, { $id: Now.ID['nrm_ingest_log3'] }, {
            run: wfa.dataPill(params.trigger.current, 'reference'),
            sequence: 3,
            stage: 'ingest',
            action_text: 'Landing records into staging',
            status: 'in_flight',
            detail: '13 records landed. Ingestion status set to Ingested.',
            duration_ms: 1200,
            waitForCompletion: true,
        });

        wfa.subflow(logStepSubflow, { $id: Now.ID['nrm_ingest_log4'] }, {
            run: wfa.dataPill(params.trigger.current, 'reference'),
            sequence: 4,
            stage: 'ingest',
            action_text: 'Profiling inbound data',
            status: 'in_flight',
            detail: 'Profiling complete. Inconsistencies and gaps flagged for match & quality scan.',
            duration_ms: 1000,
            waitForCompletion: true,
        });

        // Update run record
        wfa.action(
            action.core.updateRecord,
            { $id: Now.ID['nrm_ingest_update_run'] },
            {
                table_name: 'x_snc_nrm_run',
                record: wfa.dataPill(params.trigger.current, 'reference'),
                values: TemplateValue({
                    records_ingested: 13,
                    state: 'ingested',
                    run_date: wfa.dataPill(params.trigger.run_start_date_time, 'glide_date_time'),
                    overall_status: 'in_progress',
                }),
            }
        );

        wfa.subflow(logStepSubflow, { $id: Now.ID['nrm_ingest_log5'] }, {
            run: wfa.dataPill(params.trigger.current, 'reference'),
            sequence: 5,
            stage: 'ingest',
            action_text: 'Ingest complete',
            status: 'success',
            detail: 'Run updated: 13 records ingested, state = Ingested.',
            duration_ms: 500,
            waitForCompletion: true,
        });
    }
);
