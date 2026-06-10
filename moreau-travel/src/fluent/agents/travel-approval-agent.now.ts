import '@servicenow/sdk/global';
import { AiAgent } from '@servicenow/sdk/core';

AiAgent({
    $id: Now.ID['moreau-travel-approval-agent'],
    name: 'Moreau Travel Policy Agent',
    description: 'Corporate travel policy and approval agent. Helps employees submit travel requests, checks them against company travel policy, and routes for the correct level of approval.',
    agentRole: 'You are the Moreau Travel Policy Agent. You help employees submit travel requests, check them against company travel policy, and route them for the correct level of approval. You are precise about policy rules, helpful with guidance, and you always create the request record before evaluating it.',
    recordType: 'custom',
    securityAcl: { $id: Now.ID['moreau-travel-agent-acl'], type: 'Public' },
    public: true,
    triggerConfig: [],
    tools: [
        {
            name: 'Create Travel Request',
            type: 'script',
            recordType: 'custom',
            script: Now.include('../agents/scripts/create-travel-request.server.js'),
            inputs: [
                { name: 'destination', description: 'Travel destination city and country', mandatory: true },
                { name: 'departure_date', description: 'Departure date in YYYY-MM-DD format', mandatory: true },
                { name: 'return_date', description: 'Return date in YYYY-MM-DD format', mandatory: true },
                { name: 'business_purpose', description: 'Business justification for the travel', mandatory: true },
                { name: 'travel_type', description: 'Type of travel: domestic or international', mandatory: true },
                { name: 'estimated_airfare', description: 'Estimated airfare cost in dollars', mandatory: false },
                { name: 'flight_class_requested', description: 'Flight class: economy, premium_economy, or business', mandatory: false },
                { name: 'estimated_flight_hours', description: 'Estimated flight duration in hours', mandatory: false },
                { name: 'estimated_accommodation_per_night', description: 'Estimated hotel cost per night', mandatory: false },
                { name: 'estimated_accommodation_nights', description: 'Number of nights accommodation needed', mandatory: false },
                { name: 'estimated_ground_transport', description: 'Estimated ground transport cost', mandatory: false },
                { name: 'estimated_meals_total', description: 'Estimated total meals cost', mandatory: false },
                { name: 'estimated_entertainment', description: 'Estimated client entertainment cost', mandatory: false },
            ],
            description: 'STEP 1. Creates a new travel request record with auto-generated number and cost calculation. Returns request number, sys_id, total estimated cost, and record link.',
            displayOutput: true,
            executionMode: 'autopilot',
            maxAutoExecutions: 10,
            outputTransformationStrategy: 'custom',
        },
        {
            name: 'Evaluate Travel Request',
            type: 'script',
            recordType: 'custom',
            script: Now.include('../agents/scripts/evaluate-travel-request.server.js'),
            inputs: [
                { name: 'request_number', description: 'The travel request number to evaluate (e.g. TREQ1000001)', mandatory: true },
            ],
            description: 'STEP 2. Evaluates a travel request against all approval rules. Returns policy assessment, approval routing, flags, and next steps.',
            displayOutput: true,
            executionMode: 'autopilot',
            maxAutoExecutions: 10,
            outputTransformationStrategy: 'custom',
        },
        {
            name: 'Look Up Travel Request',
            type: 'script',
            recordType: 'custom',
            script: Now.include('../agents/scripts/lookup-travel-request.server.js'),
            inputs: [
                { name: 'request_number', description: 'The travel request number to look up', mandatory: false },
                { name: 'traveler_name', description: 'Name to search travel requests by', mandatory: false },
            ],
            description: 'STEP 3. Looks up travel request(s) by number or traveler name. Returns full request details or a summary list.',
            displayOutput: true,
            executionMode: 'autopilot',
            maxAutoExecutions: 10,
            outputTransformationStrategy: 'custom',
        },
    ],
    versionDetails: [{
        name: 'v1',
        number: 1,
        state: 'published',
        instructions: `You are the Moreau Travel Policy Agent. You help employees submit and manage corporate travel requests.

CRITICAL RULES:
- Use your tools to perform all actions. NEVER fabricate results, approval statuses, or record details.
- If a tool returns an error, report the error. Do NOT make up a successful result.
- Every tool response contains a record_link. ALWAYS include this link so the user can open the record directly.
- Show actual data returned: request numbers, dollar amounts, policy flags, approval routing.

STEP 1 - GATHER DETAILS:
When a user wants to submit a travel request, collect:
- Destination (city and country)
- Travel dates (departure and return, YYYY-MM-DD format)
- Business purpose
- Travel type: domestic or international
- Estimated airfare, flight class, estimated flight hours
- Accommodation: nightly rate, number of nights
- Ground transport: type and estimated cost
- Estimated meals total
- Client entertainment: yes/no, estimated amount

STEP 2 - CREATE THE REQUEST:
Once you have all details, run Create Travel Request. Show:
- request_number, total_estimated_cost, cost_breakdown
- record_link so the user can open the record

STEP 3 - EVALUATE AGAINST POLICY:
Immediately after creating, run Evaluate Travel Request with the request_number. Show:
- Each flagged_item with rule and message
- approval_status and approval_routing
- next_steps
- Categorize clearly: within policy (green), flagged (amber), requires exception (red)

STATUS CHECKS:
If a user asks about an existing request, run Look Up Travel Request with request_number or traveler_name.
- Show destination, dates, cost, approval status, and record_link

Always be specific about dollar amounts, policy thresholds, and approval requirements.`,
    }],
});
