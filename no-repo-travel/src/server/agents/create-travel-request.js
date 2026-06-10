(function(inputs) {
    var destination = inputs.destination_country || '';
    var departureDate = inputs.departure_date || '';
    var returnDate = inputs.return_date || '';
    var purpose = inputs.purpose || 'other';
    var airfare = parseFloat(inputs.airfare || '0');
    var hotelNights = parseInt(inputs.hotel_nights || '0', 10);
    var hotelPerNight = parseFloat(inputs.hotel_per_night || '0');
    var groundTransport = parseFloat(inputs.ground_transport || '0');
    var meals = parseFloat(inputs.meals || '0');
    var entertainment = parseFloat(inputs.entertainment || '0');
    var travelType = inputs.travel_type || 'international';

    var totalCost = airfare + (hotelNights * hotelPerNight) + groundTransport + meals + entertainment;

    var gr = new GlideRecordSecure('x_snc_nrt_travel_request');
    gr.initialize();
    gr.setValue('traveler', gs.getUserID());
    gr.setValue('destination_country', destination);
    gr.setValue('departure_date', departureDate);
    gr.setValue('return_date', returnDate);
    gr.setValue('purpose', purpose);
    gr.setValue('estimated_cost', totalCost);
    gr.setValue('travel_type', travelType);
    gr.setValue('approval_status', 'pending');

    var sysId = gr.insert();

    if (!sysId) {
        return { error: 'Failed to create travel request. Please check your inputs.' };
    }

    var gr2 = new GlideRecordSecure('x_snc_nrt_travel_request');
    gr2.get(sysId);
    var number = gr2.getValue('number');

    var instanceUrl = gs.getProperty('glide.servlet.uri', '');
    var link = instanceUrl + 'nav_to.do?uri=x_snc_nrt_travel_request.do?sys_id=' + sysId;

    return {
        request_number: number,
        total_cost: totalCost,
        record_link: link,
        message: 'Travel request ' + number + ' created successfully with an estimated cost of $' + totalCost.toFixed(2) + '.',
    };
})(inputs);
