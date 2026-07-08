# Design System Wireframe Site — Project Doctrine (CLAUDE.md)

> Persisted at the user's request: "this is the prompt I use for every project — follow this best practice."
> This file is the **single source of truth (SSOT)** and is honored for every file written or edited in this project.

---

## 0. What this project is (environment reality — READ FIRST)

- **Phase:** DESIGN. Deliverable = low-fidelity **wireframes** of a Canva-style design platform, authored as HTML **Design Components** (`*.dc.html`) that stream and open directly in a browser.
- **This sandbox produces design artifacts, not a runnable Next.js/Convex repo.** There is no `npm`, `tsc`, Convex, Docker, or CI in this environment.
- Therefore rr's **runtime** rules — Convex validators/authz/`.collect`/`ConvexError`, Next `proxy.ts`/`next/link`/`next/image`/Cache Components/`preloadQuery`, `@convex-dev/auth`, `check:stack-pin`, `npx tsc`, `audit:*`, `npm publish`, delivery/commits — **attach at implementation time in the real rr repo.** They have nothing to bite on in a static wireframe. Do NOT fake them here.
- rr's **design-relevant** principles ARE honored now:
  - Vertical-slice decomposition (each screen = a future slice with a documented contract).
  - Props-driven / portable — **no hardcoded copy, URLs, env names, or role enums** in components; copy flows through a `labels` map (ID default, EN parallel).
  - Semantic **tokens, not ad-hoc hex** — a fixed grayscale token set (see `docs/DESIGN-SYSTEM.md`).
  - shadcn-style **primitive reuse** — every screen composes from a small wireframe primitive kit; never one-off markup.
  - **Single responsibility & compose-don't-accumulate**; extract a pattern on its 2nd occurrence.
  - **Mobile-first responsive**; explicit **empty / loading / error** states; exactly **one outer chrome** (the app shell).
  - Naming: files `kebab-case`, component names `PascalCase`, hooks `useCamelCase`, utils `camelCase`.
- **Handoff intent:** each wireframe screen is documented in `docs/PLAN.md` as a future `slices/<slug>/` (+ `convex/features/<slug>/`) with its **contract** (data/props it will need), so lifting the design into the real rr repo is `cp` + wire, not a rewrite.

---

## 1. rr conventions (persisted SSOT)

Every rule carries a tier — **P0** (security & data integrity, never violate), **P1** (architecture, violate only with a `// TODO(rr): …` marker + commit-body note), **P2** (style, tooling-enforced). Higher tier wins on conflict. When you can't ask mid-task: take the recommended option, mark `// TODO(rr): confirm — chose X over Y because …`, continue. Never silently guess. If a P0 conflicts with the task, STOP and report — do not route around P0.

### Stack baseline (P1)
- **[P1] Next.js 16 + React 19** — pin Next `^16` + React `^19`. No `middleware.ts` → use `proxy.ts` at project root.
- **[P1] Tailwind v4** — `@tailwindcss/postcss`; bridge a v3 config via `@config` only during migration.
- **[P1] Convex self-hosted** — Docker Compose on the same Dokploy node; pin `convex ^1.16`+.
- **[P1] Auth = `@convex-dev/auth`** — no Clerk; custom auth only when documented insufficient.
- **[P1] TypeScript strict + drift guard** — TS strict everywhere; if package.json disagrees with baseline, FLAG, don't silently adopt.

### Vertical slice structure (P1)
- **[P1] Slice layout** — consumer projects: `slices/<slug>/` (+ optional `convex/features/<slug>/`); rr internal repo: `frontend/slices/<slug>/`. Don't mix. Per-slice: `components/ lib/ utils/ hooks/ config/ api/` + `types.ts` + tests + metadata pair.
- **[P1] Barrel-only cross-slice imports** — resolve ONLY via `@/components/ui/*`, `@/shared/*`, `@/features/<own-slug>/*`, `@convex/*`, or relative-within-slice. No `../../` into another slice.
- **[P1] Metadata PAIR** — `slice.json` (contract folded under `contract`) + `slice.manifest.json`; versions must match (`audit:slices`). `lib/content/slices.ts` scalars are GENERATED (`gen-slice-catalog.mjs`) — never hand-edit.
- **[P1] Props-driven portability** — portable slices NEVER hardcode consumer URLs, env names, role enums, or copy.
- **[P1] rr backend is admin-only** — site demos use the localStorage adapter, not Convex; `convex/features/*` is copy-source. Never compose every feature into rr's own `convex/schema.ts`.

### Convex rules
- **[P0] Validators on every public function** — every client-reachable `mutation()`/`query()` declares `args:` with `v.*`.
- **[P0] Server-side authz inside every handler** — `requireUser`/`requireAdmin` from `convex/_shared/auth.ts` as the FIRST line. Route gates don't protect Convex HTTP endpoints.
- **[P1] No bare `.collect()`; index every filtered/ordered query** — use `.withIndex(...).take(N)` or paginate; add the index. Exception: bounded config tables (<~50 rows) with a `// TODO(rr): bounded table` marker.

### Next.js rules
- **[P0] `NEXT_PUBLIC_` only for non-sensitive values** — never secrets/keys/admin emails.
- **[P0] Server Actions verify the caller** — every `'use server'` export authenticates AND authorizes before mutating.
- **[P1] `proxy.ts` not `middleware.ts`.**
- **[P1] `next/link` + `next/image` only** — never raw `<a href="/internal">` or `<img>`.
- **[P1] Cache Components for static reads** — `"use cache"` + `cacheLife`/`cacheTag`; enable `experimental.cacheComponents` first.
- **[P1] Runtime fs reads need `outputFileTracingIncludes`** in `next.config.mjs`.

### Data fetching (P1)
- **[P1] Authed/dynamic pages → `preloadQuery`** (server) → `usePreloadedQuery` (client).
- **[P1] Reactive client state → `useQuery`/`useMutation`** (`convex/react`).
- **[P1] Static marketing reads → `fetchQuery` inside `"use cache"`** or build-time data.
- **[P1] Never fetch in `useEffect`** — mutations go through slice-local `hooks/`.

### Error handling & logging (P1)
- **[P1] Convex → typed `ConvexError({ code, message })`** with a code from the slice's `types.ts`. Never raw strings; never leak internals.
- **[P1] Client → map code → copy, surface via shared toast (sonner).** Never swallow; never `alert()`.
- **[P1] Route boundaries** — every route group ships `error.tsx` (+ `not-found.tsx` where relevant).
- **[P1] Logging** — server `console.error("[<slice>:<fn>]", err)`; no PII; no stray client `console.log`.

### Testing (P1)
- **[P1] Co-located per slice** — `__tests__/` or `<file>.test.ts(x)`.
- **[P1] Mandatory per slice** — (1) the barrel's exported API; (2) every Convex fn via `convex-test`, INCLUDING the authz-denied path.
- **[P1] App-level e2e stays global** — Playwright smoke is global; slices don't own e2e.

### File modularity (P2)
- **[P2] ≤200 lines per source file** — `audit:file-size` + eslint `max-lines`. Excl: pure data exports, `_generated/`, tests, vendored `components/ui/*`.
- **[P2] Single responsibility per file** — one default export OR one cohesive named-export cluster.
- **[P2] Extract on the SECOND occurrence** (not the third).
- **[P2] Dynamic over hardcoded** — lookup maps over if/switch chains; `labels` props over inline copy.
- **[P2] Compose, don't accumulate** — a new composing file over editing an existing one bigger.

### Naming (P2)
- **[P2]** Files `kebab-case`; components `PascalCase`; hooks `useCamelCase`; utils `camelCase`.
- **[P2]** Per-slice types in `types.ts`; constants in `config/`; `index.ts` is a barrel ONLY.
- **[P2]** Convex tables plural camel; indexes `by_<field>`.

### UI rules (P1)
- **[P1] shadcn primitives only** — never raw `<button>`/`<dialog>`/`<input type=date|file>`; use `Button`, `ResponsiveDialog`, `DateField`, `FileUpload`.
- **[P1] Theme tokens, not hex** — `bg-background`/`text-foreground`/`border-border`; status colors via the tones SSOT.
- **[P1] Mobile-first responsive** — single-column base, layer `md:`/`lg:` upward.
- **[P1] No marketing chrome on workspace surfaces** — workspace renders full-bleed (`h-dvh`).
- **[P1] Shell hierarchy: exactly one outer chrome** — dashboard-shell owns it; panels mount inside; never nest two chromes.

### Delivery rules (P1)
- **[P1] Solo-dev = push direct to main** (tests+typecheck+validate green); risky → `main:staging` first.
- **[P1] Conventional commits** — `feat(scope): subject`; body explains WHY + lists `TODO(rr)` deviations.
- **[P1] Co-author the AI** — `Co-Authored-By: Claude <noreply@anthropic.com>`.
- **[P0] Publish guardrail** — NEVER run `npm publish`; end the response with the publish suggestion and let the user do the OTP step.
- **[P1] No GitHub Actions cloud minutes** — local CI via pre-push hook / `/sc-git ci`.

### Copy-first & Source Map (P1)
- **[P1] Never greenfield what a proven source solved** — check the Source Map (§2); `cp -r` → adjust aliases → strip business bits.
- **[P1] Missing source path → STOP and ask** — Source Map paths are machine-local; don't reconstruct from memory.

### rr distribution kinds (P1)
- **[P1] TEMPLATE = full-app scaffold** (`lib/content/layouts.ts`) — `npx rr add <slug>` (`--at root` default). No slice metadata.
- **[P1] SLICE = drop-in vertical feature** (`lib/content/slices.ts`) — `npx rr add <slug>` → `slices/<slug>/` (+ optional `convex/features/<slug>/`) with the metadata pair.
- **[P1] Trust the CLI banner** (`[TEMPLATE]`/`[SLICE]`).
- **[P1] Lift = sanitize first** (slice path only) — strip URLs/env/enums/table coupling → props/allowlists.
- **[P1] MCP connectors via `npx rr add create-your-mcp`** — never hand-roll OAuth/PKCE.

### Agent protocol
1. Before code: scan whether the change crosses a rule; follow it even if unasked.
2. Before a dependency: check the rr catalog (`npx rr list` / `/slices`).
3. Before a feature: does it belong in `slices/<slug>/` (+ `convex/features/<slug>/`)?
4. After editing: `npx tsc --noEmit` + relevant `validate:*` / `audit:*`.
5. When proposing changes, STATE which rules they honor.
6. Existing violations: point out, fix ONLY if asked.
7. Blocked + can't ask: recommended option + `// TODO(rr): …` + commit-body note.
8. P0 conflict with the task: STOP and report; never route around P0.

---

## 2. Source Map (copy-first)

Source Map paths are **machine-local** and unknown in this sandbox. Per "[P1] Missing source path → STOP and ask": if asked to copy from an rr source, STOP and request the path / a paste — do not reconstruct from memory.

| Need | Source path | Status |
| --- | --- | --- |
| dashboard-shell (chrome) | `~/projects/rr/frontend/slices/dashboard-shell/` | fill in at build time |
| UI taxonomy — component naming SSOT | `docs/reference/ui-taxonomy.html` (user-provided, persisted in project 2026-07-07) | ✅ available |
| _(add as identified)_ | | |

---

## 3. Project decisions log (RECOMMENDED defaults — confirm before build)

These answer the intake questions the user did not explicitly submit. Per agent protocol #7 they are recommended defaults, flagged for confirmation, not silent guesses.

- **Scope:** full app — Home, Projects, Templates, Brand Kit, Print Catalog, AI chat + overlays (create-design modal, account menu, notifications panel, "more" menu).
- **Faithful vs explore:** one faithful wireframe per screen (follows the screenshots), NOT an options-exploration stack.
- **Behavior:** interactive — sidebar switches screens; dropdowns/modals open/close.
- **Fidelity:** low-fi sketchy grayscale (Wireframe-skill aesthetic).
- **Language:** Indonesian labels as shown, via an i18n `labels` map (EN parallel = a tweak flip).
- **Branding:** generic placeholder wordmark — NOT Canva branding (user domain is gmail.com; recreate structure/behavior, not proprietary brand visuals).
- **AI features:** include both the docked side AI panel (Home) and the AI chat screen.
- **Build unit:** ONE interactive DC (screens toggled by state), not the Wireframe-skill vertical options stack — because the ask is a faithful navigable app. Wireframe *aesthetic* still applies; options-stack *layout* does not.

- **Component naming SSOT:** the user-provided UI taxonomy at `docs/reference/ui-taxonomy.html` — EN PascalCase canonical names in design-system/code, Indonesian labels user-facing. Its 21 dictionary items + category extras are the MINIMUM component set; coverage checklist lives in `docs/PLAN.md §5b`.

See `docs/PLAN.md` and `docs/DESIGN-SYSTEM.md` for detail.

---

## 4. Changelog / status (2026-07-07)

- Built `Design Platform Wireframe.dc.html` (one DC): 6 screens + 4 overlays, 100% data-driven via a `labels` map.
- **Responsive** done (media queries in `<helmet>` + `data-r` hooks + `!important`): rail→bottom bar, secondary sidebar→horizontal strip, data table→name+actions, modal→fullscreen; AI panel hidden <900px.
- **Theme** system (light/dark): `theme` prop + in-app "Tema" toggle. Palette applied as CSS custom properties on the shell root from `renderVals()` (NOT a lifecycle side-effect — that proved unreliable in this runtime).
- Template reusability props added: `brandName`, `accent` (curated swatches), `theme`; plus `lang`, `fidelity`, `annotate`.
- Progress = 100% (backlog closed: brandName in copy, dark stripe contrast, focus-visible) — see `docs/PLAN.md §12`.

## 4b. Changelog / status (2026-07-08) — extracted into a compilable Design System

Per user request ("make a design System out of this project… well structured, detailed docs"), the inline wireframe was extracted into a proper, compiler-consumable **Design System** (the "Create design system" workflow), honoring the rr design-relevant principles.

- **Foundations:** root `styles.css` (@import-only entry) → `tokens/` (`fonts.css`, `colors.css` with light + `[data-theme=dark]`, `typography.css`, `spacing.css`, `base.css`). Tokens = SSOT; no hardcoded hex downstream.
- **Components:** 29 primitives across 6 groups under `components/<group>/`, each `Name.jsx` (`export function`) + `Name.d.ts` (props contract; `@startingPoint` on AppShell, NavigationRail, DataTable, Card, ModalDialog, Button, CommandSearch, QuickActionBar) + `Name.prompt.md`, plus one `@dsCard` demo HTML per group. Styling is inline via the CSS custom properties; copy is props-driven. Groups: layout · navigation · actions · content · feedback · overlay. Maps 1:1 to the taxonomy coverage checklist (`docs/PLAN.md §5b`).
- **Guidelines:** 15 `@dsCard` foundation specimen cards (`guidelines/`) — Colors, Type, Spacing, Brand.
- **UI kit:** `ui_kits/design-platform/` composes the primitives into the 6 screens + overlays (`DesignPlatform.jsx` + per-screen files + `data.js` + `index.html` tagged `@dsCard` + `@startingPoint`). Screen files = future rr slices.
- **Docs:** root `readme.md` (design guide + manifest: CONTENT FUNDAMENTALS, VISUAL FOUNDATIONS, ICONOGRAPHY) and `SKILL.md` (Agent-Skills compatible).
- The original `Design Platform Wireframe.dc.html` is retained at root as the standalone interactive reference (theme + responsive live).
- **Component cards + UI-kit index** mount from the generated `_ds_bundle.js` via runtime namespace discovery (the `check_design_system` tool was unavailable in this environment). Foundation cards are bundle-independent and always render.
- **Action for user:** set the file type to **Design System** in the Share menu so the org can consume it.

## 4c. Changelog / status (2026-07-08) — reskin: Plus Jakarta Sans + Claude palette + brand "Rupa"

Per user request ("ganti fontnya menjadi Jakarta saja, warna gunakan warna claude, ganti place holder brand, nama files, dll"):

- **Font → single family.** Collapsed to **Plus Jakarta Sans** (400–800) in `tokens/fonts.css` + `tokens/typography.css`. The role aliases `--font-hand` / `--font-mono` / `--font-clean` are retained but all resolve to Jakarta, so no component needed touching; hierarchy now comes from weight/size/color, not a second face.
- **Color → Claude palette.** `tokens/colors.css` swapped to warm ivory surfaces (`--paper #F0EEE6`, `--surface #FAF9F5`) + terracotta accent (`--accent #D97757`), warm-charcoal dark theme (`#262624`…). Tokens are SSOT; guideline cards, front door, and all docs updated to the new hex.
- **Brand placeholder → "Rupa"** (Indonesian: *visual form*), lettermark "R" — replaces "Kreo" across `data.js`, the standalone DC (`brandName` prop default), component cards, and docs. Deliberately NOT named "Claude": the request scopes Claude to *colors only*; naming the product after Anthropic's would impersonate it.
- **Sample content cleaned.** Leftover scraped file names (Arabic contract PDF, verbose collage titles) → clean Indonesian placeholders (Presentasi Peluncuran Produk, Proposal Kerja Sama.pdf, Materi Rapat Tim.pdf…); sample account → Nadia Pratama / Tim Rupa.
- **Front door.** Root `index.html` is the bundle-independent landing page (live foundations + system index), retitled "Rupa Wireframe Design System".
- The standalone reference keeps its descriptive filename `Design Platform Wireframe.dc.html` (not brand-named); offer to rename on request.

## 4d. Changelog / status (2026-07-08) — preset-driven token system (shadcn-compatible) + cleanup

Per user request ("cleanup unused files… semuanya dynamis, style diatur pakai theme preset… semua style harus berbentuk variable… DRY, SSOT, best practice", with a shadcn `modern-minimal` registry pasted as the example):

- **Token layer rebuilt as a shadcn-compatible, PRESET-DRIVEN system.** Semantic tokens (`--background`/`--foreground`/`--card`/`--primary`/`--muted`/`--border`/`--ring`/`--sidebar*`/`--chart-*`/`--radius`/`--shadow-*`/`--font-sans|serif|mono`…) are the SSOT. `themes/*.css` presets supply the values (light + `[data-theme="dark"]`); `tokens/base.css` DERIVES the rest (radius scale, elevation, focus, `--primary-soft`, `--subtle-foreground`, `--stripe`) so a preset lists only ~30 values. `tokens/colors.css` + `tokens/spacing.css` were deleted (folded into `themes/` + `base.css`).
- **3 presets:** `rupa` (default, warm coral — the prior look), `modern-minimal` (the user's pasted registry — blue / Inter / Source Serif / JetBrains Mono), `emerald` (green). Add a project theme = one file with the same contract.
- **All 29 components + guidelines + UI kit + front door migrated** from the ad-hoc names (`--paper`/`--ink`/`--accent`…) to semantic tokens via a scripted global rename. `AppShell` gained a `preset` prop (sets `data-preset`); the `accent` prop still overrides `--primary` (default cleared to "" so presets drive it).
- **Interactivity:** the front door (`index.html`) is a live theme playground (preset segmented control + light/dark, persisted); the standalone DC has a top-center preset + theme switcher. Both drive `data-preset`/`data-theme` — one SSOT.
- **Standalone DC** now LINKS `styles.css` and consumes the presets (its bespoke JS palette removed) — no second source of truth.
- **Cleanup:** removed superseded `tokens/colors.css` + `tokens/spacing.css`. Reference screenshots in `uploads/` are kept (cited as sources in the docs).
