var inputs = inputs || {};
var outputs = outputs || {};

(function () {
    var scope = 'x_snc_moreau_trv';
    var table = scope + '_request';

    // Generate request number
    var counter = new GlideRecord(table);
    var count = counter.getRowCount() + 1;
    var requestNumber = 'TREQ' + String(1000000 + count);

    // Compute total cost
    var airfare = parseFloat(inputs.estimated_airfare || 0);
    var accommodation = parseFloat(inputs.estimated_accommodation_per_night || 0) *
        parseFloat(inputs.estimated_accommodation_nights || 0);
    var ground = parseFloat(inputs.estimated_ground_transport || 0);
    var meals = parseFloat(inputs.estimated_meals_total || 0);
    var entertainment = parseFloat(inputs.estimated_entertainment || 0);
    var totalCost = airfare + accommodation + ground + meals + entertainment;

    var gr = new GlideRecord(table);
    gr.initialize();
    gr.setValue('short_description', 'Travel to ' + inputs.destination + ' - ' + inputs.business_purpose);
    gr.setValue('destination_city', (inputs.destination || '').split(',')[0].trim());
    gr.setValue('destination_country', (inputs.destination || '').split(',').pop().trim());
    gr.setValue('departure_date', inputs.departure_date);
    gr.setValue('return_date', inputs.return_date);
    gr.setValue('purpose', 'conference');
    gr.setValue('approval_status', 'pending');
    gr.setValue('travel_type', inputs.travel_type || 'domestic');
    gr.setValue('estimated_cost', totalCost);
    gr.setValue('notes', inputs.business_purpose);
    var sysId = gr.insert();

    if (!sysId) {
        outputs.result = JSON.stringify({ error: 'Failed to create travel request.' });
        return;
    }

    var instanceUrl = gs.getProperty('glide.servlet.uri');
    outputs.result = JSON.stringify({
        request_number: requestNumber,
        sys_id: sysId,
        total_estimated_cost: totalCost,
        cost_breakdown: {
            airfare: airfare,
            accommodation: accommodation,
            ground_transport: ground,
            meals: meals,
            entertainment: entertainment,
        },
        record_link: instanceUrl + table + '.do?sys_id=' + sysId,
        message: 'Travel request created successfully.',
    });
})();
