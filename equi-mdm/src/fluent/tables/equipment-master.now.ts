import '@servicenow/sdk/global';
import {
    Table,
    StringColumn,
    ChoiceColumn,
    DateColumn,
    FloatColumn,
    IntegerColumn,
} from '@servicenow/sdk/core';

export const x_snc_nrm_equipment_master = Table({
    name: 'x_snc_nrm_equipment_master',
    label: 'Equipment Golden Master',
    allowWebServiceAccess: true,
    accessibleFrom: 'public',
    autoNumber: {
        prefix: 'EQM',
        number: 1000,
        numberOfDigits: 7,
    },
    schema: {
        number: StringColumn({ label: 'Master ID', maxLength: 20 }),
        equipment_desc: StringColumn({ label: 'Description', maxLength: 40 }),
        object_type: StringColumn({ label: 'Technical Object Type', maxLength: 40 }),
        manufacturer: StringColumn({ label: 'Manufacturer (standardised)', maxLength: 50 }),
        model_number: StringColumn({ label: 'Model', maxLength: 40 }),
        serial_number: StringColumn({ label: 'Serial Number', maxLength: 30 }),
        manufacture_year: StringColumn({ label: 'Year Built', maxLength: 4 }),
        maintenance_plant: StringColumn({ label: 'Maintenance Plant', maxLength: 4 }),
        functional_location: StringColumn({ label: 'Functional Location', maxLength: 40 }),
        location: StringColumn({ label: 'Location', maxLength: 40 }),
        cost_centre: StringColumn({ label: 'Cost Centre', maxLength: 10 }),
        company_code: StringColumn({ label: 'Company Code', maxLength: 4 }),
        acquisition_date: DateColumn({ label: 'Acquisition Date' }),
        acquisition_value: FloatColumn({ label: 'Acquisition Value' }),
        currency: StringColumn({ label: 'Currency', maxLength: 5 }),
        sap_source_ids: StringColumn({ label: 'Source SAP Equipment Numbers', maxLength: 200 }),
        data_quality_score: IntegerColumn({ label: 'Data Quality Score' }),
        master_status: ChoiceColumn({
            label: 'Master Status',
            choices: {
                draft: { label: 'Draft', sequence: 1 },
                published: { label: 'Published', sequence: 2 },
                held: { label: 'Held', sequence: 3 },
                retired: { label: 'Retired', sequence: 4 },
            },
        }),
        survivorship_note: StringColumn({ label: 'Survivorship Note', maxLength: 500 }),
    },
});
