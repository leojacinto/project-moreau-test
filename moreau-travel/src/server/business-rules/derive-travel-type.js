(function executeRule(current, previous) {
    var destinationCountry = current.getValue('destination_country') || '';
    if (!destinationCountry) return;
    var travelerCountry = '';
    if (!current.traveler.nil()) {
        var user = new GlideRecord('sys_user');
        if (user.get(current.getValue('traveler'))) {
            travelerCountry = user.getValue('country') || '';
        }
    }
    if (!travelerCountry || destinationCountry.toLowerCase() === travelerCountry.toLowerCase()) {
        current.travel_type = 'domestic';
    } else {
        current.travel_type = 'international';
    }
})(current, previous);
