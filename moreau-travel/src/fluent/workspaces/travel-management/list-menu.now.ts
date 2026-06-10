import '@servicenow/sdk/global';
import { UxListMenuConfig, Applicability, Role } from '@servicenow/sdk/core';

export const travelUserRole = Role({
    $id: Now.ID['trv-ws-user-role'],
    name: 'x_snc_moreau_trv.user',
    containsRoles: ['canvas_user'],
});

export const travelAdminRole = Role({
    $id: Now.ID['trv-ws-admin-role'],
    name: 'x_snc_moreau_trv.admin',
    containsRoles: ['canvas_admin'],
});

export const travelApplicability = Applicability({
    $id: Now.ID['trv-workspace-applicability'],
    name: 'Travel Management Users',
    roles: [travelUserRole, travelAdminRole],
});

export const travelListConfig = UxListMenuConfig({
    $id: Now.ID['trv-workspace-list-config'],
    name: 'Travel Management List Configuration',
    description: 'Navigation for the Moreau Travel Management Workspace',
    categories: [
        {
            $id: Now.ID['trv-requests-category'],
            title: 'Travel Requests',
            order: 10,
            lists: [
                {
                    $id: Now.ID['trv-requests-all'],
                    title: 'All Requests',
                    order: 10,
                    condition: '',
                    table: 'x_snc_moreau_trv_request',
                    columns: 'number,traveler,destination_city,destination_country,departure_date,return_date,estimated_cost,approval_status',
                    applicabilities: [
                        {
                            $id: Now.ID['trv-requests-all-app'],
                            applicability: travelApplicability,
                        },
                    ],
                },
                {
                    $id: Now.ID['trv-requests-pending'],
                    title: 'Pending Approval',
                    order: 20,
                    condition: 'approval_status=pending',
                    table: 'x_snc_moreau_trv_request',
                    columns: 'number,traveler,destination_city,estimated_cost,purpose,sys_created_on,approval_status',
                    applicabilities: [
                        {
                            $id: Now.ID['trv-requests-pending-app'],
                            applicability: travelApplicability,
                        },
                    ],
                },
                {
                    $id: Now.ID['trv-requests-approved'],
                    title: 'Approved',
                    order: 30,
                    condition: 'approval_status=approved',
                    table: 'x_snc_moreau_trv_request',
                    columns: 'number,traveler,destination_city,departure_date,return_date,estimated_cost',
                    applicabilities: [
                        {
                            $id: Now.ID['trv-requests-approved-app'],
                            applicability: travelApplicability,
                        },
                    ],
                },
                {
                    $id: Now.ID['trv-requests-finance'],
                    title: 'Finance Review',
                    order: 40,
                    condition: 'approval_status=finance_review',
                    table: 'x_snc_moreau_trv_request',
                    columns: 'number,traveler,destination_country,estimated_cost,actual_cost,approval_status',
                    applicabilities: [
                        {
                            $id: Now.ID['trv-requests-finance-app'],
                            applicability: travelApplicability,
                        },
                    ],
                },
            ],
        },
        {
            $id: Now.ID['trv-expenses-category'],
            title: 'Expenses',
            order: 20,
            lists: [
                {
                    $id: Now.ID['trv-expenses-all'],
                    title: 'All Expenses',
                    order: 10,
                    condition: '',
                    table: 'x_snc_moreau_trv_expense',
                    columns: 'number,travel_request,expense_type,amount,vendor,expense_date,reimbursement_status',
                    applicabilities: [
                        {
                            $id: Now.ID['trv-expenses-all-app'],
                            applicability: travelApplicability,
                        },
                    ],
                },
            ],
        },
        {
            $id: Now.ID['trv-admin-category'],
            title: 'Administration',
            order: 30,
            lists: [
                {
                    $id: Now.ID['trv-policies-list'],
                    title: 'Travel Policies',
                    order: 10,
                    condition: '',
                    table: 'x_snc_moreau_trv_policy',
                    columns: 'policy_name,applies_to_country,max_daily_hotel,max_daily_meals,requires_finance_approval_above,active',
                    applicabilities: [
                        {
                            $id: Now.ID['trv-policies-app'],
                            applicability: travelApplicability,
                        },
                    ],
                },
                {
                    $id: Now.ID['trv-delegations-list'],
                    title: 'Delegations',
                    order: 20,
                    condition: '',
                    table: 'x_snc_moreau_trv_delegation',
                    columns: 'delegator,delegate,start_date,end_date,active',
                    applicabilities: [
                        {
                            $id: Now.ID['trv-delegations-app'],
                            applicability: travelApplicability,
                        },
                    ],
                },
            ],
        },
    ],
});
