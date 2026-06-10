import '@servicenow/sdk/global'
import { Role } from '@servicenow/sdk/core'

export const nrtUser = Role({
    name: 'x_snc_nrt.user',
    description: 'Submit travel requests and log expenses',
    containsRoles: ['canvas_user'],
})

export const nrtApprover = Role({
    name: 'x_snc_nrt.approver',
    description: 'Approve or reject travel requests',
    containsRoles: [nrtUser],
})

export const nrtFinance = Role({
    name: 'x_snc_nrt.finance',
    description: 'Review high-cost requests and approve reimbursements',
    containsRoles: [nrtUser],
})

export const nrtAdmin = Role({
    name: 'x_snc_nrt.admin',
    description: 'Full administrative access to the travel app',
    containsRoles: [nrtFinance, nrtApprover, 'canvas_admin'],
    scopedAdmin: true,
})
