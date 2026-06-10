// When a request is approved, check if the cost exceeds the policy threshold.
// If so, escalate to Finance Review.
if (current.getValue('approval_status') === 'approved' &&
    previous.getValue('approval_status') !== 'approved') {
    var estimatedCost = parseFloat(current.getValue('estimated_cost') || '0');
    var country = current.getValue('destination_country') || '*';

    var policyGr = new GlideRecord('x_snc_nrt_travel_policy');
    policyGr.addQuery('active', true);
    var qc = policyGr.addQuery('applies_to_country', country);
    qc.addOrCondition('applies_to_country', '*');
    policyGr.orderByDesc('applies_to_country'); // country-specific wins over wildcard
    policyGr.setLimit(1);
    policyGr.query();

    if (policyGr.next()) {
        var threshold = parseFloat(policyGr.getValue('requires_finance_approval_above') || '0');
        if (threshold > 0 && estimatedCost > threshold) {
            current.setValue('approval_status', 'finance_review');
            current.update();
        }
    }
}
