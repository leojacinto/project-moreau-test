import '@servicenow/sdk/global'
import { AiAgent } from '@servicenow/sdk/core'

export const nrtCorporateTravelAgent = AiAgent({
    $id: Now.ID['nrt_corporate_travel_agent'],
    name: 'Corporate Travel Policy Agent',
    description: 'Helps employees create travel requests, evaluate them against policy, and look up existing requests.',
    agentRole: 'You are a corporate travel coordinator. You help employees submit travel requests, check whether requests comply with company policy, and look up existing requests. You always use your tools — never fabricate data or request numbers.',
    recordType: 'custom',
    channel: 'nap_and_va',
    agentDescriptor: 'created_by_build_agent',
    processingMessage: 'Reviewing your travel request...',
    postProcessingMessage: 'Done. Here are the details:',

    securityAcl: {
        $id: Now.ID['nrt_travel_agent_acl'],
        type: 'Any authenticated user',
    },

    dataAccess: {
        roleMap: ['x_snc_nrt.user', 'x_snc_nrt.approver', 'x_snc_nrt.finance', 'x_snc_nrt.admin'],
    },

    versionDetails: [
        {
            name: 'V1',
            number: 1,
            state: 'published',
            instructions: `You are a Corporate Travel Policy Agent. Follow these steps exactly:

1. Determine what the user wants: create a request, evaluate a request, or look up a request.
2. DO NOT PROCEED without collecting all required inputs first.
3. For CREATE: collect destination country, departure date, return date, business purpose, travel type (domestic/international), and cost breakdown (airfare, hotel nights, hotel per night rate, ground transport, meals, entertainment). Then call the Create Travel Request tool.
4. For EVALUATE: collect the request number. Call the Evaluate Travel Request tool. Report flags, approval routing, and classification as: within policy / flagged / requires exception.
5. For LOOKUP: collect the request number OR traveler name. Call the Look Up Travel Request tool. List all results with record links.
6. Always show the exact dollar amounts from the tool output. Never round or omit.
7. Always include the record link in your response.
8. If a request is flagged for Finance Review, explain what that means and what the threshold is.
9. NEVER fabricate request numbers, costs, or policy thresholds. Only use data returned by tools.`,
        },
    ],

    tools: [
        {
            name: 'Create Travel Request',
            description: 'Creates a new travel request with destination, dates, purpose, and cost breakdown.',
            type: 'script',
            active: true,
            executionMode: 'copilot',
            recordType: 'custom',
            preMessage: 'Creating your travel request...',
            postMessage: 'Travel request created.',
            inputs: [
                { name: 'destination_country', description: 'Destination country', mandatory: true },
                { name: 'departure_date', description: 'Departure date (YYYY-MM-DD)', mandatory: true },
                { name: 'return_date', description: 'Return date (YYYY-MM-DD)', mandatory: true },
                { name: 'purpose', description: 'Business purpose: conference, client_meeting, training, internal, or other', mandatory: true },
                { name: 'travel_type', description: 'domestic or international', mandatory: true },
                { name: 'airfare', description: 'Airfare cost in USD', mandatory: false },
                { name: 'hotel_nights', description: 'Number of hotel nights', mandatory: false },
                { name: 'hotel_per_night', description: 'Hotel cost per night in USD', mandatory: false },
                { name: 'ground_transport', description: 'Ground transport cost in USD', mandatory: false },
                { name: 'meals', description: 'Total meals cost in USD', mandatory: false },
                { name: 'entertainment', description: 'Entertainment cost in USD', mandatory: false },
            ],
            script: Now.include('../../server/agents/create-travel-request.js'),
        },
        {
            name: 'Evaluate Travel Request',
            description: 'Evaluates a travel request against approval rules and policy thresholds. Updates the record if escalation is needed.',
            type: 'script',
            active: true,
            executionMode: 'copilot',
            recordType: 'custom',
            preMessage: 'Evaluating travel request against policy...',
            postMessage: 'Evaluation complete.',
            inputs: [
                { name: 'request_number', description: 'Travel request number (e.g. TREQ0001001)', mandatory: true },
            ],
            script: Now.include('../../server/agents/evaluate-travel-request.js'),
        },
        {
            name: 'Look Up Travel Request',
            description: 'Looks up travel requests by request number or traveler name. Returns details and record links.',
            type: 'script',
            active: true,
            executionMode: 'autopilot',
            recordType: 'custom',
            preMessage: 'Searching for travel requests...',
            postMessage: 'Search complete.',
            inputs: [
                { name: 'request_number', description: 'Travel request number', mandatory: false },
                { name: 'traveler_name', description: 'Traveler full name or partial name', mandatory: false },
            ],
            script: Now.include('../../server/agents/lookup-travel-request.js'),
        },
    ],

    triggerConfig: [],
})
