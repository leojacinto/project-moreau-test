var TravelPolicyUtil = Class.create();
TravelPolicyUtil.prototype = {
    initialize: function() {},

    getPolicyForCountry: function(country) {
        var gr = new GlideRecord('x_snc_nrt_travel_policy');
        gr.addQuery('active', true);
        gr.addQuery('applies_to_country', country);
        gr.setLimit(1);
        gr.query();
        if (gr.next()) {
            return gr;
        }
        // Fall back to wildcard
        var gr2 = new GlideRecord('x_snc_nrt_travel_policy');
        gr2.addQuery('active', true);
        gr2.addQuery('applies_to_country', '*');
        gr2.setLimit(1);
        gr2.query();
        if (gr2.next()) {
            return gr2;
        }
        return null;
    },

    getFinanceThreshold: function(country) {
        var policy = this.getPolicyForCountry(country);
        if (policy) {
            return parseFloat(policy.getValue('requires_finance_approval_above') || '0');
        }
        return 0;
    },

    isWithinPolicy: function(request) {
        var country = request.getValue('destination_country') || '*';
        var estimatedCost = parseFloat(request.getValue('estimated_cost') || '0');
        var policy = this.getPolicyForCountry(country);
        if (!policy) {
            return true;
        }
        var threshold = parseFloat(policy.getValue('requires_finance_approval_above') || '0');
        return threshold <= 0 || estimatedCost <= threshold;
    },

    type: 'TravelPolicyUtil',
};
