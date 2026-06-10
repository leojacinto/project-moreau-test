import '@servicenow/sdk/global';
import {
    Table,
    StringColumn,
    ChoiceColumn,
    DateColumn,
    DateTimeColumn,
    DecimalColumn,
    ReferenceColumn,
} from '@servicenow/sdk/core';

export const x_snc_eqmdm_sap_equipment = Table({
    name: 'x_snc_eqmdm_sap_equipment',
    label: 'SAP Equipment (Staging)',
    schema: {
        sap_equipment_no: StringColumn({ label: 'SAP Equipment Number (EQUNR)', maxLength: 18 }),
        equipment_desc: StringColumn({ label: 'Description (EQKTX)', maxLength: 40 }),
        equipment_category: ChoiceColumn({
            label: 'Equipment Category (EQTYP)',
            choices: {
                machine: 'Machine (M)',
                pump: 'Pump (P)',
                vehicle: 'Vehicle (V)',
                electrical: 'Electrical (E)',
                conveyor: 'Conveyor (C)',
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
        acquisition_value: DecimalColumn({ label: 'Acquisition Value (ANSWT)' }),
        currency: StringColumn({ label: 'Currency (WAERS)', maxLength: 5 }),
        planner_group: StringColumn({ label: 'Planner Group (INGRP)', maxLength: 3 }),
        valid_to: DateColumn({ label: 'Valid To (DATBI)' }),
        sap_status: ChoiceColumn({
            label: 'SAP System Status',
            choices: {
                active: 'Active',
                inactive: 'Inactive (INAC)',
                deletion_flag: 'Deletion Flag (DLFL)',
            },
        }),
        last_changed_sap: DateTimeColumn({ label: 'Last Changed in SAP (AEDAT)' }),
        ingestion_status: ChoiceColumn({
            label: 'Ingestion Status',
            defaultValue: 'not_ingested',
            choices: {
                not_ingested: 'Not Ingested',
                ingested: 'Ingested',
                matched: 'Matched',
                merged: 'Merged',
                promoted: 'Promoted',
                rejected: 'Rejected',
            },
        }),
        golden_record: ReferenceColumn({
            label: 'Golden Master Record',
            referenceTable: 'x_snc_eqmdm_equipment_master',
        }),
    },
});
