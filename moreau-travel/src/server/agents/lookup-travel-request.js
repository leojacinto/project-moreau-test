var inputs = inputs || {};
var outputs = outputs || {};

(function () {
    var scope = 'x_snc_moreau_trv';
    var table = scope + '_request';
    var instanceUrl = gs.getProperty('glide.servlet.uri');

    if (inputs.request_number) {
        var gr = new GlideRecord(table);
        gr.addQuery('number', inputs.request_number);
        gr.setLimit(1);
        gr.query();
        if (!gr.next()) {
            outputs.result = JSON.stringify({ error: 'Request not found: ' + inputs.request_number });
            return;
        }
        outputs.result = JSON.stringify({
            request_number: gr.getValue('number'),
            sys_id: gr.getUniqueValue(),
            destination_city: gr.getValue('destination_city'),
            destination_country: gr.getValue('destination_country'),
            departure_date: gr.getValue('departure_date'),
            return_date: gr.getValue('return_date'),
            estimated_cost: gr.getValue('estimated_cost'),
            actual_cost: gr.getValue('actual_cost'),
            travel_type: gr.getValue('travel_type'),
            approval_status: gr.getValue('approval_status'),
            notes: gr.getValue('notes'),
            record_link: instanceUrl + table + '.do?sys_id=' + gr.getUniqueValue(),
        });
    } else if (inputs.traveler_name) {
        var list = [];
        var ga = new GlideRecord(table);
        ga.addQuery('short_description', 'CONTAINS', inputs.traveler_name);
        ga.setLimit(10);
        ga.query();
        while (ga.next()) {
            list.push({
                request_number: ga.getValue('number'),
                destination_city: ga.getValue('destination_city'),
                departure_date: ga.getValue('departure_date'),
                estimated_cost: ga.getValue('estimated_cost'),
                approval_status: ga.getValue('approval_status'),
                record_link: instanceUrl + table + '.do?sys_id=' + ga.getUniqueValue(),
            });
        }
        outputs.result = JSON.stringify({ requests: list, count: list.length });
    } else {
        outputs.result = JSON.stringify({ error: 'Provide request_number or traveler_name.' });
    }
})();
