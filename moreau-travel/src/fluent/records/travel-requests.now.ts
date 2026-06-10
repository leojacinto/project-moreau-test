import '@servicenow/sdk/global';
import { Record } from '@servicenow/sdk/core';

export const travelReq1 = Record({
    $id: Now.ID['trv-req-sydney'],
    table: 'x_snc_moreau_trv_request',
    data: {
        short_description: 'Travel to Sydney for Q3 Platform Workshop',
        traveler: '6816f79cc0a8016401c5a33be04be441',
        destination_city: 'Sydney',
        destination_country: 'Australia',
        departure_date: '2026-07-14',
        return_date: '2026-07-16',
        purpose: 'client_meeting',
        travel_type: 'domestic',
        estimated_cost: 1450,
        approval_status: 'approved',
        notes: 'Client workshop for Q3 platform rollout. All items within policy.',
    },
});

export const travelReq2 = Record({
    $id: Now.ID['trv-req-tokyo'],
    table: 'x_snc_moreau_trv_request',
    data: {
        short_description: 'Travel to Tokyo for Partner Summit',
        traveler: '6816f79cc0a8016401c5a33be04be441',
        destination_city: 'Tokyo',
        destination_country: 'Japan',
        departure_date: '2026-08-04',
        return_date: '2026-08-10',
        purpose: 'conference',
        travel_type: 'international',
        estimated_cost: 9180,
        approval_status: 'finance_review',
        notes: 'Partner summit with NTT Data. Exceeds finance threshold — requires finance review.',
    },
});

export const travelReq3 = Record({
    $id: Now.ID['trv-req-london'],
    table: 'x_snc_moreau_trv_request',
    data: {
        short_description: 'Travel to London for Knowledge Conference',
        traveler: '6816f79cc0a8016401c5a33be04be441',
        destination_city: 'London',
        destination_country: 'United Kingdom',
        departure_date: '2026-09-15',
        return_date: '2026-09-22',
        purpose: 'conference',
        travel_type: 'international',
        estimated_cost: 8885,
        approval_status: 'pending',
        notes: 'ServiceNow Knowledge conference. VP approval required for international travel.',
    },
});

export const travelReq4 = Record({
    $id: Now.ID['trv-req-melbourne'],
    table: 'x_snc_moreau_trv_request',
    data: {
        short_description: 'Travel to Melbourne for Sales Enablement Workshop',
        traveler: '6816f79cc0a8016401c5a33be04be441',
        destination_city: 'Melbourne',
        destination_country: 'Australia',
        departure_date: '2026-07-28',
        return_date: '2026-07-30',
        purpose: 'training',
        travel_type: 'domestic',
        estimated_cost: 1085,
        approval_status: 'approved',
        notes: 'ANZ regional sales enablement. All items within policy.',
    },
});

export const travelReq5 = Record({
    $id: Now.ID['trv-req-sf'],
    table: 'x_snc_moreau_trv_request',
    data: {
        short_description: 'Travel to San Francisco for QBR with Salesforce',
        traveler: '6816f79cc0a8016401c5a33be04be441',
        destination_city: 'San Francisco',
        destination_country: 'United States',
        departure_date: '2026-10-07',
        return_date: '2026-10-11',
        purpose: 'client_meeting',
        travel_type: 'international',
        estimated_cost: 9780,
        approval_status: 'pending',
        notes: 'Quarterly business review with Salesforce partnership team. VP approval required.',
    },
});
