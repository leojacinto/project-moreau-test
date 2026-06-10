import '@servicenow/sdk/global';
import { Record } from '@servicenow/sdk/core';

export const runMdr0001 = Record({
    $id: Now.ID['run-mdr-0001'],
    table: 'x_snc_eqmdm_run',
    data: {
        source_system: 'SAP S/4HANA PM (EQUI) via WDF Zero Copy — SIMULATED',
        state: 'draft',
        records_ingested: 0,
        duplicates_found: 0,
        dq_issues_found: 0,
        golden_records_created: 0,
        overall_status: 'not_started',
    },
});

export const userMayaRao = Record({
    $id: Now.ID['user-maya-rao'],
    table: 'sys_user',
    data: {
        user_name: 'maya.rao',
        first_name: 'Maya',
        last_name: 'Rao',
        title: 'Enterprise Data Steward',
        email: 'maya.rao@example.com',
        active: true,
    },
});
