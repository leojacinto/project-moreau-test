var inputs = inputs || {};
var outputs = outputs || {};

(function () {
    var scope = 'x_snc_moreau_trv';
    var table = scope + '_request';
    var requestNumber = inputs.request_number;

    var gr = new GlideRecord(table);
    gr.addQuery('number', requestNumber);
    gr.setLimit(1);
    gr.query();

    if (!gr.next()) {
        outputs.result = JSON.stringify({ error: 'Travel request not found: ' + requestNumber });
        return;
    }

    var flags = [];
    var approvalRequired = [];
    var approvalRouting = 'manager';
    var travelType = gr.getValue('travel_type');
    var estimatedCost = parseFloat(gr.getValue('estimated_cost') || 0);
    var destinationCountry = gr.getValue('destination_country') || '';

    if (travelType === 'international') {
        approvalRouting = 'vp';
        approvalRequired.push({ rule: 'International Travel', message: 'International travel requires VP-level approval.' });
    }

    var util = new TravelPolicyUtil();
    var policy = util.getPolicyForCountry(destinationCountry);
    var threshold = policy ? policy.requires_finance_approval_above : 5000;

    if (estimatedCost > threshold) {
        flags.push({
            rule: 'Finance Threshold',
            message: 'Estimated cost $' + estimatedCost + ' exceeds finance threshold $' + threshold + '.',
        });
        gr.setValue('approval_status', 'finance_review');
    }

    var policyAssessment = flags.length === 0
        ? 'All items within policy.'
        : flags.map(function (f) { return '[FLAG] ' + f.message; }).join(' ');

    gr.setValue('notes', gr.getValue('notes') + '\n\nPolicy Assessment: ' + policyAssessment);
    gr.update();

    var instanceUrl = gs.getProperty('glide.servlet.uri');
    outputs.result = JSON.stringify({
        request_number: requestNumber,
        flagged_items: flags,
        approval_required: approvalRequired,
        approval_routing: approvalRouting,
        approval_status: gr.getValue('approval_status'),
        policy_assessment: policyAssessment,
        record_link: instanceUrl + table + '.do?sys_id=' + gr.getUniqueValue(),
        next_steps: approvalRouting === 'vp'
            ? ['Obtain VP approval before travel.']
            : ['Obtain manager approval before travel.'],
    });
})();
