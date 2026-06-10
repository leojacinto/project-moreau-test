import '@servicenow/sdk/global';
import { Record } from '@servicenow/sdk/core';

// Admin user sys_id used as default traveler for demo data
const ADMIN_USER = '6816f79cc0a8016401c5a33be04be441';

export const nrtReq1 = Record({
    table: 'x_snc_nrt_travel_request',
    $id: Now.ID['nrt_req_1'],
    $meta: { installMethod: 'demo' },
    data: {
        short_description: 'Travel to Chicago for Annual Technology Conference',
        traveler: ADMIN_USER,
        destination_city: 'Chicago',
        destination_country: 'US',
        departure_date: '2026-07-10',
        return_date: '2026-07-13',
        estimated_cost: 1800,
        purpose: 'conference',
        approval_status: 'approved',
        travel_type: 'domestic',
        requires_visa: false,
        notes: 'Annual Technology Conference in Chicago.',
    },
});

export const nrtReq2 = Record({
    table: 'x_snc_nrt_travel_request',
    $id: Now.ID['nrt_req_2'],
    $meta: { installMethod: 'demo' },
    data: {
        short_description: 'Travel to London for Q3 business review',
        traveler: ADMIN_USER,
        destination_city: 'London',
        destination_country: 'UK',
        departure_date: '2026-08-05',
        return_date: '2026-08-09',
        estimated_cost: 4500,
        purpose: 'client_meeting',
        approval_status: 'pending',
        travel_type: 'international',
        requires_visa: false,
        notes: 'Q3 business review with London client.',
    },
});

export const nrtReq3 = Record({
    table: 'x_snc_nrt_travel_request',
    $id: Now.ID['nrt_req_3'],
    $meta: { installMethod: 'demo' },
    data: {
        short_description: 'Travel to Singapore for Leadership Development Program',
        traveler: ADMIN_USER,
        destination_city: 'Singapore',
        destination_country: 'SG',
        departure_date: '2026-09-01',
        return_date: '2026-09-07',
        estimated_cost: 9200,
        purpose: 'training',
        approval_status: 'finance_review',
        travel_type: 'international',
        requires_visa: true,
        notes: 'Leadership development program in Singapore. Visa required.',
    },
});

export const nrtReq4 = Record({
    table: 'x_snc_nrt_travel_request',
    $id: Now.ID['nrt_req_4'],
    $meta: { installMethod: 'demo' },
    data: {
        short_description: 'Travel to Berlin for cross-team collaboration sprint',
        traveler: ADMIN_USER,
        destination_city: 'Berlin',
        destination_country: 'DE',
        departure_date: '2026-07-20',
        return_date: '2026-07-23',
        estimated_cost: 3100,
        purpose: 'internal',
        approval_status: 'approved',
        travel_type: 'international',
        requires_visa: false,
        notes: 'Cross-team collaboration sprint with Germany office.',
    },
});

export const nrtReq5 = Record({
    table: 'x_snc_nrt_travel_request',
    $id: Now.ID['nrt_req_5'],
    $meta: { installMethod: 'demo' },
    data: {
        short_description: 'One-day client visit to New York for contract negotiation',
        traveler: ADMIN_USER,
        destination_city: 'New York',
        destination_country: 'US',
        departure_date: '2026-08-15',
        return_date: '2026-08-16',
        estimated_cost: 950,
        purpose: 'client_meeting',
        approval_status: 'pending',
        travel_type: 'domestic',
        requires_visa: false,
        notes: 'One-day client visit for contract negotiation.',
    },
});
