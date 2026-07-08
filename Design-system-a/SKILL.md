---
name: rupa-design
description: Use this skill to generate well-structured, low-fidelity WIREFRAMES for a Canva-style design platform (or any multi-surface creative/dashboard app), either for production or throwaway prototypes/mocks. Contains the wireframe design language — preset-driven semantic tokens (shadcn-compatible; Rupa · Modern Minimal · Emerald), Plus Jakarta Sans / Inter type, and a full kit of named UI primitives (AppShell, NavigationRail, CommandSearch, DataTable, ModalDialog, …) plus an interactive product UI kit.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

Key entry points:
- `readme.md` — the design guide: content fundamentals, visual foundations, iconography, and a full manifest.
- `styles.css` + `tokens/` + `themes/` — link `styles.css`; a theme **preset** (`themes/*.css`, switched via `data-preset` on any ancestor) supplies token values for light + dark. Components use semantic vars only — never hardcode hex or type.
- `components/` — 29 reusable primitives (`Name.jsx` + `Name.d.ts` + `Name.prompt.md`). Read a component's `.prompt.md` for what/when + a usage example.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `ui_kits/design-platform/` — the interactive product recreation; `Design Platform Wireframe.dc.html` (root) is the standalone reference.
- `docs/` — deep spec (`DESIGN-SYSTEM.md`), rr slice map + contracts (`PLAN.md`), and the naming SSOT (`reference/ui-taxonomy.html`).

If creating visual artifacts (mocks, throwaway prototypes, wireframes), copy the pieces you need and produce static HTML that links `styles.css` and composes the primitives — copy flows in as props (Indonesian by default; an English parallel exists). Keep the low-fi rules: neutrals + one primary (from the active preset), borders over shadows, honest hatched placeholders, geometric glyphs (no emoji, no invented logo).

If working on production code, follow the **Rahman Resources (rr)** doctrine in `CLAUDE.md`: each screen lifts into `slices/<slug>/` (+ `convex/features/<slug>/`) with the contract documented in `docs/PLAN.md`; tokens not hex, props-driven copy, shadcn-style primitive reuse, one outer chrome, mobile-first, Convex validators + server-side authz on every function.

If the user invokes this skill without other guidance, ask what they want to build, ask a few focused questions (surface, scope, screens, language, faithful-vs-explore), then act as an expert wireframe designer who outputs HTML artifacts _or_ rr-compliant production scaffolding, depending on the need.
