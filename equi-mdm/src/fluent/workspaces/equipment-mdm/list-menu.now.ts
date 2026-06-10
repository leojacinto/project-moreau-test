import '@servicenow/sdk/global';
import { UxListMenuConfig, Applicability } from '@servicenow/sdk/core';
import { nrmUser } from '../../roles/roles.now';

const userApplicability = Applicability({
    $id: Now.ID['nrm_app_user'],
    name: 'NRM User Applicability',
    roles: [nrmUser],
});

export const nrmListMenu = UxListMenuConfig({
    $id: Now.ID['nrm_list_menu'],
    name: 'Equipment MDM Navigation',
    categories: [
        {
            $id: Now.ID['nrm_cat_runs'],
            title: 'Reconciliation',
            order: 10,
            lists: [
                {
                    $id: Now.ID['nrm_list_runs_all'],
                    title: 'All Runs',
                    order: 10,
                    condition: '',
                    table: 'x_snc_nrm_run',
                    columns: 'number,source_system,state,overall_status,records_ingested,duplicates_found,dq_issues_found,golden_records_created',
                    applicabilities: [{ $id: Now.ID['nrm_list_runs_app'], applicability: userApplicability }],
                },
            ],
        },
        {
            $id: Now.ID['nrm_cat_equipment'],
            title: 'Equipment',
            order: 20,
            lists: [
                {
                    $id: Now.ID['nrm_list_master'],
                    title: 'Golden Master',
                    order: 10,
                    condition: 'master_status=published',
                    table: 'x_snc_nrm_equipment_master',
                    columns: 'number,equipment_desc,manufacturer,serial_number,cost_centre,sap_source_ids,data_quality_score,master_status',
                    applicabilities: [{ $id: Now.ID['nrm_list_master_app'], applicability: userApplicability }],
                },
                {
                    $id: Now.ID['nrm_list_staging'],
                    title: 'SAP Staging',
                    order: 20,
                    condition: '',
                    table: 'x_snc_nrm_sap_equipment',
                    columns: 'sap_equipment_no,equipment_desc,manufacturer,serial_number,cost_centre,maintenance_plant,sap_status,ingestion_status',
                    applicabilities: [{ $id: Now.ID['nrm_list_staging_app'], applicability: userApplicability }],
                },
            ],
        },
        {
            $id: Now.ID['nrm_cat_quality'],
            title: 'Data Quality',
            order: 30,
            lists: [
                {
                    $id: Now.ID['nrm_list_match_pairs'],
                    title: 'Match Candidates',
                    order: 10,
                    condition: '',
                    table: 'x_snc_nrm_match_pair',
                    columns: 'run,record_a,record_b,match_score,matched_on,match_type,resolution',
                    applicabilities: [{ $id: Now.ID['nrm_list_pairs_app'], applicability: userApplicability }],
                },
                {
                    $id: Now.ID['nrm_list_dq_issues'],
                    title: 'DQ Issues',
                    order: 20,
                    condition: '',
                    table: 'x_snc_nrm_dq_issue',
                    columns: 'run,sap_record,issue_type,field_name,severity,detail,status,recommended_action',
                    applicabilities: [{ $id: Now.ID['nrm_list_dq_app'], applicability: userApplicability }],
                },
                {
                    $id: Now.ID['nrm_list_activity_log'],
                    title: 'Activity Log',
                    order: 30,
                    condition: '',
                    table: 'x_snc_nrm_ingestion_log',
                    columns: 'run,sequence,stage,action,status,detail,timestamp,duration_ms',
                    applicabilities: [{ $id: Now.ID['nrm_list_log_app'], applicability: userApplicability }],
                },
            ],
        },
    ],
});
