import '@servicenow/sdk/global';
import { Role } from '@servicenow/sdk/core';

export const nrmUser = Role({ name: 'x_snc_nrm.user', containsRoles: ['canvas_user'] });
export const nrmSteward = Role({ name: 'x_snc_nrm.steward', containsRoles: [nrmUser] });
export const nrmAdmin = Role({ name: 'x_snc_nrm.admin', containsRoles: [nrmSteward, 'canvas_admin'], scopedAdmin: true });
