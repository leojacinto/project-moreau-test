# Project Moreau - a test

A controlled benchmark comparing two approaches to AI-assisted ServiceNow application development.

---

## The Question

When a build agent has access to an existing codebase of similar applications, does it produce better ServiceNow applications than an agent working from a specification alone?

This repository is the evidence base for that question.

---

## Background

The ServiceNow Fluent SDK lets you build scoped applications in TypeScript and deploy them code-first. [Project Moreau](https://github.com/leojacinto/project-moreau) is a monorepo that accumulates these applications over time, creating a growing library of patterns, utility classes, and implementation conventions.

The hypothesis behind this test was that feeding this existing codebase to a build agent as context, rather than starting from a blank specification, would produce meaningfully better output.

---

## Experiment Design

Two approaches with the same specification on the same instance; timed and measured.

**Approach A: Context-primed (project-moreau)**
The build agent received the full project-moreau monorepo as context alongside the application specification. It could reference existing patterns, utility classes, and how previous applications had handled similar problems.

**Approach B: Baseline**
The build agent received only the application specification. No existing codebase, no reference implementations.

Both approaches used the same model, the same prompt structure, and the same target platform.

---

## Two App Types, Two Conditions

The experiment deliberately tested two different conditions.

**Travel Request Management** (scopes: `x_snc_moreau_trv` vs `x_snc_nrt`)

A standard travel workflow: employees submit requests, managers approve, finance reviews high-cost trips, travelers log post-trip expenses. Four tables, business rules for field automation and escalation logic, policy-driven approval thresholds, approval delegation. Full specification in [moreau-travel/PROMPT_BASELINE.md](moreau-travel/PROMPT_BASELINE.md).

The travel app exists in the project-moreau monorepo. This is the exact-match condition.

**Equipment Master Data Management** (scopes: `x_snc_eqmdm` vs `x_snc_nrm`)

A simulated SAP-to-ServiceNow reconciliation pipeline: raw equipment records arrive from a staging table representing a SAP PM feed, a four-stage flow (Ingest, Match and Dedupe, Resolve and Promote, Publish) reconciles them into a clean golden master, and an AI agent answers questions about the published records. Six tables, Flow Designer automation with a shared Log Step subflow, Configurable Workspace for the data steward. Full specification in [equipment_mdm_build_agent_instructions.md](equipment_mdm_build_agent_instructions.md).

No MDM application exists in the project-moreau monorepo. This is the new-use-case condition.

---

## What Was Measured

Every application artifact was queried directly from the instance via REST API and compared against the specification. The evaluation covered:

- Table and field completeness against spec
- Business rule count, trigger configuration, and script logic quality
- Flow completeness and publish status
- UI action wiring and correctness
- Seed data fidelity
- Noise artifacts outside the application scope
- Token consumption and active build time per session

---

## Findings

### Travel App

| | moreau_trv (project-moreau) | nrt (baseline) |
|---|---|---|
| Tables vs spec | 4 of 4 | 4 of 4 |
| Business rules vs spec | 4 of 7 | 4 of 7 |
| Rules missing | Same 3 cross-record rules in both | Same 3 cross-record rules in both |
| Logic reuse | Uses shared utility class | Duplicates logic inline |
| Null safety | Field guards before write | Unconditional writes |
| Noise artifacts | None | None |

Both approaches built the same tables with the same fields. They also missed the same three business rules: aggregate actual cost from child expense records, prevent edits on approved records, and cascade expense closure when the parent request closes. These require explicit callout in the prompt; neither approach inferred them independently. This is a prompt-engineering finding, not an approach-specific one.

The difference shows up in the code quality of what was built. The context-primed build used the `TravelPolicyUtil` script include correctly throughout, including in the "Escalate to Finance" business rule that calls `getFinanceThreshold()`. The baseline build duplicated that same policy lookup inline in the business rule, creating two places to maintain when the logic changes. The context-primed build also added nil checks before field assignments; the baseline wrote unconditionally, which silently produces incorrect data when a traveler's sys_user record is missing fields.

### Equipment MDM App

| | eqmdm (project-moreau) | nrm (baseline) |
|---|---|---|
| Tables vs spec | 6 of 6 | 6 of 6 |
| Flows published | 3 of 4 with real step content | 0 of 4 - require manual completion |
| UI action wiring | FlowAPI with background execution | Field-based trigger with no handler |
| Seed data | Requires separate population step | 13 records, all defects correct |
| Noise artifacts | 2 test modules in parent scope | None |

The table structures were correct in both. The gap widens in the automation layer.

The context-primed build published three of four flows with full action content and wired the UI actions using `sn_fd.FlowAPI.getRunner().flow(name).inBackground()`, which is the correct async invocation pattern. Match and Dedupe was left incomplete, which is the only flow that would not run without manual intervention.

The baseline build's four main flows require manual completion before activation. The UI actions use a trigger-field pattern that requires a separate handler to be implemented. Without that handler, clicking any action button updates a field and redirects, but no automation runs.

The baseline build produced correct seed data: all 13 staging records with every planted data quality defect in place, including the exact duplicate pair, the near-duplicate with the transposed serial, the three manufacturer name variants, and the record with a missing mandatory cost centre. The context-primed build's code-first deployment model separates schema creation from data population, so seeding requires an additional step after deployment.

In the context-primed build, two test modules from the parent workspace were bundled into the deployment, landing in a scope they do not belong to. This is a known behaviour of the Fluent SDK's module system in monorepo configurations and is addressed by scoping module declarations before committing to a production update set.

### What Both Approaches Missed Consistently

ACL role assignment and condition scripting were generated as structural stubs across all four applications. Role binding requires organisation-specific role hierarchy decisions that sit outside what a generic build specification can provide. Both approaches produced the correct table operations; populating conditions is a platform configuration step.

Neither approach inferred the three complex business rules without explicit prompt callout. This pattern held across both app types, which suggests it reflects the prompt specification rather than either approach.

---

## Cost

All four sessions ran on the same model. Token counts sourced from session JSONL files.

| | project-moreau | Baseline | Delta |
|---|---|---|---|
| Travel cost | $9.66 / ~14 min active | $10.40 / ~21 min active | -7% cheaper, 33% faster |
| MDM cost | $10.23 / ~31 min active | $11.30 / ~27 min active | -9% cheaper, 15% slower |
| Total | $19.89 | $21.71 | -8% |

The context-primed approach was cheaper across both apps. The primary driver for travel is fewer output tokens (the agent was more focused) and lower cache write volume. For MDM, the monorepo context actually reduced cache reads compared to the baseline, likely because the agent required fewer clarifying passes through the specification.

The 33% faster active build time for travel reflects the exact-match condition: the agent had a direct template to work from. For MDM, the new-use-case condition added build time despite the cost staying lower.

---

## Conclusions

**Context priming helps most when the match is close.**

For the travel app, which exists in the monorepo, the context-primed build was cheaper, faster, and produced better-structured code. The benefits were consistent and there was no noise cost.

**For new use cases, the picture is more nuanced.**

The context-primed MDM build produced correct flow automation and properly wired UI actions, which the baseline did not. But it also introduced build artifacts from adjacent workspace modules that need cleanup before a production deployment. The baseline produced better seed data completeness out of the box.

**The monorepo is a blunt context source.**

It worked — but feeding a full codebase into every session is token-heavy, and model context windows lose usefulness past a point. The cleaner direction is distilled context: have an agent summarise your existing codebase into patterns, conventions, and reusable structures, then inject that as scoped instructions rather than the full repo. You get the same signal at a fraction of the cost. This experiment used the raw monorepo to establish that codebase context matters; the next question is how to deliver that context efficiently.

**The cost case for context priming is stronger than expected.**

The assumption going in was that injecting a large monorepo as context would increase token costs. The data shows the opposite: context-primed builds were cheaper for both apps. Better context appears to produce more focused output, which offsets the overhead of carrying the codebase in the session. With distilled context replacing the raw monorepo, the cost advantage should widen further.

---

## Repository Structure

```
project-moreau-test/
  moreau-travel/          Context-primed travel app (x_snc_moreau_trv)
  no-repo-travel/         Baseline travel app (x_snc_nrt)
  moreau-mdm/             Context-primed MDM app (x_snc_eqmdm)
  equi-mdm/               Baseline MDM app (x_snc_nrm)
  moreau-travel/PROMPT_BASELINE.md   Build specification used for travel apps
  equipment_mdm_build_agent_instructions.md   Build specification used for MDM apps
```

---

## Notes

The SAP feed in the MDM demo is simulated via a local staging table. No live SAP connection is required or implied. The production architecture for this pattern uses the ServiceNow Workflow Data Fabric Zero Copy Connector for ERP, which federates SAP data via SAP-published BAPI/OData interfaces without copying records permanently into ServiceNow.

Pricing used for cost calculations: Sonnet 4.6 at $15/MTok output, $3.75/MTok cache write, $0.30/MTok cache read.
