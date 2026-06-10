var TravelDelegationUtil = Class.create();
TravelDelegationUtil.prototype = {
    initialize: function () {},

    getActiveDelegate: function (managerSysId) {
        var today = new GlideDate();
        var gr = new GlideRecord('x_snc_moreau_trv_delegation');
        gr.addQuery('delegator', managerSysId);
        gr.addQuery('active', true);
        gr.addQuery('start_date', '<=', today.getByFormat('yyyy-MM-dd'));
        gr.addQuery('end_date', '>=', today.getByFormat('yyyy-MM-dd'));
        gr.setLimit(1);
        gr.query();
        if (gr.next()) {
            return gr.getValue('delegate');
        }
        return null;
    },

    isDelegationActive: function (delegatorSysId, checkDate) {
        var gr = new GlideRecord('x_snc_moreau_trv_delegation');
        gr.addQuery('delegator', delegatorSysId);
        gr.addQuery('active', true);
        gr.addQuery('start_date', '<=', checkDate);
        gr.addQuery('end_date', '>=', checkDate);
        gr.setLimit(1);
        gr.query();
        return gr.next();
    },

    type: 'TravelDelegationUtil',
};
