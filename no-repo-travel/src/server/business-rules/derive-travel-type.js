// Sets travel_type to Domestic or International by comparing destination country
// against the traveler's country on sys_user
var destinationCountry = current.getValue('destination_country');
if (destinationCountry) {
    var userGr = new GlideRecord('sys_user');
    if (userGr.get(current.getValue('traveler'))) {
        var userCountry = userGr.getValue('country');
        if (userCountry && destinationCountry.toLowerCase() === userCountry.toLowerCase()) {
            current.setValue('travel_type', 'domestic');
        } else {
            current.setValue('travel_type', 'international');
        }
    }
}
