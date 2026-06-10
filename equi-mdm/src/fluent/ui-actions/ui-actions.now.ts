import '@servicenow/sdk/global';
import { UiAction } from '@servicenow/sdk/core';
import { nrmSteward } from '../roles/roles.now';

UiAction({
    $id: Now.ID['nrm_action_ingest'],
    name: 'Ingest from SAP',
    table: 'x_snc_nrm_run',
    active: true,
    showUpdate: true,
    condition: "current.state == 'draft' || current.overall_status == 'not_started'",
    form: { showButton: true, style: 'primary' },
    workspace: { isConfigurableWorkspace: true, showFormButtonV2: true },
    roles: [nrmSteward],
    order: 100,
    script: `
current.run_by = gs.getUserID();
current.trigger_action = 'ingest';
current.update();
action.setRedirectURL(current);
`,
});

UiAction({
    $id: Now.ID['nrm_action_match'],
    name: 'Run Match & Dedupe',
    table: 'x_snc_nrm_run',
    active: true,
    showUpdate: true,
    condition: "current.state == 'ingested'",
    form: { showButton: true, style: 'primary' },
    workspace: { isConfigurableWorkspace: true, showFormButtonV2: true },
    roles: [nrmSteward],
    order: 200,
    script: `
current.trigger_action = 'match';
current.update();
action.setRedirectURL(current);
`,
});

UiAction({
    $id: Now.ID['nrm_action_resolve'],
    name: 'Resolve & Promote to Golden',
    table: 'x_snc_nrm_run',
    active: true,
    showUpdate: true,
    condition: "current.state == 'matched'",
    form: { showButton: true, style: 'primary' },
    workspace: { isConfigurableWorkspace: true, showFormButtonV2: true },
    roles: [nrmSteward],
    order: 300,
    script: `
current.trigger_action = 'resolve';
current.update();
action.setRedirectURL(current);
`,
});

UiAction({
    $id: Now.ID['nrm_action_publish'],
    name: 'Publish to Operational',
    table: 'x_snc_nrm_run',
    active: true,
    showUpdate: true,
    condition: "current.state == 'resolved'",
    form: { showButton: true, style: 'primary' },
    workspace: { isConfigurableWorkspace: true, showFormButtonV2: true },
    roles: [nrmSteward],
    order: 400,
    script: `
current.trigger_action = 'publish';
current.update();
action.setRedirectURL(current);
`,
});
