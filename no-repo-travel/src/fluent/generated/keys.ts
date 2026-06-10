import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '2baa92e271f04eb0899dfa39a428a095'
                    }
                    nrt_admin_applicability: {
                        table: 'sys_ux_applicability'
                        id: '47a133cfc4a546c59a0e6c9ab082e603'
                    }
                    nrt_applicability: {
                        table: 'sys_ux_applicability'
                        id: '86ca3f46de7d4cdba489006dba103d9b'
                    }
                    nrt_br_derive_travel_type: {
                        table: 'sys_script'
                        id: 'f9caebd15e6b401ea4162261cc98cab8'
                    }
                    nrt_br_escalate_to_finance: {
                        table: 'sys_script'
                        id: 'f119dbffe027433b9bfa2db4c26710a9'
                    }
                    nrt_br_set_department: {
                        table: 'sys_script'
                        id: 'c771bbb701dc477682d391eae8f16e0c'
                    }
                    nrt_br_validate_return_date: {
                        table: 'sys_script'
                        id: '061ab4ed38244148bdbbeeb202bdec4b'
                    }
                    nrt_cat_admin: {
                        table: 'sys_ux_list_category'
                        id: '970618b7a0a74ff3afb0366306ac3877'
                    }
                    nrt_cat_expenses: {
                        table: 'sys_ux_list_category'
                        id: 'f77468c8750d4df7bf5d0dac56480dd4'
                    }
                    nrt_cat_requests: {
                        table: 'sys_ux_list_category'
                        id: '95740fecc8184703b7d793696de2ec5f'
                    }
                    nrt_corporate_travel_agent: {
                        table: 'sn_aia_agent'
                        id: 'a19b384b654f44dcb0cdd108eaba23b6'
                    }
                    nrt_dashboard: {
                        table: 'par_dashboard'
                        id: 'a7157929a47d4a589016415b6dffe764'
                    }
                    nrt_dashboard_tab: {
                        table: 'par_dashboard_tab'
                        id: 'cccea77833fa4bcba5eca697badc0206'
                    }
                    nrt_list_all_expenses: {
                        table: 'sys_ux_list'
                        id: '35cd945c1301435c89c27c2a23d0a145'
                    }
                    nrt_list_all_req_appl: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '4a30358225aa4a768d0d348d33f6b685'
                    }
                    nrt_list_all_requests: {
                        table: 'sys_ux_list'
                        id: 'ed014a264d734df3a2cc0a615de74637'
                    }
                    nrt_list_approved: {
                        table: 'sys_ux_list'
                        id: 'a6efef17c22e4b24a85abd23106c4ec7'
                    }
                    nrt_list_approved_appl: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '31e841330fda43228ee6d93badfae5bd'
                    }
                    nrt_list_delegations: {
                        table: 'sys_ux_list'
                        id: '338ceec159b54ca79338c6907ef63250'
                    }
                    nrt_list_delegations_appl: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '813ad7c61b854351a75f89b907dec03f'
                    }
                    nrt_list_expenses_appl: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '2951c64448ac4ee5aa753777986374aa'
                    }
                    nrt_list_finance_appl: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '168390aa0327400d9975025ead513bcd'
                    }
                    nrt_list_finance_review: {
                        table: 'sys_ux_list'
                        id: '26a6c1a8b2fe4164a3c17128007929f4'
                    }
                    nrt_list_menu: {
                        table: 'sys_ux_list_menu_config'
                        id: '4f05c3a2f4034ef68a33bf85779186ae'
                    }
                    nrt_list_pending: {
                        table: 'sys_ux_list'
                        id: '8d26fc0c0c64444191d423b9a925f128'
                    }
                    nrt_list_pending_appl: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '3f5a3a9095dc4d7788554425c5e671c9'
                    }
                    nrt_list_policies: {
                        table: 'sys_ux_list'
                        id: '65378100d524417a8d7596cf7a7a7197'
                    }
                    nrt_list_policies_appl: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '7f7ab6d24668480f85e4c3238143e1bb'
                    }
                    nrt_policy_de: {
                        table: 'x_snc_nrt_travel_policy'
                        id: '196dbdaca43649b6abfc766cec0610a8'
                    }
                    nrt_policy_global: {
                        table: 'x_snc_nrt_travel_policy'
                        id: 'e8562a6c556a4b1db05a2a21eea9ba36'
                    }
                    nrt_policy_sg: {
                        table: 'x_snc_nrt_travel_policy'
                        id: 'c1953e62ada0415fb68f2cbfdd31c1b5'
                    }
                    nrt_policy_uk: {
                        table: 'x_snc_nrt_travel_policy'
                        id: 'd342c426f4d844099104fddd259049b6'
                    }
                    nrt_policy_us: {
                        table: 'x_snc_nrt_travel_policy'
                        id: '228ddf6ada4f402ab9f721801b771783'
                    }
                    nrt_req_1: {
                        table: 'x_snc_nrt_travel_request'
                        id: '4d3c85fafd0b4b948efb643c17319122'
                    }
                    nrt_req_2: {
                        table: 'x_snc_nrt_travel_request'
                        id: 'e8556745eeb84991a03fafb21b247dee'
                    }
                    nrt_req_3: {
                        table: 'x_snc_nrt_travel_request'
                        id: '7d1a15654c6348a9bcb38c5dfe1c1514'
                    }
                    nrt_req_4: {
                        table: 'x_snc_nrt_travel_request'
                        id: 'eb64e8657f53454094cb6c6ea434eb70'
                    }
                    nrt_req_5: {
                        table: 'x_snc_nrt_travel_request'
                        id: 'f6e93c1a500c4d35a435409e8824a8a3'
                    }
                    nrt_si_travel_cost_calculator: {
                        table: 'sys_script_include'
                        id: '1477d0359f534bf3bc85f113477b4917'
                    }
                    nrt_si_travel_delegation_util: {
                        table: 'sys_script_include'
                        id: 'e241d21740b34b2dbba9a624bfdef718'
                    }
                    nrt_si_travel_policy_util: {
                        table: 'sys_script_include'
                        id: '1e496bf95038443e9dba00dcb15ba73e'
                    }
                    nrt_tdel_create: {
                        table: 'sys_security_acl'
                        id: 'f0dc2e8d49944f4b821f3984edf757f4'
                    }
                    nrt_tdel_delete: {
                        table: 'sys_security_acl'
                        id: 'a1be0518e86b427fa3d922022056a08d'
                    }
                    nrt_tdel_read: {
                        table: 'sys_security_acl'
                        id: 'fa79d48eee824678ad71832748e64f89'
                    }
                    nrt_tdel_write: {
                        table: 'sys_security_acl'
                        id: 'f209655ff4484af7ab3bb9574d4a2c73'
                    }
                    nrt_texp_create: {
                        table: 'sys_security_acl'
                        id: '8ff7eaf965524b4c922e2a7570377ac7'
                    }
                    nrt_texp_delete: {
                        table: 'sys_security_acl'
                        id: '28ecf1cddb1a45518111d4fd2c9f116d'
                    }
                    nrt_texp_read: {
                        table: 'sys_security_acl'
                        id: '1062ff7d078945f7994591dc1a53158d'
                    }
                    nrt_texp_write: {
                        table: 'sys_security_acl'
                        id: 'cf93bf49f78d43e2b38cd983590dd478'
                    }
                    nrt_tpol_create: {
                        table: 'sys_security_acl'
                        id: '107b859c34b54a3983faded778685e01'
                    }
                    nrt_tpol_delete: {
                        table: 'sys_security_acl'
                        id: '7bac6c3be56c4d60b9b5f535122e0674'
                    }
                    nrt_tpol_read: {
                        table: 'sys_security_acl'
                        id: '9304f80a08284f73af153eb5f29339ac'
                    }
                    nrt_tpol_write: {
                        table: 'sys_security_acl'
                        id: 'de58654233e843a48e0df99b94d0eb6c'
                    }
                    nrt_travel_agent_acl: {
                        table: 'sys_security_acl'
                        id: 'dd8b3159c05649188a51f4931c526e9a'
                    }
                    nrt_treq_create: {
                        table: 'sys_security_acl'
                        id: '379935c1a6994c0c93c581c6c88fb835'
                    }
                    nrt_treq_delete: {
                        table: 'sys_security_acl'
                        id: '249b9c88bc924ae0a193799136fa97fc'
                    }
                    nrt_treq_read: {
                        table: 'sys_security_acl'
                        id: 'c1fa900d15474efebf51233eb4383e5f'
                    }
                    nrt_treq_write: {
                        table: 'sys_security_acl'
                        id: '99d4a35d999e4d72a30f6ad59f7ff1af'
                    }
                    nrt_widget_by_purpose: {
                        table: 'par_dashboard_widget'
                        id: '1f3771e002dc4fae9c85068d6b119bc3'
                    }
                    nrt_widget_by_status: {
                        table: 'par_dashboard_widget'
                        id: 'e0d4590ee2ad4987baa0599672837721'
                    }
                    nrt_widget_domestic_intl: {
                        table: 'par_dashboard_widget'
                        id: '1b0ae887196e4fbd8a82688405c9e688'
                    }
                    nrt_widget_pending: {
                        table: 'par_dashboard_widget'
                        id: 'a2b53a91c800445fb4095ca70e434eab'
                    }
                    nrt_widget_top_destinations: {
                        table: 'par_dashboard_widget'
                        id: 'eaf0a728d7484629b098c9b3e8659920'
                    }
                    nrt_widget_total_requests: {
                        table: 'par_dashboard_widget'
                        id: 'ed103eec103c4157adc971b22033e074'
                    }
                    nrt_workspace: {
                        table: 'sys_ux_page_registry'
                        id: 'c839b29a84b648bc952917aea4341687'
                    }
                    nrt_workspace_route: {
                        table: 'sys_security_acl'
                        id: 'd53502918b1f45e3bf7c34b7597e5bfa'
                    }
                    nrt_workspace_sys_ux_app_config_workspace: {
                        table: 'sys_ux_app_config'
                        id: '8f15838c5eb24a8fbcb3cabbe91c7a27'
                    }
                    nrt_workspace_sys_ux_app_route_home: {
                        table: 'sys_ux_app_route'
                        id: '8c1bb07cd90f46bab5d47dd5807a279d'
                    }
                    nrt_workspace_sys_ux_app_route_list: {
                        table: 'sys_ux_app_route'
                        id: 'b952f66b25d942ffafa3e5972b94096f'
                    }
                    nrt_workspace_sys_ux_app_route_record: {
                        table: 'sys_ux_app_route'
                        id: 'bd4e5329c2e6474e9ba9b20dd655f609'
                    }
                    'nrt_workspace_sys_ux_app_route_simple-list': {
                        table: 'sys_ux_app_route'
                        id: '4cb4214b206a4453bf7788c2ed930bdf'
                    }
                    nrt_workspace_sys_ux_macroponent_record: {
                        table: 'sys_ux_macroponent'
                        id: '9b01d6934e3c4d67bfbcb20cbfe20bcd'
                    }
                    nrt_workspace_sys_ux_page_property_chrome_footer: {
                        table: 'sys_ux_page_property'
                        id: '9940d473129d4720a7a1618ead8b12cb'
                    }
                    nrt_workspace_sys_ux_page_property_chrome_header: {
                        table: 'sys_ux_page_property'
                        id: '090d099ccdd24143bab6f646c67d701c'
                    }
                    nrt_workspace_sys_ux_page_property_chrome_tab: {
                        table: 'sys_ux_page_property'
                        id: '00cc7f619c54471d9af23d5a97b97aaf'
                    }
                    nrt_workspace_sys_ux_page_property_chrome_toolbar: {
                        table: 'sys_ux_page_property'
                        id: 'ab287d1485344d6d866893db5bcbc0b4'
                    }
                    nrt_workspace_sys_ux_page_property_listConfigId: {
                        table: 'sys_ux_page_property'
                        id: '1f5678dbfd554dd0bd4b1e0816b4b82c'
                    }
                    nrt_workspace_sys_ux_page_property_view: {
                        table: 'sys_ux_page_property'
                        id: 'bed2942d6c55478caef936782b325ba2'
                    }
                    nrt_workspace_sys_ux_page_property_wbApplicabilityConfigId: {
                        table: 'sys_ux_page_property'
                        id: '2d8e6f9bad8047399999faeba2a03464'
                    }
                    nrt_workspace_sys_ux_registry_m2m_category_unifiedNav: {
                        table: 'sys_ux_registry_m2m_category'
                        id: '45108ff965d146f8a6861eab9ae61ec3'
                    }
                    nrt_workspace_sys_ux_screen_home: {
                        table: 'sys_ux_screen'
                        id: 'd065abea5c5a4cb9bb916330afdb1065'
                    }
                    nrt_workspace_sys_ux_screen_list: {
                        table: 'sys_ux_screen'
                        id: '72eb7bdc04cb4cb3b5236c0c186483b7'
                    }
                    nrt_workspace_sys_ux_screen_record: {
                        table: 'sys_ux_screen'
                        id: '1e90b1fbb4674616bfae5c0cb7ddbb90'
                    }
                    'nrt_workspace_sys_ux_screen_simple-list': {
                        table: 'sys_ux_screen'
                        id: '1b827079ac0e4bc6a92f6fa5414e2322'
                    }
                    nrt_workspace_sys_ux_screen_type_home: {
                        table: 'sys_ux_screen_type'
                        id: 'dc765dc6ccef47f889cf3af230391867'
                    }
                    nrt_workspace_sys_ux_screen_type_list: {
                        table: 'sys_ux_screen_type'
                        id: '2564ac671b274716b9e787ab157330b6'
                    }
                    nrt_workspace_sys_ux_screen_type_record: {
                        table: 'sys_ux_screen_type'
                        id: '367b55a734b1449b832c1264891d5a31'
                    }
                    'nrt_workspace_sys_ux_screen_type_simple-list': {
                        table: 'sys_ux_screen_type'
                        id: '12a416a274824150a5b66ba0b142c79f'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '01d4d48d9c824a2a981d60e39233ebd0'
                    }
                    'src_server_agents_create-travel-request_js': {
                        table: 'sys_module'
                        id: '9d0ed5f1865945cd917f5e6012232e3d'
                    }
                    'src_server_agents_evaluate-travel-request_js': {
                        table: 'sys_module'
                        id: 'e4821e3e1c5a4a6bae71fb27fbbfdb9f'
                    }
                    'src_server_agents_lookup-travel-request_js': {
                        table: 'sys_module'
                        id: 'ef5c3b0898514c72bde463fa2abcaff9'
                    }
                    'src_server_business-rules_derive-travel-type_js': {
                        table: 'sys_module'
                        id: '625380a844e44d6695c377756d770b56'
                    }
                    'src_server_business-rules_escalate-to-finance_js': {
                        table: 'sys_module'
                        id: '74b57a4d8fa743668afb2fc02d8c98b4'
                    }
                    'src_server_business-rules_set-department_js': {
                        table: 'sys_module'
                        id: 'cbf58f484b2146ef96919e328f4a1bcc'
                    }
                    'src_server_business-rules_validate-return-date_js': {
                        table: 'sys_module'
                        id: '52ffdebefb4b45b5b030730e43865582'
                    }
                    'src_server_script-includes_TravelCostCalculator_js': {
                        table: 'sys_module'
                        id: '9221786ccfe94a4c9b3d053123be2193'
                    }
                    'src_server_script-includes_TravelDelegationUtil_js': {
                        table: 'sys_module'
                        id: '5c16f73f7b5548a9842aeef81fd1b08f'
                    }
                    'src_server_script-includes_TravelPolicyUtil_js': {
                        table: 'sys_module'
                        id: '0d740a430af94d2baffea8b576336074'
                    }
                }
                composite: [
                    {
                        table: 'sys_choice'
                        id: '00924b77c46c45f795398f4892089a2b'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'travel_type'
                            value: 'international'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '01b717d0491645b5822522f33deabbb3'
                        key: {
                            name: 'x_snc_nrt_travel_expense'
                            element: 'vendor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '04413e06d2eb47759bbf7369cf2747e0'
                        key: {
                            sys_security_acl: '8ff7eaf965524b4c922e2a7570377ac7'
                            sys_user_role: {
                                id: '1738b22f432946b48e32a2c4671ff807'
                                key: {
                                    name: 'x_snc_nrt.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '05b11a2586d24625a440b1eb502ed56d'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'requires_visa'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '05ccfb26b34d4130875c0af9cd970419'
                        key: {
                            name: 'x_snc_nrt_travel_expense'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '063791c8fbf24401bda74f27e0c29d14'
                        key: {
                            name: 'x_snc_nrt_travel_expense'
                            element: 'amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '0709fa26ba3d424e94afd7020202d603'
                        key: {
                            role: {
                                id: '2d64804756e744a09eccedd84432b136'
                                key: {
                                    name: 'x_snc_nrt.admin'
                                }
                            }
                            contains: {
                                id: '598f182e4b734667bb0c9055fcca315e'
                                key: {
                                    name: 'x_snc_nrt.finance'
                                }
                            }
                        }
                    },
                    {
                        table: 'sn_aia_tool'
                        id: '081952ccf401489787a05bed3aa8b757'
                        key: {
                            name: 'Look Up Travel Request'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0ace8365a5a84ef1acd7773050c5b40b'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'travel_type'
                            value: 'domestic'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0afea544e27f4c8a822ba0ae8e36dce2'
                        key: {
                            name: 'x_snc_nrt_travel_expense'
                            element: 'expense_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '0f7835fe409442498be95fccc2c73436'
                        key: {
                            name: 'x_snc_nrt_travel_delegation'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0fc03df54e704b919e865395188d76a3'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'destination_city'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '10873d7296364203990286ac00106bce'
                        key: {
                            name: 'x_snc_nrt_travel_delegation'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_agent_access_role_configuration'
                        id: '140ef104d9b94a29a7aafb016d23254a'
                        key: {
                            agent: 'a19b384b654f44dcb0cdd108eaba23b6'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1413ce6c8b59479b93cd91e80dc6b803'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'purpose'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '1738b22f432946b48e32a2c4671ff807'
                        key: {
                            name: 'x_snc_nrt.user'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '18ce396ee681495ba1cc148464f8f353'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'department'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '19d97baaf9b64686b80c989a6f4f41a7'
                        key: {
                            name: 'x_snc_nrt_travel_policy'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '1a98800d275b4ba09c4b41159351b114'
                        key: {
                            name: 'x_snc_nrt_travel_policy'
                            element: 'max_flight_class'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1bd0c764d8274591bc46d9a7dd08031e'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'traveler'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1c766d5c62d54ac39398d6e8e52cb893'
                        key: {
                            name: 'x_snc_nrt_travel_policy'
                            element: 'requires_finance_approval_above'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '234545ff21094679ac424a6fe3c5957a'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'departure_date'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '238180d5e1d848a9b169d98008eb0deb'
                        key: {
                            sys_security_acl: 'a1be0518e86b427fa3d922022056a08d'
                            sys_user_role: {
                                id: '2d64804756e744a09eccedd84432b136'
                                key: {
                                    name: 'x_snc_nrt.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '24926bfce33b455da01af77f17300a3a'
                        key: {
                            name: 'x_snc_nrt.approver'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '24f5ac4a707445408e2116a34e86f4d5'
                        key: {
                            name: 'x_snc_nrt_travel_expense'
                            element: 'expense_type'
                            value: 'hotel'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '26a88f9189574b9e985da1fb5020d47d'
                        key: {
                            name: 'x_snc_nrt_travel_policy'
                            element: 'max_flight_class'
                            value: 'business'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '2d64804756e744a09eccedd84432b136'
                        key: {
                            name: 'x_snc_nrt.admin'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '308e14211e6c487aac3b92f39b21dd37'
                        key: {
                            name: 'x_snc_nrt_travel_policy'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '326d145a94cd4287971ed0c21bd6e6c4'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '33208950676d4bb0acf23effd85a5f41'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'approval_status'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '33934b509c6c49b8a9760141b5c9c060'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'purpose'
                            value: 'conference'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3593d8bb5abc44269b928002fa562e4a'
                        key: {
                            name: 'x_snc_nrt_travel_expense'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3d28527e2f834cc5b68a0a9bbe025e07'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'purpose'
                            value: 'training'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '3e73bf8a84f54c769d40d0d358491005'
                        key: {
                            name: 'x_snc_nrt_travel_expense'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3f92aa3fcab541c989553d1faea0e8eb'
                        key: {
                            sys_security_acl: 'c1fa900d15474efebf51233eb4383e5f'
                            sys_user_role: {
                                id: '1738b22f432946b48e32a2c4671ff807'
                                key: {
                                    name: 'x_snc_nrt.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '486bb18c99b64d4eb71f2afe8206e3c1'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'destination_country'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '4ab558872b80466e86a8f7dbfd480e76'
                        key: {
                            role: {
                                id: '24926bfce33b455da01af77f17300a3a'
                                key: {
                                    name: 'x_snc_nrt.approver'
                                }
                            }
                            contains: {
                                id: '1738b22f432946b48e32a2c4671ff807'
                                key: {
                                    name: 'x_snc_nrt.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4acfb8240c274d2ebe79189e3194add6'
                        key: {
                            name: 'x_snc_nrt_travel_policy'
                            element: 'max_flight_class'
                            value: 'economy'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4aebf053b77b478d961b75cbf10f4f76'
                        key: {
                            name: 'x_snc_nrt_travel_expense'
                            element: 'expense_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'par_dashboard_visibility'
                        id: '4cd433100fec4923a7bfe53e6b6c4800'
                        key: {
                            dashboard: 'a7157929a47d4a589016415b6dffe764'
                            experience: 'c839b29a84b648bc952917aea4341687'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4cf807dad6194062a003c937c7b5229e'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'estimated_cost'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '4ef21b4b77394a599152e1c7bde03ecb'
                        key: {
                            name: 'x_snc_nrt_travel_expense'
                            element: 'expense_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '51f1425f5e3c4032bc04890e6ce0b7c6'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'approval_status'
                            value: 'rejected'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '522faf55f99447a88f6c55345efe5df9'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'actual_cost'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '540f629bb66e4cd98839de4b02fffccc'
                        key: {
                            name: 'x_snc_nrt_travel_delegation'
                            element: 'delegate'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '556e9a500e294aeba8684f72960ddb30'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'approval_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '577162e4f87b444084b4c63549bb6c51'
                        key: {
                            name: 'x_snc_nrt_travel_policy'
                            element: 'max_flight_class'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '577efad6fa7e441e971f2be01cbaa0a1'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'travel_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5843f3ff47884934b670141a18f40c0b'
                        key: {
                            name: 'x_snc_nrt_travel_policy'
                            element: 'max_daily_meals'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '598f182e4b734667bb0c9055fcca315e'
                        key: {
                            name: 'x_snc_nrt.finance'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5cf2d5ea016d4551920ef0c52a934262'
                        key: {
                            name: 'x_snc_nrt_travel_expense'
                            element: 'travel_request'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5d2ef7e58a254f3bba7a5e0faa72b678'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'destination_city'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5efafe8c71b741cc86c1e95e57a98f67'
                        key: {
                            name: 'x_snc_nrt_travel_expense'
                            element: 'expense_type'
                            value: 'visa'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '600d668ba2734a40bd682bb9f0a5ac84'
                        key: {
                            name: 'x_snc_nrt_travel_expense'
                            element: 'reimbursement_status'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6229ea037a6b4e1e8ac62a360b6d187d'
                        key: {
                            name: 'x_snc_nrt_travel_expense'
                            element: 'travel_request'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '63a4801837e94addb4664dfdafed742f'
                        key: {
                            role: {
                                id: '598f182e4b734667bb0c9055fcca315e'
                                key: {
                                    name: 'x_snc_nrt.finance'
                                }
                            }
                            contains: {
                                id: '1738b22f432946b48e32a2c4671ff807'
                                key: {
                                    name: 'x_snc_nrt.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '68bc31db76b24555b76746bc59a04a94'
                        key: {
                            sys_security_acl: '107b859c34b54a3983faded778685e01'
                            sys_user_role: {
                                id: '2d64804756e744a09eccedd84432b136'
                                key: {
                                    name: 'x_snc_nrt.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6c631244749945f4a7e15fefee33b81d'
                        key: {
                            name: 'x_snc_nrt_travel_expense'
                            element: 'amount'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6cfca9f8f8d94636aa937e37bb5cb083'
                        key: {
                            name: 'x_snc_nrt_travel_policy'
                            element: 'applies_to_country'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6f538992ba5946a69b118fa3372e0025'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'purpose'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '71701e9f7d79401db31525562b628d98'
                        key: {
                            name: 'x_snc_nrt_travel_delegation'
                            element: 'start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '739197db700a45698858776f16f72325'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'purpose'
                            value: 'client_meeting'
                        }
                    },
                    {
                        table: 'sn_aia_agent_config'
                        id: '74b16032b74b4ac4b6be5f432d1b9082'
                        key: {
                            agent: 'a19b384b654f44dcb0cdd108eaba23b6'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '757085cad3f84a8d876b11012013c483'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'travel_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '76f61f49a51749f5b89429fe25bd3192'
                        key: {
                            name: 'x_snc_nrt_travel_policy'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '770aa361e5624ff8a2ea5c715793634b'
                        key: {
                            name: 'x_snc_nrt_travel_delegation'
                            element: 'end_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '78854bedd70542eab9463dbb912acc5e'
                        key: {
                            name: 'x_snc_nrt_travel_policy'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '78eda00d6d11466581300ce1983b74d1'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7a21870f346a42589e3fd9560181e402'
                        key: {
                            sys_security_acl: '1062ff7d078945f7994591dc1a53158d'
                            sys_user_role: {
                                id: '1738b22f432946b48e32a2c4671ff807'
                                key: {
                                    name: 'x_snc_nrt.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7b6021e8f4004c3f9f1dd9fe0bbe24ff'
                        key: {
                            name: 'x_snc_nrt_travel_expense'
                            element: 'expense_type'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7cd1ad4fc2bb4677b8d5fed31c50e772'
                        key: {
                            sys_security_acl: '28ecf1cddb1a45518111d4fd2c9f116d'
                            sys_user_role: {
                                id: '2d64804756e744a09eccedd84432b136'
                                key: {
                                    name: 'x_snc_nrt.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7d012de17c0243939bae8f53438c52c1'
                        key: {
                            name: 'x_snc_nrt_travel_expense'
                            element: 'reimbursement_status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7d1a700c13e1446a8c31337845f96f5c'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'approval_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7e0560b97479441fba111bcee7460c2d'
                        key: {
                            name: 'x_snc_nrt_travel_policy'
                            element: 'policy_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sn_aia_agent_tool_m2m'
                        id: '7e8ff508f0fa42629e1b7b8ac40d59bc'
                        key: {
                            agent: 'a19b384b654f44dcb0cdd108eaba23b6'
                            tool: 'be816eaf413448b485f9d49df2624e32'
                        }
                    },
                    {
                        table: 'sys_agent_access_role_mapping'
                        id: '81c6639fb26b4fc589278f926494ded9'
                        key: {
                            agent_access_config: {
                                id: '140ef104d9b94a29a7aafb016d23254a'
                                key: {
                                    agent: 'a19b384b654f44dcb0cdd108eaba23b6'
                                }
                            }
                            role: {
                                id: '2d64804756e744a09eccedd84432b136'
                                key: {
                                    name: 'x_snc_nrt.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '865001ba7d4447b88465d5297f96dab8'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'approval_status'
                            value: 'finance_review'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8796335269a74746ba6e7bd244e83e49'
                        key: {
                            name: 'x_snc_nrt_travel_policy'
                            element: 'max_daily_hotel'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '887bb18b390d4542ac7894f5608b9585'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'departure_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sn_aia_tool'
                        id: '8d5bcee4864742eb815f4b3c157b2069'
                        key: {
                            name: 'Evaluate Travel Request'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8d805fb70000492bb03bf80740aa82f1'
                        key: {
                            name: 'x_snc_nrt_travel_policy'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8e9b6dd1158948ed9e0fde7fc51bedc5'
                        key: {
                            name: 'x_snc_nrt_travel_delegation'
                            element: 'delegator'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8ed0fcd4c7884473befd268f3578afde'
                        key: {
                            name: 'x_snc_nrt_travel_expense'
                            element: 'expense_type'
                            value: 'transport'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '903ea0502d394a3a8e206e2a65757ba4'
                        key: {
                            name: 'x_snc_nrt_travel_expense'
                            element: 'expense_type'
                            value: 'meals'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '938fe2e07c62420e987c12059c3639ad'
                        key: {
                            name: 'x_snc_nrt_travel_delegation'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '93bfe75593724fd9aee934324bd49d52'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'return_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '977e55af377a44b28955290455a05d0c'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'approval_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '98e61e79935e42f489ef1bd0a635e394'
                        key: {
                            name: 'x_snc_nrt_travel_policy'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '99f8f4ec9b2e490b98f7e29f001772b0'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'return_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9ae45c0220ff485c9886d2fc429e7a07'
                        key: {
                            name: 'x_snc_nrt_travel_policy'
                            element: 'requires_finance_approval_above'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a14123eb63474db1b15f6af836ff216d'
                        key: {
                            name: 'x_snc_nrt_travel_expense'
                            element: 'expense_type'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sn_aia_agent_tool_m2m'
                        id: 'a30e50ab87b1463597bbec876994b575'
                        key: {
                            agent: 'a19b384b654f44dcb0cdd108eaba23b6'
                            tool: '8d5bcee4864742eb815f4b3c157b2069'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a3d553519b37498282bda70241b54452'
                        key: {
                            name: 'x_snc_nrt_travel_policy'
                            element: 'max_daily_hotel'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a854865a18654cce88698be754b9d21a'
                        key: {
                            name: 'x_snc_nrt_travel_expense'
                            element: 'vendor'
                        }
                    },
                    {
                        table: 'sys_agent_access_role_mapping'
                        id: 'aa9dd8b12b9547fc961c57abc66f00f5'
                        key: {
                            agent_access_config: {
                                id: '140ef104d9b94a29a7aafb016d23254a'
                                key: {
                                    agent: 'a19b384b654f44dcb0cdd108eaba23b6'
                                }
                            }
                            role: {
                                id: '1738b22f432946b48e32a2c4671ff807'
                                key: {
                                    name: 'x_snc_nrt.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'adc0b59cbde740829d75376968e68844'
                        key: {
                            name: 'x_snc_nrt_travel_expense'
                            element: 'reimbursement_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sn_aia_agent_tool_m2m'
                        id: 'ae9c8fa5aa3e489eabce018fbc97f146'
                        key: {
                            agent: 'a19b384b654f44dcb0cdd108eaba23b6'
                            tool: '081952ccf401489787a05bed3aa8b757'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b55bdfbfa29e44c2bd6c9ce5ce61ba70'
                        key: {
                            name: 'x_snc_nrt_travel_delegation'
                            element: 'end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b6ffb9232a674d7fa9eb1fa12ae457e6'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'par_dashboard_canvas'
                        id: 'b73fd113cfbd41059e1fa69c963b9604'
                        key: {
                            dashboard: 'a7157929a47d4a589016415b6dffe764'
                            dashboard_tab: 'cccea77833fa4bcba5eca697badc0206'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b8911f068c624b68866519935779b4f8'
                        key: {
                            sys_security_acl: '9304f80a08284f73af153eb5f29339ac'
                            sys_user_role: {
                                id: '1738b22f432946b48e32a2c4671ff807'
                                key: {
                                    name: 'x_snc_nrt.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b8fbe62cb85e4e26b8530f1b729f11aa'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'destination_country'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b906e81385284ee6be593262bc6d56f8'
                        key: {
                            name: 'x_snc_nrt_travel_policy'
                            element: 'max_daily_meals'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bc3ae00b49f1479a898fa1e806f77e71'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'actual_cost'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sn_aia_tool'
                        id: 'be816eaf413448b485f9d49df2624e32'
                        key: {
                            name: 'Create Travel Request'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bed28e5686c845bf8c256d06993d0ddb'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'approval_status'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bf5316b1612b4f938cd04507a4fe5c59'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c315c644afad42efae0a2e6d86d24161'
                        key: {
                            sys_security_acl: 'cf93bf49f78d43e2b38cd983590dd478'
                            sys_user_role: {
                                id: '598f182e4b734667bb0c9055fcca315e'
                                key: {
                                    name: 'x_snc_nrt.finance'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c391b54b5bec4d86a97f9c5ddab9e454'
                        key: {
                            sys_security_acl: 'f0dc2e8d49944f4b821f3984edf757f4'
                            sys_user_role: {
                                id: '2d64804756e744a09eccedd84432b136'
                                key: {
                                    name: 'x_snc_nrt.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c9b488784013428ea8161f54a55d1140'
                        key: {
                            name: 'x_snc_nrt_travel_expense'
                            element: 'expense_date'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'ca74c95496414b0f96ec0f45c94440f9'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'cb2eedff29af44b6abd9344ff4e5eec5'
                        key: {
                            sys_security_acl: '249b9c88bc924ae0a193799136fa97fc'
                            sys_user_role: {
                                id: '2d64804756e744a09eccedd84432b136'
                                key: {
                                    name: 'x_snc_nrt.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sn_aia_version'
                        id: 'cc695ca6106848ffbf81542e74120547'
                        key: {
                            target_id: 'a19b384b654f44dcb0cdd108eaba23b6'
                            version_name: 'V1'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'cd1cccc6059f41b6988034ccd92a12e9'
                        key: {
                            role: {
                                id: '1738b22f432946b48e32a2c4671ff807'
                                key: {
                                    name: 'x_snc_nrt.user'
                                }
                            }
                            contains: {
                                id: 'f57f21eb396d4b48ab977244507dabb1'
                                key: {
                                    name: 'canvas_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cea4d4c1199d49ec8838bc62a8a28f09'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'traveler'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'cec639123220415d925111b72eb314e9'
                        key: {
                            sys_security_acl: '99d4a35d999e4d72a30f6ad59f7ff1af'
                            sys_user_role: {
                                id: '24926bfce33b455da01af77f17300a3a'
                                key: {
                                    name: 'x_snc_nrt.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'cefcd03ff3c94b45aa08f9dca404a841'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'cfa959dbb62e4fa4a6cdea8fe68b89f4'
                        key: {
                            name: 'x_snc_nrt_travel_expense'
                            element: 'reimbursement_status'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'd83738db1cd94686b640b04bfcf9182c'
                        key: {
                            name: 'x_snc_nrt_travel_expense'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'd9904574f7c1490185e8ba9b13b82a8a'
                        key: {
                            name: 'x_snc_nrt_travel_delegation'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'e1c19c5394e94cc7a9f029c2307ef9c8'
                        key: {
                            role: {
                                id: '2d64804756e744a09eccedd84432b136'
                                key: {
                                    name: 'x_snc_nrt.admin'
                                }
                            }
                            contains: {
                                id: '24926bfce33b455da01af77f17300a3a'
                                key: {
                                    name: 'x_snc_nrt.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_agent_access_role_mapping'
                        id: 'e2d037b74acf4747abb8f21bd6d6c200'
                        key: {
                            agent_access_config: {
                                id: '140ef104d9b94a29a7aafb016d23254a'
                                key: {
                                    agent: 'a19b384b654f44dcb0cdd108eaba23b6'
                                }
                            }
                            role: {
                                id: '24926bfce33b455da01af77f17300a3a'
                                key: {
                                    name: 'x_snc_nrt.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e2dd878d6ed545698eecd3117fa5682a'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'purpose'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e60c74c54a0142c0b5a06b77a96fd263'
                        key: {
                            name: 'x_snc_nrt_travel_expense'
                            element: 'reimbursement_status'
                            value: 'paid'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e66281dddd1f46e090e6e25eb1f00b59'
                        key: {
                            name: 'x_snc_nrt_travel_delegation'
                            element: 'delegator'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e78b373836624aa1b1dd512de81d7410'
                        key: {
                            sys_security_acl: 'd53502918b1f45e3bf7c34b7597e5bfa'
                            sys_user_role: {
                                id: '1738b22f432946b48e32a2c4671ff807'
                                key: {
                                    name: 'x_snc_nrt.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e9951f4be0d04e48a6e9b642910b90cd'
                        key: {
                            sys_security_acl: 'fa79d48eee824678ad71832748e64f89'
                            sys_user_role: {
                                id: '24926bfce33b455da01af77f17300a3a'
                                key: {
                                    name: 'x_snc_nrt.approver'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e9cc7ae4e6c048ada5e23293c294563c'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'department'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eab40720b1f84156b0c2465c5e01af2f'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'estimated_cost'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'eb40e6fcc61147849f6ec084d6b72550'
                        key: {
                            name: 'x_snc_nrt_travel_expense'
                            element: 'reimbursement_status'
                            value: 'rejected'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'edf72b9a7b034da7a9d13bbf5191d58b'
                        key: {
                            name: 'x_snc_nrt_travel_delegation'
                            element: 'delegate'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ee62cc094713427480167c7a5ece441e'
                        key: {
                            name: 'x_snc_nrt_travel_expense'
                            element: 'expense_type'
                            value: 'airfare'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ee7b78badea44f0f9f986af2192e8058'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'purpose'
                            value: 'internal'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ef9da2633cbf46f08dc2fb19e5d7b775'
                        key: {
                            sys_security_acl: '379935c1a6994c0c93c581c6c88fb835'
                            sys_user_role: {
                                id: '1738b22f432946b48e32a2c4671ff807'
                                key: {
                                    name: 'x_snc_nrt.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'effd5ecf804343279998eb9df4626bbf'
                        key: {
                            name: 'x_snc_nrt_travel_policy'
                            element: 'max_flight_class'
                            value: 'premium_economy'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'f24068aeabaf4bf7a298b8a194e7e5a3'
                        key: {
                            category: 'x_snc_nrt_travel_request'
                            prefix: 'TREQ'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f2441be98407476fb73ede3a23584bca'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'requires_visa'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f28f478b74104ceda9e9316ce90b7158'
                        key: {
                            name: 'x_snc_nrt_travel_policy'
                            element: 'policy_name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f3448b13858f4dd6a730de447b85d06b'
                        key: {
                            name: 'x_snc_nrt_travel_expense'
                            element: 'reimbursement_status'
                            value: 'submitted'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f617b7e2e3384e8f952ff5ecd097c280'
                        key: {
                            name: 'x_snc_nrt_travel_policy'
                            element: 'max_flight_class'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'f6a54e8cb751457b860c6a8599dc958e'
                        key: {
                            role: {
                                id: '2d64804756e744a09eccedd84432b136'
                                key: {
                                    name: 'x_snc_nrt.admin'
                                }
                            }
                            contains: {
                                id: '3e597b4fec65406791cb2caba4fdbc9d'
                                key: {
                                    name: 'canvas_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f73f780e17c1498f9e8fd79a0680b0d3'
                        key: {
                            name: 'x_snc_nrt_travel_delegation'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'f7fc6dd0fe8748b6a55d55001b6ba4ff'
                        key: {
                            category: 'x_snc_nrt_travel_expense'
                            prefix: 'TEXP'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f87e846a1f5a42c2a2a9083e1fc3b8b8'
                        key: {
                            name: 'x_snc_nrt_travel_policy'
                            element: 'applies_to_country'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f9251d8244bd4065a7fd0ac05a20eccb'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'purpose'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f9429547c6c244178efbaf8013bba81a'
                        key: {
                            name: 'x_snc_nrt_travel_delegation'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f9f96e519539408a8b98fb82ee85e5ff'
                        key: {
                            name: 'x_snc_nrt_travel_delegation'
                            element: 'start_date'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fb23f311fec94abda80ac57bce1d0c57'
                        key: {
                            sys_security_acl: 'f209655ff4484af7ab3bb9574d4a2c73'
                            sys_user_role: {
                                id: '2d64804756e744a09eccedd84432b136'
                                key: {
                                    name: 'x_snc_nrt.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fbd2bdbbf1724e0bb4c97e4dccd73e1d'
                        key: {
                            sys_security_acl: '7bac6c3be56c4d60b9b5f535122e0674'
                            sys_user_role: {
                                id: '2d64804756e744a09eccedd84432b136'
                                key: {
                                    name: 'x_snc_nrt.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fc112282442346908cf0d9c9dc43d223'
                        key: {
                            name: 'x_snc_nrt_travel_request'
                            element: 'travel_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fded28a61ab84995b131bf232452ba66'
                        key: {
                            sys_security_acl: 'de58654233e843a48e0df99b94d0eb6c'
                            sys_user_role: {
                                id: '598f182e4b734667bb0c9055fcca315e'
                                key: {
                                    name: 'x_snc_nrt.finance'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_agent_access_role_mapping'
                        id: 'ffe481192a47447fbdda9ed5c897bfa9'
                        key: {
                            agent_access_config: {
                                id: '140ef104d9b94a29a7aafb016d23254a'
                                key: {
                                    agent: 'a19b384b654f44dcb0cdd108eaba23b6'
                                }
                            }
                            role: {
                                id: '598f182e4b734667bb0c9055fcca315e'
                                key: {
                                    name: 'x_snc_nrt.finance'
                                }
                            }
                        }
                    },
                ]
            }
        }
    }
}
