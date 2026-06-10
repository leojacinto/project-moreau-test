# Equipment Master Data Management Demo: Build Agent Prompt

## Context for the Builder

This is a 5-to-7-minute live demo showing ServiceNow reconciling equipment master data sourced from SAP into a clean, deduplicated operational master, then answering questions about that master with an AI agent. The narrative: SAP Plant Maintenance (PM) remains the system of record; ServiceNow governs the **quality and reconciliation of the operational copy** and exposes it to an AI assistant — without ever calling SAP directly.

### Honest framing before you start

- This is **NOT a claim that ServiceNow is an enterprise MDM hub.** SAP MDG (or the equivalent SAP master data governance layer) stays the enterprise golden source. ServiceNow governs the *operational* equipment master: the subset of equipment data needed to drive asset, maintenance, and field workflows. Do not let the app or any label imply ServiceNow replaces SAP MDG.
- This is **NOT replacing ServiceNow EAM / CMDB.** In production the published golden records would land in `alm_asset` / `cmdb_ci` / EAM. For this demo they land in a self-contained scoped table so the reconciliation story is visible end to end without EAM setup.

### The SAP feed is simulated. This matters and must be explicit.

In production, SAP equipment master data (`EQUI` / `EQUZ` / `EQKT`) would reach ServiceNow via **Workflow Data Fabric (WDF)** — specifically the **Zero Copy Connector for ERP**, which federates SAP data using SAP's published BAPI/OData interfaces (SAP-endorsed, listed in the SAP Business Accelerator Hub).

**Builder instruction:** You MAY attempt to create the WDF / Zero Copy data source artifacts (data source, connection) so the architecture is visible. But there is **no live SAP system** to connect to, so any connection will not return data. When that happens — or immediately, if you cannot stand up the WDF artifacts cleanly — **fall back to the simulation**: a static local ServiceNow staging table (`x_eqmdm_sap_equipment`) pre-seeded with equipment records as they *would* arrive from SAP. All "ingestion" in this demo reads from that local table. No live integration, no scheduled sync, no external API calls. State this in the app description and in any flow log entry that references SAP.

### Personas

1. **Data Steward / Master Data Owner** — primary persona. Uses a Configurable Workspace to run reconciliation (ingest, match/dedupe, resolve, publish) and watch the activity log. This is the main demo view.
2. **Operational user (asking the AI agent)** — brief switch to the Equipment Master Assistant to ask questions answered from the published golden records. Secondary view, ~90 seconds.

---

## Paste Below Into Build Agent

---

### What I Need

A scoped ServiceNow application for an equipment master data management demo. Three deliverables:

1. **Seed data tables** simulating the SAP equipment master feed (with deliberate duplicates and data-quality defects), plus the operational golden master and the reconciliation working tables.
2. **A Configurable Workspace** for the Data Steward to run a reconciliation cycle and see ingestion, match candidates, data-quality issues, golden records, and a real-time activity log on one screen.
3. **Flow Designer flows** that simulate the MDM lifecycle (Ingest → Match & Dedupe → Resolve & Promote → Publish), writing activity-log entries step by step so the workspace shows the orchestration happening.

Plus an AI Agent spec (Q&A only, manual configuration) that reads the published golden master.

---

### Scoped Application

| Property | Value |
|---|---|
| App Name | Equipment Master Data Management Demo |
| Scope | x_eqmdm |
| Description | Demo: reconciliation of equipment master data sourced from SAP PM (EQUI) into a deduplicated operational golden master, exposed to an AI assistant. SAP feed is SIMULATED via a local staging table (no live integration). Production pattern is WDF Zero Copy Connector for ERP. |

---

### Seed Data Tables

All tables inside the x_eqmdm scope. Static demo data. No APIs, no scheduled syncs.

#### 1. x_eqmdm_sap_equipment — SAP Equipment Master (Inbound / Staging)

Simulates records as they would be federated from SAP PM `EQUI` / `EQUZ` / `EQKT` via WDF Zero Copy. Field labels carry the SAP technical field name in brackets for authenticity. **This is where the deliberate duplicates and defects live.**

| Field Name | Label | Type | Max Length | Notes |
|---|---|---|---|---|
| sap_equipment_no | SAP Equipment Number (EQUNR) | String | 18 | Leading-zero numeric, e.g. 000000010000457 |
| equipment_desc | Description (EQKTX) | String | 40 | |
| equipment_category | Equipment Category (EQTYP) | Choice | | Machine (M) / Pump (P) / Vehicle (V) / Electrical (E) / Conveyor (C) |
| object_type | Technical Object Type (EQART) | String | 40 | e.g. Haul Truck, Hydraulic Excavator, Slurry Pump |
| manufacturer | Manufacturer (HERST) | String | 50 | DELIBERATELY inconsistent across records |
| model_number | Model / Type (TYPBZ) | String | 40 | |
| serial_number | Serial Number (SERGE) | String | 30 | Primary match key |
| manufacture_year | Year Built (BAUJJ) | String | 4 | |
| inventory_number | Inventory Number (INVNR) | String | 25 | |
| maintenance_plant | Maintenance Plant (SWERK) | String | 4 | e.g. 2010, 2020 |
| planning_plant | Planning Plant (IWERK) | String | 4 | |
| functional_location | Functional Location (TPLNR) | String | 40 | |
| location | Location (STORT) | String | 40 | |
| cost_centre | Cost Centre (KOSTL) | String | 10 | Sometimes blank/malformed (defect) |
| company_code | Company Code (BUKRS) | String | 4 | |
| acquisition_date | Acquisition Date (ANSDT) | Date | | |
| acquisition_value | Acquisition Value (ANSWT) | Currency | | |
| currency | Currency (WAERS) | String | 5 | AUD |
| planner_group | Planner Group (INGRP) | String | 3 | |
| valid_to | Valid To (DATBI) | Date | | 9999-12-31 = current; a past date = stale |
| sap_status | SAP System Status | Choice | | Active / Inactive (INAC) / Deletion Flag (DLFL) |
| last_changed_sap | Last Changed in SAP (AEDAT) | Date/Time | | Survivorship tie-breaker |
| ingestion_status | Ingestion Status | Choice | | Not Ingested / Ingested / Matched / Merged / Promoted / Rejected |
| golden_record | Golden Master Record | Reference | | Reference to x_eqmdm_equipment_master (set after promote) |

#### 2. x_eqmdm_equipment_master — Equipment Golden Master

The deduplicated, standardised operational golden record set. Starts empty; flows promote records into it.

| Field Name | Label | Type | Max Length | Notes |
|---|---|---|---|---|
| number | Master ID | String | 20 | Auto-numbered, prefix EQM |
| equipment_desc | Description | String | 40 | |
| object_type | Technical Object Type | String | 40 | |
| manufacturer | Manufacturer (standardised) | String | 50 | Golden, normalised value |
| model_number | Model | String | 40 | |
| serial_number | Serial Number | String | 30 | |
| manufacture_year | Year Built | String | 4 | |
| maintenance_plant | Maintenance Plant | String | 4 | |
| functional_location | Functional Location | String | 40 | |
| location | Location | String | 40 | |
| cost_centre | Cost Centre | String | 10 | |
| company_code | Company Code | String | 4 | |
| acquisition_date | Acquisition Date | Date | | |
| acquisition_value | Acquisition Value | Currency | | |
| currency | Currency | String | 5 | |
| sap_source_ids | Source SAP Equipment Numbers | String | 200 | Comma-separated EQUNRs that merged into this golden record |
| data_quality_score | Data Quality Score | Integer | | 0-100 |
| master_status | Master Status | Choice | | Draft / Published / Held / Retired |
| survivorship_note | Survivorship Note | String | 500 | How conflicts were resolved |

#### 3. x_eqmdm_match_pair — Duplicate Match Candidate

Pairs of staging records flagged as likely the same physical asset. Populated by the Match & Dedupe flow.

| Field Name | Label | Type | Notes |
|---|---|---|---|
| run | Reconciliation Run | Reference | Reference to x_eqmdm_run |
| record_a | SAP Record A | Reference | Reference to x_eqmdm_sap_equipment |
| record_b | SAP Record B | Reference | Reference to x_eqmdm_sap_equipment |
| match_score | Match Score | Integer | 0-100 |
| matched_on | Matched On | String | e.g. "Serial + Manufacturer + Model" |
| match_type | Match Type | Choice | Exact / High Confidence / Probable / Weak |
| resolution | Resolution | Choice | Pending / Auto-Merge / Merged / Kept Separate |
| survivor | Surviving Record | Reference | Reference to x_eqmdm_sap_equipment |

#### 4. x_eqmdm_dq_issue — Data Quality Issue

Defects found during the quality scan. Populated by the Match & Dedupe flow.

| Field Name | Label | Type | Notes |
|---|---|---|---|
| run | Reconciliation Run | Reference | Reference to x_eqmdm_run |
| sap_record | SAP Record | Reference | Reference to x_eqmdm_sap_equipment |
| issue_type | Issue Type | Choice | Missing Mandatory / Invalid Format / Inconsistent Value / Stale Record / Referential Integrity / Suspected Duplicate |
| field_name | Field | String | |
| severity | Severity | Choice | Critical / High / Medium / Low |
| detail | Detail | String | |
| status | Status | Choice | Open / Auto-Corrected / Held for Steward / Suppressed / Resolved |
| recommended_action | Recommended Action | String | |

#### 5. x_eqmdm_run — Reconciliation Run

The central record for one reconciliation cycle. Primary record the workspace displays.

| Field Name | Label | Type | Max Length | Notes |
|---|---|---|---|---|
| number | Run Number | String | 20 | Auto-numbered, prefix MDR |
| source_system | Source System | String | 80 | "SAP S/4HANA PM (EQUI) via WDF Zero Copy — SIMULATED" |
| state | State | Choice | | Draft / Ingested / Matched / Resolved / Published |
| records_ingested | Records Ingested | Integer | | |
| duplicates_found | Duplicate Pairs Found | Integer | | |
| dq_issues_found | DQ Issues Found | Integer | | |
| golden_records_created | Golden Records Created | Integer | | |
| run_by | Run By | Reference | | Reference to sys_user (the Data Steward) |
| run_date | Run Date | Date/Time | | |
| overall_status | Overall Status | Choice | | Not Started / In Progress / Complete |

#### 6. x_eqmdm_ingestion_log — Ingestion Activity Log

Captures every simulated step as it executes. This is the "bouncing ball." Each flow writes entries here in sequence so the workspace shows reconciliation happening in real time.

| Field Name | Label | Type | Max Length | Notes |
|---|---|---|---|---|
| run | Run | Reference | | Reference to x_eqmdm_run |
| sequence | Sequence | Integer | | Order within the overall cycle |
| stage | Stage | Choice | | Ingest / Match / Resolve / Publish |
| action | Action | String | 200 | e.g. "Standardising manufacturer values" |
| status | Status | Choice | | Pending / In Flight / Success / Failed |
| detail | Detail | String | 500 | e.g. "3 variants of 'Weir Minerals' normalised to one value." |
| timestamp | Timestamp | Date/Time | | |
| duration_ms | Duration (ms) | Integer | | Simulated duration for realism |

---

### Seed Data Records

Create the staging records below in `x_eqmdm_sap_equipment`. The fictional operator is a resources/heavy-industry company across two Australian sites: **Plant 2010 (Mount Keith Operations, WA)** and **Plant 2020 (Gladstone Processing, QLD)**. Company code 1000, currency AUD.

The defects and duplicates are intentional. **Do not "clean them up" — they are the demo.** Leave `golden_record` empty and `ingestion_status = Not Ingested` on all of them. The flows do the rest.

Leave `x_eqmdm_equipment_master`, `x_eqmdm_match_pair`, `x_eqmdm_dq_issue`, and `x_eqmdm_ingestion_log` **empty**.

| # | EQUNR | Description | Category | Object Type | Manufacturer | Model | Serial (SERGE) | Year | Cost Centre | Plant | Functional Location | Valid To | SAP Status | Last Changed | Planted issue |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 000000010000457 | Haul Truck 793F #04 | Vehicle | Haul Truck | Caterpillar | 793F | CAT793F-7XR04521 | 2019 | 4410220000 | 2010 | MKO-MINE-FLEET-HT04 | 9999-12-31 | Active | 2026-03-02 | DUP pair A (master) |
| 2 | 000000010000981 | HAUL TRUCK 793F 04 | Vehicle | Haul Truck | CATERPILLAR INC | 793F | CAT793F-7XR04521 | 2019 | 4410220000 | 2020 | GLD-PORT-FLEET-HT04 | 9999-12-31 | Active | 2025-08-14 | DUP pair A (duplicate — same serial, opened on plant transfer; manufacturer spelled differently) |
| 3 | 000000010001120 | Excavator PC8000 #02 | Machine | Hydraulic Excavator | Komatsu | PC8000-6 | PC8000-K2291 | 2021 | 4410220000 | 2010 | MKO-MINE-LOAD-EX02 | 9999-12-31 | Active | 2026-01-19 | DUP pair B (master) |
| 4 | 000000010001188 | Excavator PC8000 #02 | Machine | Hydraulic Excavator | Komatsu | PC8000-6 | PC8000-K2219 | 2021 | 4410220000 | 2010 | MKO-MINE-LOAD-EX02 | 9999-12-31 | Active | 2025-11-03 | DUP pair B (near-duplicate — transposed serial 2291↔2219; fuzzy match) |
| 5 | 000000010002044 | Slurry Pump Warman 650 | Pump | Slurry Pump | Weir Minerals | Warman 650MCR | WM650-AU-77310 | 2020 | 4410330000 | 2020 | GLD-PROC-PUMP-A1 | 9999-12-31 | Active | 2026-02-10 | Manufacturer inconsistency group |
| 6 | 000000010002051 | Slurry Pump Warman 550 | Pump | Slurry Pump | Weir | Warman 550MCR | WM550-AU-77822 | 2020 | 4410330000 | 2020 | GLD-PROC-PUMP-A2 | 9999-12-31 | Active | 2026-02-10 | Manufacturer inconsistency group ("Weir") |
| 7 | 000000010002066 | Slurry Pump Warman 450 | Pump | Slurry Pump | WEIR MINERALS AUST | Warman 450MCR | WM450-AU-77930 | 2022 | 4410330000 | 2020 | GLD-PROC-PUMP-A3 | 9999-12-31 | Active | 2026-04-01 | Manufacturer inconsistency group ("WEIR MINERALS AUST") |
| 8 | 000000010003012 | Power Transformer 33kV | Electrical | Power Transformer | ABB | TXN-33-2500 | ABB-33-220041 | 2018 | *(blank)* | 2010 | MKO-SUB-TX-01 | 9999-12-31 | Active | 2024-09-22 | Missing mandatory cost centre (Critical) |
| 9 | 000000010003110 | Conveyor Drive CV-12 | Conveyor | Belt Conveyor | Sandvik | CV-DRIVE-1200 | SDV-CV12-5567 | 2015 | CC-4410 | 2010 | MKO-PROC-CONV-12 | 9999-12-31 | Active | 2025-06-30 | Invalid cost centre format ("CC-4410") |
| 10 | 000000010003598 | Conveyor Drive CV-03 (OLD) | Conveyor | Belt Conveyor | Sandvik | CV-DRIVE-800 | SDV-CV03-1102 | 2009 | 4410330000 | 2010 | MKO-PROC-CONV-03 | 2019-12-31 | Deletion Flag | 2019-11-15 | Stale: deletion flag + valid-to in past → must be rejected |
| 11 | 000000010004001 | Dragline BE 1370W | Machine | Walking Dragline | Bucyrus-Erie | 1370W | BE1370-DL-0009 | 2011 | 4410220000 | 2010 | MKO-MINE-DRAG-01 | 9999-12-31 | Active | 2025-12-01 | Clean (promotes straight through) |
| 12 | 000000010004220 | Loader 994K #01 | Vehicle | Wheel Loader | Caterpillar | 994K | CAT994K-LL00231 | 2020 | 4410220000 | 2010 | MKO-MINE-LOAD-WL01 | 9999-12-31 | Active | 2026-03-18 | Clean |
| 13 | 000000010004388 | Cooling Pump CP-7 | Pump | Centrifugal Pump | Grundfos | NK-200-400 | GF-NK200-88123 | 2023 | 4410330000 | 2020 | GLD-PROC-PUMP-B7 | 9999-12-31 | Active | 2026-05-05 | Clean |

Expected reconciliation outcome (for your verification after the flows run):
- **Records ingested:** 13
- **Duplicate pairs:** 2 — pair A (#1+#2, Exact on serial), pair B (#3+#4, Probable on fuzzy serial)
- **DQ issues:** 6 — 1 missing cost centre (#8, Critical), 1 invalid format (#9), 1 stale/deletion (#10), 3 manufacturer inconsistencies (#5/#6/#7 standardised to "Weir Minerals")
- **Records rejected:** 1 (#10, stale)
- **Golden records created:** 10 (13 ingested − 2 merged-away duplicates − 1 rejected = 10)
- **Golden records published:** 9 (1 held — #8 — pending steward input for the missing cost centre)

#### Supporting User (sys_user record)

Create or verify this user:

**Maya Rao** — Data Steward / Master Data Owner (primary demo persona)
- User ID: maya.rao
- First Name: Maya, Last Name: Rao
- Title: Enterprise Data Steward
- Email: maya.rao@example.com
- Roles: itil (and any role needed for workspace access)

#### The Reconciliation Run record

Create one record in `x_eqmdm_run`:
- Number: MDR0001
- Source System: SAP S/4HANA PM (EQUI) via WDF Zero Copy — SIMULATED
- State: Draft
- Records Ingested / Duplicates Found / DQ Issues Found / Golden Records Created: 0
- Run By: (empty; filled when steward triggers)
- Overall Status: Not Started

---

### Configurable Workspace

Create a Configurable Workspace for the Data Steward.

**Workspace Name:** Equipment Master Stewardship Console
**URL slug:** equipment-mdm
**Description:** Operational workspace for reconciling SAP equipment master data into a published golden master.

**Landing Page — "Reconciliation Runs":**
A list view of `x_eqmdm_run` records. Columns: Run Number, Source System, State, Records Ingested, Duplicate Pairs Found, DQ Issues Found, Golden Records Created, Overall Status. Default sort: Run Date descending.

**Record Page — Reconciliation Run Detail (e.g. MDR0001):**

**Top section: record header**
- Run Number, Source System, State, Overall Status, plus the four count fields (Records Ingested / Duplicates Found / DQ Issues Found / Golden Records Created) shown as headline metrics.

**Section 1: "Inbound from SAP (Staging)"** — related list of `x_eqmdm_sap_equipment`. Columns: SAP Equipment Number, Description, Manufacturer, Serial Number, Cost Centre, Plant, SAP Status, Ingestion Status. This is where the audience sees the raw mess: inconsistent manufacturers, the blank cost centre, the duplicate serials.

**Section 2: "Duplicate Match Candidates"** — related list of `x_eqmdm_match_pair` where run = current. Columns: Record A, Record B, Match Score, Matched On, Match Type, Resolution, Surviving Record. Populates during Match & Dedupe.

**Section 3: "Data Quality Issues"** — related list of `x_eqmdm_dq_issue` where run = current. Columns: SAP Record, Issue Type, Field, Severity, Detail, Status, Recommended Action. Populates during Match & Dedupe.

**Section 4: "Published Golden Master"** — related list of `x_eqmdm_equipment_master`. Columns: Master ID, Description, Manufacturer, Serial Number, Cost Centre, Source SAP Equipment Numbers, Data Quality Score, Master Status. Populates during Resolve & Promote / Publish.

**Section 5: "Activity Log"** — related list of `x_eqmdm_ingestion_log` where run = current. Columns: Sequence, Stage, Action, Status, Detail, Timestamp, Duration (ms). Sort by Sequence ascending. This is the bouncing ball: rows appear as each flow executes.

**Section 6: "Actions"** — UI Action buttons on the run record that trigger flows. The buttons only kick off the flow; the flow does the work and writes the log. The audience sees the workspace update as the flow runs, not as an instant field flip.

1. **"Ingest from SAP"** — triggers Flow: Ingest Equipment from SAP
2. **"Run Match & Dedupe"** — triggers Flow: Match & Dedupe (visible when state = Ingested)
3. **"Resolve & Promote to Golden"** — triggers Flow: Resolve & Promote (visible when state = Matched)
4. **"Publish to Operational"** — triggers Flow: Publish to Operational (visible when state = Resolved)

If Configurable Workspace does not support all related lists on one page cleanly, prioritise Sections 1, 5, and 6, then 2/3/4. The goal is that the steward sees the raw feed, the activity log, and the action buttons together.

---

### Flow Designer Flows

All flows live inside the x_eqmdm scope. Each flow simulates a stage by writing log entries to `x_eqmdm_ingestion_log` at each step, pausing 1-2 seconds between steps (Flow Designer wait/timer), and updating the relevant tables and the run record. The pauses are deliberate — they make reconciliation feel like real processing, not instant database updates. Use a single shared **"Log Step" subflow** that takes (run, sequence, stage, action, status, detail, duration_ms) and writes one log row.

#### Flow 1: Ingest Equipment from SAP

**Trigger:** UI Action "Ingest from SAP" on x_eqmdm_run. **Input:** run sys_id.

| Step | Action (log) | Stage | What the flow does | Duration |
|---|---|---|---|---|
| 1 | Connecting to SAP S/4HANA via WDF Zero Copy Connector for ERP | Ingest | Write log "In Flight". Detail: "Federating SAP PM via published BAPI/OData. NOTE: simulated source — reading local staging table." Wait 2s. | 2000 ms |
| 2 | Reading equipment master (EQUI / EQUZ / EQKT) | Ingest | Count x_eqmdm_sap_equipment records. Write log. Detail: "13 equipment records returned from EQUI." Wait 2s. | 1500 ms |
| 3 | Landing records into staging | Ingest | Update all x_eqmdm_sap_equipment.ingestion_status from "Not Ingested" to "Ingested". Write log. Wait 1s. | 1200 ms |
| 4 | Profiling inbound data | Ingest | Write log. Detail: "Profiling complete. Inconsistencies and gaps flagged for match & quality scan." Wait 1s. | 1000 ms |
| 5 | Updating run | Ingest | Set run.records_ingested = 13, state = "Ingested", run_by = current user, run_date = now(), overall_status = "In Progress". Write log, Success. | 500 ms |

**Total:** ~7 seconds.

#### Flow 2: Match & Dedupe

**Trigger:** UI Action "Run Match & Dedupe" (visible when state = Ingested). **Input:** run sys_id.

| Step | Action (log) | Stage | What the flow does | Duration |
|---|---|---|---|---|
| 1 | Standardising manufacturer values | Match | Detail: "Normalised 'Weir', 'WEIR MINERALS AUST' → 'Weir Minerals'. Normalised 'CATERPILLAR INC' → 'Caterpillar'." Wait 1.5s. | 1500 ms |
| 2 | Deterministic match on serial number | Match | Detail: "Exact serial match: CAT793F-7XR04521 appears on EQUNR ...0457 and ...0981." Wait 1.5s. | 1500 ms |
| 3 | Probabilistic match (manufacturer + model + functional location + year) | Match | Detail: "Probable match: PC8000-6 at MKO-MINE-LOAD-EX02, serials PC8000-K2291 / PC8000-K2219 (1-char transposition)." Wait 1.5s. | 1500 ms |
| 4 | Creating match candidates | Match | Create 2 x_eqmdm_match_pair: pair A (record_a=...0457, record_b=...0981, score 100, "Serial + Manufacturer + Model", Exact, Pending); pair B (record_a=...1120, record_b=...1188, score 88, "Manufacturer + Model + Functional Location + Year (fuzzy serial)", Probable, Pending). Mark involved staging records ingestion_status = "Matched". Write log. Wait 1s. | 1000 ms |
| 5 | Scanning data quality | Match | Create x_eqmdm_dq_issue rows: (a) ...3012, Missing Mandatory, field cost_centre, Critical, "Cost centre is mandatory for capitalised assets.", Held for Steward, "Obtain cost centre from Finance."; (b) ...3110, Invalid Format, cost_centre, High, "Value 'CC-4410' does not match numeric cost centre format.", Open, "Reformat to 4410330000."; (c) ...3598, Stale Record, valid_to, High, "Deletion flag set; valid-to 2019-12-31 in the past.", Open, "Exclude from golden master."; (d/e/f) ...2044/...2051/...2066, Inconsistent Value, manufacturer, Medium, "Manufacturer recorded as 3 variants.", Auto-Corrected, "Standardise to 'Weir Minerals'." Write log. Detail: "6 data quality issues found (1 critical)." Wait 1.5s. | 1500 ms |
| 6 | Updating run | Match | Set duplicates_found = 2, dq_issues_found = 6, state = "Matched". Write log, Success. | 500 ms |

**Total:** ~8 seconds.

#### Flow 3: Resolve & Promote to Golden

**Trigger:** UI Action "Resolve & Promote to Golden" (visible when state = Matched). **Input:** run sys_id.

Survivorship rule (apply and narrate): when records match, **merge**; the **survivor is the most complete record, tie-broken by most recently changed in SAP (last_changed_sap)**; the **golden record carries the earliest EQUNR in sap_source_ids**; manufacturer takes the **standardised** value.

| Step | Action (log) | Stage | What the flow does | Duration |
|---|---|---|---|---|
| 1 | Applying survivorship rules | Resolve | Write log. Detail: "Survivor = most complete, then most recently changed. Golden references all source EQUNRs." Wait 1.5s. | 1500 ms |
| 2 | Merging duplicate pairs | Resolve | For each match_pair: set survivor (pair A survivor = ...0457, more recent change; pair B survivor = ...1120), resolution = "Merged". Mark the non-survivor staging records ingestion_status = "Merged". Wait 1.5s. | 1500 ms |
| 3 | Rejecting stale / deletion-flagged records | Resolve | Set ...3598 ingestion_status = "Rejected". Write log. Detail: "1 record rejected (deletion flag, expired). Not promoted." Wait 1s. | 1000 ms |
| 4 | Auto-correcting fixable issues | Resolve | Apply manufacturer standardisation to surviving records; set the 3 manufacturer dq_issues status = "Auto-Corrected"; reformat ...3110 cost centre to "4410330000" and set that issue status = "Auto-Corrected". Wait 1s. | 1000 ms |
| 5 | Creating golden master records | Resolve | Create one x_eqmdm_equipment_master per surviving + clean staging record (expected 10). Set sap_source_ids (pair A = "000000010000457,000000010000981"; pair B = "000000010001120,000000010001188"; others single EQUNR), survivorship_note, data_quality_score (full records 100; ...3012 lower, e.g. 70, due to missing cost centre), master_status = "Draft" (...3012 = "Held"). Set each staging record's golden_record reference and ingestion_status = "Promoted". Wait 1s. | 1000 ms |
| 6 | Updating run | Resolve | Set golden_records_created = 10, state = "Resolved". Write log, Success. | 500 ms |

**Total:** ~8 seconds.

#### Flow 4: Publish to Operational

**Trigger:** UI Action "Publish to Operational" (visible when state = Resolved). **Input:** run sys_id.

| Step | Action (log) | Stage | What the flow does | Duration |
|---|---|---|---|---|
| 1 | Validating golden records | Publish | Write log. Detail: "10 golden records validated. 1 held: EQM for transformer ...3012 missing mandatory cost centre." Wait 1.5s. | 1500 ms |
| 2 | Publishing to operational equipment master | Publish | Set master_status = "Published" for all golden records EXCEPT the held one (stays "Held"). Write log. Detail: "9 records published. 1 held pending steward input." Wait 1.5s. | 1500 ms |
| 3 | Indexing for Equipment Master Assistant | Publish | Write log. Detail: "Published golden records indexed for AI Search. Equipment Master Assistant can now answer questions." (This is the handoff to the manual AI agent / AI Search profile.) Wait 1s. | 1000 ms |
| 4 | Updating run | Publish | Set state = "Published", overall_status = "Complete". Write log, Success. | 500 ms |

**Total:** ~5 seconds.

---

### Demo Orchestration Sequence

This is the order the buttons are clicked in the live demo. After each click the Activity Log populates row by row as the flow executes.

| Step | Button | Activity Log Shows | What Updates | Narrative |
|---|---|---|---|---|
| 1 | (Open MDR0001) | Empty log. Staging shows 13 raw records. Match/DQ/Golden empty. | — | "This is what landed from SAP. Thirteen equipment records. Look closely: two haul trucks with the same serial, a pump manufacturer spelled three ways, a transformer with no cost centre, a conveyor that was deleted years ago. This is real master data. It is messy." |
| 2 | Ingest from SAP | 5 entries over ~7s: Connecting via WDF Zero Copy... Reading EQUI... Landing into staging... Profiling... Updating run. | Staging records flip to Ingested. Records Ingested = 13. | "In production this is the Zero Copy Connector federating SAP's published interfaces. Here it is simulated. Either way, nothing is copied permanently and ServiceNow never owns the source of truth — SAP does." |
| 3 | Run Match & Dedupe | 6 entries over ~8s: Standardising manufacturers... Deterministic match... Probabilistic match... Creating candidates... Scanning quality... Updating run. | Match Candidates: 2 pairs. DQ Issues: 6. Duplicates Found = 2, DQ Issues = 6. | "Now the platform does the work a steward used to do by hand. It standardises the manufacturer names. It finds the exact duplicate on serial number. It finds the near-duplicate where someone fat-fingered the serial. And it flags every quality problem with a severity and a recommended action." |
| 4 | Resolve & Promote to Golden | 6 entries over ~8s: Survivorship... Merging... Rejecting stale... Auto-correcting... Creating golden records... Updating run. | Published Golden Master fills with 10 records. Golden Records Created = 10. | "Two duplicates collapse into one golden record each, keeping the most complete data and remembering both SAP source numbers. The deleted conveyor is rejected. The manufacturer names are fixed. Ten clean golden records, traceable back to source." |
| 5 | Publish to Operational | 4 entries over ~5s: Validating... Publishing... Indexing for the assistant... Updating run. | 9 records Published, 1 Held. State = Published, Complete. | "Nine records published to the operational master. One is held — the transformer with no cost centre. The platform will not publish a record that fails a mandatory rule; it routes it to a steward. Governance, not just movement." |
| 6 | (Switch to AI agent) | — | — | "Now anyone can ask the assistant about this equipment — and every answer comes from the clean, governed master, not the mess we started with." |

---

### What Build Agent Creates vs What Is Manual

**Build Agent creates:**
- Scoped app (x_eqmdm)
- All 6 tables with fields (sap_equipment, equipment_master, match_pair, dq_issue, run, ingestion_log)
- All 13 SAP staging seed records (with planted duplicates and defects) and the MDR0001 run record
- sys_user record for Maya Rao
- Configurable Workspace (Equipment Master Stewardship Console) with landing list and the run record page (staging, match candidates, DQ issues, golden master, activity log, action buttons)
- 4 UI Actions on x_eqmdm_run (Ingest from SAP, Run Match & Dedupe, Resolve & Promote to Golden, Publish to Operational)
- 4 Flow Designer flows + 1 reusable "Log Step" subflow

**Manual configuration (Leo builds by hand):**
- The WDF / Zero Copy Connector for ERP data source artifacts, attempted for architectural realism, then left disconnected (no live SAP) — the demo runs off the simulated staging table
- The AI Agent (Equipment Master Assistant) — intents, knowledge/RAG source binding to x_eqmdm_equipment_master, guardrails (spec below)
- AI Search profile/index over the published golden master if not handled by the platform automatically
- Workspace visual tuning (metric tiles, status colours, column widths)

---

### AI Agent (Manual Configuration, Spec Only) — Q&A Only

The agent answers questions about equipment **from the published golden master only**. It is read-only Q&A. It does not run reconciliation, merge records, or take steward actions.

**Agent Skill Name:** Equipment Master Assistant

**Capabilities:**
- Answer questions about equipment from `x_eqmdm_equipment_master` where master_status = Published (count, filter, look up by serial/description/manufacturer/plant/functional location, cost centre, acquisition).
- Explain provenance: a golden record's `sap_source_ids` shows which SAP equipment numbers were merged into it.
- Read ServiceNow platform data only. It never calls SAP.

**Architectural note (SAP API Policy v4/2026 compliance):**

SAP's API Policy v4/2026 prohibits API use for "interaction or integration with (semi-)autonomous or generative AI systems that plan, select, or execute sequences of API calls" outside SAP-endorsed architectures. ServiceNow's architecture avoids this entirely: equipment data is brought into the platform via the Zero Copy Connector for ERP (SAP's published BAPI/OData, SAP-endorsed); once it is a governed platform record, the agent reads it as platform data. The agent never makes an API call to SAP. Compliant by architecture, not by workaround.

**Demo conversation (~90 seconds, 4 exchanges):**

> **Exchange 1 — Count / inventory:**
> User: "How many haul trucks do we have and where are they?"
> Agent: [queries golden master] "There is one haul truck in the master: a Caterpillar 793F, serial CAT793F-7XR04521, currently at functional location GLD-PORT-FLEET-HT04, plant 2020."

> **Exchange 2 — The dedupe payoff:**
> User: "Why only one? I thought we had two of those."
> Agent: "Two SAP equipment records described this truck — 10000457 and 10000981 — created when it transferred between plants. They were reconciled into a single golden record. Both source numbers are retained for traceability."
> *Presenter narrates: "That is the master data win. One physical asset, one golden record, full lineage back to SAP."*

> **Exchange 3 — The standardisation payoff:**
> User: "Show me all the Weir Minerals equipment."
> Agent: [queries golden master] "Three Weir Minerals slurry pumps: Warman 650MCR (GLD-PROC-PUMP-A1), Warman 550MCR (A2), and Warman 450MCR (A3)."
> *Presenter narrates: "In the raw SAP feed those were 'Weir', 'Weir Minerals', and 'WEIR MINERALS AUST'. Ask the source system and you would have missed two of them. Ask the governed master and they all answer under one name."*

> **Exchange 4 — Provenance / compliance:**
> User: "Where does this equipment data come from?"
> Agent: "From the operational equipment master in ServiceNow, sourced from SAP Plant Maintenance. I read the governed platform records. I do not call SAP directly."
> *Presenter narrates (optional): "Under SAP's API Policy v4/2026, an AI agent calling SAP APIs to answer questions is prohibited. This agent never touches SAP. That distinction is compliance, not cosmetics."*

**Agent guardrails:**
- Answers only from `x_eqmdm_equipment_master` where master_status = Published. It does NOT read the staging table, match candidates, or held/draft records.
- Does NOT expose unresolved duplicates or unpublished records.
- Does NOT perform maintenance scheduling, work-order, or asset-action requests — deflects those to EAM.
- Does NOT modify any record. Read-only.
- Does NOT call any external API or endpoint. All retrieval is from ServiceNow platform tables. Design constraint, not a limitation.

---

### Knowledge Articles to Publish (optional, agent fallback)

Create in a Knowledge Base, category "Master Data". Short. These ground "how does this work" questions.

**Article 1: "Equipment Master Data Model"**
The operational equipment master holds the governed, deduplicated record for each physical asset, sourced from SAP Plant Maintenance (EQUI). SAP remains the system of record. Each golden record references the SAP equipment number(s) that were reconciled into it. Fields include description, technical object type, standardised manufacturer, model, serial number, maintenance plant, functional location, cost centre, and acquisition details.

**Article 2: "Match & Survivorship Rules"**
Records are matched first on exact serial number, then on a probabilistic combination of manufacturer, model, functional location, and year of construction. Matched records are merged: the surviving record is the most complete, tie-broken by most recently changed in SAP. The golden record retains all source SAP equipment numbers. Manufacturer values are standardised. Records with a deletion flag or an expired valid-to date are rejected. Records missing a mandatory field (e.g. cost centre) are held for a steward rather than published.

---

### Limitations to Acknowledge If Asked During Demo

| Question | Honest Answer |
|---|---|
| "Is SAP actually connected?" | No. There is no live SAP system in this demo. In production, SAP equipment master data reaches ServiceNow via Workflow Data Fabric — the Zero Copy Connector for ERP — using SAP's published BAPI and OData interfaces. Here the SAP feed is simulated by a static local staging table so the reconciliation story is visible end to end. |
| "Is ServiceNow your MDM hub / golden source?" | No. SAP MDG (or the equivalent SAP master data governance layer) remains the enterprise golden source. ServiceNow governs the quality and reconciliation of the operational copy — the subset of equipment data needed to drive asset, maintenance, and field workflows. |
| "Why not just use ServiceNow EAM or CMDB?" | This demo is the data-quality and reconciliation layer that feeds a clean operational master. In production the published golden records would populate alm_asset / cmdb_ci / EAM. The demo isolates the MDM step so you can see it. |
| "Can the AI agent read SAP?" | Yes for the answers, no for the mechanism. The data originated in SAP, but it was brought into the platform via the Zero Copy Connector using SAP's published APIs. The agent reads the governed platform record. It never calls SAP. Under SAP's API Policy v4/2026, that distinction matters. |
| "How does the matching scale to millions of records?" | The match and survivorship rules shown are illustrative. At scale you would use a dedicated matching/identification capability (e.g. ServiceNow's Identification & Reconciliation Engine for CMDB-bound data, or a purpose-built matching service). The workflow pattern is the same. |
| "What about functional locations, BOMs, maintenance plans?" | Out of scope for this demo, which focuses on the equipment object. The same ingest → match → resolve → publish pattern extends to those object types. |
| "What happens to the held record?" | It stays out of the published master until a steward supplies the missing mandatory field. The platform will not publish a record that fails a mandatory governance rule. That is the point: movement plus governance, not movement alone. |

---

### Narrative Arc for 5-to-7-Minute Demo

| Time | On screen | Presenter says |
|---|---|---|
| 0:00-0:45 | Open Stewardship Console, MDR0001. Staging shows 13 raw records. | "Every asset-intensive organisation has this problem. Your equipment master lives in SAP, and over years it drifts. Duplicates from plant transfers. Manufacturer names spelled five ways. Records that were deleted but never cleaned up. Here are thirteen real-looking records, and they are a mess." |
| 0:45-1:45 | Click Ingest from SAP. Log populates over ~7s. | "We bring the SAP equipment master in. In production that is the Zero Copy Connector federating SAP's published interfaces — this is simulated, but the architecture is the point: SAP stays the system of record, ServiceNow never owns it." |
| 1:45-3:00 | Click Run Match & Dedupe. Candidates and DQ issues appear. | "Now the platform does what a steward used to do by hand. It standardises the manufacturer names. It catches the exact duplicate on serial number, and the near-duplicate where someone transposed two digits. And it flags every quality problem — severity, recommended action." |
| 3:00-4:15 | Click Resolve & Promote. Golden master fills. | "Two duplicates collapse into one golden record each, keeping the best data and remembering both SAP numbers. The deleted conveyor is rejected. Ten clean golden records — traceable to source." |
| 4:15-5:00 | Click Publish to Operational. 9 published, 1 held. | "Nine published. One held — the transformer with no cost centre. The platform refuses to publish a record that fails a mandatory rule and routes it to a steward. That is governance." |
| 5:00-6:30 | Switch to Equipment Master Assistant. Run the 4 exchanges. | [Exchanges 1-2: count + dedupe payoff.] [Exchange 3: "Show me all the Weir Minerals equipment" — the standardisation payoff.] [Exchange 4: provenance + the SAP API Policy beat.] |
| 6:30-7:00 | Back to the console; gesture at the activity log. | "Same SAP data. Cleaner, governed, deduplicated, and answerable in plain language — without ServiceNow ever owning the source or the agent ever calling SAP." |

---

## Verification / Testing Loop

After deploying, run through these checks in order. All steps must pass before the build is considered complete.

### 1. Auth & Instance

- Run `npx now-sdk auth --list` and confirm the target instance alias is present and active.

### 2. Workspace Loads

- Navigate to `https://<instance>.service-now.com/now/equipment-mdm/home`
- Confirm page title contains `Equipment Master Stewardship Console | ServiceNow`
- Confirm no 404 / "Page not found" error

### 3. Dashboard Widgets Present

- The landing dashboard should show all 6 widgets:
  - SAP Records (scorecard)
  - Published Records (scorecard)
  - Open DQ Issues (scorecard)
  - Held for Steward (scorecard)
  - Equipment by Ingestion Status (donut chart)
  - DQ Issues by Severity (vertical bar chart)
- Widgets may show "No data available" before flows run — that is expected at this point

### 4. Left Navigation Menu

- Open the left nav
- Confirm three categories: **Reconciliation**, **Equipment**, **Data Quality**
- Reconciliation → All Runs
- Equipment → Golden Master, SAP Staging
- Data Quality → Match Candidates, DQ Issues, Activity Log

### 5. Seed Data Present

- Navigate to All Runs → confirm MDR0001 is present with State = Draft, Overall Status = Not Started
- Navigate to SAP Staging → confirm 13 records are present, all with Ingestion Status = Not Ingested
- Spot-check deliberate defects are visible: duplicate serials on rows 1 & 2, blank cost centre on row 8, deletion-flagged row 10

### 6. Flow Activation (Required Before Demo)

Flows deploy as draft — they must be manually activated before the UI Action buttons will work.

- Go to `https://<instance>.service-now.com/sys_hub_flow_list.do`
- Locate and activate all four flows:
  - NRM Ingest from SAP (or equivalent scoped name)
  - NRM Match & Dedupe
  - NRM Resolve & Promote
  - NRM Publish to Operational
- Also activate the **NRM Log Reconciliation Step** subflow if it appears as inactive

### 7. Full Demo Run Sequence

Open MDR0001 and click each button in sequence. After each click, wait for the Activity Log to finish populating before proceeding.

| Step | Button | Expected Activity Log Entries | Expected Outcome |
|---|---|---|---|
| 1 | Ingest from SAP | 5 entries (~7s) | Records Ingested = 13, State = Ingested, all staging records flip to Ingested |
| 2 | Run Match & Dedupe | 6 entries (~8s) | Duplicate Pairs = 2, DQ Issues = 6, State = Matched; 2 match pair records visible; 6 DQ issue records visible |
| 3 | Resolve & Promote | 6 entries (~8s) | Golden Records Created = 10, State = Resolved; 10 golden master records visible (1 with status Held) |
| 4 | Publish to Operational | 4 entries (~5s) | State = Published, Overall Status = Complete; 9 golden records Published, 1 Held |

### 8. Reconciliation Outcome Checks

After running all 4 flows, verify against the expected outcomes from the seed data spec:

| Check | Expected |
|---|---|
| SAP Staging — Ingestion Status | 10 × Promoted, 2 × Merged (non-survivors of dup pairs), 1 × Rejected (row 10 stale) |
| Match Candidates | 2 pairs — Pair A (exact serial, score 100), Pair B (fuzzy serial, score 88) |
| DQ Issues | 6 — 1 Critical (missing cost centre, status Held for Steward), 1 High invalid format, 1 High stale record, 3 Medium manufacturer inconsistency (Auto-Corrected) |
| Golden Master total | 10 records |
| Golden Master — Published | 9 records |
| Golden Master — Held | 1 record (Power Transformer ABB, missing cost centre) |
| Activity Log | Sequential entries across all 4 stages; each entry has stage, action, status, detail, duration_ms |

### 9. Reset for Re-demo

To run the demo again from scratch, all staging records must be reset to `ingestion_status = Not Ingested`, all related records (match pairs, DQ issues, ingestion log, golden master) deleted, and MDR0001 reset to State = Draft. This is a manual step — no reset flow is built. Use a background script or the Studio data tools.
