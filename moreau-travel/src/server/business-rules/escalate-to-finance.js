(function executeRule(current, previous) {
    if (current.approval_status.changesTo('approved')) {
        var util = new TravelPolicyUtil();
        var threshold = util.getFinanceThreshold(current.getValue('destination_country'));
        var estimatedCost = parseFloat(current.getValue('estimated_cost') || 0);
        if (estimatedCost > threshold) {
            current.approval_status = 'finance_review';
        }
    }
})(current, previous);
