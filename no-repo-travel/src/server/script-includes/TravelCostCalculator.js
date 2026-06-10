var TravelCostCalculator = Class.create();
TravelCostCalculator.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    getEstimatedDailyRate: function() {
        var country = this.getParameter('sysparm_country');
        var expenseType = this.getParameter('sysparm_expense_type');

        var policyUtil = new x_snc_nrt.TravelPolicyUtil();
        var policy = policyUtil.getPolicyForCountry(country);

        if (!policy) {
            return '0';
        }

        if (expenseType === 'hotel') {
            return policy.getValue('max_daily_hotel') || '0';
        }
        if (expenseType === 'meals') {
            return policy.getValue('max_daily_meals') || '0';
        }
        return '0';
    },

    getPolicyLimit: function() {
        var country = this.getParameter('sysparm_country');
        var policyUtil = new x_snc_nrt.TravelPolicyUtil();
        return String(policyUtil.getFinanceThreshold(country));
    },

    type: 'TravelCostCalculator',
});
