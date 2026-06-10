(function(inputs) {
    var requestNumber = inputs.request_number || '';
    var travelerName = inputs.traveler_name || '';

    if (!requestNumber && !travelerName) {
        return { error: 'Provide a request number or traveler name to search.' };
    }

    var instanceUrl = gs.getProperty('glide.servlet.uri', '');
    var gr = new GlideRecordSecure('x_snc_nrt_travel_request');

    if (requestNumber) {
        gr.addQuery('number', requestNumber);
    } else {
        var userGr = new GlideRecordSecure('sys_user');
        userGr.addQuery('name', 'CONTAINS', travelerName);
        userGr.query();
        var userIds = [];
        while (userGr.next()) {
            userIds.push(userGr.getUniqueValue());
        }
        if (userIds.length === 0) {
            return { error: 'No user found matching "' + travelerName + '".' };
        }
        gr.addQuery('traveler', 'IN', userIds.join(','));
    }

    gr.orderByDesc('sys_created_on');
    gr.setLimit(10);
    gr.query();

    if (!gr.hasNext()) {
        return { message: 'No travel requests found matching your search.', results: [] };
    }

    var results = [];
    while (gr.next()) {
        var sysId = gr.getUniqueValue();
        results.push({
            number: gr.getValue('number'),
            traveler: gr.getDisplayValue('traveler'),
            destination_country: gr.getValue('destination_country'),
            departure_date: gr.getValue('departure_date'),
            return_date: gr.getValue('return_date'),
            estimated_cost: gr.getValue('estimated_cost'),
            approval_status: gr.getDisplayValue('approval_status'),
            purpose: gr.getDisplayValue('purpose'),
            record_link: instanceUrl + 'nav_to.do?uri=x_snc_nrt_travel_request.do?sys_id=' + sysId,
        });
    }

    return {
        count: results.length,
        results: results,
    };
})(inputs);
