import '@servicenow/sdk/global';
import { Record } from '@servicenow/sdk/core';

// Seed data: 13 SAP equipment staging records with deliberate duplicates and data-quality defects.
// Leave ingestion_status = 'not_ingested' and golden_record empty — flows do the rest.

export const nrmSap1 = Record({
    table: 'x_snc_nrm_sap_equipment',
    $id: Now.ID['nrm_sap_1'],
    $meta: { installMethod: 'demo' },
    data: { sap_equipment_no: '000000010000457', equipment_desc: 'Haul Truck 793F #04', equipment_category: 'v', object_type: 'Haul Truck', manufacturer: 'Caterpillar', model_number: '793F', serial_number: 'CAT793F-7XR04521', manufacture_year: '2019', cost_centre: '4410220000', maintenance_plant: '2010', functional_location: 'MKO-MINE-FLEET-HT04', valid_to: '9999-12-31', sap_status: 'active', last_changed_sap: '2026-03-02 00:00:00', ingestion_status: 'not_ingested', company_code: '1000', currency: 'AUD' },
});

export const nrmSap2 = Record({
    table: 'x_snc_nrm_sap_equipment',
    $id: Now.ID['nrm_sap_2'],
    $meta: { installMethod: 'demo' },
    data: { sap_equipment_no: '000000010000981', equipment_desc: 'HAUL TRUCK 793F 04', equipment_category: 'v', object_type: 'Haul Truck', manufacturer: 'CATERPILLAR INC', model_number: '793F', serial_number: 'CAT793F-7XR04521', manufacture_year: '2019', cost_centre: '4410220000', maintenance_plant: '2020', functional_location: 'GLD-PORT-FLEET-HT04', valid_to: '9999-12-31', sap_status: 'active', last_changed_sap: '2025-08-14 00:00:00', ingestion_status: 'not_ingested', company_code: '1000', currency: 'AUD' },
});

export const nrmSap3 = Record({
    table: 'x_snc_nrm_sap_equipment',
    $id: Now.ID['nrm_sap_3'],
    $meta: { installMethod: 'demo' },
    data: { sap_equipment_no: '000000010001120', equipment_desc: 'Excavator PC8000 #02', equipment_category: 'm', object_type: 'Hydraulic Excavator', manufacturer: 'Komatsu', model_number: 'PC8000-6', serial_number: 'PC8000-K2291', manufacture_year: '2021', cost_centre: '4410220000', maintenance_plant: '2010', functional_location: 'MKO-MINE-LOAD-EX02', valid_to: '9999-12-31', sap_status: 'active', last_changed_sap: '2026-01-19 00:00:00', ingestion_status: 'not_ingested', company_code: '1000', currency: 'AUD' },
});

export const nrmSap4 = Record({
    table: 'x_snc_nrm_sap_equipment',
    $id: Now.ID['nrm_sap_4'],
    $meta: { installMethod: 'demo' },
    data: { sap_equipment_no: '000000010001188', equipment_desc: 'Excavator PC8000 #02', equipment_category: 'm', object_type: 'Hydraulic Excavator', manufacturer: 'Komatsu', model_number: 'PC8000-6', serial_number: 'PC8000-K2219', manufacture_year: '2021', cost_centre: '4410220000', maintenance_plant: '2010', functional_location: 'MKO-MINE-LOAD-EX02', valid_to: '9999-12-31', sap_status: 'active', last_changed_sap: '2025-11-03 00:00:00', ingestion_status: 'not_ingested', company_code: '1000', currency: 'AUD' },
});

export const nrmSap5 = Record({
    table: 'x_snc_nrm_sap_equipment',
    $id: Now.ID['nrm_sap_5'],
    $meta: { installMethod: 'demo' },
    data: { sap_equipment_no: '000000010002044', equipment_desc: 'Slurry Pump Warman 650', equipment_category: 'p', object_type: 'Slurry Pump', manufacturer: 'Weir Minerals', model_number: 'Warman 650MCR', serial_number: 'WM650-AU-77310', manufacture_year: '2020', cost_centre: '4410330000', maintenance_plant: '2020', functional_location: 'GLD-PROC-PUMP-A1', valid_to: '9999-12-31', sap_status: 'active', last_changed_sap: '2026-02-10 00:00:00', ingestion_status: 'not_ingested', company_code: '1000', currency: 'AUD' },
});

export const nrmSap6 = Record({
    table: 'x_snc_nrm_sap_equipment',
    $id: Now.ID['nrm_sap_6'],
    $meta: { installMethod: 'demo' },
    data: { sap_equipment_no: '000000010002051', equipment_desc: 'Slurry Pump Warman 550', equipment_category: 'p', object_type: 'Slurry Pump', manufacturer: 'Weir', model_number: 'Warman 550MCR', serial_number: 'WM550-AU-77822', manufacture_year: '2020', cost_centre: '4410330000', maintenance_plant: '2020', functional_location: 'GLD-PROC-PUMP-A2', valid_to: '9999-12-31', sap_status: 'active', last_changed_sap: '2026-02-10 00:00:00', ingestion_status: 'not_ingested', company_code: '1000', currency: 'AUD' },
});

export const nrmSap7 = Record({
    table: 'x_snc_nrm_sap_equipment',
    $id: Now.ID['nrm_sap_7'],
    $meta: { installMethod: 'demo' },
    data: { sap_equipment_no: '000000010002066', equipment_desc: 'Slurry Pump Warman 450', equipment_category: 'p', object_type: 'Slurry Pump', manufacturer: 'WEIR MINERALS AUST', model_number: 'Warman 450MCR', serial_number: 'WM450-AU-77930', manufacture_year: '2022', cost_centre: '4410330000', maintenance_plant: '2020', functional_location: 'GLD-PROC-PUMP-A3', valid_to: '9999-12-31', sap_status: 'active', last_changed_sap: '2026-04-01 00:00:00', ingestion_status: 'not_ingested', company_code: '1000', currency: 'AUD' },
});

export const nrmSap8 = Record({
    table: 'x_snc_nrm_sap_equipment',
    $id: Now.ID['nrm_sap_8'],
    $meta: { installMethod: 'demo' },
    // cost_centre intentionally blank — DQ issue: Missing Mandatory (Critical)
    data: { sap_equipment_no: '000000010003012', equipment_desc: 'Power Transformer 33kV', equipment_category: 'e', object_type: 'Power Transformer', manufacturer: 'ABB', model_number: 'TXN-33-2500', serial_number: 'ABB-33-220041', manufacture_year: '2018', maintenance_plant: '2010', functional_location: 'MKO-SUB-TX-01', valid_to: '9999-12-31', sap_status: 'active', last_changed_sap: '2024-09-22 00:00:00', ingestion_status: 'not_ingested', company_code: '1000', currency: 'AUD' },
});

export const nrmSap9 = Record({
    table: 'x_snc_nrm_sap_equipment',
    $id: Now.ID['nrm_sap_9'],
    $meta: { installMethod: 'demo' },
    // cost_centre = 'CC-4410' — DQ issue: Invalid Format
    data: { sap_equipment_no: '000000010003110', equipment_desc: 'Conveyor Drive CV-12', equipment_category: 'c', object_type: 'Belt Conveyor', manufacturer: 'Sandvik', model_number: 'CV-DRIVE-1200', serial_number: 'SDV-CV12-5567', manufacture_year: '2015', cost_centre: 'CC-4410', maintenance_plant: '2010', functional_location: 'MKO-PROC-CONV-12', valid_to: '9999-12-31', sap_status: 'active', last_changed_sap: '2025-06-30 00:00:00', ingestion_status: 'not_ingested', company_code: '1000', currency: 'AUD' },
});

export const nrmSap10 = Record({
    table: 'x_snc_nrm_sap_equipment',
    $id: Now.ID['nrm_sap_10'],
    $meta: { installMethod: 'demo' },
    // sap_status = 'dlfl', valid_to in past — will be rejected
    data: { sap_equipment_no: '000000010003598', equipment_desc: 'Conveyor Drive CV-03 (OLD)', equipment_category: 'c', object_type: 'Belt Conveyor', manufacturer: 'Sandvik', model_number: 'CV-DRIVE-800', serial_number: 'SDV-CV03-1102', manufacture_year: '2009', cost_centre: '4410330000', maintenance_plant: '2010', functional_location: 'MKO-PROC-CONV-03', valid_to: '2019-12-31', sap_status: 'dlfl', last_changed_sap: '2019-11-15 00:00:00', ingestion_status: 'not_ingested', company_code: '1000', currency: 'AUD' },
});

export const nrmSap11 = Record({
    table: 'x_snc_nrm_sap_equipment',
    $id: Now.ID['nrm_sap_11'],
    $meta: { installMethod: 'demo' },
    data: { sap_equipment_no: '000000010004001', equipment_desc: 'Dragline BE 1370W', equipment_category: 'm', object_type: 'Walking Dragline', manufacturer: 'Bucyrus-Erie', model_number: '1370W', serial_number: 'BE1370-DL-0009', manufacture_year: '2011', cost_centre: '4410220000', maintenance_plant: '2010', functional_location: 'MKO-MINE-DRAG-01', valid_to: '9999-12-31', sap_status: 'active', last_changed_sap: '2025-12-01 00:00:00', ingestion_status: 'not_ingested', company_code: '1000', currency: 'AUD' },
});

export const nrmSap12 = Record({
    table: 'x_snc_nrm_sap_equipment',
    $id: Now.ID['nrm_sap_12'],
    $meta: { installMethod: 'demo' },
    data: { sap_equipment_no: '000000010004220', equipment_desc: 'Loader 994K #01', equipment_category: 'v', object_type: 'Wheel Loader', manufacturer: 'Caterpillar', model_number: '994K', serial_number: 'CAT994K-LL00231', manufacture_year: '2020', cost_centre: '4410220000', maintenance_plant: '2010', functional_location: 'MKO-MINE-LOAD-WL01', valid_to: '9999-12-31', sap_status: 'active', last_changed_sap: '2026-03-18 00:00:00', ingestion_status: 'not_ingested', company_code: '1000', currency: 'AUD' },
});

export const nrmSap13 = Record({
    table: 'x_snc_nrm_sap_equipment',
    $id: Now.ID['nrm_sap_13'],
    $meta: { installMethod: 'demo' },
    data: { sap_equipment_no: '000000010004388', equipment_desc: 'Cooling Pump CP-7', equipment_category: 'p', object_type: 'Centrifugal Pump', manufacturer: 'Grundfos', model_number: 'NK-200-400', serial_number: 'GF-NK200-88123', manufacture_year: '2023', cost_centre: '4410330000', maintenance_plant: '2020', functional_location: 'GLD-PROC-PUMP-B7', valid_to: '9999-12-31', sap_status: 'active', last_changed_sap: '2026-05-05 00:00:00', ingestion_status: 'not_ingested', company_code: '1000', currency: 'AUD' },
});
