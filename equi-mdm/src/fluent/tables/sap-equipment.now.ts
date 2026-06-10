import '@servicenow/sdk/global';
import {
    Table,
    StringColumn,
    ChoiceColumn,
    DateColumn,
    DateTimeColumn,
    FloatColumn,
    ReferenceColumn,
} from '@servicenow/sdk/core';

export const x_snc_nrm_sap_equipment = Table({
    name: 'x_snc_nrm_sap_equipment',
    label: 'SAP Equipment Master (Staging)',
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    schema: {
        sap_equipment_no: StringColumn({ label: 'SAP Equipment Number (EQUNR)', maxLength: 18 }),
        equipment_desc: StringColumn({ label: 'Description (EQKTX)', maxLength: 40 }),
        equipment_category: ChoiceColumn({
            label: 'Equipment Category (EQTYP)',
            choices: {
                m: { label: 'Machine', sequence: 1 },
                p: { label: 'Pump', sequence: 2 },
                v: { label: 'Vehicle', sequence: 3 },
                e: { label: 'Electrical', sequence: 4 },
                c: { label: 'Conveyor', sequence: 5 },
            },
        }),
        object_type: StringColumn({ label: 'Technical Object Type (EQART)', maxLength: 40 }),
        manufacturer: StringColumn({ label: 'Manufacturer (HERST)', maxLength: 50 }),
        model_number: StringColumn({ label: 'Model / Type (TYPBZ)', maxLength: 40 }),
        serial_number: StringColumn({ label: 'Serial Number (SERGE)', maxLength: 30 }),
        manufacture_year: StringColumn({ label: 'Year Built (BAUJJ)', maxLength: 4 }),
        inventory_number: StringColumn({ label: 'Inventory Number (INVNR)', maxLength: 25 }),
        maintenance_plant: StringColumn({ label: 'Maintenance Plant (SWERK)', maxLength: 4 }),
        planning_plant: StringColumn({ label: 'Planning Plant (IWERK)', maxLength: 4 }),
        functional_location: StringColumn({ label: 'Functional Location (TPLNR)', maxLength: 40 }),
        location: StringColumn({ label: 'Location (STORT)', maxLength: 40 }),
        cost_centre: StringColumn({ label: 'Cost Centre (KOSTL)', maxLength: 10 }),
        company_code: StringColumn({ label: 'Company Code (BUKRS)', maxLength: 4 }),
        acquisition_date: DateColumn({ label: 'Acquisition Date (ANSDT)' }),
        acquisition_value: FloatColumn({ label: 'Acquisition Value (ANSWT)' }),
        currency: StringColumn({ label: 'Currency (WAERS)', maxLength: 5 }),
        planner_group: StringColumn({ label: 'Planner Group (INGRP)', maxLength: 3 }),
        valid_to: DateColumn({ label: 'Valid To (DATBI)' }),
        sap_status: ChoiceColumn({
            label: 'SAP System Status',
            choices: {
                active: { label: 'Active', sequence: 1 },
                inac: { label: 'Inactive (INAC)', sequence: 2 },
                dlfl: { label: 'Deletion Flag (DLFL)', sequence: 3 },
            },
        }),
        last_changed_sap: DateTimeColumn({ label: 'Last Changed in SAP (AEDAT)' }),
        ingestion_status: ChoiceColumn({
            label: 'Ingestion Status',
            choices: {
                not_ingested: { label: 'Not Ingested', sequence: 1 },
                ingested: { label: 'Ingested', sequence: 2 },
                matched: { label: 'Matched', sequence: 3 },
                merged: { label: 'Merged', sequence: 4 },
                promoted: { label: 'Promoted', sequence: 5 },
                rejected: { label: 'Rejected', sequence: 6 },
            },
        }),
        golden_record: ReferenceColumn({
            label: 'Golden Master Record',
            referenceTable: 'x_snc_nrm_equipment_master',
        }),
    },
});
