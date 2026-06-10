(function executeRule(current, previous) {
    var dep = current.departure_date.getGlideObject();
    var ret = current.return_date.getGlideObject();
    if (dep && ret && ret.compareTo(dep) < 0) {
        current.setAbortAction(true);
        gs.addErrorMessage('Return date must be on or after departure date.');
    }
})(current, previous);
