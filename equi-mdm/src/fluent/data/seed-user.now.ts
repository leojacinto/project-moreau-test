import '@servicenow/sdk/global';
import { Record } from '@servicenow/sdk/core';

export const nrmUserMaya = Record({
    table: 'sys_user',
    $id: Now.ID['nrm_user_maya'],
    $meta: { installMethod: 'demo' },
    data: {
        user_name: 'maya.rao',
        first_name: 'Maya',
        last_name: 'Rao',
        title: 'Enterprise Data Steward',
        email: 'maya.rao@example.com',
        active: true,
    },
});
