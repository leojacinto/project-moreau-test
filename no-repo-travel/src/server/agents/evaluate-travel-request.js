(function(inputs) {
    var requestNumber = inputs.request_number || '';

    if (!requestNumber) {
        return { error: 'Request number is required.' };
    }

    var gr = new GlideRecordSecure('x_snc_nrt_travel_request');
    gr.addQuery('number', requestNumber);
    gr.setLimit(1);
    gr.query();

    if (!gr.next()) {
        return { error: 'Travel request ' + requestNumber + ' not found.' };
    }

    var sysId = gr.getUniqueValue();
    var country = gr.getValue('destination_country') || '*';
    var estimatedCost = parseFloat(gr.getValue('estimated_cost') || '0');
    var travelType = gr.getValue('travel_type') || 'domestic';

    var policyUtil = new x_snc_nrt.TravelPolicyUtil();
    var financeThreshold = policyUtil.getFinanceThreshold(country);
    var withinPolicy = policyUtil.isWithinPolicy(gr);

    var flags = [];
    var approvalRouting = 'Standard manager approval';
    var nextSteps = [];

    if (travelType === 'international') {
        flags.push('International travel — VP routing required');
        approvalRouting = 'VP and manager approval';
    }

    if (financeThreshold > 0 && estimatedCost > financeThreshold) {
        flags.push('Cost $' + estimatedCost.toFixed(2) + ' exceeds policy threshold of $' + financeThreshold.toFixed(2));
        approvalRouting = 'Finance review required';
        gr.setValue('approval_status', 'finance_review');
        gr.update();
        nextSteps.push('Record updated to Finance Review status');
    }

    var classification = withinPolicy ? 'Within policy' : 'Requires exception';
    if (flags.length === 0) {
        classification = 'Within policy';
        nextSteps.push('Proceed with standard approval workflow');
    } else {
        nextSteps.push('Address flagged items before proceeding');
    }

    var instanceUrl = gs.getProperty('glide.servlet.uri', '');
    var link = instanceUrl + 'nav_to.do?uri=x_snc_nrt_travel_request.do?sys_id=' + sysId;

    return {
        request_number: requestNumber,
        flags: flags.join('; ') || 'None',
        approval_routing: approvalRouting,
        classification: classification,
        next_steps: nextSteps.join('; '),
        record_link: link,
        finance_threshold: financeThreshold,
        estimated_cost: estimatedCost,
    };
})(inputs);
