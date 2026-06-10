var TravelDelegationUtil = Class.create();
TravelDelegationUtil.prototype = {
    initialize: function() {},

    getActiveDelegate: function(managerSysId) {
        var today = new GlideDate();
        today.setValue(new GlideDateTime().getDate().getValue());

        var gr = new GlideRecord('x_snc_nrt_travel_delegation');
        gr.addQuery('delegator', managerSysId);
        gr.addQuery('active', true);
        gr.addQuery('start_date', '<=', today.getValue());
        gr.addQuery('end_date', '>=', today.getValue());
        gr.setLimit(1);
        gr.query();
        if (gr.next()) {
            return gr.getValue('delegate');
        }
        return null;
    },

    isDelegationActive: function(delegatorSysId, date) {
        var gr = new GlideRecord('x_snc_nrt_travel_delegation');
        gr.addQuery('delegator', delegatorSysId);
        gr.addQuery('active', true);
        gr.addQuery('start_date', '<=', date);
        gr.addQuery('end_date', '>=', date);
        gr.setLimit(1);
        gr.query();
        return gr.hasNext();
    },

    type: 'TravelDelegationUtil',
};
