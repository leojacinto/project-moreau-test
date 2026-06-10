import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '89c6740fb6fb4c49ad4cc6a9b1b07afc'
                    }
                    'br-derive-travel-type': {
                        table: 'sys_script'
                        id: '51b668a69f694855a2b7b3d76ec39536'
                    }
                    'br-escalate-finance': {
                        table: 'sys_script'
                        id: '21d19a59fcb1459b85e91010770a6b7a'
                    }
                    'br-set-department': {
                        table: 'sys_script'
                        id: '7b52422d3ca148d5885367382b38f251'
                    }
                    'br-validate-dates': {
                        table: 'sys_script'
                        id: 'ce3e3d892cf84c24bcec0c8040e494c7'
                    }
                    'moreau-travel-agent-acl': {
                        table: 'sys_security_acl'
                        id: 'b3a85113ab1a44dea09d79b2c7da4277'
                    }
                    'moreau-travel-approval-agent': {
                        table: 'sn_aia_agent'
                        id: 'a230be83282e47c69df3058d4b73d28a'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '28c28b7ed8d54eeeb3f67e56bedc1889'
                    }
                    'si-travel-cost-calculator': {
                        table: 'sys_script_include'
                        id: '63ffdcc36b2448d1ace60cf9e110b8d8'
                    }
                    'si-travel-delegation-util': {
                        table: 'sys_script_include'
                        id: '21592d5e464a436a82ec2f4474efc4ca'
                    }
                    'si-travel-policy-util': {
                        table: 'sys_script_include'
                        id: 'c98fead3cc074708a8110e7c6c3f02b0'
                    }
                    'src_server_agents_create-travel-request_js': {
                        table: 'sys_module'
                        id: 'ca3b7ff944b64906a1cace96f3f5273f'
                    }
                    'src_server_agents_evaluate-travel-request_js': {
                        table: 'sys_module'
                        id: '58d043bf17694733bb13501b778ab015'
                    }
                    'src_server_agents_lookup-travel-request_js': {
                        table: 'sys_module'
                        id: 'deed5f9c875c4614a4bcb5386ae986f0'
                    }
                    'src_server_business-rules_derive-travel-type_js': {
                        table: 'sys_module'
                        id: 'dc45dcfa2fe94836ba14166cdcedecd7'
                    }
                    'src_server_business-rules_escalate-to-finance_js': {
                        table: 'sys_module'
                        id: 'e75c141ecc524017b014f537081082f6'
                    }
                    'src_server_business-rules_set-department_js': {
                        table: 'sys_module'
                        id: '00bc0e9e3ef0448dbc6ee33303de9c1c'
                    }
                    'src_server_business-rules_validate-dates_js': {
                        table: 'sys_module'
                        id: '7ce764c47f2248048dcf06471f269657'
                    }
                    'src_server_script-includes_travel-cost-calculator_js': {
                        table: 'sys_module'
                        id: '03f8843f54e342058afdfa29a4aa3315'
                    }
                    'src_server_script-includes_travel-delegation-util_js': {
                        table: 'sys_module'
                        id: '8b74fcfe961d433b8d4b6ffbad0792c6'
                    }
                    'src_server_script-includes_travel-policy-util_js': {
                        table: 'sys_module'
                        id: 'd9d568d4f9094cfdb0f57bc21fd25123'
                    }
                    'trv-admin-category': {
                        table: 'sys_ux_list_category'
                        id: 'c541b167d25e4737b00955e8adac6703'
                    }
                    'trv-dashboard-overview-tab': {
                        table: 'par_dashboard_tab'
                        id: '58178ba981cd44d4bdbc5ecf6c9fdd36'
                    }
                    'trv-delegation-read': {
                        table: 'sys_security_acl'
                        id: '36df19e65b1d40b889aef9159257dc86'
                    }
                    'trv-delegation-write': {
                        table: 'sys_security_acl'
                        id: '7145731c6d6740ddba9eb3e6b2376df0'
                    }
                    'trv-delegations-app': {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '1b83bb54d4154db3b69fbd5776878cbd'
                    }
                    'trv-delegations-list': {
                        table: 'sys_ux_list'
                        id: '6cb0ab15d27a46cca178a52119f34bfb'
                    }
                    'trv-expense-create': {
                        table: 'sys_security_acl'
                        id: '692226cd580d4472be4a48f7a6ed396c'
                    }
                    'trv-expense-read': {
                        table: 'sys_security_acl'
                        id: '4570ea7897cd40feb28a0d0e14a09eb8'
                    }
                    'trv-expense-write': {
                        table: 'sys_security_acl'
                        id: '0a434dffa3e84c17ac47591c338169fd'
                    }
                    'trv-expenses-all': {
                        table: 'sys_ux_list'
                        id: '2f605549770d4e3f8a9a8790ea47841f'
                    }
                    'trv-expenses-all-app': {
                        table: 'sys_ux_applicability_m2m_list'
                        id: 'ea4d338f71674c0788f759aa50b425d1'
                    }
                    'trv-expenses-category': {
                        table: 'sys_ux_list_category'
                        id: 'cf40469e2e994276b39845183d5813d3'
                    }
                    'trv-management-dashboard': {
                        table: 'par_dashboard'
                        id: '71b4d470390e435e9e8d480065292e00'
                    }
                    'trv-management-workspace': {
                        table: 'sys_ux_page_registry'
                        id: '6680c0b0786c4385adf75e6834064942'
                    }
                    'trv-management-workspace_sys_ux_app_config_workspace': {
                        table: 'sys_ux_app_config'
                        id: '68fae08b4c0a49ad801894945b5fd42e'
                    }
                    'trv-management-workspace_sys_ux_app_route_home': {
                        table: 'sys_ux_app_route'
                        id: '83499ceddd524b14855f390a3e021b44'
                    }
                    'trv-management-workspace_sys_ux_app_route_list': {
                        table: 'sys_ux_app_route'
                        id: 'b6eb15d13bd1448e805ed9b92f0c6ed5'
                    }
                    'trv-management-workspace_sys_ux_app_route_record': {
                        table: 'sys_ux_app_route'
                        id: 'e39dd1c4ca584348b7153234cb08cffb'
                    }
                    'trv-management-workspace_sys_ux_app_route_simple-list': {
                        table: 'sys_ux_app_route'
                        id: 'e44f03862044434c8bef5ddb288467cf'
                    }
                    'trv-management-workspace_sys_ux_macroponent_record': {
                        table: 'sys_ux_macroponent'
                        id: 'da22bdc471f545c6bf6d1ebe506555be'
                    }
                    'trv-management-workspace_sys_ux_page_property_chrome_footer': {
                        table: 'sys_ux_page_property'
                        id: '08c15be2a76e4cd794ac1a6f24f7cfff'
                    }
                    'trv-management-workspace_sys_ux_page_property_chrome_header': {
                        table: 'sys_ux_page_property'
                        id: '182f6edb9d254522bc89cc416650940b'
                    }
                    'trv-management-workspace_sys_ux_page_property_chrome_tab': {
                        table: 'sys_ux_page_property'
                        id: '2a8aff33b8374f6099e06feed76189ba'
                    }
                    'trv-management-workspace_sys_ux_page_property_chrome_toolbar': {
                        table: 'sys_ux_page_property'
                        id: 'ed69ff4785fa42c29c7d106a159647d4'
                    }
                    'trv-management-workspace_sys_ux_page_property_listConfigId': {
                        table: 'sys_ux_page_property'
                        id: '951bb8b938bb4d9d9fc5afe3df0f2de0'
                    }
                    'trv-management-workspace_sys_ux_page_property_view': {
                        table: 'sys_ux_page_property'
                        id: 'b6e435102c104f3a9819837416a061b5'
                    }
                    'trv-management-workspace_sys_ux_page_property_wbApplicabilityConfigId': {
                        table: 'sys_ux_page_property'
                        id: '1926bec22ddf4fb3804cee89b20f0d69'
                    }
                    'trv-management-workspace_sys_ux_registry_m2m_category_unifiedNav': {
                        table: 'sys_ux_registry_m2m_category'
                        id: '72c95530a92d41b29bdb16930e6ba50c'
                    }
                    'trv-management-workspace_sys_ux_screen_home': {
                        table: 'sys_ux_screen'
                        id: '2fd167fbe6b04630a7c64b0d806d6723'
                    }
                    'trv-management-workspace_sys_ux_screen_list': {
                        table: 'sys_ux_screen'
                        id: '69c26234ccd147a4a4eb526eda5e582b'
                    }
                    'trv-management-workspace_sys_ux_screen_record': {
                        table: 'sys_ux_screen'
                        id: '968a9b8d43444a06802eb8cbef7de245'
                    }
                    'trv-management-workspace_sys_ux_screen_simple-list': {
                        table: 'sys_ux_screen'
                        id: '9eba6c27b96746b3892df54e80ad75ae'
                    }
                    'trv-management-workspace_sys_ux_screen_type_home': {
                        table: 'sys_ux_screen_type'
                        id: '427e27db43c340c983f3afa00d06fe75'
                    }
                    'trv-management-workspace_sys_ux_screen_type_list': {
                        table: 'sys_ux_screen_type'
                        id: 'e4b9a896804f4d5d8383c9e35b46236b'
                    }
                    'trv-management-workspace_sys_ux_screen_type_record': {
                        table: 'sys_ux_screen_type'
                        id: '9fe3235a649b40f0bbf0766a84dad762'
                    }
                    'trv-management-workspace_sys_ux_screen_type_simple-list': {
                        table: 'sys_ux_screen_type'
                        id: '0dda5e69a24146d4bd787720aef48678'
                    }
                    'trv-policies-app': {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '031f1efe2e1d4e1bbfc05349f8279b26'
                    }
                    'trv-policies-list': {
                        table: 'sys_ux_list'
                        id: '94b133bbf3ce4a4498a71d843b95360f'
                    }
                    'trv-policy-australia': {
                        table: 'x_snc_moreau_trv_policy'
                        id: 'baa47cfaef9a41598ca3862fe62d69f8'
                    }
                    'trv-policy-global': {
                        table: 'x_snc_moreau_trv_policy'
                        id: '913e8c4fa8ed4ff89131099aabcd8c45'
                    }
                    'trv-policy-japan': {
                        table: 'x_snc_moreau_trv_policy'
                        id: '89b8f7bdd2b54bd48a1e67e4b9c04ee2'
                    }
                    'trv-policy-read': {
                        table: 'sys_security_acl'
                        id: '66ce0da4449644529ec4fd1f317e21f2'
                    }
                    'trv-policy-uk': {
                        table: 'x_snc_moreau_trv_policy'
                        id: 'c94087a367eb46cfa32695ab218933aa'
                    }
                    'trv-policy-usa': {
                        table: 'x_snc_moreau_trv_policy'
                        id: '356b5cd3349244979a80a79d5698ffbd'
                    }
                    'trv-policy-write': {
                        table: 'sys_security_acl'
                        id: 'f51078d0782145dbb5f617124c7413b4'
                    }
                    'trv-req-london': {
                        table: 'x_snc_moreau_trv_request'
                        id: '79df45374d6d44169d1bcd1f026cca05'
                    }
                    'trv-req-melbourne': {
                        table: 'x_snc_moreau_trv_request'
                        id: '0d52767d2845458294dae1053fe9aa2c'
                    }
                    'trv-req-sf': {
                        table: 'x_snc_moreau_trv_request'
                        id: '53c3dbf2cd914080a1943472e065ea0c'
                    }
                    'trv-req-sydney': {
                        table: 'x_snc_moreau_trv_request'
                        id: '0861d2ce8ae7453eb5ad2fe771a8a602'
                    }
                    'trv-req-tokyo': {
                        table: 'x_snc_moreau_trv_request'
                        id: 'baa36bd0313347c98f605e2831518eb5'
                    }
                    'trv-request-create': {
                        table: 'sys_security_acl'
                        id: 'd471b554287344d896712b932aeff69e'
                    }
                    'trv-request-delete': {
                        table: 'sys_security_acl'
                        id: '41d75b3463b14739bd674d842be5efe3'
                    }
                    'trv-request-read': {
                        table: 'sys_security_acl'
                        id: '2786d3eac2ac4914a1a65446d7d9e6e4'
                    }
                    'trv-request-write': {
                        table: 'sys_security_acl'
                        id: '89cd9ced6a814a369a75d20caa372d2f'
                    }
                    'trv-requests-all': {
                        table: 'sys_ux_list'
                        id: '7bb10c80cd26464dadd8e89603230a7d'
                    }
                    'trv-requests-all-app': {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '3393117d6c8d494eaaadc22a20758f28'
                    }
                    'trv-requests-approved': {
                        table: 'sys_ux_list'
                        id: '6d7348e918b941f2bf75a8ccf62ca8c2'
                    }
                    'trv-requests-approved-app': {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '1a3521ddc6aa4ae98e30e166acebc72d'
                    }
                    'trv-requests-category': {
                        table: 'sys_ux_list_category'
                        id: '41d6f97213f04c728b72a1a36de13766'
                    }
                    'trv-requests-finance': {
                        table: 'sys_ux_list'
                        id: '46d5072c568446fc9051f2b9c4f4ebfc'
                    }
                    'trv-requests-finance-app': {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '325e481e222d4e71af5a5351febd8491'
                    }
                    'trv-requests-pending': {
                        table: 'sys_ux_list'
                        id: '369ca41f824447aaa218c8ea5007942c'
                    }
                    'trv-requests-pending-app': {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '3105afc1c74a47f9a918ebc3f91c37bf'
                    }
                    'trv-widget-by-destination': {
                        table: 'par_dashboard_widget'
                        id: 'cc43c5339e3845aa856d3022d74152df'
                    }
                    'trv-widget-by-purpose': {
                        table: 'par_dashboard_widget'
                        id: 'bbe98c85aa1c4cfcba760e39f9e40e7a'
                    }
                    'trv-widget-by-status': {
                        table: 'par_dashboard_widget'
                        id: '0cda6d25cd444dc195289526bc7b2b67'
                    }
                    'trv-widget-by-type': {
                        table: 'par_dashboard_widget'
                        id: '6afa3554abc549cda2434723e4bef1a1'
                    }
                    'trv-widget-pending-count': {
                        table: 'par_dashboard_widget'
                        id: '651562f345d647ffa500bfb54fa1c7af'
                    }
                    'trv-widget-total-requests': {
                        table: 'par_dashboard_widget'
                        id: '3c3e485df87d41109597b7854ec1cdf8'
                    }
                    'trv-workspace-applicability': {
                        table: 'sys_ux_applicability'
                        id: '034e1aa2389e4811a18cbf09122d3942'
                    }
                    'trv-workspace-list-config': {
                        table: 'sys_ux_list_menu_config'
                        id: '8cbab0c37f2a43d7987f002f64882a3e'
                    }
                    'trv-workspace-route-acl': {
                        table: 'sys_security_acl'
                        id: '651538dc66cc4655836c070951de1cb7'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '0056c8c5ac0a4fcb8c5136883d6847cd'
                        key: {
                            name: 'x_snc_moreau_trv_expense'
                            element: 'amount'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '007f016a6ebc4a23a972f025732bb2e8'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'return_date'
                        }
                    },
                    {
                        table: 'par_dashboard_visibility'
                        id: '0536cbb2b9a3418ba2f57db3dda07fb5'
                        key: {
                            dashboard: '71b4d470390e435e9e8d480065292e00'
                            experience: '6680c0b0786c4385adf75e6834064942'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '06c4ae724fa44f75b5f8f218c5560920'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'estimated_cost'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '06cd37be432049cdbb3286ac9336a6b4'
                        key: {
                            name: 'x_snc_moreau_trv_expense'
                            element: 'expense_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '082d7161d60d4e678f6ffa7356b9c346'
                        key: {
                            name: 'x_snc_moreau_trv_expense'
                            element: 'reimbursement_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0ae56a0f66f04bd38fc5a6a8929e0372'
                        key: {
                            name: 'x_snc_moreau_trv_policy'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0bcca7640a9a4e0482ad8ee2c59e593d'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'approval_status'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0ee494e23ceb46b6bf3cecbc10dcf42c'
                        key: {
                            sys_security_acl: 'f51078d0782145dbb5f617124c7413b4'
                            sys_user_role: {
                                id: '7496cd5247ae421bb9d66b047f7c764f'
                                key: {
                                    name: 'x_snc_moreau_trv.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0ffefa4caa0e4b1e928b069daaec1ab2'
                        key: {
                            name: 'x_snc_moreau_trv_delegation'
                            element: 'start_date'
                        }
                    },
                    {
                        table: 'sn_aia_agent_config'
                        id: '17643deb87cd436084aa3ef43da38b3e'
                        key: {
                            agent: 'a230be83282e47c69df3058d4b73d28a'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '19b8dd36f36d42bda14efbd1eef5bf5b'
                        key: {
                            name: 'x_snc_moreau_trv_expense'
                            element: 'expense_type'
                            value: 'visa'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2358edc0e14f45c0828fb01f08683ca6'
                        key: {
                            name: 'x_snc_moreau_trv_expense'
                            element: 'expense_type'
                            value: 'hotel'
                        }
                    },
                    {
                        table: 'sn_aia_agent_tool_m2m'
                        id: '27dd3521efbc4e78b61c5fe370693386'
                        key: {
                            agent: 'a230be83282e47c69df3058d4b73d28a'
                            tool: 'ae6a2860cf664dc28b6a9f9537618dc4'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '29f9e2453e6b4fe9937c836a02e59b75'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'travel_type'
                            value: 'domestic'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2a95f288b5da45d68a2d916e5690ea84'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'purpose'
                            value: 'client_meeting'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2b307db6311443cf97abcdec7d5ae58c'
                        key: {
                            name: 'x_snc_moreau_trv_policy'
                            element: 'max_daily_meals'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2d8b868d8873447d8aa7d261f5a63b4c'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'traveler'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2e10d1e515084d1490568f6caf043ff3'
                        key: {
                            name: 'x_snc_moreau_trv_policy'
                            element: 'max_daily_hotel'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '30e9f7e6dfe6480d94c6729650f952c9'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'travel_type'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3223a349b24d46218f129bbe8993e6b0'
                        key: {
                            sys_security_acl: '651538dc66cc4655836c070951de1cb7'
                            sys_user_role: {
                                id: '6d7d642536e84e6eb0fb4709b5ce4d22'
                                key: {
                                    name: 'x_snc_moreau_trv.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '325100e0a87d45b79377f0a9e67ad430'
                        key: {
                            sys_security_acl: '89cd9ced6a814a369a75d20caa372d2f'
                            sys_user_role: {
                                id: '2216035379bb4a55a8aed08563730752'
                                key: {
                                    name: 'x_snc_moreau_trv.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3e2bb4aad0ab4753bcc935281ffb2e02'
                        key: {
                            name: 'x_snc_moreau_trv_policy'
                            element: 'max_flight_class'
                            value: 'business'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3ecd0e05e6af461cb7469d729a92e416'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'travel_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3fb09da3ac41429d89a8166eaed21ccd'
                        key: {
                            name: 'x_snc_moreau_trv_policy'
                            element: 'applies_to_country'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4216b0a4b06249e68cfca67509f12c53'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '435d4c7c6f674967b0e599da680943f8'
                        key: {
                            name: 'x_snc_moreau_trv_delegation'
                            element: 'start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4652f2c3e66343c8b7333ed7be2809e1'
                        key: {
                            sys_security_acl: 'd471b554287344d896712b932aeff69e'
                            sys_user_role: {
                                id: '05f1484ade414c3c9fc5bd778592bb27'
                                key: {
                                    name: 'x_snc_moreau_trv.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '47b67cd0ec1f483f8d3c8c8e0f6a7893'
                        key: {
                            name: 'x_snc_moreau_trv_delegation'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '47e323bfdf9d4c59831b8ec1ba989360'
                        key: {
                            name: 'x_snc_moreau_trv_expense'
                            element: 'expense_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '48cc26260df2427d8d7d2817ce3251b5'
                        key: {
                            name: 'x_snc_moreau_trv_expense'
                            element: 'reimbursement_status'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '48cc352dfa53498090af41b97002177a'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'destination_city'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '49343f5e76654d6ea986fe6435ed0e4d'
                        key: {
                            sys_security_acl: '66ce0da4449644529ec4fd1f317e21f2'
                            sys_user_role: {
                                id: '04325c6d7ab24e8197303eebf848cd47'
                                key: {
                                    name: 'x_snc_moreau_trv.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '49853c71d529426d94a9386045acb383'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'requires_visa'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4b215095de1a449ebb631e1c95590dd6'
                        key: {
                            name: 'x_snc_moreau_trv_policy'
                            element: 'max_flight_class'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '4c0a3db1f17e41f98a8b4431295c8d82'
                        key: {
                            name: 'x_snc_moreau_trv_expense'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4ceae4eefe86470ebd5e6f7c9b2ce25f'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4eba5caaf05442efa4fc020f47fd795b'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'departure_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4fb0ea2a16d24799b7392ed8dd0cc211'
                        key: {
                            name: 'x_snc_moreau_trv_policy'
                            element: 'policy_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '500ae9aef7694989b804e05d2d6a59bf'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '50cac825eac14a58a339d16178b59e40'
                        key: {
                            role: {
                                id: '6d7d642536e84e6eb0fb4709b5ce4d22'
                                key: {
                                    name: 'x_snc_moreau_trv.admin'
                                }
                            }
                            contains: {
                                id: '8dc16ae7b7834ec3bef94dd61f396270'
                                key: {
                                    name: 'canvas_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '50f12d96da62481faadbde5c2972c353'
                        key: {
                            sys_security_acl: '0a434dffa3e84c17ac47591c338169fd'
                            sys_user_role: {
                                id: 'b1b547c6b2f44db09dcef91450b394bf'
                                key: {
                                    name: 'x_snc_moreau_trv.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5377dd620668423bbd4f6bafaf738db4'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'travel_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '560514dc3eb84c2788d22a181d2a1b05'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'approval_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '56fcd47cf97d48b6a0abdef1895a364b'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'actual_cost'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '571307b0b61648819f61dc6374f63451'
                        key: {
                            name: 'x_snc_moreau_trv_delegation'
                            element: 'delegate'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '576ba5a34a9a40439cb939168fd42476'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'department'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '57c3216fda174171926854bfdd7101b1'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'requires_visa'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5d40bd584c4e4592acf280dd82b5ade0'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'department'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5fdd6a56515349469f8e5984c8d909d8'
                        key: {
                            sys_security_acl: '2786d3eac2ac4914a1a65446d7d9e6e4'
                            sys_user_role: {
                                id: '4a914375876a4a4583107b81f50e714d'
                                key: {
                                    name: 'x_snc_moreau_trv.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sn_aia_agent_tool_m2m'
                        id: '63fed969c9dd4cf4b9bb2990bdab30f7'
                        key: {
                            agent: 'a230be83282e47c69df3058d4b73d28a'
                            tool: 'aedf12a34919417d8017e143765e034a'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '664364eea6a8499ab1116598418f06b3'
                        key: {
                            sys_security_acl: '4570ea7897cd40feb28a0d0e14a09eb8'
                            sys_user_role: {
                                id: 'c41a523164824784a1fc7f0bb4187971'
                                key: {
                                    name: 'x_snc_moreau_trv.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6885f053cd0c44849ac24bdb6eb3a61f'
                        key: {
                            name: 'x_snc_moreau_trv_delegation'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sn_aia_tool'
                        id: '6b00e07ed8fe44c2b85dee9ff6d86bd7'
                        key: {
                            name: 'Create Travel Request'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '6bca9b2e028548e0b1015ad47043d0d4'
                        key: {
                            name: 'x_snc_moreau_trv.user'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '6d7d642536e84e6eb0fb4709b5ce4d22'
                        key: {
                            name: 'x_snc_moreau_trv.admin'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6ece7d3ef8b2441fa4ec9e38e5ed8996'
                        key: {
                            name: 'x_snc_moreau_trv_expense'
                            element: 'expense_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '76278a4a280f444b82f103acfad885e1'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'destination_country'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '778bedab6bd64a87b0c0caea757d671b'
                        key: {
                            sys_security_acl: '651538dc66cc4655836c070951de1cb7'
                            sys_user_role: {
                                id: '6bca9b2e028548e0b1015ad47043d0d4'
                                key: {
                                    name: 'x_snc_moreau_trv.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '78f5e1a5ef46477894c218953d82d55b'
                        key: {
                            name: 'x_snc_moreau_trv_policy'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7a58076888574448b8706d540faa1bb4'
                        key: {
                            name: 'x_snc_moreau_trv_policy'
                            element: 'max_daily_hotel'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7d8569a55ad24cd9a376320ff35b8831'
                        key: {
                            name: 'x_snc_moreau_trv_policy'
                            element: 'requires_finance_approval_above'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7df6c933a5a64132a556f8688705ec54'
                        key: {
                            name: 'x_snc_moreau_trv_expense'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '7fd55a26b9724dc2845f935f8b7013fd'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8599e1f192404b9eab11e1d2f871a261'
                        key: {
                            name: 'x_snc_moreau_trv_policy'
                            element: 'applies_to_country'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '86aefa8286c644af93eded0e171375a0'
                        key: {
                            name: 'x_snc_moreau_trv_policy'
                            element: 'max_daily_meals'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '871cd2a2456448cda47e43e223b668bf'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'traveler'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '872e62db2af44667bf65a36874963e7e'
                        key: {
                            name: 'x_snc_moreau_trv_delegation'
                            element: 'delegate'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8bd04fe5556a4641beafd206942983f0'
                        key: {
                            sys_security_acl: '41d75b3463b14739bd674d842be5efe3'
                            sys_user_role: {
                                id: 'aaf00cc8bdac4625af60928a0da7d315'
                                key: {
                                    name: 'x_snc_moreau_trv.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8cfb6a0be6c84060bd4bca5846ac5cdd'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'purpose'
                            value: 'conference'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '92db1c08acc447dcad14942c9761eeee'
                        key: {
                            name: 'x_snc_moreau_trv_policy'
                            element: 'requires_finance_approval_above'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '953e429976454d528fc51521f7aa86f2'
                        key: {
                            sys_security_acl: '692226cd580d4472be4a48f7a6ed396c'
                            sys_user_role: {
                                id: '86bbb17c0d354bc9b05f84ecb8bcb7ea'
                                key: {
                                    name: 'x_snc_moreau_trv.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '969c4616c4724790ad244475d643069b'
                        key: {
                            name: 'x_snc_moreau_trv_policy'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '9766cfebf0b441569a1637dd4c7b36bf'
                        key: {
                            name: 'x_snc_moreau_trv_expense'
                            element: 'reimbursement_status'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '988430e9844e48a38f8995a0233a6a28'
                        key: {
                            name: 'x_snc_moreau_trv_expense'
                            element: 'expense_type'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '9b8bbc84eb0944f3844cc07896f8d7d6'
                        key: {
                            category: 'x_snc_moreau_trv_request'
                            prefix: 'TREQ'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9cf4c2dc66ee43fbbe39c8177b531cb0'
                        key: {
                            name: 'x_snc_moreau_trv_expense'
                            element: 'amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9db3f74e65ee4f0b873fc0c5996f3e5a'
                        key: {
                            name: 'x_snc_moreau_trv_expense'
                            element: 'expense_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a000cb82438a485491ba5c3bc360a469'
                        key: {
                            name: 'x_snc_moreau_trv_expense'
                            element: 'expense_type'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a1fa234ad83c471c8b5d562f1eb49781'
                        key: {
                            name: 'x_snc_moreau_trv_expense'
                            element: 'reimbursement_status'
                            value: 'paid'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a4267011165740a2bb8351c4ab0edc76'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'purpose'
                            value: 'internal'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a4784d7e42d243aa82586e4e42bae876'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'destination_city'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'a67cdda3853843ef97dc763b36cce1cb'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'purpose'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'a732262020184b1d94583be2aefdb3cf'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'approval_status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a7432957371949888b650965bf6b9fff'
                        key: {
                            name: 'x_snc_moreau_trv_expense'
                            element: 'travel_request'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a77dda18d48046fc83fe6e8e153050f7'
                        key: {
                            name: 'x_snc_moreau_trv_policy'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'a9c2c085a58d435ebd6010bc78e5e339'
                        key: {
                            role: {
                                id: '6bca9b2e028548e0b1015ad47043d0d4'
                                key: {
                                    name: 'x_snc_moreau_trv.user'
                                }
                            }
                            contains: {
                                id: '1953e04a80ae41ef864b761f00f5b031'
                                key: {
                                    name: 'canvas_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ac503ace6fc44178bc7a78e6bcdafd32'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'travel_type'
                            value: 'international'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ae3d4846656340249f8a78d566bc8d98'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'approval_status'
                            value: 'finance_review'
                        }
                    },
                    {
                        table: 'sn_aia_tool'
                        id: 'ae6a2860cf664dc28b6a9f9537618dc4'
                        key: {
                            name: 'Evaluate Travel Request'
                        }
                    },
                    {
                        table: 'sn_aia_tool'
                        id: 'aedf12a34919417d8017e143765e034a'
                        key: {
                            name: 'Look Up Travel Request'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b071752222104a508e73a23899c5a1f8'
                        key: {
                            name: 'x_snc_moreau_trv_expense'
                            element: 'reimbursement_status'
                            value: 'submitted'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b154260b32af4b32bf61fe388f33a19c'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'return_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'b1843abd319b47f29d7c0c8a305b19b5'
                        key: {
                            name: 'x_snc_moreau_trv_expense'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b2839258be534d6e9d9b76a2315e9032'
                        key: {
                            name: 'x_snc_moreau_trv_delegation'
                            element: 'delegator'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'b345f43ce6cc4415b857d7fe0e33d2ec'
                        key: {
                            name: 'x_snc_moreau_trv_delegation'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b35db64178034437977e6b3a98166776'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'purpose'
                            value: 'training'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bb0073ddd68c454fbe3b68fcd897e69e'
                        key: {
                            name: 'x_snc_moreau_trv_expense'
                            element: 'vendor'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bb8674cff5534377a2ac2d1ae4286d78'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bbe41fa5d3cf4fbcbc9468d06789ae6c'
                        key: {
                            name: 'x_snc_moreau_trv_expense'
                            element: 'reimbursement_status'
                            value: 'rejected'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bce188e8c981428dbf54bb09016c9ded'
                        key: {
                            name: 'x_snc_moreau_trv_expense'
                            element: 'reimbursement_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bd3f2df0f06c4d8990464e5032257904'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'approval_status'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c0b9e8a3286e48af8651adfffeaa98ff'
                        key: {
                            name: 'x_snc_moreau_trv_policy'
                            element: 'max_flight_class'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c0bdbea14e8d4820b7410c8db226e0c3'
                        key: {
                            name: 'x_snc_moreau_trv_expense'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c186fb1008334b20a671071bc6283b4d'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'purpose'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c3880e2fd67b44a9b93ce25581b70f6f'
                        key: {
                            name: 'x_snc_moreau_trv_policy'
                            element: 'max_flight_class'
                            value: 'economy'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c453bead6b4145238444f3a4d980cff2'
                        key: {
                            sys_security_acl: '36df19e65b1d40b889aef9159257dc86'
                            sys_user_role: {
                                id: '64813483c653474c9ec489446dd6ee75'
                                key: {
                                    name: 'x_snc_moreau_trv.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c607bdc21fc74c9fbf7f185fe02474fe'
                        key: {
                            name: 'x_snc_moreau_trv_delegation'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'c9603778fef747d2925ddcc90375abfe'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ca1c6c9f0475411b9472d9c410541366'
                        key: {
                            name: 'x_snc_moreau_trv_delegation'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd62129a8169444e59c152d70042d3a1a'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'actual_cost'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd6f66c11b91a416087caaae9f516b0fa'
                        key: {
                            name: 'x_snc_moreau_trv_delegation'
                            element: 'end_date'
                        }
                    },
                    {
                        table: 'par_dashboard_canvas'
                        id: 'd7c3344eefbc4d409474a8d1187a5ce5'
                        key: {
                            dashboard: '71b4d470390e435e9e8d480065292e00'
                            dashboard_tab: '58178ba981cd44d4bdbc5ecf6c9fdd36'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'da9a61c479c74872acb74a410d60b764'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'purpose'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'db0bfcf62a58404aa15aab56bcc7d33e'
                        key: {
                            name: 'x_snc_moreau_trv_policy'
                            element: 'max_flight_class'
                            value: 'premium_economy'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'df9205d5f59444d9aa00ea6e24ca2e7e'
                        key: {
                            name: 'x_snc_moreau_trv_policy'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e0ce32eb46d147b79372e6981783a0b6'
                        key: {
                            name: 'x_snc_moreau_trv_expense'
                            element: 'expense_type'
                            value: 'airfare'
                        }
                    },
                    {
                        table: 'sn_aia_version'
                        id: 'e253701eee7846749a09c8d2238d323c'
                        key: {
                            target_id: 'a230be83282e47c69df3058d4b73d28a'
                            version_name: 'v1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e3759bd7ebb64531bac170be5950e9b4'
                        key: {
                            name: 'x_snc_moreau_trv_delegation'
                            element: 'end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e646414555bf49779bccc05fdd7552f3'
                        key: {
                            name: 'x_snc_moreau_trv_policy'
                            element: 'policy_name'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e6c50888905d4a078a7229d1af632e41'
                        key: {
                            name: 'x_snc_moreau_trv_policy'
                            element: 'max_flight_class'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ea8405f4fa054531bdccec455081c91d'
                        key: {
                            name: 'x_snc_moreau_trv_expense'
                            element: 'vendor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'eacb3cbb72d54cf3892cb3177d492234'
                        key: {
                            category: 'x_snc_moreau_trv_expense'
                            prefix: 'TEXP'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ec80ce55476f4de2a370f07b59d69bb3'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'estimated_cost'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ed59dce4628c4a72b5038754d3c74858'
                        key: {
                            name: 'x_snc_moreau_trv_delegation'
                            element: 'delegator'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f11faf3c937447629aafbe80e096b522'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'destination_country'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f2ded7d549c649b189b8ad76b5a3bf2b'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'approval_status'
                            value: 'rejected'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f3331087639649a1855668a6ea926c8e'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'approval_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f49c838f10ad4273a9eb8eafe0f318b4'
                        key: {
                            name: 'x_snc_moreau_trv_expense'
                            element: 'expense_type'
                            value: 'meals'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f507567a4ecc403ea5615619f5e2ce22'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'departure_date'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f51d4f7e6eb343e4b10532a40dc9adff'
                        key: {
                            sys_security_acl: 'b3a85113ab1a44dea09d79b2c7da4277'
                            sys_user_role: 'b0593b350a0a0aa7001d689e4542dc28'
                        }
                    },
                    {
                        table: 'sn_aia_agent_tool_m2m'
                        id: 'f6beeca48cb747e08bac050404491901'
                        key: {
                            agent: 'a230be83282e47c69df3058d4b73d28a'
                            tool: '6b00e07ed8fe44c2b85dee9ff6d86bd7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f9886c80c49f42bfb55b5dffe33bd201'
                        key: {
                            name: 'x_snc_moreau_trv_request'
                            element: 'purpose'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fa27e31673724ffaaac1120bf6bfc598'
                        key: {
                            sys_security_acl: '7145731c6d6740ddba9eb3e6b2376df0'
                            sys_user_role: {
                                id: '7986e317c721451591080bf00a6598dd'
                                key: {
                                    name: 'x_snc_moreau_trv.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'fa90e33b45cf4c08b50e62cbdee8b292'
                        key: {
                            name: 'x_snc_moreau_trv_delegation'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'fc9648041bea4692a3970b166e0b95b0'
                        key: {
                            name: 'x_snc_moreau_trv_policy'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fdef3d52598545ada49e947b60d44f07'
                        key: {
                            name: 'x_snc_moreau_trv_expense'
                            element: 'expense_type'
                            value: 'transport'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fec2db07646a4cafbc59ad3315ef2afa'
                        key: {
                            name: 'x_snc_moreau_trv_expense'
                            element: 'travel_request'
                        }
                    },
                ]
            }
        }
    }
}
