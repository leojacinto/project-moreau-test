(function executeRule(current, previous) {
    if (current.traveler.nil()) return;
    var user = new GlideRecord('sys_user');
    if (user.get(current.getValue('traveler'))) {
        if (!user.department.nil()) {
            current.department = user.getValue('department');
        }
    }
})(current, previous);
