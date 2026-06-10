import '@servicenow/sdk/global';
import { UiAction } from '@servicenow/sdk/core';

export const uaIngestFromSap = UiAction({
    $id: Now.ID['ua-ingest-from-sap'],
    table: 'x_snc_eqmdm_run',
    name: 'Ingest from SAP',
    actionName: 'ingest_from_sap',
    active: true,
    order: 100,
    hint: 'Simulate ingestion of SAP equipment master (EQUI) records via WDF Zero Copy',
    showUpdate: true,
    condition: "current.state == 'draft'",
    form: { showButton: true, style: 'primary' },
    workspace: {
        isConfigurableWorkspace: true,
        showFormButtonV2: true,
        clientScriptV2: "function onClick(g_form) { g_form.submit('ingest_from_sap'); }",
    },
    script: `
current.state = 'ingesting';
current.update();
try {
    var flowName = 'x_snc_eqmdm.ingest_equipment_from_sap';
    sn_fd.FlowAPI.getRunner().flow(flowName).inBackground().withInputs({ run_sys_id: current.sys_id.toString() }).run();
    gs.addInfoMessage('Ingest from SAP started. Watch the Activity Log for progress.');
} catch(e) {
    gs.addErrorMessage('Failed to trigger ingest flow: ' + e.message);
}`,
});

export const uaRunMatchDedupe = UiAction({
    $id: Now.ID['ua-run-match-dedupe'],
    table: 'x_snc_eqmdm_run',
    name: 'Run Match & Dedupe',
    actionName: 'run_match_dedupe',
    active: true,
    order: 200,
    hint: 'Run deterministic + probabilistic matching and data quality scan',
    showUpdate: true,
    condition: "current.state == 'ingested'",
    form: { showButton: true, style: 'primary' },
    workspace: {
        isConfigurableWorkspace: true,
        showFormButtonV2: true,
        clientScriptV2: "function onClick(g_form) { g_form.submit('run_match_dedupe'); }",
    },
    script: `
current.state = 'matching';
current.update();
try {
    var flowName = 'x_snc_eqmdm.match_and_dedupe';
    sn_fd.FlowAPI.getRunner().flow(flowName).inBackground().withInputs({ run_sys_id: current.sys_id.toString() }).run();
    gs.addInfoMessage('Match & Dedupe started. Watch the Activity Log for progress.');
} catch(e) {
    gs.addErrorMessage('Failed to trigger match flow: ' + e.message);
}`,
});

export const uaResolveAndPromote = UiAction({
    $id: Now.ID['ua-resolve-and-promote'],
    table: 'x_snc_eqmdm_run',
    name: 'Resolve & Promote to Golden',
    actionName: 'resolve_and_promote',
    active: true,
    order: 300,
    hint: 'Apply survivorship rules and promote surviving records to the golden master',
    showUpdate: true,
    condition: "current.state == 'matched'",
    form: { showButton: true, style: 'primary' },
    workspace: {
        isConfigurableWorkspace: true,
        showFormButtonV2: true,
        clientScriptV2: "function onClick(g_form) { g_form.submit('resolve_and_promote'); }",
    },
    script: `
current.state = 'resolving';
current.update();
try {
    var flowName = 'x_snc_eqmdm.resolve_and_promote';
    sn_fd.FlowAPI.getRunner().flow(flowName).inBackground().withInputs({ run_sys_id: current.sys_id.toString() }).run();
    gs.addInfoMessage('Resolve & Promote started. Watch the Activity Log for progress.');
} catch(e) {
    gs.addErrorMessage('Failed to trigger resolve flow: ' + e.message);
}`,
});

export const uaPublishToOperational = UiAction({
    $id: Now.ID['ua-publish-to-operational'],
    table: 'x_snc_eqmdm_run',
    name: 'Publish to Operational',
    actionName: 'publish_to_operational',
    active: true,
    order: 400,
    hint: 'Publish validated golden records to the operational equipment master',
    showUpdate: true,
    condition: "current.state == 'resolved'",
    form: { showButton: true, style: 'primary' },
    workspace: {
        isConfigurableWorkspace: true,
        showFormButtonV2: true,
        clientScriptV2: "function onClick(g_form) { g_form.submit('publish_to_operational'); }",
    },
    script: `
current.state = 'publishing';
current.update();
try {
    var flowName = 'x_snc_eqmdm.publish_to_operational';
    sn_fd.FlowAPI.getRunner().flow(flowName).inBackground().withInputs({ run_sys_id: current.sys_id.toString() }).run();
    gs.addInfoMessage('Publish to Operational started. Watch the Activity Log for progress.');
} catch(e) {
    gs.addErrorMessage('Failed to trigger publish flow: ' + e.message);
}`,
});
