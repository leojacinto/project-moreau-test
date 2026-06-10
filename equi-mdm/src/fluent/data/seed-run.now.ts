import '@servicenow/sdk/global';
import { Record } from '@servicenow/sdk/core';

export const nrmRun1 = Record({
    table: 'x_snc_nrm_run',
    $id: Now.ID['nrm_run_1'],
    $meta: { installMethod: 'demo' },
    data: {
        number: 'MDR0001',
        source_system: 'SAP S/4HANA PM (EQUI) via WDF Zero Copy — SIMULATED',
        state: 'draft',
        records_ingested: 0,
        duplicates_found: 0,
        dq_issues_found: 0,
        golden_records_created: 0,
        overall_status: 'not_started',
    },
});
