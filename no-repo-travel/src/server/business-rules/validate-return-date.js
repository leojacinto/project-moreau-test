// Aborts if return date is before departure date
var departureDate = current.getValue('departure_date');
var returnDate = current.getValue('return_date');
if (departureDate && returnDate) {
    var dept = new GlideDateTime(departureDate);
    var ret = new GlideDateTime(returnDate);
    if (ret.before(dept)) {
        current.setAbortAction(true);
        gs.addErrorMessage('Return date must be on or after departure date.');
    }
}
