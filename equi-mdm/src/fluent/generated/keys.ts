import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '0121e8ca11b24123bc49acbb4ab37f18'
                    }
                    nrm_action_ingest: {
                        table: 'sys_ui_action'
                        id: '87029512e19d4679b78dfb5657472a2e'
                    }
                    nrm_action_match: {
                        table: 'sys_ui_action'
                        id: 'bb576d9e5e6a4b5c82ec6764ce91bac1'
                    }
                    nrm_action_publish: {
                        table: 'sys_ui_action'
                        id: '1b8451d9759e48898dab48dbb58c1bea'
                    }
                    nrm_action_resolve: {
                        table: 'sys_ui_action'
                        id: '169b42189f27418187b501f31398fe1b'
                    }
                    nrm_app_user: {
                        table: 'sys_ux_applicability'
                        id: '65d00c0bc9e94e1fbb0ad43129444415'
                    }
                    nrm_cat_equipment: {
                        table: 'sys_ux_list_category'
                        id: 'ca3a37551f9a408e9c3492c7139737f6'
                    }
                    nrm_cat_quality: {
                        table: 'sys_ux_list_category'
                        id: '2ca71d4c43bd40a792ff1dc58e17a509'
                    }
                    nrm_cat_runs: {
                        table: 'sys_ux_list_category'
                        id: 'e1f4b1e7b1aa4b08b438df8a96a9d936'
                    }
                    nrm_dashboard: {
                        table: 'par_dashboard'
                        id: 'd58c479d7621419fa0f96107ff2c656b'
                    }
                    nrm_dq_create: {
                        table: 'sys_security_acl'
                        id: 'a636fe31280941e086be87a7f8047079'
                    }
                    nrm_dq_delete: {
                        table: 'sys_security_acl'
                        id: 'd541ed1f57254590a8eedd6b4657d354'
                    }
                    nrm_dq_read: {
                        table: 'sys_security_acl'
                        id: 'e33019242adf47018cd0279a715fbf44'
                    }
                    nrm_dq_write: {
                        table: 'sys_security_acl'
                        id: 'b57bbfe9115f4fb5896a66af0c61455c'
                    }
                    nrm_flow_ingest: {
                        table: 'sys_hub_flow'
                        id: '866a5f812f53427f8639dc622f43a481'
                    }
                    nrm_flow_match: {
                        table: 'sys_hub_flow'
                        id: '6c0a8c7f11e44c8da09736b6579d3bfe'
                    }
                    nrm_flow_publish: {
                        table: 'sys_hub_flow'
                        id: '268aa16da13b499f8ad4f2fb45f2b565'
                    }
                    nrm_flow_resolve: {
                        table: 'sys_hub_flow'
                        id: '572d1da34eee4ffc94a588ff037ee135'
                    }
                    nrm_ingest_log1: {
                        table: 'sys_hub_sub_flow_instance_v2'
                        id: 'def61fa8ca6d487b9400bd346ac4d5a1'
                    }
                    nrm_ingest_log2: {
                        table: 'sys_hub_sub_flow_instance_v2'
                        id: '1569079f9872480eb1ebd94eaa55f51b'
                    }
                    nrm_ingest_log3: {
                        table: 'sys_hub_sub_flow_instance_v2'
                        id: '5d369c0bb28d4dd9a5106906e58b9714'
                    }
                    nrm_ingest_log4: {
                        table: 'sys_hub_sub_flow_instance_v2'
                        id: '9438306d6c2a4544a7aa49985b5a5bf8'
                    }
                    nrm_ingest_log5: {
                        table: 'sys_hub_sub_flow_instance_v2'
                        id: '95f03e390f7449638438f540ba87bc91'
                    }
                    nrm_ingest_reset: {
                        table: 'sys_hub_action_instance_v2'
                        id: '3717a305fb0c43f8bbc26593809b14c2'
                    }
                    nrm_ingest_trigger: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: '330c6e418593479d95d3150a5317b5e6'
                    }
                    nrm_ingest_update_run: {
                        table: 'sys_hub_action_instance_v2'
                        id: '934cfe1a52124b08b813cf1e8d654e79'
                    }
                    nrm_ingest_update_staging: {
                        table: 'sys_hub_action_instance_v2'
                        id: '04590e1781e94657be9e129d0d6d6f7e'
                    }
                    nrm_list_activity_log: {
                        table: 'sys_ux_list'
                        id: '338d21ced688489f99d112fd0fe55b2e'
                    }
                    nrm_list_dq_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '97c286a86f9546688e25c2813e62cc5c'
                    }
                    nrm_list_dq_issues: {
                        table: 'sys_ux_list'
                        id: 'dfcee24786014fb28e0ebe2e2736c990'
                    }
                    nrm_list_log_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '6ee184c17fe3471fb60fc33052c45f8d'
                    }
                    nrm_list_master: {
                        table: 'sys_ux_list'
                        id: 'c9a98c71ecef43ab85336717c7d21d43'
                    }
                    nrm_list_master_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '6ff909fc9f48456db831803eb1a3a783'
                    }
                    nrm_list_match_pairs: {
                        table: 'sys_ux_list'
                        id: '8cff3f04de914e91a312a5174db09e3d'
                    }
                    nrm_list_menu: {
                        table: 'sys_ux_list_menu_config'
                        id: '4eede6ca879646ac876ae46ae42e5b4a'
                    }
                    nrm_list_pairs_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: 'a6afc8850599499f841e011cae5a1754'
                    }
                    nrm_list_runs_all: {
                        table: 'sys_ux_list'
                        id: 'a9e69a4e80e34b668c36a4fc495f9239'
                    }
                    nrm_list_runs_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: 'bded219974194321973f0d34686bfc2f'
                    }
                    nrm_list_staging: {
                        table: 'sys_ux_list'
                        id: 'b2cfc82eddd045419aad356374555fa4'
                    }
                    nrm_list_staging_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '9522dc32f7d74afc8ae1df1a6672db17'
                    }
                    nrm_log_create: {
                        table: 'sys_security_acl'
                        id: 'cfe5bab4e2854063b0e66440f12911de'
                    }
                    nrm_log_delete: {
                        table: 'sys_security_acl'
                        id: '23eff172bf7c4c7daf9b9c7a9943f954'
                    }
                    nrm_log_read: {
                        table: 'sys_security_acl'
                        id: '998b3cdfb63d4b1e91233356a0917774'
                    }
                    nrm_log_step_create: {
                        table: 'sys_hub_action_instance_v2'
                        id: '38236bbf63f54db984ce2f5e2c6e1298'
                    }
                    nrm_log_step_subflow: {
                        table: 'sys_hub_flow'
                        id: 'de956b00297c4bef8680d11c41b0cd88'
                    }
                    nrm_log_write: {
                        table: 'sys_security_acl'
                        id: '8ae18fd238f54762aef289cb60c249f5'
                    }
                    nrm_master_create: {
                        table: 'sys_security_acl'
                        id: '69e12d375e1c44c99714e7ee3bd2f70c'
                    }
                    nrm_master_delete: {
                        table: 'sys_security_acl'
                        id: '05f9fd335ba94e9a9eec659e448f0b33'
                    }
                    nrm_master_read: {
                        table: 'sys_security_acl'
                        id: '0f6413baafe34a55a91a74c79ab65ae7'
                    }
                    nrm_master_write: {
                        table: 'sys_security_acl'
                        id: 'b5c496c3062642b3aea4b5051cf4d4d1'
                    }
                    nrm_match_create_pairA: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'd16b16b58eb04296964b2f376f22515a'
                    }
                    nrm_match_create_pairB: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'e149258ea1dd4bd2bd0a7834b3bb2d5f'
                    }
                    nrm_match_dq1: {
                        table: 'sys_hub_action_instance_v2'
                        id: '5d99e64fc15d4d2d966f83d54ff98cf9'
                    }
                    nrm_match_dq2: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'e574015539534cd7ac7784d3e860c7a3'
                    }
                    nrm_match_dq3: {
                        table: 'sys_hub_action_instance_v2'
                        id: '9bab587ffc7d4349a09cc76bcca3c622'
                    }
                    nrm_match_dq4: {
                        table: 'sys_hub_action_instance_v2'
                        id: '548174ca84574b659d5d4c9a64777a8e'
                    }
                    nrm_match_dq5: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'e3c38cbcc87d490c8676f059fa4d7a15'
                    }
                    nrm_match_dq6: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'a04257da9c33408cad7d2589c0a72b0a'
                    }
                    nrm_match_log1: {
                        table: 'sys_hub_sub_flow_instance_v2'
                        id: '79ce727312724d82b4ed95b136cee947'
                    }
                    nrm_match_log2: {
                        table: 'sys_hub_sub_flow_instance_v2'
                        id: 'cd97f10f136045c282ddcc30ac792aaf'
                    }
                    nrm_match_log3: {
                        table: 'sys_hub_sub_flow_instance_v2'
                        id: 'b99482304d864f68b4c9ce6c969a49d1'
                    }
                    nrm_match_log4: {
                        table: 'sys_hub_sub_flow_instance_v2'
                        id: 'c3adb11cac9c4224a5ab89e08e2ce0a3'
                    }
                    nrm_match_log5: {
                        table: 'sys_hub_sub_flow_instance_v2'
                        id: '39a50c444353462ea711b857609313ac'
                    }
                    nrm_match_log6: {
                        table: 'sys_hub_sub_flow_instance_v2'
                        id: '619acd4d49074d4e8edc8195193bac53'
                    }
                    nrm_match_lookup_cv03: {
                        table: 'sys_hub_action_instance_v2'
                        id: '28c2a65ad1604ffb9d2641c745bb5491'
                    }
                    nrm_match_lookup_cv12: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'cad1068cc4394dfd8497e009420f4a82'
                    }
                    nrm_match_lookup_pairA_a: {
                        table: 'sys_hub_action_instance_v2'
                        id: '2c275090580d4bc29c00a7a43b24d0e7'
                    }
                    nrm_match_lookup_pairA_b: {
                        table: 'sys_hub_action_instance_v2'
                        id: '66c499a6018a4f39a5be12c583152cce'
                    }
                    nrm_match_lookup_pairB_a: {
                        table: 'sys_hub_action_instance_v2'
                        id: '2bdbd4c656af4fb28f8ff0fa4dc02430'
                    }
                    nrm_match_lookup_pairB_b: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'd4de4720ba194c068a9ea419291703b7'
                    }
                    nrm_match_lookup_tx: {
                        table: 'sys_hub_action_instance_v2'
                        id: '575180d4815149139351c046e283b1e6'
                    }
                    nrm_match_lookup_w1: {
                        table: 'sys_hub_action_instance_v2'
                        id: '9fb35c4674bf4aebb932c66fbbb8ab3a'
                    }
                    nrm_match_lookup_w2: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'f49821cabe314b1e87e646c38e625974'
                    }
                    nrm_match_lookup_w3: {
                        table: 'sys_hub_action_instance_v2'
                        id: '3982fdb0fb794b69a2b6d1efdf4af6c1'
                    }
                    nrm_match_reset: {
                        table: 'sys_hub_action_instance_v2'
                        id: '581a18531dc64178883ce1c7a0c4b7a7'
                    }
                    nrm_match_status_pairA_a: {
                        table: 'sys_hub_action_instance_v2'
                        id: '5ff5aad2218a4f638bf117b408bdc7f2'
                    }
                    nrm_match_status_pairA_b: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'c5ad95aa9e424cdfbc576d3fc17741eb'
                    }
                    nrm_match_status_pairB_a: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'af63dc7cd86f4c9fb2054aab4e481202'
                    }
                    nrm_match_status_pairB_b: {
                        table: 'sys_hub_action_instance_v2'
                        id: '4d85347cd43247f7bb6f80ce64e2ed05'
                    }
                    nrm_match_std_cat: {
                        table: 'sys_hub_action_instance_v2'
                        id: '2e976cf4612d486ead40a4680d786238'
                    }
                    nrm_match_std_weir: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'faa8987c5f5641929ea1daf36d5c378e'
                    }
                    nrm_match_trigger: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: '59a0dc4b43bc44bf9796f668490c20dd'
                    }
                    nrm_match_update_run: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'cafd282038964ac1a2c595d3b8f44483'
                    }
                    nrm_pair_create: {
                        table: 'sys_security_acl'
                        id: '77a3fc623aba4cb29bb497a5f6cb17ab'
                    }
                    nrm_pair_delete: {
                        table: 'sys_security_acl'
                        id: 'b041a4b583494350b3cd846e0c4a0db8'
                    }
                    nrm_pair_read: {
                        table: 'sys_security_acl'
                        id: '6ff5c6ead3d646ebb0f731cfd872af0c'
                    }
                    nrm_pair_write: {
                        table: 'sys_security_acl'
                        id: '43477be99bea479d9f391e268cff31f9'
                    }
                    nrm_publish_golden: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'db975a4fee7540c2b8e40759f4e5e973'
                    }
                    nrm_publish_log1: {
                        table: 'sys_hub_sub_flow_instance_v2'
                        id: '734c13f3a0ba460bbf8608b33e0fb7e4'
                    }
                    nrm_publish_log2: {
                        table: 'sys_hub_sub_flow_instance_v2'
                        id: '2d90247c46be42cd87ecf907a96cbca8'
                    }
                    nrm_publish_log3: {
                        table: 'sys_hub_sub_flow_instance_v2'
                        id: '2d20fbb6c27745c68445e72e23b3163c'
                    }
                    nrm_publish_log4: {
                        table: 'sys_hub_sub_flow_instance_v2'
                        id: 'bd1b5f27224d4c6b8e49317ae67a5a75'
                    }
                    nrm_publish_reset: {
                        table: 'sys_hub_action_instance_v2'
                        id: '981c088849784796a332f65ee2046a4e'
                    }
                    nrm_publish_trigger: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: '8cd99085e7e74ce3baff98719df14763'
                    }
                    nrm_publish_update_run: {
                        table: 'sys_hub_action_instance_v2'
                        id: '7e9ef8b2d9f04345b90256b108130d9f'
                    }
                    nrm_resolve_fix_cc: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'b6890d87a7e8404fb236a4e07b45f0e8'
                    }
                    nrm_resolve_fix_dq_cc: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'fde0ab274e8c47e9bcb6dcefa5013e49'
                    }
                    nrm_resolve_gold1: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'c8cfbf0cb01b4b898a2dfae1f629f327'
                    }
                    nrm_resolve_gold10: {
                        table: 'sys_hub_action_instance_v2'
                        id: '6295b5981d2f4f409df4d83e4aefbc4b'
                    }
                    nrm_resolve_gold2: {
                        table: 'sys_hub_action_instance_v2'
                        id: '354c1903c262425eabe99f3093549ad2'
                    }
                    nrm_resolve_gold3: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'a06e69526b03446886127ca58555a01d'
                    }
                    nrm_resolve_gold4: {
                        table: 'sys_hub_action_instance_v2'
                        id: '230b2da8ea3a4baaa74b82d7dbd7132e'
                    }
                    nrm_resolve_gold5: {
                        table: 'sys_hub_action_instance_v2'
                        id: '7e0e68a3699f4114b312882164397925'
                    }
                    nrm_resolve_gold6: {
                        table: 'sys_hub_action_instance_v2'
                        id: '1a760550cd2d4f79a9df40dada88225e'
                    }
                    nrm_resolve_gold7: {
                        table: 'sys_hub_action_instance_v2'
                        id: '6bb47dbb3f38491cbb2058e3faaffc54'
                    }
                    nrm_resolve_gold8: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'c92a73c442a048b89c5ad1bba4aab564'
                    }
                    nrm_resolve_gold9: {
                        table: 'sys_hub_action_instance_v2'
                        id: '7854c671a3ec4d60a92db89bfd6627e1'
                    }
                    nrm_resolve_log1: {
                        table: 'sys_hub_sub_flow_instance_v2'
                        id: '02f7f857bec14641980411d23e7a4563'
                    }
                    nrm_resolve_log2: {
                        table: 'sys_hub_sub_flow_instance_v2'
                        id: '00cf5e8d6b1d4be68b2420aff38ba7e8'
                    }
                    nrm_resolve_log3: {
                        table: 'sys_hub_sub_flow_instance_v2'
                        id: '1884f94d70164d9ea8272ffa571f622a'
                    }
                    nrm_resolve_log4: {
                        table: 'sys_hub_sub_flow_instance_v2'
                        id: 'def9534fbbef40a1b681baf4272c85bf'
                    }
                    nrm_resolve_log5: {
                        table: 'sys_hub_sub_flow_instance_v2'
                        id: 'e18b40ae9e024fd6a8698d7f63ea7e02'
                    }
                    nrm_resolve_log6: {
                        table: 'sys_hub_sub_flow_instance_v2'
                        id: 'c79914201cb545fa95dda6f25724a0b0'
                    }
                    nrm_resolve_lookup_nsA: {
                        table: 'sys_hub_action_instance_v2'
                        id: '09c84cbe428c4deb8cb35f7ed233fdc5'
                    }
                    nrm_resolve_lookup_nsB: {
                        table: 'sys_hub_action_instance_v2'
                        id: '651214693d5d4c95b89d321459d9c34c'
                    }
                    nrm_resolve_lookup_stale: {
                        table: 'sys_hub_action_instance_v2'
                        id: '17beeffb50654cb6ab707ffdedcc28c2'
                    }
                    nrm_resolve_merge_nsA: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'f8efab83849643faabbada0820e86903'
                    }
                    nrm_resolve_merge_nsB: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'ba54f213942645f694aa6ce8427d698b'
                    }
                    nrm_resolve_pairs_merged: {
                        table: 'sys_hub_action_instance_v2'
                        id: '0458610960ea4b628b17928367ed9a64'
                    }
                    nrm_resolve_reject_stale: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'd66ba73dd4b446c09083f232b4077ec6'
                    }
                    nrm_resolve_reset: {
                        table: 'sys_hub_action_instance_v2'
                        id: '89ed202c8946441fb33ad2439fe14750'
                    }
                    nrm_resolve_sap_cp: {
                        table: 'sys_hub_action_instance_v2'
                        id: '9bcd91116f114751a0b1b5003aa0576c'
                    }
                    nrm_resolve_sap_cv12: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'b9ec059040c54f93a1cf2f982d07efc9'
                    }
                    nrm_resolve_sap_dl: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'aef3fb09e2514d64927db27e75d6c47a'
                    }
                    nrm_resolve_sap_ex: {
                        table: 'sys_hub_action_instance_v2'
                        id: '060688c4f61241418132f7e0847b12d4'
                    }
                    nrm_resolve_sap_ht: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'd34f4fb5bf6e4ef1800fcb8bb5951847'
                    }
                    nrm_resolve_sap_ld: {
                        table: 'sys_hub_action_instance_v2'
                        id: '86ed35210aec434cb5ac6299c56752db'
                    }
                    nrm_resolve_sap_tx: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'e0d6257e846046619866465388b6916f'
                    }
                    nrm_resolve_sap_w1: {
                        table: 'sys_hub_action_instance_v2'
                        id: '4daca4ea39ed47d28590803554e426b3'
                    }
                    nrm_resolve_sap_w2: {
                        table: 'sys_hub_action_instance_v2'
                        id: '7e4d2737408b47138449aef0347de70a'
                    }
                    nrm_resolve_sap_w3: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'e1578dc7044f4c2eb14c0a2f4b672471'
                    }
                    nrm_resolve_trigger: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: '8cd46bca68844bc98f9c551e51fcf3be'
                    }
                    nrm_resolve_upd_cp: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'af1b0717287c46e3890e99202a98ca1d'
                    }
                    nrm_resolve_upd_cv12: {
                        table: 'sys_hub_action_instance_v2'
                        id: '5c0e47a812e64a21b767afb7f05b8ac3'
                    }
                    nrm_resolve_upd_dl: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'ceccd2e4fc874a9fad98fedebe9ed07d'
                    }
                    nrm_resolve_upd_ld: {
                        table: 'sys_hub_action_instance_v2'
                        id: '2b60127039dc43ed9dc344e423d66d3c'
                    }
                    nrm_resolve_upd_sap_ex: {
                        table: 'sys_hub_action_instance_v2'
                        id: '76057d26cbff4792aca4a0db5da3580e'
                    }
                    nrm_resolve_upd_sap_ht: {
                        table: 'sys_hub_action_instance_v2'
                        id: '2588ae64d3ab4b36811412cbb8b653a6'
                    }
                    nrm_resolve_upd_tx: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'c53c73a0c3354a08a9ea9f349dbeafa2'
                    }
                    nrm_resolve_upd_w1: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'bb4522b3fb394f829dbe76ebf5ec2495'
                    }
                    nrm_resolve_upd_w2: {
                        table: 'sys_hub_action_instance_v2'
                        id: '538299b5635c4ada892a219e1cab7514'
                    }
                    nrm_resolve_upd_w3: {
                        table: 'sys_hub_action_instance_v2'
                        id: '0f6a0601a0024617bef3ab1875dbedfc'
                    }
                    nrm_resolve_update_run: {
                        table: 'sys_hub_action_instance_v2'
                        id: '46dda947f8f9435d845c3859fff6d71a'
                    }
                    nrm_run_1: {
                        table: 'x_snc_nrm_run'
                        id: '7edf06a126e441dbb54ac4ee4aee067a'
                    }
                    nrm_run_create: {
                        table: 'sys_security_acl'
                        id: '976068ffa95441bf8ce5c68912b4e5c1'
                    }
                    nrm_run_delete: {
                        table: 'sys_security_acl'
                        id: 'fa5c053bbabb4c68b9fac3294f9efa9d'
                    }
                    nrm_run_read: {
                        table: 'sys_security_acl'
                        id: '05a2a1caf5a04517abff8fb15b71a564'
                    }
                    nrm_run_write: {
                        table: 'sys_security_acl'
                        id: '12f189cf8e8b452e9f8fe27376b07fac'
                    }
                    nrm_sap_1: {
                        table: 'x_snc_nrm_sap_equipment'
                        id: '0243a72eaa074708ae6e608ed140d5be'
                    }
                    nrm_sap_10: {
                        table: 'x_snc_nrm_sap_equipment'
                        id: '87b75a50b1e04b2f92bc7cb9160e97fa'
                    }
                    nrm_sap_11: {
                        table: 'x_snc_nrm_sap_equipment'
                        id: 'b87683af6b3f464cb874809776588017'
                    }
                    nrm_sap_12: {
                        table: 'x_snc_nrm_sap_equipment'
                        id: 'dba39fe7440242188d231ac83015ee58'
                    }
                    nrm_sap_13: {
                        table: 'x_snc_nrm_sap_equipment'
                        id: 'a271c030bd62432d93792c1d7b303edd'
                    }
                    nrm_sap_2: {
                        table: 'x_snc_nrm_sap_equipment'
                        id: '1817c0d0c6224997a60b71417f79074d'
                    }
                    nrm_sap_3: {
                        table: 'x_snc_nrm_sap_equipment'
                        id: 'e031131152464a62ba63ced3bfd58fb2'
                    }
                    nrm_sap_4: {
                        table: 'x_snc_nrm_sap_equipment'
                        id: 'b9f1ac27a4d6443d94b38daaaded5efa'
                    }
                    nrm_sap_5: {
                        table: 'x_snc_nrm_sap_equipment'
                        id: 'c1bb50820be441adb677b68f82c79333'
                    }
                    nrm_sap_6: {
                        table: 'x_snc_nrm_sap_equipment'
                        id: 'b9bc94a6753040aa8ee4e6dcf12b31e2'
                    }
                    nrm_sap_7: {
                        table: 'x_snc_nrm_sap_equipment'
                        id: '3c3b8b43c5e64760b32fee36e547b5b0'
                    }
                    nrm_sap_8: {
                        table: 'x_snc_nrm_sap_equipment'
                        id: '1dd4105969e243eba723ee1c7e6f6200'
                    }
                    nrm_sap_9: {
                        table: 'x_snc_nrm_sap_equipment'
                        id: 'e4df0660235a4ba3aec30c18d502533e'
                    }
                    nrm_sap_create: {
                        table: 'sys_security_acl'
                        id: '07d705d9398b49199b382f460af747a6'
                    }
                    nrm_sap_delete: {
                        table: 'sys_security_acl'
                        id: '918ef875d93443349c413176e89d1970'
                    }
                    nrm_sap_read: {
                        table: 'sys_security_acl'
                        id: '21cf6493ec48432395ddeab960b8db94'
                    }
                    nrm_sap_write: {
                        table: 'sys_security_acl'
                        id: 'a95392e03cfa4986ac35ee612d880dc1'
                    }
                    nrm_tab_overview: {
                        table: 'par_dashboard_tab'
                        id: '9a07b648e8be4ff589d2bdfbab48682a'
                    }
                    nrm_user_maya: {
                        table: 'sys_user'
                        id: 'dfa8416d0aef4cbc9b7730f999462d73'
                    }
                    nrm_widget_dq_open: {
                        table: 'par_dashboard_widget'
                        id: 'ae1a00cfa7da444eb6f96861c39c8d09'
                    }
                    nrm_widget_dq_severity: {
                        table: 'par_dashboard_widget'
                        id: '9d8ebf8b18b64f84a7fd19b9881f1634'
                    }
                    nrm_widget_golden: {
                        table: 'par_dashboard_widget'
                        id: '7c752d512d704d99bf679d18df916aa6'
                    }
                    nrm_widget_held: {
                        table: 'par_dashboard_widget'
                        id: '489d4f6adbc24470b4a263f29328721a'
                    }
                    nrm_widget_ingestion_status: {
                        table: 'par_dashboard_widget'
                        id: 'ae075e6d4e77446190705cd0f94894b5'
                    }
                    nrm_widget_total_sap: {
                        table: 'par_dashboard_widget'
                        id: '321ff1281a9f4311818eca2d58210c67'
                    }
                    nrm_workspace: {
                        table: 'sys_ux_page_registry'
                        id: '7a323eafeaea44778f54426fe1576db1'
                    }
                    nrm_workspace_route: {
                        table: 'sys_security_acl'
                        id: 'eea1b9d72cdb4e088438be3390ca4fa9'
                    }
                    nrm_workspace_sys_ux_app_config_workspace: {
                        table: 'sys_ux_app_config'
                        id: '1b0c133b4e9248b7984ee33a0e016532'
                    }
                    nrm_workspace_sys_ux_app_route_home: {
                        table: 'sys_ux_app_route'
                        id: 'a73f42ed4a874a3fa1f556a6deb52fe2'
                    }
                    nrm_workspace_sys_ux_app_route_list: {
                        table: 'sys_ux_app_route'
                        id: '3db9dba546e146ffaab7f2cea48ccce0'
                    }
                    nrm_workspace_sys_ux_app_route_record: {
                        table: 'sys_ux_app_route'
                        id: '90046df7e8f945d08e912f528aa630c6'
                    }
                    'nrm_workspace_sys_ux_app_route_simple-list': {
                        table: 'sys_ux_app_route'
                        id: 'ea854531879142de9a457553816de17b'
                    }
                    nrm_workspace_sys_ux_macroponent_record: {
                        table: 'sys_ux_macroponent'
                        id: '68832a4f181a48c49a2e1809233b3933'
                    }
                    nrm_workspace_sys_ux_page_property_chrome_footer: {
                        table: 'sys_ux_page_property'
                        id: '3e3df6f74f7c4f8a80574674662b4394'
                    }
                    nrm_workspace_sys_ux_page_property_chrome_header: {
                        table: 'sys_ux_page_property'
                        id: 'a85000d37bc24556b1c6ffc125e2894b'
                    }
                    nrm_workspace_sys_ux_page_property_chrome_tab: {
                        table: 'sys_ux_page_property'
                        id: 'da31f4953cf146fb811e5f8412a3e1ed'
                    }
                    nrm_workspace_sys_ux_page_property_chrome_toolbar: {
                        table: 'sys_ux_page_property'
                        id: '5ac07aa4a09141d6a874685da41af50f'
                    }
                    nrm_workspace_sys_ux_page_property_listConfigId: {
                        table: 'sys_ux_page_property'
                        id: '5a03323e8182469d933ac3858879ea0d'
                    }
                    nrm_workspace_sys_ux_page_property_view: {
                        table: 'sys_ux_page_property'
                        id: '65f0f4684fdd4eaa9c1ca324d798c66c'
                    }
                    nrm_workspace_sys_ux_page_property_wbApplicabilityConfigId: {
                        table: 'sys_ux_page_property'
                        id: '18df4a6e7d4248a0961d1cc89dcb4a74'
                    }
                    nrm_workspace_sys_ux_registry_m2m_category_unifiedNav: {
                        table: 'sys_ux_registry_m2m_category'
                        id: 'c3ada5b92d3e4b39b0c953b2cb7956ee'
                    }
                    nrm_workspace_sys_ux_screen_home: {
                        table: 'sys_ux_screen'
                        id: 'de192edc1d2b4c13a369707b7a3819ec'
                    }
                    nrm_workspace_sys_ux_screen_list: {
                        table: 'sys_ux_screen'
                        id: 'e6c351fb0118461783766ddba09bc6aa'
                    }
                    nrm_workspace_sys_ux_screen_record: {
                        table: 'sys_ux_screen'
                        id: '9b221fae574e4979ac8f9890d1eebb1a'
                    }
                    'nrm_workspace_sys_ux_screen_simple-list': {
                        table: 'sys_ux_screen'
                        id: 'cfc12c5529144ef9b0920bee1f78b42a'
                    }
                    nrm_workspace_sys_ux_screen_type_home: {
                        table: 'sys_ux_screen_type'
                        id: '7a44dff882404ebcb042f5dd48a53051'
                    }
                    nrm_workspace_sys_ux_screen_type_list: {
                        table: 'sys_ux_screen_type'
                        id: '883c5068d4be4fa6899af3ea1b5ca857'
                    }
                    nrm_workspace_sys_ux_screen_type_record: {
                        table: 'sys_ux_screen_type'
                        id: '627a81aad6a84d7d86c1355a6f967480'
                    }
                    'nrm_workspace_sys_ux_screen_type_simple-list': {
                        table: 'sys_ux_screen_type'
                        id: 'c92ea6f153ea49ab80d168dac7d597aa'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'eb0e7b75833d48349d81655b98b89f0c'
                    }
                }
                composite: [
                    {
                        table: 'sys_choice_set'
                        id: '00c4689431ca4432bc85a13aede7fe83'
                        key: {
                            name: 'x_snc_nrm_ingestion_log'
                            element: 'stage'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '023939246e2040a994ea115f7ecec60b'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '03d1e4b395ad4b40b121b6a2623e81b8'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'overall_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0549d7ca241b4d218c1f6511eba5c1d5'
                        key: {
                            name: 'x_snc_nrm_match_pair'
                            element: 'match_type'
                            value: 'weak'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '05c24a6606af4f398c2fd807440cc875'
                        key: {
                            sys_security_acl: 'd541ed1f57254590a8eedd6b4657d354'
                            sys_user_role: {
                                id: '931a6c3a48d44258b3449671055a6d53'
                                key: {
                                    name: 'x_snc_nrm.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '06a6988d8641491bab26388dbc77fe96'
                        key: {
                            name: 'x_snc_nrm_match_pair'
                            element: 'match_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '07f499605f714bf0bab9abf6b6337ea2'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '0a4d705fc5b04306a70bbaa885bce87f'
                        key: {
                            category: 'x_snc_nrm_run'
                            prefix: 'MDR'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0b25cc5e3471479e9da042b8c6549b72'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'equipment_category'
                            value: 'e'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0b32bb92943b459eb5b81d85d839b5f5'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0b4c476cefec49f58ebed27db40a5718'
                        key: {
                            name: 'var__m_sys_hub_flow_input_de956b00297c4bef8680d11c41b0cd88'
                            element: 'stage'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0d35087f6a394b6f92868f47132ec8e6'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'equipment_category'
                            value: 'p'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0dd5a201e8be4a5fbaab9e84488823d9'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'golden_record'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0dda51aed1c8485abdbbfe2a35df2b15'
                        key: {
                            sys_security_acl: '918ef875d93443349c413176e89d1970'
                            sys_user_role: {
                                id: '931a6c3a48d44258b3449671055a6d53'
                                key: {
                                    name: 'x_snc_nrm.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0e81b502e76243acb9b635b7d5cb50ef'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'severity'
                            value: 'low'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '101338128db94711902cb6e9388f5f89'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'planner_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '12081edf9a944dc9a2bcad2d4858f7c3'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'serial_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '123335fccf954d9bb8e1e193dec13b48'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '12ad187d820e41eca659b0c5239e5a02'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'master_status'
                            value: 'published'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '12ce7e47c8e449fb9613d6787c6013a7'
                        key: {
                            name: 'x_snc_nrm_match_pair'
                            element: 'match_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '139ffdec653941d68224bfd3dd9d1a7f'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'golden_record'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '146985c2ca9948a887c31f090a178519'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'valid_to'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '14de648578474e4cacf8386d18d4c25a'
                        key: {
                            name: 'x_snc_nrm_ingestion_log'
                            element: 'status'
                            value: 'success'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '15b55ac7f76341459cef4ea2da591454'
                        key: {
                            model: 'de956b00297c4bef8680d11c41b0cd88'
                            element: 'run'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '16fcfbbcf8824652a8a13906dbf01146'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'ingestion_status'
                            value: 'not_ingested'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '174cc3f81f734667b1bcd88fc3ed3dde'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'company_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1af6da6d1344412a9542e4ce3b77272b'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'equipment_desc'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1b2916177a734b498eae33d02ed3a9b8'
                        key: {
                            name: 'x_snc_nrm_ingestion_log'
                            element: 'status'
                            value: 'in_flight'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1c25eb4a1b9945c9a6122b583b49e71e'
                        key: {
                            name: 'x_snc_nrm_ingestion_log'
                            element: 'sequence'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1d9e79b1b269483b96a9450c81137973'
                        key: {
                            sys_security_acl: 'a95392e03cfa4986ac35ee612d880dc1'
                            sys_user_role: {
                                id: '33c507842c214978a2670dc8a5f52bf9'
                                key: {
                                    name: 'x_snc_nrm.steward'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '20bb473ffecb41858ffdc86bf245fdc4'
                        key: {
                            name: 'x_snc_nrm_match_pair'
                            element: 'resolution'
                            value: 'kept_separate'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '22a063bbe9d84510b00f3f537d0de27f'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'acquisition_value'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '23e660cfcc764c32b4ece63c9c040322'
                        key: {
                            name: 'x_snc_nrm_ingestion_log'
                            element: 'duration_ms'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '247abd017d874b07b564f4df67999bb6'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'sap_record'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '24907ab78a24485ab39071575952a2c5'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'overall_status'
                            value: 'not_started'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '251fe50bb7cb4344a8ee87e5cdd3af36'
                        key: {
                            model: 'de956b00297c4bef8680d11c41b0cd88'
                            element: 'detail'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2525026850e745d2a331caa50dcf0583'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'master_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '26286e848b6d4364a98f30cfd9de7d64'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'company_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '27f628c1cc414228ba51d0c0ef2a5d37'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'inventory_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '28995b0dd6c84aa2b826bc3b242b3275'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'sap_source_ids'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '290f047fd18d4804bebd00a5697917e7'
                        key: {
                            name: 'x_snc_nrm_ingestion_log'
                            element: 'timestamp'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2948502d9edd4f28ab6c39d0582fcf25'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'trigger_action'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '29f6f1fe2158497b950305fb6c72dbb5'
                        key: {
                            name: 'x_snc_nrm_match_pair'
                            element: 'matched_on'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2a0a38ed2e1d46ff96a7307320fa6caf'
                        key: {
                            name: 'x_snc_nrm_match_pair'
                            element: 'match_score'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2c2b96f6aee54005b606192c0f144513'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'sap_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2cc09db0a810425594adbbda401e46fd'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'source_system'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2cfbc0d495a349e4a6a7c9b26807b11d'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'master_status'
                            value: 'held'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2d3bafb939d74779bbc7902767e6b6b9'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'acquisition_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2e272a78a8c4470d967cbf44d5304dd9'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'state'
                            value: 'matched'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '2ea5c12c61a34ac8a1a5b8bff1e595a7'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'sap_status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2eb8cb4cfcc1420bb2fa80cca61b99dc'
                        key: {
                            name: 'x_snc_nrm_ingestion_log'
                            element: 'stage'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '31e14fb9d880458794d03e12fd9fd883'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'field_name'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '31e2826717df44b0ba6d167516d05bdb'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '32c75cafa80e4302a623a31031431aaf'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'issue_type'
                            value: 'referential_integrity'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '32f8adb9e0cd4d83bb84af7fbba2d34a'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'equipment_category'
                            value: 'v'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '337d53e8055e4f6db264bfc9ae6000dc'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'issue_type'
                            value: 'suspected_duplicate'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '339555cbd2ce4afab3b5e2603db854be'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'acquisition_value'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '33a68ca8b1aa40aa8d97e59dbbbd6ad8'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'state'
                            value: 'draft'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '33c507842c214978a2670dc8a5f52bf9'
                        key: {
                            name: 'x_snc_nrm.steward'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '34f8f1930761461393a7484de489e065'
                        key: {
                            name: 'x_snc_nrm_match_pair'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '35a74ecef693458a93a73ee425a36f13'
                        key: {
                            sys_security_acl: '12f189cf8e8b452e9f8fe27376b07fac'
                            sys_user_role: {
                                id: '33c507842c214978a2670dc8a5f52bf9'
                                key: {
                                    name: 'x_snc_nrm.steward'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '36b5c347abd64479bb632e147899320a'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'run'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '376b008bc9994c49ae52b054482837db'
                        key: {
                            name: 'x_snc_nrm_match_pair'
                            element: 'resolution'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3789efeb754e4f34807e70cadc93743e'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'currency'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '3842b97b4e384f648358855d24e8849e'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '385d2df2baae46d6891ce7076ee05500'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'serial_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '38609b38f44e40e2ab3c6a26ad28aea5'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'duplicates_found'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '39295ebfaa224c64b4e273e1dc19f606'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'manufacture_year'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '395c1cea5d1e47ce83d7ca0f23ee103b'
                        key: {
                            name: 'x_snc_nrm_match_pair'
                            element: 'matched_on'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3a587101f335473ea034f225245690a7'
                        key: {
                            name: 'x_snc_nrm_ingestion_log'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3adf9cff0b7a438f9ebaa67b011ff1fe'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'run_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3e0f61b1e748413ca63be1ee161c5665'
                        key: {
                            sys_security_acl: 'fa5c053bbabb4c68b9fac3294f9efa9d'
                            sys_user_role: {
                                id: '931a6c3a48d44258b3449671055a6d53'
                                key: {
                                    name: 'x_snc_nrm.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '3f187d86ca2a4886ba33bc1a74c80a23'
                        key: {
                            name: 'x_snc_nrm_match_pair'
                            element: 'resolution'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3f514665156a47de89446e4d1ff92e21'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'manufacture_year'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3ffb4e9b6a034ccd9fdf734a922ef620'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'state'
                            value: 'ingested'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '420116c2e1d744f2966237fb326a3c51'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'issue_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '42d3b466dd534864b9ab4d90d2823404'
                        key: {
                            name: 'x_snc_nrm_match_pair'
                            element: 'resolution'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '44bee8e3a5ab474db5caae64cc1d76ee'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'model_number'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '46101b985ce846b4b139583970d12d80'
                        key: {
                            sys_security_acl: '43477be99bea479d9f391e268cff31f9'
                            sys_user_role: {
                                id: '33c507842c214978a2670dc8a5f52bf9'
                                key: {
                                    name: 'x_snc_nrm.steward'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '49c45c37da0742a7a14889c66f8221e1'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'model_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '49cd6bce2d004187a70f4a2dc2870b37'
                        key: {
                            name: 'var__m_sys_hub_flow_input_de956b00297c4bef8680d11c41b0cd88'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '49d7d6c8b09149d191c80918be4b9555'
                        key: {
                            sys_security_acl: '8ae18fd238f54762aef289cb60c249f5'
                            sys_user_role: {
                                id: '33c507842c214978a2670dc8a5f52bf9'
                                key: {
                                    name: 'x_snc_nrm.steward'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4a52f64c46d14728a871a0cbf4491823'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'currency'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4a553c5615b24156bc321d4369d2c7c0'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'trigger_action'
                            value: 'resolve'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4b516b9815a44aee99e4521b47079bed'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'overall_status'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4ba276b61ef447e3a9d29f968b2784cf'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'data_quality_score'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4d840755593b4ca78169122e1c908d08'
                        key: {
                            name: 'x_snc_nrm_ingestion_log'
                            element: 'stage'
                            value: 'ingest'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4f2b8f3b73ad4c0e9730ba564f6b2197'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4f3fe2e201064d77958b1fc4fd13943c'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'functional_location'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4fd6c8fa5b404946a7a4b58438ffee9e'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'company_code'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '51070068b6634f10be91af7e127dab21'
                        key: {
                            name: 'x_snc_nrm_ingestion_log'
                            element: 'detail'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5135830e70a348c5becdc8a890d0620a'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '519f8b01c8324857b5292dd346ff825a'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'severity'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '51f41a09b173473f8c6e661ab8c63a9f'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'cost_centre'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '532615af60fa4f97befc27a874f07af1'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'last_changed_sap'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '53ac9fa1a3194798b476dc9cccd90276'
                        key: {
                            name: 'x_snc_nrm_match_pair'
                            element: 'match_type'
                            value: 'high_confidence'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '545963071fba448b9e8fa6ffe1bb6d3f'
                        key: {
                            name: 'x_snc_nrm_ingestion_log'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '545c67b04b6644368af8873c3991085c'
                        key: {
                            name: 'x_snc_nrm_match_pair'
                            element: 'survivor'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5477ca370f7d4e92bfe0d4d5e9720227'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '559de2837cd34ea58e2acc494df4de6e'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'field_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '56407019b38947ae93b7e5d8090a9e36'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'trigger_action'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '56adcd5195d741d483314207644050c2'
                        key: {
                            sys_security_acl: '07d705d9398b49199b382f460af747a6'
                            sys_user_role: {
                                id: '33c507842c214978a2670dc8a5f52bf9'
                                key: {
                                    name: 'x_snc_nrm.steward'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '56fbfac6c7524e07a2b40550dc39baad'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'dq_issues_found'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '57cc29c20d754bc8b486b5e81f19e8aa'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'acquisition_value'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '57cfff8758b24a289c972d1e227efb86'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'recommended_action'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '58b6614c89994bcbacb33609badb8563'
                        key: {
                            sys_security_acl: '976068ffa95441bf8ce5c68912b4e5c1'
                            sys_user_role: {
                                id: '33c507842c214978a2670dc8a5f52bf9'
                                key: {
                                    name: 'x_snc_nrm.steward'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '59ed5c8a4c314b83983429957c14b972'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'ingestion_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5a8094fe6a9846a1be2b2550c9a686d1'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'issue_type'
                            value: 'stale_record'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5b3430ce36084bac9ba6da9ba1bbe9c1'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'location'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5cd3f251e9814f229865c0fd889b4650'
                        key: {
                            name: 'x_snc_nrm_ingestion_log'
                            element: 'sequence'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5cf0d40645994c9183192b10417f8ed4'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'equipment_category'
                            value: 'c'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5d654915dc8444f1bbe25d6acde74d0b'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'issue_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5e731bc262e1422d8fdb601057bb7c73'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'sap_equipment_no'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5fcba179b41b47e69118ad5e3b4af517'
                        key: {
                            name: 'x_snc_nrm_ingestion_log'
                            element: 'run'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '603a16eefc9a4e649321a0c54df8d949'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'golden_records_created'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '60f23282b0bc46c1ae7ecc36efc14a76'
                        key: {
                            model: 'de956b00297c4bef8680d11c41b0cd88'
                            element: 'action_text'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '615905327101452091f74093c10a95f7'
                        key: {
                            name: 'x_snc_nrm.user'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '62048d8076ba4a9e9282446d05c93746'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6714d38bfb774e029408854e111b2732'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'records_ingested'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '67183995512a4a19868c432f87f3b754'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'location'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '680f47e137254e43b9579bde21490b84'
                        key: {
                            sys_ui_action: '1b8451d9759e48898dab48dbb58c1bea'
                            sys_user_role: {
                                id: '33c507842c214978a2670dc8a5f52bf9'
                                key: {
                                    name: 'x_snc_nrm.steward'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6a412418a2fe49ea864b61f45ac2b63b'
                        key: {
                            sys_security_acl: '05a2a1caf5a04517abff8fb15b71a564'
                            sys_user_role: {
                                id: '615905327101452091f74093c10a95f7'
                                key: {
                                    name: 'x_snc_nrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6a864277a17747d48174f0c83cb0567a'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'trigger_action'
                            value: 'match'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '6b4ec364a27d432aadf8aa5a3fa7dfdf'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '6d9c8fc32f66488fb003d06fa7ba61bd'
                        key: {
                            sys_ui_action: '87029512e19d4679b78dfb5657472a2e'
                            sys_user_role: {
                                id: '33c507842c214978a2670dc8a5f52bf9'
                                key: {
                                    name: 'x_snc_nrm.steward'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6e7a2880554548f8ada1dd9958eb9d51'
                        key: {
                            name: 'x_snc_nrm_match_pair'
                            element: 'run'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '6ebf06e1d2344d848301a1e0896c3c99'
                        key: {
                            name: 'x_snc_nrm_run'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6f905f25fce54141b686eb96284d070a'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'severity'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '72a5cc83f89c45a595c9d6b12814e0be'
                        key: {
                            name: 'var__m_sys_hub_flow_input_de956b00297c4bef8680d11c41b0cd88'
                            element: 'run'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '75f5c13e03434cec9894c92529b3cbc4'
                        key: {
                            name: 'x_snc_nrm_match_pair'
                            element: 'run'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '764f1607a795429db826f54905d58c53'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'detail'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '767c12d21a2348a0a007cc8a58d47ee2'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'golden_records_created'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '77e3de822d544094bb0af77878bb4bea'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'status'
                            value: 'resolved'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '78f73cc779db43b384828b2cdc9e2774'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'manufacturer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7962ca41791d45da92bdf8f88be2573d'
                        key: {
                            name: 'x_snc_nrm_match_pair'
                            element: 'resolution'
                            value: 'merged'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7970b4e4f4294bba975ac964c317fdaa'
                        key: {
                            name: 'x_snc_nrm_match_pair'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7a79a9c5b9d7402583dc8f6cd3b982b1'
                        key: {
                            name: 'x_snc_nrm_match_pair'
                            element: 'record_b'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7c1353adad9f48f6b226efe77b9a85e9'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7d00c9901cad461bba96e03284a19dd4'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'location'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '7d36520071b4417486eb9d2f79eaa355'
                        key: {
                            model: 'de956b00297c4bef8680d11c41b0cd88'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7d66bd880a144733b03cdbc5cb3dd033'
                        key: {
                            name: 'x_snc_nrm_ingestion_log'
                            element: 'status'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7f0f06f4e843499e8d08dd3c9d121119'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'inventory_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '7f625804343f41df879b33628b18278b'
                        key: {
                            name: 'x_snc_nrm_ingestion_log'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '80d2743417964ed48114b0bba921053f'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'sap_equipment_no'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '814a511040ad4ef3b7ec818af266d07b'
                        key: {
                            sys_security_acl: '0f6413baafe34a55a91a74c79ab65ae7'
                            sys_user_role: {
                                id: '615905327101452091f74093c10a95f7'
                                key: {
                                    name: 'x_snc_nrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '81e0d8d2f1eb43e58edfb86522bf67ae'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'location'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '81f24517ce2c42219d3b3331cff6dd1c'
                        key: {
                            name: 'x_snc_nrm_match_pair'
                            element: 'match_type'
                            value: 'exact'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '829bf7128e3744a2b8c430d66c8fa4d0'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'manufacturer'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '860f026b6cac41249f0d4cdccfd392aa'
                        key: {
                            name: 'x_snc_nrm_match_pair'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: '877d9e983091448ab6c136ad1d082fee'
                        key: {
                            sys_ui_action: 'bb576d9e5e6a4b5c82ec6764ce91bac1'
                            sys_user_role: {
                                id: '33c507842c214978a2670dc8a5f52bf9'
                                key: {
                                    name: 'x_snc_nrm.steward'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '887b6eccd3b74eee85b76bc8f197fc2f'
                        key: {
                            name: 'x_snc_nrm_ingestion_log'
                            element: 'stage'
                            value: 'resolve'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '892b7a58ed494ed38f10fd637ad07b89'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'currency'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8a4a10b23e8244a3a4601f74c9a7f479'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'planner_group'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8aed0d21e3d842e59febd05536dd49ed'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'equipment_category'
                            value: 'm'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8b2b36ef85c04a079721f7dae701d71a'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'state'
                            value: 'published'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8d65d9648ce545cd9d2c7d8c42670d41'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'acquisition_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8e223c10a13948f2a81f9324c1614a21'
                        key: {
                            name: 'x_snc_nrm_ingestion_log'
                            element: 'action'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8f3b4236a8f140b5b8a9bbfb2f07fc0e'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '90f225a3963b486eb7b2dd9895f27090'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'equipment_category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '91f026d505614b62bbe5880c0041591d'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'records_ingested'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '929375a33b0548e1a0d7ac4c49b0b575'
                        key: {
                            sys_security_acl: '05f9fd335ba94e9a9eec659e448f0b33'
                            sys_user_role: {
                                id: '931a6c3a48d44258b3449671055a6d53'
                                key: {
                                    name: 'x_snc_nrm.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '92c587fc351c46f4a90463bf9ab5696c'
                        key: {
                            sys_security_acl: 'a636fe31280941e086be87a7f8047079'
                            sys_user_role: {
                                id: '33c507842c214978a2670dc8a5f52bf9'
                                key: {
                                    name: 'x_snc_nrm.steward'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '92d6af27a0d445f4b72084e445f43f42'
                        key: {
                            sys_security_acl: '21cf6493ec48432395ddeab960b8db94'
                            sys_user_role: {
                                id: '615905327101452091f74093c10a95f7'
                                key: {
                                    name: 'x_snc_nrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '92f16b5959ec45438a2f6b4430b08550'
                        key: {
                            category: 'x_snc_nrm_equipment_master'
                            prefix: 'EQM'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9309531a627048618354d3e659c9a486'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'manufacturer'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '930bf831cd504b75afb5bc01d4b9dc03'
                        key: {
                            name: 'x_snc_nrm_match_pair'
                            element: 'match_score'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '931a6c3a48d44258b3449671055a6d53'
                        key: {
                            name: 'x_snc_nrm.admin'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '93fc144776754215b27d9cf0f689df60'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'maintenance_plant'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '94b58d8e20cb40fa8c423d7083551ce4'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'functional_location'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '951574f3d86f489bb3e320c68b2b18a0'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'maintenance_plant'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9586d538c3dc4936879bfb6ad859cee6'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'sap_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '95c96b6c4e8e4b27bd59c1dc6133b47d'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'planning_plant'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9609255b5944422d9c0042d40311c62f'
                        key: {
                            name: 'x_snc_nrm_match_pair'
                            element: 'survivor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '975d45382ad7473587644f560e0ff02f'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'sap_status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '9814163b7b374e9b9eaf2df3ecccbc0d'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'severity'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '98377aa24e8c4737941451a037926951'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '99c72614442a4c1994569585a5e0b120'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'cost_centre'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9b0e8f3a741340f987aca0cb50b5c0b9'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'company_code'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9c80226387704baba8dd8b71cab10491'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'master_status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9e2286751f064a2da46493bf5a6020eb'
                        key: {
                            name: 'x_snc_nrm_ingestion_log'
                            element: 'action'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9ea1c91d0e024c05a8e442479fabc9ad'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'model_number'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9ed6ac77be63479399f4680777023b75'
                        key: {
                            sys_security_acl: '998b3cdfb63d4b1e91233356a0917774'
                            sys_user_role: {
                                id: '615905327101452091f74093c10a95f7'
                                key: {
                                    name: 'x_snc_nrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9f152e305a41492aa4faf78cd3140a71'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'maintenance_plant'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a252797912db4a1bbdeb027a556e196d'
                        key: {
                            name: 'x_snc_nrm_match_pair'
                            element: 'match_type'
                            value: 'probable'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a30078e4ca6c4f0393d3126dc0e72645'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'master_status'
                            value: 'retired'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a3b6b1ef4dcd488184983197ff9f505e'
                        key: {
                            name: 'x_snc_nrm_ingestion_log'
                            element: 'status'
                            value: 'failed'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'a489208d50554efa9949c0e309702707'
                        key: {
                            model: 'de956b00297c4bef8680d11c41b0cd88'
                            element: 'sequence'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a54446588aa84099b065669555e71f48'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'severity'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a5f3d43f77794243a1f5c9692b7e4c8f'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'currency'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a63218d4c5f34297aff1099730397aec'
                        key: {
                            name: 'x_snc_nrm_match_pair'
                            element: 'resolution'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a643c148f9834e7abc8f024d9279b79e'
                        key: {
                            name: 'x_snc_nrm_ingestion_log'
                            element: 'stage'
                            value: 'match'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a7e44cc0d6c04e9198df1c3cd5ada214'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'state'
                            value: 'resolved'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a8f73a2983fb423d81be18792b1cad5d'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'source_system'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ab6a4631f2ec4629ba861d0b21cf414e'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'serial_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ab958e31610a40ef8c0b12008d902c39'
                        key: {
                            name: 'x_snc_nrm_ingestion_log'
                            element: 'duration_ms'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ac3654fedbc2465595de6282a0bc9823'
                        key: {
                            name: 'x_snc_nrm_match_pair'
                            element: 'record_a'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ac98d9c1ac124e85b5c2ee878138d58d'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aca2862a13774be29b75ffda2b1338a1'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'acb80d7966b5458bb53159e7456a3fa2'
                        key: {
                            role: {
                                id: '931a6c3a48d44258b3449671055a6d53'
                                key: {
                                    name: 'x_snc_nrm.admin'
                                }
                            }
                            contains: {
                                id: 'e294e362ef4d45fb988c0ab371409e5b'
                                key: {
                                    name: 'canvas_admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ad8baf79e5a344e3921eebe5a3267444'
                        key: {
                            name: 'x_snc_nrm_ingestion_log'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aff46cfbb71247efa11eabe6f9fb12c0'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'run'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b1628e0e18db4168bf6b38c90888bb12'
                        key: {
                            sys_security_acl: '23eff172bf7c4c7daf9b9c7a9943f954'
                            sys_user_role: {
                                id: '931a6c3a48d44258b3449671055a6d53'
                                key: {
                                    name: 'x_snc_nrm.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b18d838dc394463db8ea66d6a199fb88'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'sap_status'
                            value: 'inac'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b1ab4bbda1124fb29eec46ba7117097a'
                        key: {
                            name: 'x_snc_nrm_ingestion_log'
                            element: 'run'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b202b5a0a1ba4c44afe7ee5a0357008a'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'status'
                            value: 'held_for_steward'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b24ee932cf1148e990869498ae7874f1'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'recommended_action'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b2509c75e914460cad797960b8bf52fa'
                        key: {
                            name: 'x_snc_nrm_ingestion_log'
                            element: 'detail'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'b2b24661f4ba44fdadd148a3eada3c60'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'b39acb42b3f247c58140b7c6d76587e8'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b4159278b8d44d8d90282c2919659f6f'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'severity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b4b6f6b944c1424d9251371e00737b1d'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'trigger_action'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b5eabf763f4541919d17ca185c719af3'
                        key: {
                            sys_security_acl: '69e12d375e1c44c99714e7ee3bd2f70c'
                            sys_user_role: {
                                id: '33c507842c214978a2670dc8a5f52bf9'
                                key: {
                                    name: 'x_snc_nrm.steward'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b638d0bc98eb4b8cb9cda422a8b30672'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'ingestion_status'
                        }
                    },
                    {
                        table: 'par_dashboard_visibility'
                        id: 'b6d4bfeb2d6447c991ed8c1b1fc16dbe'
                        key: {
                            dashboard: 'd58c479d7621419fa0f96107ff2c656b'
                            experience: '7a323eafeaea44778f54426fe1576db1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b6fa19700298463fab8ae372876f134e'
                        key: {
                            name: 'x_snc_nrm_match_pair'
                            element: 'record_b'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b711d7aa222b4643ab30e4709d9f7636'
                        key: {
                            name: 'x_snc_nrm_ingestion_log'
                            element: 'stage'
                            value: 'publish'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b7bfb0a9ff9d417ab17e08002515ad34'
                        key: {
                            sys_security_acl: '6ff5c6ead3d646ebb0f731cfd872af0c'
                            sys_user_role: {
                                id: '615905327101452091f74093c10a95f7'
                                key: {
                                    name: 'x_snc_nrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b8214b456c364ce7bb896de1d50c1b53'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'detail'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b8514636cbd942029894071ca7906f5b'
                        key: {
                            name: 'var__m_sys_hub_flow_input_de956b00297c4bef8680d11c41b0cd88'
                            element: 'detail'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b852fa04c6514fbaa87f17f7788a9829'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'ingestion_status'
                            value: 'matched'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b9bdcc0ff35f40a0a26eacd4cd6650db'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'overall_status'
                            value: 'complete'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b9fb1a2ffbff40fdb798b175011c68cc'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'data_quality_score'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ba2f1688f6354a8ab500a7cb2e7edd4d'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'dq_issues_found'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ba49edfe20954a12b0a30308dcdbf8c0'
                        key: {
                            sys_security_acl: '77a3fc623aba4cb29bb497a5f6cb17ab'
                            sys_user_role: {
                                id: '33c507842c214978a2670dc8a5f52bf9'
                                key: {
                                    name: 'x_snc_nrm.steward'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ba9074a7e91f4f57a1e8a95accccf736'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'ingestion_status'
                            value: 'ingested'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bad7ba5d6b1144f088b9f809b01387b1'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'issue_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bb4ab54a731944d59ff4416c8e524086'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'status'
                            value: 'open'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bd14162932c6472e80f46b0f550478f0'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'trigger_action'
                            value: 'publish'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'be0016f282694e5bb1799fde16f4856f'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'acquisition_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bf18c79a53324e6f93838d9acd01796c'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'last_changed_sap'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bf7a4689d6a9496ca773bfd38a8be5d2'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'ingestion_status'
                            value: 'promoted'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bfd72c6604b34e5d89c027080de2753f'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'trigger_action'
                            value: 'ingest'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c02cbc33028e45b2ad854bda1bea496c'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'manufacture_year'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c2c33db07bd74de088953f3f5d2c91dc'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'ingestion_status'
                            value: 'rejected'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'c3721c4c81e0405eb3e20f17e5ed3aaa'
                        key: {
                            model: 'de956b00297c4bef8680d11c41b0cd88'
                            element: 'duration_ms'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c38a834b38c44387b57902377fe9023b'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'manufacturer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c4ef83677473450191da686774611121'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'serial_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c4fa9024e82249c4ba3a54e748245280'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'ingestion_status'
                            value: 'merged'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'c552503a29a44d9794e2676114720936'
                        key: {
                            sys_ui_action: '169b42189f27418187b501f31398fe1b'
                            sys_user_role: {
                                id: '33c507842c214978a2670dc8a5f52bf9'
                                key: {
                                    name: 'x_snc_nrm.steward'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c73f779b69884781b92b0a263d7d252e'
                        key: {
                            sys_security_acl: 'eea1b9d72cdb4e088438be3390ca4fa9'
                            sys_user_role: {
                                id: '615905327101452091f74093c10a95f7'
                                key: {
                                    name: 'x_snc_nrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'c7c70ecb85024d6dbb391f8a6f3c76f4'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c7ce04ee686f4007ba2ad014bd3021b2'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'run_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c8375479b9e946618194fc72694cda1d'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'object_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c8a89ef841ee4225a99dbd4fdcda04a8'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'severity'
                            value: 'critical'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c901d2e75b6c4a1facb7cc1b8e644db8'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'master_status'
                            value: 'draft'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c934402d97734e02ba1c20adaacbf53a'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'ingestion_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c9476a0cc9544313bff6f80c8b1773fc'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'object_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c9a1f2ae922448a3bb6e54bd823ad13e'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c9bb037e9949400bae2d61b87b3bb885'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'cost_centre'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'c9f140adbf044e29af2505b135193f04'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'master_status'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'd0e8a437d569400d966a538723466531'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'd1d10e67800d47cba305414b296af6d6'
                        key: {
                            name: 'x_snc_nrm_match_pair'
                            element: 'match_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd3f80554cb3c4916b5a43f0530f381a1'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'sap_status'
                            value: 'dlfl'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'd51f186426344ea6a9493f8529b83750'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'overall_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd63f43a0b6ba45649113a6c5627bf7a0'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'status'
                            value: 'auto_corrected'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd944b29e64b245b8b62143fd6c89f5a1'
                        key: {
                            name: 'var__m_sys_hub_flow_input_de956b00297c4bef8680d11c41b0cd88'
                            element: 'action_text'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'da0317f756844573bb61bf07b7847299'
                        key: {
                            name: 'x_snc_nrm_match_pair'
                            element: 'record_a'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dba19089c5a04843b4aa1242ed3d89ad'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'object_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dc8dfe18e0204f0288f828ec4f7e36fe'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'functional_location'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dcae4d8b553e45819ba9179a04744cb7'
                        key: {
                            name: 'x_snc_nrm_ingestion_log'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'de30ca55ceaf46659d75b2c631719c2e'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'planning_plant'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dedc613cb1a9469e85b5ed85c5a4ef8d'
                        key: {
                            name: 'x_snc_nrm_match_pair'
                            element: 'resolution'
                            value: 'auto_merge'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e168016dc6da416fa755bf027acd917f'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'run_by'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e2d92e9b7f8e4761b15b0fac32b67345'
                        key: {
                            sys_security_acl: 'b5c496c3062642b3aea4b5051cf4d4d1'
                            sys_user_role: {
                                id: '33c507842c214978a2670dc8a5f52bf9'
                                key: {
                                    name: 'x_snc_nrm.steward'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e382adbd2d114ab99b1da765ffd85807'
                        key: {
                            name: 'var__m_sys_hub_flow_input_de956b00297c4bef8680d11c41b0cd88'
                            element: 'sequence'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e3e2998774b640f487091b552dd581e4'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'survivorship_note'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e4c8e165c8d54f7c9adbcf05e2fa6391'
                        key: {
                            sys_security_acl: 'e33019242adf47018cd0279a715fbf44'
                            sys_user_role: {
                                id: '615905327101452091f74093c10a95f7'
                                key: {
                                    name: 'x_snc_nrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e81e0febbbd345f79324e60e0ec0e0fc'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'equipment_desc'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e8f5b70504a94c00987d22584302e2f2'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'issue_type'
                            value: 'inconsistent_value'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e94f736075974019a26ef0fab6c6786d'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'duplicates_found'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e9e77edb8efa4b269d1d2535eac34bd3'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'equipment_desc'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'eaa99384d018461c8a83b5ea1e7277e2'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'issue_type'
                            value: 'invalid_format'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eaa9ed5a993847969f18867f1e8edfc8'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'acquisition_value'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eac443a9541b4e5da90f9a5bbbef27a3'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'eae24977f4f74ec9b0ce1a923e428760'
                        key: {
                            role: {
                                id: '615905327101452091f74093c10a95f7'
                                key: {
                                    name: 'x_snc_nrm.user'
                                }
                            }
                            contains: {
                                id: '4e12e450fb3744d48a767234ee70bf3a'
                                key: {
                                    name: 'canvas_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'eb8cdaddb17c4c5d985740b07cd3bfb7'
                        key: {
                            sys_security_acl: 'b57bbfe9115f4fb5896a66af0c61455c'
                            sys_user_role: {
                                id: '33c507842c214978a2670dc8a5f52bf9'
                                key: {
                                    name: 'x_snc_nrm.steward'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ed10f540baa347d5ae4e8beecf3cc697'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'sap_record'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ee0c371f9d12495994229a5bd9cda775'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'manufacture_year'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eeac9b56243e4a0082756ef43aef6839'
                        key: {
                            name: 'x_snc_nrm_ingestion_log'
                            element: 'stage'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ef0d15269820483297648ee04c19b787'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'issue_type'
                            value: 'missing_mandatory'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'ef1efe751a4846cdbdf22daf094b6dff'
                        key: {
                            name: 'x_snc_nrm_run'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'ef8cceb843a34e959341bbfb3c04eafe'
                        key: {
                            role: {
                                id: '931a6c3a48d44258b3449671055a6d53'
                                key: {
                                    name: 'x_snc_nrm.admin'
                                }
                            }
                            contains: {
                                id: '33c507842c214978a2670dc8a5f52bf9'
                                key: {
                                    name: 'x_snc_nrm.steward'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f09ee71644cc46208abc3c73147cbda1'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'run_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f28459ccd5294b35afe536242cae5a0f'
                        key: {
                            sys_security_acl: 'cfe5bab4e2854063b0e66440f12911de'
                            sys_user_role: {
                                id: '33c507842c214978a2670dc8a5f52bf9'
                                key: {
                                    name: 'x_snc_nrm.steward'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f363ee28d1b849b580fee9e9b4fa396c'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'valid_to'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f39e0e1fd76e40beb9798a97b827ca76'
                        key: {
                            sys_security_acl: 'b041a4b583494350b3cd846e0c4a0db8'
                            sys_user_role: {
                                id: '931a6c3a48d44258b3449671055a6d53'
                                key: {
                                    name: 'x_snc_nrm.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f48b687aa7204de0a6c4d68dde660ce9'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'maintenance_plant'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f4de131777604968a34b2e1f9df780d0'
                        key: {
                            name: 'x_snc_nrm_ingestion_log'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f62329f2283c4f31963f5d6e483f5fce'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'equipment_desc'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f6529fa03c5842ff99e96b078dfd94b5'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'object_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f78759b2d96d4078bd8bc47ed5c5536a'
                        key: {
                            name: 'var__m_sys_hub_flow_input_de956b00297c4bef8680d11c41b0cd88'
                            element: 'duration_ms'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'f80137cd3c2d4d7a98d664fb6b54e8af'
                        key: {
                            role: {
                                id: '33c507842c214978a2670dc8a5f52bf9'
                                key: {
                                    name: 'x_snc_nrm.steward'
                                }
                            }
                            contains: {
                                id: '615905327101452091f74093c10a95f7'
                                key: {
                                    name: 'x_snc_nrm.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f85ba15525ff4d66a52f1b60fb8520d7'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'model_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f8bd8698e89c43e4883bc1aaafaa7de0'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'functional_location'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'f997a9e8d2fa4cd78f9f72505ec29734'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'equipment_category'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'fa252637f70345be884d09178941efb5'
                        key: {
                            name: 'x_snc_nrm_ingestion_log'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fa2d845d3b264a01a81676a70253f1bf'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fa8ca297d72242e59f0d6ab360d0c2fe'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'acquisition_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fb99cddadd6d49c1a5e0585e31bc610a'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'sap_source_ids'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fbd65a2955824d529854ed83b8ab2338'
                        key: {
                            name: 'x_snc_nrm_dq_issue'
                            element: 'status'
                            value: 'suppressed'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fcd12b9cad2a4936a07a72c7a4a8d9aa'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'equipment_category'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fd1677a8cb3a42d9b1c313cedd6c4e6c'
                        key: {
                            name: 'x_snc_nrm_run'
                            element: 'overall_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'fdc141c7b300412fba8b565700036047'
                        key: {
                            model: 'de956b00297c4bef8680d11c41b0cd88'
                            element: 'stage'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fed01577a19b4b5596bf301e79c2ed97'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'survivorship_note'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'fef61ef772ae4cafae63fc2b7b825529'
                        key: {
                            name: 'x_snc_nrm_match_pair'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ff09e51626b0480d9c3bfaa69a630bf2'
                        key: {
                            name: 'x_snc_nrm_sap_equipment'
                            element: 'cost_centre'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ff1461c52a17445fa02f5d6ad92e9ef5'
                        key: {
                            name: 'x_snc_nrm_equipment_master'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'par_dashboard_canvas'
                        id: 'ff2c05419eea4c0b9f9e716cd0cb7046'
                        key: {
                            dashboard: 'd58c479d7621419fa0f96107ff2c656b'
                            dashboard_tab: '9a07b648e8be4ff589d2bdfbab48682a'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ffa5e5efe059419198cb944a780b2f82'
                        key: {
                            name: 'x_snc_nrm_ingestion_log'
                            element: 'timestamp'
                        }
                    },
                ]
            }
        }
    }
}
