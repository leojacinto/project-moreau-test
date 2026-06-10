// Populates department from the traveler's sys_user record
var userGr = new GlideRecord('sys_user');
if (userGr.get(current.getValue('traveler'))) {
    current.setValue('department', userGr.getValue('department'));
}
