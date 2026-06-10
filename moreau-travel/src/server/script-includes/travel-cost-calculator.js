var TravelCostCalculator = Class.create();
TravelCostCalculator.prototype = Object.extendsObject(AbstractAjaxProcessor, {
    getEstimatedDailyRate: function () {
        var country = this.getParameter('sysparm_country');
        var expenseType = this.getParameter('sysparm_expense_type');
        var util = new TravelPolicyUtil();
        var policy = util.getPolicyForCountry(country);
        if (!policy) return JSON.stringify({ rate: 0 });
        var rate = expenseType === 'hotel' ? policy.max_daily_hotel : policy.max_daily_meals;
        return JSON.stringify({ rate: rate });
    },

    getPolicyLimit: function () {
        var country = this.getParameter('sysparm_country');
        var util = new TravelPolicyUtil();
        var policy = util.getPolicyForCountry(country);
        if (!policy) return JSON.stringify({ threshold: 5000 });
        return JSON.stringify({ threshold: policy.requires_finance_approval_above });
    },

    type: 'TravelCostCalculator',
});
