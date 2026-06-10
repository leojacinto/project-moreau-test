import '@servicenow/sdk/global';
import { UxListMenuConfig, Applicability } from '@servicenow/sdk/core';
import { mdmUserRole, mdmAdminRole } from '../../acls/mdm-acls.now';

export const mdmApplicability = Applicability({
    $id: Now.ID['mdm-workspace-applicability'],
    name: 'Equipment MDM Users',
    roles: [mdmUserRole, mdmAdminRole],
});

export const mdmListConfig = UxListMenuConfig({
    $id: Now.ID['mdm-workspace-list-config'],
    name: 'Equipment MDM List Configuration',
    description: 'Navigation for the Equipment Master Stewardship Console',
    categories: [
        {
            $id: Now.ID['mdm-runs-category'],
            title: 'Reconciliation Runs',
            order: 10,
            lists: [
                {
                    $id: Now.ID['mdm-runs-all'],
                    title: 'All Runs',
                    order: 10,
                    condition: '',
                    table: 'x_snc_eqmdm_run',
                    columns: 'number,source_system,state,records_ingested,duplicates_found,dq_issues_found,golden_records_created,overall_status',
                    applicabilities: [{ $id: Now.ID['mdm-runs-all-app'], applicability: mdmApplicability }],
                },
                {
                    $id: Now.ID['mdm-runs-in-progress'],
                    title: 'In Progress',
                    order: 20,
                    condition: 'overall_status=in_progress',
                    table: 'x_snc_eqmdm_run',
                    columns: 'number,state,records_ingested,duplicates_found,dq_issues_found,overall_status',
                    applicabilities: [{ $id: Now.ID['mdm-runs-inprog-app'], applicability: mdmApplicability }],
                },
                {
                    $id: Now.ID['mdm-runs-complete'],
                    title: 'Complete',
                    order: 30,
                    condition: 'overall_status=complete',
                    table: 'x_snc_eqmdm_run',
                    columns: 'number,run_date,records_ingested,duplicates_found,dq_issues_found,golden_records_created',
                    applicabilities: [{ $id: Now.ID['mdm-runs-complete-app'], applicability: mdmApplicability }],
                },
            ],
        },
        {
            $id: Now.ID['mdm-sap-category'],
            title: 'SAP Staging',
            order: 20,
            lists: [
                {
                    $id: Now.ID['mdm-sap-all'],
                    title: 'All Inbound Records',
                    order: 10,
                    condition: '',
                    table: 'x_snc_eqmdm_sap_equipment',
                    columns: 'sap_equipment_no,equipment_desc,manufacturer,serial_number,cost_centre,maintenance_plant,sap_status,ingestion_status',
                    applicabilities: [{ $id: Now.ID['mdm-sap-all-app'], applicability: mdmApplicability }],
                },
                {
                    $id: Now.ID['mdm-sap-promoted'],
                    title: 'Promoted',
                    order: 20,
                    condition: 'ingestion_status=promoted',
                    table: 'x_snc_eqmdm_sap_equipment',
                    columns: 'sap_equipment_no,equipment_desc,manufacturer,serial_number,ingestion_status,golden_record',
                    applicabilities: [{ $id: Now.ID['mdm-sap-promoted-app'], applicability: mdmApplicability }],
                },
            ],
        },
        {
            $id: Now.ID['mdm-golden-category'],
            title: 'Golden Master',
            order: 30,
            lists: [
                {
                    $id: Now.ID['mdm-golden-all'],
                    title: 'All Golden Records',
                    order: 10,
                    condition: '',
                    table: 'x_snc_eqmdm_equipment_master',
                    columns: 'number,equipment_desc,manufacturer,serial_number,maintenance_plant,cost_centre,sap_source_ids,data_quality_score,master_status',
                    applicabilities: [{ $id: Now.ID['mdm-golden-all-app'], applicability: mdmApplicability }],
                },
                {
                    $id: Now.ID['mdm-golden-published'],
                    title: 'Published',
                    order: 20,
                    condition: 'master_status=published',
                    table: 'x_snc_eqmdm_equipment_master',
                    columns: 'number,equipment_desc,manufacturer,serial_number,cost_centre,sap_source_ids,data_quality_score',
                    applicabilities: [{ $id: Now.ID['mdm-golden-pub-app'], applicability: mdmApplicability }],
                },
                {
                    $id: Now.ID['mdm-golden-held'],
                    title: 'Held',
                    order: 30,
                    condition: 'master_status=held',
                    table: 'x_snc_eqmdm_equipment_master',
                    columns: 'number,equipment_desc,manufacturer,serial_number,cost_centre,data_quality_score,survivorship_note',
                    applicabilities: [{ $id: Now.ID['mdm-golden-held-app'], applicability: mdmApplicability }],
                },
            ],
        },
        {
            $id: Now.ID['mdm-dq-category'],
            title: 'Data Quality',
            order: 40,
            lists: [
                {
                    $id: Now.ID['mdm-dq-all'],
                    title: 'All DQ Issues',
                    order: 10,
                    condition: '',
                    table: 'x_snc_eqmdm_dq_issue',
                    columns: 'sap_record,issue_type,field_name,severity,detail,status,recommended_action',
                    applicabilities: [{ $id: Now.ID['mdm-dq-all-app'], applicability: mdmApplicability }],
                },
                {
                    $id: Now.ID['mdm-dq-open'],
                    title: 'Open / Held for Steward',
                    order: 20,
                    condition: 'status=open^ORstatus=held_for_steward',
                    table: 'x_snc_eqmdm_dq_issue',
                    columns: 'sap_record,issue_type,field_name,severity,detail,status,recommended_action',
                    applicabilities: [{ $id: Now.ID['mdm-dq-open-app'], applicability: mdmApplicability }],
                },
            ],
        },
    ],
});
