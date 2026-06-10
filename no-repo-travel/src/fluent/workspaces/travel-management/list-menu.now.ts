import '@servicenow/sdk/global'
import { UxListMenuConfig, Applicability } from '@servicenow/sdk/core'
import { nrtUser, nrtAdmin } from '../../roles/roles.now'

export const nrtApplicability = Applicability({
    $id: Now.ID['nrt_applicability'],
    name: 'NRT Users',
    roles: [nrtUser],
})

export const nrtAdminApplicability = Applicability({
    $id: Now.ID['nrt_admin_applicability'],
    name: 'NRT Admins',
    roles: [nrtAdmin],
})

export const nrtListMenu = UxListMenuConfig({
    $id: Now.ID['nrt_list_menu'],
    name: 'No Repo Travel List Configuration',
    active: true,
    categories: [
        {
            $id: Now.ID['nrt_cat_requests'],
            title: 'Travel Requests',
            order: 10,
            lists: [
                {
                    $id: Now.ID['nrt_list_all_requests'],
                    title: 'All Requests',
                    order: 10,
                    table: 'x_snc_nrt_travel_request',
                    condition: '',
                    columns: 'number,traveler,destination_country,departure_date,return_date,estimated_cost,approval_status',
                    applicabilities: [{ $id: Now.ID['nrt_list_all_req_appl'], applicability: nrtApplicability }],
                },
                {
                    $id: Now.ID['nrt_list_pending'],
                    title: 'Pending Approval',
                    order: 20,
                    table: 'x_snc_nrt_travel_request',
                    condition: 'approval_status=pending^EQ',
                    columns: 'number,traveler,destination_country,departure_date,estimated_cost,purpose',
                    applicabilities: [{ $id: Now.ID['nrt_list_pending_appl'], applicability: nrtApplicability }],
                },
                {
                    $id: Now.ID['nrt_list_approved'],
                    title: 'Approved',
                    order: 30,
                    table: 'x_snc_nrt_travel_request',
                    condition: 'approval_status=approved^EQ',
                    columns: 'number,traveler,destination_country,departure_date,return_date,estimated_cost',
                    applicabilities: [{ $id: Now.ID['nrt_list_approved_appl'], applicability: nrtApplicability }],
                },
                {
                    $id: Now.ID['nrt_list_finance_review'],
                    title: 'Finance Review',
                    order: 40,
                    table: 'x_snc_nrt_travel_request',
                    condition: 'approval_status=finance_review^EQ',
                    columns: 'number,traveler,destination_country,estimated_cost,purpose,department',
                    applicabilities: [{ $id: Now.ID['nrt_list_finance_appl'], applicability: nrtApplicability }],
                },
            ],
        },
        {
            $id: Now.ID['nrt_cat_expenses'],
            title: 'Expenses',
            order: 20,
            lists: [
                {
                    $id: Now.ID['nrt_list_all_expenses'],
                    title: 'All Expenses',
                    order: 10,
                    table: 'x_snc_nrt_travel_expense',
                    condition: '',
                    columns: 'number,travel_request,expense_type,amount,expense_date,reimbursement_status',
                    applicabilities: [{ $id: Now.ID['nrt_list_expenses_appl'], applicability: nrtApplicability }],
                },
            ],
        },
        {
            $id: Now.ID['nrt_cat_admin'],
            title: 'Administration',
            order: 30,
            lists: [
                {
                    $id: Now.ID['nrt_list_policies'],
                    title: 'Travel Policies',
                    order: 10,
                    table: 'x_snc_nrt_travel_policy',
                    condition: '',
                    columns: 'policy_name,applies_to_country,max_daily_hotel,max_daily_meals,max_flight_class,requires_finance_approval_above,active',
                    applicabilities: [{ $id: Now.ID['nrt_list_policies_appl'], applicability: nrtAdminApplicability }],
                },
                {
                    $id: Now.ID['nrt_list_delegations'],
                    title: 'Delegations',
                    order: 20,
                    table: 'x_snc_nrt_travel_delegation',
                    condition: '',
                    columns: 'delegator,delegate,start_date,end_date,active',
                    applicabilities: [{ $id: Now.ID['nrt_list_delegations_appl'], applicability: nrtAdminApplicability }],
                },
            ],
        },
    ],
})
