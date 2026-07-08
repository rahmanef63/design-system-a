# Rupa Wireframe Design System

A low-fidelity **wireframe** design system for a Canva-style design platform. Its job is to capture the *structure and behavior* of a multi-surface creative app — app shell, navigation rail, hero search, carousels, tables, modals, popovers, panels, empty states — as an **original, warm-neutral, placeholder-driven** artifact. It deliberately does **not** reproduce any commercial product's branding; "Rupa" is a generic placeholder wordmark.

Everything here is engineered to be lifted into the real **Rahman Resources (rr)** stack later: tokens not hex, props-driven copy, shadcn-style primitive reuse, one outer chrome, mobile-first, documented per-screen contracts. See `docs/PLAN.md` for the slice map and `CLAUDE.md` for the full doctrine.

## Sources
- **Reference screenshots:** `uploads/Screenshot 2026-07-07 *.png` (10 views of a Canva-style web app).
- **Component naming SSOT:** `docs/reference/ui-taxonomy.html` — an interactive UI/UX taxonomy (English PascalCase canonical names, Indonesian user-facing labels).
- **Interactive reference build:** `Design Platform Wireframe.dc.html` (project root) — the original single-file interactive wireframe this system was extracted from; still the best way to see theme + responsive behavior live.
- Prior specs: `docs/DESIGN-SYSTEM.md`, `docs/PLAN.md`.

No logo or brand assets were provided, so none were created — the brand renders as plain type / a lettermark tile (see Iconography).

---

## CONTENT FUNDAMENTALS
How copy is written in this system.

- **Language:** Indonesian is the default, user-facing voice (matches the reference). Canonical component/code names stay **English PascalCase** (`NavigationRail`, `CommandSearch`); only user-facing copy is Indonesian. An English parallel exists for every string in the interactive reference.
- **Address:** second person, warm and direct — "Mau desain apa hari ini?", "Jelaskan ide Anda, lalu nanti akan saya wujudkan." The product speaks as a helpful collaborator ("saya"), the user as "Anda."
- **Casing:** Sentence case for headings and buttons ("Semua proyek", "Coba Pro gratis"), not Title Case. UPPERCASE is reserved for tiny kickers ("LANGKAH 1") and section eyebrows.
- **Tone:** action-first and encouraging — verbs lead ("Buat", "Jelajahi template", "Coba yang ini!"). Short. No marketing bombast.
- **Meta/counts:** always lighter and smaller (Medium 500), terse, lowercase — "Diedit 7 bulan lalu", "A4 · Private".
- **Badges:** one word — "Baru", "Beta", "Gratis", "Private".
- **Emoji:** not used as UI. Meaning is carried by type + simple glyphs. The only decorative marks are geometric (★ for premium/annotation, ✦ on the Brand hero).
- **Placeholders:** honest and self-describing — `[ template ]`, `[ preview ]`, `[ produk ]`, `[ brand art ]`. Never lorem ipsum, never fake finished copy.

---

## VISUAL FOUNDATIONS
The motifs and rules of the look. Tokens live in `tokens/` and are the source of truth — never hardcode a hex.

- **Overall vibe:** a calm, low-fidelity wireframe. Warm neutrals + one brand color in the default preset; the entire look is preset-driven, so any project reskins it by swapping the theme. It should read "structure & flow, not final visuals" at a glance.
- **Color:** semantic tokens, never raw hex — `--background` / `--card` / `--muted` surfaces, a `--foreground` / `--muted-foreground` / `--subtle-foreground` text ramp, one `--primary` (brand/action) with `--primary-soft` (active tint) + `--primary-foreground`, plus `--border` / `--border-strong` / `--ring`, `--destructive`, and `--highlight` (annotations only). Values come from the active **theme preset** (`themes/*.css`); the default **Rupa** preset is warm ivory + Claude terracotta. Rule: neutrals + one primary; no stray hues. Every preset ships light + a `[data-theme="dark"]` scope.
- **Type:** the preset's `--font-sans` / `--font-serif` / `--font-mono` (Rupa = Plus Jakarta Sans throughout; Modern Minimal = Inter / Source Serif 4 / JetBrains Mono). Hierarchy from **weight + size + color**: 800/700 display & headings, 600 buttons/nav, 500 meta, 400 body. Scale: display 34/42 → h1 25/32 → h2 19/26 → body 15/22 → label 13/18 → caption 12/16. Never below 11px.
- **Spacing:** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64. Generous hero padding (48–54px), comfortable 40px page gutters.
- **Corner radii:** sm 6 (chips/thumbs) · md 10 (buttons/inputs/cards) · lg 16 (heroes, big cards, modal) · pill 999 (nav chips, filter chips, primary CTA, FAB, avatars).
- **Borders:** the primary visual device. `1.5px --border` default; `2px --border-strong` on hover/emphasis. Everything is outlined rather than filled/shadowed.
- **Elevation:** flat by default — the wireframe lives on borders, not shadows. Shadow appears **only** on true overlays: `--elevation-overlay` (popovers/menus) and `--elevation-modal` (dialogs, drawers).
- **Backgrounds:** solid `--background`. Heroes get a very soft top-down wash (`linear-gradient(180deg, var(--primary-soft), transparent 88%)`). No photos, no busy gradients, no textures — except the placeholder hatch.
- **Placeholder hatch:** every image slot is a 45° repeating-stripe box (`.ds-hatch` / the `Thumb` component) in `--muted` with a `--stripe` overlay (derived, theme-aware) and a small caption. This is the single most recognizable motif.
- **Hover states:** surface tint (`--muted`) and/or a stronger border (`--border-strong`); interactive text shifts toward `--primary`. Subtle, never dramatic.
- **Press/active:** selected nav/tabs show `--primary` text on a `--primary-soft` tint (rail tiles) or an accent underline (tabs). No scale/bounce.
- **Focus:** `2px --ring` outline with 2px offset on every interactive element; `CommandSearch` adds a `--primary-soft` glow ring.
- **Motion:** 120–160ms `ease`. Two keyframes only — `ds-ovin` (overlays rise 6px + fade) and `ds-fade` (scrims). All motion is disabled under `prefers-reduced-motion`.
- **Cards:** `--card` fill, 1.5px `--border` border, md/lg radius, no shadow; hover strengthens the border. A card = one object (Thumb + title + optional meta + badge).
- **Transparency/blur:** used only for scrims (`rgba(20,20,18,.35–.5)`) and the accent washes. No glass/backdrop-blur.

---

## ICONOGRAPHY
- **Approach:** simple **geometric line glyphs** and unicode marks only — `+`, `⋯`, `★`, `☆`, `▾`, `▸`, `◂`, `›`, `◦`, `◧`, `◔`, `◍`, `▷`, `≣`, `▦`, magnifier ring. No icon font, no illustrative SVGs, no emoji-as-icon. Meaning is carried by the adjacent label; the glyph is a wireframe stand-in for a final icon.
- **Why:** at wireframe fidelity, committing to specific iconography would over-specify the design. Every glyph is intentionally a placeholder. When this lifts into rr, swap glyphs for the real icon set (e.g. Lucide) at the component boundary — components accept an `icon` prop, so no structural change is needed.
- **No brand mark:** the sources contained no logo, so none was invented. The brand appears as a lettermark tile (`brand.initial` on `--primary`) + the wordmark in the preset's `--font-sans`. Provide a real logo to replace the tile.
- **Rasterization:** none needed — there are no complex vector diagrams.

---

## Index / manifest
- **`styles.css`** — the entry point consumers link. `@import`s only.
- **`tokens/`** — `fonts.css` (all preset webfonts), `typography.css` (type scale + weights), `base.css` (DERIVED tokens — radius scale, elevation, focus, `--primary-soft`, `--subtle-foreground`, `--stripe` — + resets + `.ds-hatch`).
- **`themes/`** — the theme PRESETS: `rupa.css` (default) · `modern-minimal.css` · `emerald.css`. Each declares the full semantic token set (shadcn-compatible) for light + a `[data-theme="dark"]` scope. Switch with `data-preset="…"` on any ancestor. A new project theme = one more file here with the same token contract.
- **`components/`** — 29 reusable primitives across 6 groups, each `Name.jsx` + `Name.d.ts` + `Name.prompt.md`, with one `@dsCard` demo per group:
  - `layout/` — AppShell · NavigationRail · SecondarySidebar · MainRegion · RightPanel
  - `navigation/` — NavItem · Breadcrumb · Tabs
  - `actions/` — Button · CommandSearch · QuickActionBar · FilterBar · Dropdown · ViewToggle · Fab
  - `content/` — Thumb · Avatar · Card · Carousel · TableRow · DataTable
  - `feedback/` — Badge · EmptyState · Tooltip · Toast · Progress
  - `overlay/` — Backdrop · CloseButton · PopoverMenu · ContextMenu · ModalDialog · Drawer
- **`guidelines/`** — 15 foundation specimen cards (Colors, Type, Spacing, Brand) that populate the Design System tab.
- **`ui_kits/design-platform/`** — the interactive product recreation composed from the primitives (6 screens + overlays). See its `README.md`.
- **`Design Platform Wireframe.dc.html`** (root) — the original single-file interactive reference (theme + responsive live).
- **`docs/`** — `DESIGN-SYSTEM.md` (deep spec), `PLAN.md` (rr slice map + contracts), `reference/ui-taxonomy.html` (naming SSOT).

## Intentional additions
The taxonomy defines the inventory and every component maps to it. Two conveniences were added and are noted here: **Avatar** (initials — used by the rail dock + account menu, implied by the taxonomy's UserDock) and **Progress** (skeleton/bar — the taxonomy lists "Progress / Skeleton" under Feedback). Project-specific composites (ProTrialBtn, Hero, PromoBanner-in-BrandKit, StepCard-in-Print, mode chips) live inside the UI kit, not as core primitives — extracted on second use per rr.

## Substitutions to confirm
- **Fonts** load from Google Fonts (Plus Jakarta Sans, Inter, Source Serif 4, JetBrains Mono) via `tokens/fonts.css`. If you need self-hosted binaries, drop them in `assets/fonts/` and replace the `@import`s with local `@font-face` rules.

## Using this system
Link `styles.css`, then compose the primitives — copy always flows in as props. For a new design, seed from a Starting Point (AppShell, DataTable, ModalDialog, Card, NavigationRail, CommandSearch, QuickActionBar) or the Design Platform screen. To retarget: set `preset` + `theme` on `AppShell` (or `data-preset` / `data-theme` on any root element), pass an optional `accent` override, and swap the UI kit's `data.js`.
