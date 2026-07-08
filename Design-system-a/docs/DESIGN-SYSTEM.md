# DESIGN SYSTEM — Wireframe Kit

The visual language + component inventory for the wireframe. Low-fidelity by intent: it signals "structure & flow, not final visuals."

> **Now implemented** (2026-07-08): this spec is realized as a compilable Design System — tokens in `tokens/` (entry `styles.css`), primitives in `components/<group>/`, specimen cards in `guidelines/`, and the product recreation in `ui_kits/design-platform/`. See root `readme.md` for the guide + manifest. The values below are the source of truth those files implement.

**Naming SSOT:** `docs/reference/ui-taxonomy.html` (user-provided component dictionary). Rule from the SSOT: **English PascalCase canonical names** for the design system/code; **Indonesian labels** for user-facing docs & briefing. Files/classes at rr handoff: `kebab-case`.

---

## 1. Principles

- **Low-fi on purpose.** Grayscale + placeholders keep feedback on IA and behavior, not colors.
- **Honest placeholders.** Striped boxes with monospace captions (`[ thumbnail ]`) — never fake finished art.
- **One primitive kit.** Every screen composes from §5; no one-off markup (extract on 2nd use).
- **Named, always.** Every card, menu, container, widget carries a canonical taxonomy name — nothing anonymous.
- **Props-driven.** No hardcoded copy — strings come from the `labels` map; `lang` flips ID/EN.
- **Clean & readable.** One geometric sans (Plus Jakarta Sans) at generous sizes; weight, size & color carry hierarchy.

---

## 2. Color tokens (semantic — preset-driven)

Components reference **semantic tokens only** (shadcn-compatible); a theme **preset** in `themes/*.css` supplies the values for light + `[data-theme="dark"]`. Never hardcode hex. The default **Rupa** preset (light):

| Token | Rupa (light) | Use |
| --- | --- | --- |
| `--background` | `#F0EEE6` | app background |
| `--card` / `--popover` | `#FAF9F5` | raised surfaces (cards, sheets, menus) |
| `--muted` | `#E7E4D9` | insets, thumb backdrops, hover fill |
| `--secondary` | `#E7E4D9` | secondary button fill |
| `--foreground` | `#1A1915` | primary text + strokes |
| `--muted-foreground` | `#6B665C` | secondary text / meta |
| `--subtle-foreground` | _derived_ | placeholder / disabled (computed in base.css) |
| `--border` / `--input` | `#DBD7CB` | default borders (1.5px) |
| `--border-strong` | `#1A1915` | emphasis strokes (2px), hover borders |
| `--primary` / `--ring` | `#D97757` | interactive / action / focus ring |
| `--primary-foreground` | `#FFFFFF` | text/glyph on primary |
| `--primary-soft` | _derived_ | active nav tint, focus glow (computed in base.css) |
| `--destructive` | `#BF4D3A` | danger actions |
| `--highlight` | `#EFD4AC` | annotation marker — callouts ONLY |

Presets also ship shadcn's `--accent` / `--accent-foreground`, `--sidebar*`, `--chart-1..5`, `--radius`, `--shadow-2xs…2xl`, `--font-sans/serif/mono`, `--tracking-normal`. Derived tokens (`--primary-soft`, `--subtle-foreground`, `--stripe`, the `--radius-sm/md/lg` scale, `--elevation-*`, `--focus-ring`) live in `tokens/base.css` and recompute automatically per preset.

Rule: **neutrals + one primary.** Primary = interactive affordance only. Highlight = annotations only. No stray hues.

---

## 3. Typography

- **Families come from the preset** — `--font-sans` / `--font-serif` / `--font-mono`. Rupa uses Plus Jakarta Sans for all three; Modern Minimal uses Inter / Source Serif 4 / JetBrains Mono; any preset can differ.
- **Weight carries role:** 800 display · 700 headings/labels · 600 buttons/nav · 500 meta/counts · 400 body. Size + `--muted-foreground` / `--subtle-foreground` reinforce it.
- All preset webfonts load via `@import` in `tokens/fonts.css`; the size/line-height/weight scale lives in `tokens/typography.css`.

| Role | Size / line-height | Font |
| --- | --- | --- |
| Display (PageTitle, e.g. "Semua proyek") | 34 / 42 | Jakarta 800 |
| H1 | 25 / 32 | Jakarta 700 |
| H2 (SectionHeader) | 19 / 26 | Jakarta 700 |
| Body / UI | 15 / 22 | Jakarta 400 |
| Label | 13 / 18 | Jakarta 400 |
| Caption / meta | 12 / 16 | Jakarta 500 |

Never below **11px**. Interactive targets **≥ 44px**.

---

## 4. Spacing, shape, elevation, motion

- **Spacing scale:** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64.
- **Radius:** `sm 6` · `md 10` · `lg 16` · `pill 999`.
- **Borders:** default `1.5px var(--border)`; emphasis/hover `2px var(--border-strong)`.
- **Elevation:** flat by default. Overlays only: `--elevation-overlay` / `--elevation-modal` (map to the preset's `--shadow-lg` / `--shadow-2xl`).
- **No skew/rotation:** the clean aesthetic keeps everything square; hierarchy comes from weight, not sketch effects.
- **Motion:** 120–160ms ease; respect `prefers-reduced-motion`.
- **Focus:** `var(--focus-ring)` = `0 0 0 2px var(--ring)` (+ `--primary-soft` glow on CommandSearch).

---

## 5. Component inventory — canonical taxonomy (ALL items, minimum set)

Every item below MUST exist in the kit and appear in the wireframe per the coverage checklist (`docs/PLAN.md §5b`).

### 5.1 Structure / Layout — Kerangka utama layar

| Canonical | Label (ID) | Aliases | Child umum | class |
| --- | --- | --- | --- | --- |
| `AppShell` | Kerangka Aplikasi | Page Frame · Workspace Shell | NavigationRail, SecondarySidebar, MainRegion, RightPanel, OverlayLayer | `app-shell` |
| `MainRegion` | Area Konten Utama | Main Content · Canvas Area · Workspace | PageHeader, ContentSection, CardGrid, Carousel, DataTable | `main-region` |
| `HeroHeader` | Header Besar Halaman | Page Hero · Top Banner | PageTitle, subtitle, CommandSearch, quick actions, promo button | `hero-header` |
| `ContentSection` | Seksi Konten | Section Block · Module | SectionHeader, action link, Carousel/CardGrid/DataTable/EmptyState | `content-section` |
| `SectionHeader` | Judul Seksi | — | title + optional actions/filters | `section-header` |

### 5.2 Navigation — Cara user pindah area

| Canonical | Label (ID) | Aliases | Child umum | class |
| --- | --- | --- | --- | --- |
| `NavigationRail` | Menu Ikon Vertikal | Primary Rail · Icon Sidebar · Left Rail | BrandArea, create button, NavItem, UserDock (bell + Avatar) | `navigation-rail` |
| `SecondarySidebar` | Sidebar Detail | Expanded/Context Sidebar · Sub Navigation | SidebarHeader, SidebarSection, MenuItem, SidebarFooter | `secondary-sidebar` |
| `NavItem` / `MenuItem` | Item Menu | — | icon + label [+ desc][+ Badge][+ chevron] | `nav-item` / `menu-item` |
| `Breadcrumb` | Jejak Navigasi | Path Nav | back link + path (Merek: "Semua Template Merek") | `breadcrumb` |
| `Tabs` | Tab | Segmented Nav | tab item + active marker (available; chips cover most switching) | `tabs` |

### 5.3 Action / Input — Cara user memberi perintah

| Canonical | Label (ID) | Aliases | Child umum | class |
| --- | --- | --- | --- | --- |
| `Button` | Tombol | CTA | label [+ glyph]; `primary`(accent)/`outline`/`ghost`/`pill`; ≥44px; disabled | `button` |
| `CommandSearch` | Search Besar | Search Bar · Command Input · Omnibox | search glyph, input, placeholder [, mic/shortcut] | `command-search` |
| `QuickActionBar` | Bar Aksi Cepat | Shortcut Launcher · Action Pills | action icon, label, Badge "Baru" | `quick-action-bar` |
| `FilterBar` | Bar Filter | Filter Chips · Facet Controls | Dropdown chips, sort control, ViewToggle | `filter-bar` |
| `Dropdown` | Menu Pilihan | Select | trigger chip + PopoverMenu of options | `dropdown` |
| `ViewToggle` | Pengubah Tampilan | Grid/List Toggle | icon buttons + active state | `view-toggle` |
| `FAB` | Tombol Mengambang | Help Button · Create Button | icon, Tooltip | `floating-action-button` |

### 5.4 Content Display — Cara data ditampilkan

| Canonical | Label (ID) | Aliases | Child umum | class |
| --- | --- | --- | --- | --- |
| `Card` / `Tile` | Kartu Konten | Template Card · Project Card | Thumb, title, metadata, Badge, Avatar, ContextMenu | `content-card` |
| `Carousel` | Daftar Geser Horizontal | Horizontal List · Content Rail · Strip | viewport, cards, next/prev button, fade edge | `content-carousel` |
| `DataTable` / `ListView` | Tampilan Tabel/Daftar | Recent List · File Table | header, TableRow, cells, row actions | `data-table` |
| `TableRow` / `ListItem` | Baris Data | — | thumb, name, Badge, meta, star, ContextMenu | `table-row` |
| `Thumb` | Placeholder Gambar | Image Slot | striped `--muted` box + mono caption; 1:1 / 4:5 / 4:3 / poster | `thumb-placeholder` |
| `Avatar` | Avatar Inisial | — | initials circle (mono) | `avatar` |

### 5.5 Feedback / Status — Konteks kondisi sistem

| Canonical | Label (ID) | Aliases | Child umum | class |
| --- | --- | --- | --- | --- |
| `Badge` / `Pill` | Label Kecil | Chip · Status Label · Tag | [icon +] text — Private/Baru/Beta/Gratis/Folder | `badge` |
| `EmptyState` | Kondisi Kosong | Blank State | glyph, message, helper text, CTA | `empty-state` |
| `Tooltip` | Label Hover | — | small mono label on icon hover ("Notifikasi") | `tooltip` |
| `Toast` | Notifikasi Singkat | Snackbar | icon + message; action feedback (star/copy) | `toast` |
| `Progress` | Indikator Proses | Skeleton · Loader | striped skeleton bars (loading state) | `progress` |

### 5.6 Overlay / Surface — Layer di atas halaman utama

| Canonical | Label (ID) | Aliases | Child umum | class |
| --- | --- | --- | --- | --- |
| `ModalDialog` | Pop-up Besar | Dialog · Create Dialog | Backdrop, surface, CloseButton, modal nav, CommandSearch, content grid | `modal-dialog` |
| `Backdrop` | Latar Gelap Overlay | Scrim | — | `backdrop` |
| `PopoverMenu` | Menu Melayang Kecil | Flyout · Account Menu | MenuItem, divider, Avatar, nested chevron | `popover-menu` |
| `ContextMenu` | Menu Titik Tiga | Kebab · Overflow Menu | trigger + menu items [+ destructive item] | `context-menu` |
| `RightPanel` | Panel Kanan | Side/Inspector/Assistant/Help Panel | PanelHeader, PanelBody, PanelInput, CloseButton | `right-panel` |
| `Drawer` | Panel Geser | Slide-over | mobile presentation of panels/sheets | `drawer` |
| `CloseButton` | Tombol Tutup | X | icon button ≥44px | `close-button` |

### 5.7 Project-specific composites (extracted on 2nd occurrence)

`StepCard` (Langkah 1–3, Cetak) · `PromoBanner` (Merek) · `ModeChip` (AI modes) · `ProTrialBtn` (TopBar CTA) · `BrandArea` · `UserDock` · `PanelHeader`/`PanelBody`/`PanelInput`.

**Icons:** simple geometric line glyphs only (circle, square, `+`, magnifier, bell, star outline, chevrons, grid dots). No elaborate SVG; text labels carry meaning.

---

## 5b. Container hierarchy (SSOT tree — use verbatim in specs/prompts)

```
AppShell
├─ NavigationRail / PrimarySidebar
│  ├─ BrandArea
│  ├─ PrimaryNavGroup
│  │  └─ NavItem
│  └─ UserDock / UtilityDock
├─ SecondarySidebar (optional)
│  ├─ SidebarHeader
│  ├─ SidebarSection
│  │  └─ MenuItem / MiniListItem
│  └─ SidebarFooter
├─ MainRegion
│  ├─ PageHeader / HeroHeader
│  │  ├─ PageTitle
│  │  ├─ GlobalSearch / CommandInput
│  │  └─ FilterBar / QuickActionBar
│  ├─ ContentSection
│  │  ├─ SectionHeader
│  │  └─ CardGrid / Carousel / DataTable / ListView
│  └─ FloatingActionButton / HelpButton
├─ RightPanel (optional)
│  ├─ PanelHeader
│  ├─ PanelBody
│  └─ PanelInput / PanelFooter
└─ OverlayLayer (optional)
   ├─ Backdrop
   ├─ ModalDialog / Drawer / Popover / ContextMenu
   └─ CloseButton
```

---

## 6. Layout recipes (from the SSOT — adapted per screen)

- **Dashboard / Semua Proyek:** AppShell (rail + main) → HeroHeader (PageTitle + CommandSearch + FilterBar) → Carousel (recent) → DataTable (all files) → actions (sort, ViewToggle, create).
- **Create Flow / Buat Desain:** primary-action trigger → Backdrop → ModalDialog (CommandSearch) → left category nav (SecondarySidebar-in-modal) → QuickActionBar + template tiles (CardGrid/Carousel).
- **Template Gallery:** HeroHeader + CommandSearch → category chips (FilterBar) → browse CardGrid → Carousel sections → "lihat semua" CTA per section.
- **Assistant / AI Panel:** SecondarySidebar (chat history) → MainRegion EmptyState + CommandInput → ModeChips (Desain/Gambar/Doc/Kode/Klip video) → RightPanel for contextual help → small AI-accuracy disclaimer.

**Prinsip cepat (SSOT):** Card menampilkan satu objek → ContentSection mengelompokkan card → container membungkus section → page menata container → AppShell membungkus aplikasi.

---

## 7. Labels / i18n

- Single `labels` map, keyed by slice → key. `lang: 'id' | 'en'`, **default `id`** (matches screenshots).
- Components read `labels[key]` — **no inline strings** (rr props-driven portability).
- Canonical component names stay **English** even in ID mode (SSOT naming rule); only user-facing copy translates.
- Sample keys: `nav.beranda`, `nav.proyek`, `nav.template`, `nav.merek`, `nav.aiCanva`, `nav.cetak`, `nav.lainnya`, `home.hero="Mau desain apa hari ini?"`, `projects.title="Semua proyek"`, `common.proTrial="Coba Pro gratis"`, `notif.empty="Notifikasi Anda akan muncul di sini."`
---

## 8. Responsive

| Breakpoint | Layout |
| --- | --- |
| `≥1200` | rail 72 · main · RightPanel 360 (Home/AI) |
| `768–1199` | rail 72 · main; RightPanel → toggled overlay |
| `<768` | rail → icon-only 56; DataTable → stacked ListItems; grids → 1–2 col; ModalDialog → full-screen; panels → Drawer |

Mobile-first: single-column base, layer `md:`/`lg:` up.

---

## 9. Accessibility

- `:focus-visible` rings on every interactive element; logical tab order.
- Hit targets **≥44px**.
- Roles: `dialog` (ModalDialog — focus-trapped, Esc closes), `menu`/`menuitem` (PopoverMenu/ContextMenu), `list`/`listitem`, `search`, `status` (Toast), `tooltip`.
- Contrast: `--foreground` on `--background`/`--card` meets AA; meta uses `--muted-foreground` at ≥13px.
- `prefers-reduced-motion`: disable non-essential transitions.
- Alt/aria-labels on icon-only buttons (bell, star, overflow, CloseButton, FAB).

---

## 10. Theme + responsive (implemented)

**Theme + presets.** Styling is 100% CSS variables driven by **theme presets** in `themes/*.css` — each declares the full semantic token set for light and a `[data-theme="dark"]` scope (SSOT for values). Set `data-preset="rupa|modern-minimal|emerald"` and `data-theme="dark"` on any ancestor (the AppShell root, or `<html>`) and everything — components + overlays — reskins. `AppShell` exposes `preset` / `theme` props; an optional `accent` prop overrides `--primary` inline. The standalone reference and the front door (`index.html`) ship a live preset + light/dark switcher. Adding a project theme = one file in `themes/` with the same token contract — no component changes.

**Responsive.** Media queries live in `<helmet>` (the one thing that can't be inline), targeting `data-r` hooks with `!important` (to beat inline base styles):
- `≥900`: full desktop (rail + AI RightPanel).
- `640–900`: AI RightPanel hidden.
- `<640`: NavigationRail → fixed bottom bar; SecondarySidebar → horizontal strip; DataTable → Name + actions only; ModalDialog → fullscreen; section padding + h1 scaled down.

`brandName` / `accent` / `theme` are the reskinning knobs — swap them to retarget the template for any project.
