# moreau-test

Test project for Fluent SDK vibe-coding. Scope: `x_snc_moreau_test`.

## Commands

- Build: `npm run build`
- Deploy: `npm run deploy`
- Auth check: `npx now-sdk auth --list`
- Type defs: `npm run types`

## Rules

- All Fluent files end in `.now.ts` and live under `src/fluent/`, organized by type (tables/, business-rules/, acls/, etc.)
- Export every artifact from `src/fluent/index.now.ts`
- Server-side scripts go in `src/server/` and are imported by `.now.ts` files — never inline scripts as strings
- Never edit `src/fluent/generated/keys.ts` — SDK-managed
- Run `npm run build` before deploying to catch errors early
- No REST API calls or MCP writes — code-first via Fluent only
