# Travel Request Management App — Build Prompt

Build a **Travel Request Management** scoped application on ServiceNow using the Fluent SDK (TypeScript, code-first). Deploy it to the target instance.

---

## App Overview

Employees submit travel requests with destination, dates, estimated costs, and business purpose. Managers approve or reject. Finance reviews high-cost requests. After travel, employees log expenses. The app enforces per-country travel policies and supports approval delegation.

---

## Tables

**Travel Request** (extends task, auto-number prefix TREQ)
Fields: traveler (ref: sys_user, mandatory), destination_city, destination_country, departure_date (mandatory), return_date (mandatory), estimated_cost (decimal), actual_cost (decimal), purpose (choices: Conference, Client Meeting, Training, Internal, Other), department (ref: cmn_department), approval_status (choices: Pending, Approved, Rejected, Finance Review; default: Pending), travel_type (choices: Domestic, International), requires_visa (boolean), notes (multi-line)

**Travel Expense** (extends task, auto-number prefix TEXP)
Fields: travel_request (ref: travel request table, mandatory), expense_type (choices: Airfare, Hotel, Meals, Transport, Visa, Other; mandatory), amount (decimal, mandatory), expense_date (date, mandatory), vendor (string), reimbursement_status (choices: Submitted, Approved, Paid, Rejected; default: Submitted)

**Travel Policy** (standalone)
Fields: policy_name (string, mandatory), max_daily_hotel (decimal), max_daily_meals (decimal), max_flight_class (choices: Economy, Premium Economy, Business), applies_to_country (string — use "*" for global default), requires_finance_approval_above (decimal), active (boolean, default: true)

**Travel Delegation** (standalone)
Fields: delegator (ref: sys_user, mandatory), delegate (ref: sys_user, mandatory), start_date (date, mandatory), end_date (date, mandatory), active (boolean, default: true)

---

## Roles

| Role | Contains | Purpose |
|------|----------|---------|
| `<scope>.user` | (base) + canvas_user | Submit requests, log expenses |
| `<scope>.approver` | user | Approve/reject requests |
| `<scope>.finance` | user | Review high-cost requests, approve reimbursements |
| `<scope>.admin` | finance + approver + canvas_admin | Full access |

---

## ACLs

Secure all four tables with read/write/create/delete ACLs scoped to the appropriate roles. Admin-only delete on Travel Request. Finance-only write on Travel Policy.

---

## Business Rules

- **Set Department from Traveler** — before insert on Travel Request: auto-populate department from traveler's user record
- **Derive Travel Type** — before insert/update on Travel Request: compare destination_country to traveler's country; set Domestic or International
- **Validate Return Date** — before insert/update on Travel Request: abort if return_date is before departure_date
- **Escalate to Finance** — after update on Travel Request: if approval_status changes to Approved and estimated_cost exceeds the applicable policy threshold, change status to Finance Review instead

---

## Script Includes

- **TravelPolicyUtil** (server-side): `getPolicyForCountry(country)`, `getFinanceThreshold(country)`, `isWithinPolicy(request)` — falls back to wildcard `*` policy if no country-specific policy exists
- **TravelDelegationUtil** (server-side): `getActiveDelegate(managerSysId)`, `isDelegationActive(delegator, date)`
- **TravelCostCalculator** (client-callable): `getEstimatedDailyRate(country, expenseType)`, `getPolicyLimit(country)` — for GlideAjax use

---

## Workspace

Create a full **Travel Management workspace** with:

**Navigation (UxListMenuConfig)** — three categories:
1. *Travel Requests*: All Requests, Pending Approval, Approved, Finance Review (each with appropriate filter query and columns)
2. *Expenses*: All Expenses
3. *Administration*: Travel Policies, Delegations

**Dashboard** (landing page) — two rows of widgets:
- Row 1: Total Requests scorecard, Pending Approval scorecard, Domestic vs International donut chart
- Row 2: Requests by Approval Status (vertical bar), Top Destinations (vertical bar), Requests by Purpose (pie chart)

Secure the workspace route with a ux_route ACL for the user and admin roles.

---

## AI Agent

Create a **Corporate Travel Policy Agent** with three script tools:

1. **Create Travel Request** — collects destination, dates, business purpose, travel type, cost breakdown (airfare, accommodation per night × nights, ground transport, meals, entertainment); inserts a record; returns request number, total cost, and a direct record link
2. **Evaluate Travel Request** — takes a request number; checks it against approval rules (international → VP routing, cost > policy threshold → Finance Review flag); updates the record with policy assessment; returns flags, approval routing, and next steps
3. **Look Up Travel Request** — looks up by request number or traveler name; returns full details or a summary list with record links

Write full agent instructions that enforce: always use tools (never fabricate results), always show record links, be specific about dollar amounts and policy thresholds, categorize findings as within policy / flagged / requires exception.

---

## Seed Data

Include realistic seed data for:
- **Travel Policies**: at least 5 records covering a global default (wildcard `*`) and several country-specific policies with varied thresholds and flight class caps
- **Travel Requests**: at least 5 records with a mix of approval statuses (Approved, Pending, Finance Review), travel types (Domestic, International), and destinations

---

## Deliverables

- Build using Fluent SDK (TypeScript `.now.ts` files, server scripts in `src/server/`)
- Export all artifacts from `src/fluent/index.now.ts`
- Run `npm run build` before deploying
- After deploy, provide the workspace URL (`/now/{path}/home`) and the app URL

---

## Verification / Testing Loop

After deploying, run through these checks using a browser (Playwright or manual). All steps should pass before the build is considered complete.

### 1. Auth & Instance

- Run `npx now-sdk auth --list` and confirm the target instance alias is present and active.

### 2. Workspace Loads

- Navigate to `https://<instance>.service-now.com/now/<workspace-path>/home`
- Confirm page title contains the workspace name (e.g. `Travel Management | ServiceNow`)
- Confirm no 404 / "Page not found" error

### 3. Dashboard Widgets Present

- The landing dashboard should show all 6 widgets from the spec:
  - Total Requests (scorecard)
  - Pending Approval (scorecard)
  - Domestic vs International (donut chart)
  - Requests by Approval Status (vertical bar)
  - Top Destinations (vertical bar)
  - Requests by Purpose (pie chart)
- Widgets may show "No data available" before seed data loads, but they must render without errors
- With seed data installed, the donut and pie charts should be populated

### 4. Left Navigation Menu

- Open the left nav (hamburger / sidebar)
- Confirm three categories are present: **Travel Requests**, **Expenses**, **Administration**
- Confirm Travel Requests contains: All Requests, Pending Approval, Approved, Finance Review
- Confirm Expenses contains: All Expenses
- Confirm Administration contains: Travel Policies, Delegations

### 5. Seed Data Present

- Navigate to All Requests — confirm at least 5 Travel Request records are visible
- Navigate to Travel Policies — confirm at least 5 policy records including one with `applies_to_country = *`
- Spot-check that at least one request has `approval_status = Finance Review` and one has `Approved`

### 6. Business Rules Smoke Test

- Open any Travel Request record
- Confirm `department` is auto-populated from the traveler's user record (Set Department rule)
- Confirm `travel_type` is set to Domestic or International (Derive Travel Type rule)
- Confirm return_date validation: attempt to save a record with return_date before departure_date — should abort with an error message
