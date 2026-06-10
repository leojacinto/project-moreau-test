var TravelPolicyUtil = Class.create();
TravelPolicyUtil.prototype = {
    initialize: function () {},

    getPolicyForCountry: function (country) {
        var gr = new GlideRecord('x_snc_moreau_trv_policy');
        gr.addQuery('applies_to_country', country);
        gr.addQuery('active', true);
        gr.setLimit(1);
        gr.query();
        if (gr.next()) {
            return {
                sys_id: gr.getUniqueValue(),
                policy_name: gr.getValue('policy_name'),
                max_daily_hotel: parseFloat(gr.getValue('max_daily_hotel') || 0),
                max_daily_meals: parseFloat(gr.getValue('max_daily_meals') || 0),
                max_flight_class: gr.getValue('max_flight_class'),
                requires_finance_approval_above: parseFloat(gr.getValue('requires_finance_approval_above') || 0),
            };
        }
        // Fall back to global default (wildcard *)
        gr.initialize();
        gr.addQuery('applies_to_country', '*');
        gr.addQuery('active', true);
        gr.setLimit(1);
        gr.query();
        if (gr.next()) {
            return {
                sys_id: gr.getUniqueValue(),
                policy_name: gr.getValue('policy_name'),
                max_daily_hotel: parseFloat(gr.getValue('max_daily_hotel') || 0),
                max_daily_meals: parseFloat(gr.getValue('max_daily_meals') || 0),
                max_flight_class: gr.getValue('max_flight_class'),
                requires_finance_approval_above: parseFloat(gr.getValue('requires_finance_approval_above') || 0),
            };
        }
        return null;
    },

    getFinanceThreshold: function (country) {
        var policy = this.getPolicyForCountry(country);
        return policy ? policy.requires_finance_approval_above : 5000;
    },

    isWithinPolicy: function (request) {
        var country = request.getValue('destination_country');
        var estimatedCost = parseFloat(request.getValue('estimated_cost') || 0);
        var policy = this.getPolicyForCountry(country);
        if (!policy) return true;
        return estimatedCost <= policy.requires_finance_approval_above;
    },

    type: 'TravelPolicyUtil',
};
