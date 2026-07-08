# PLAN — Design Platform Wireframe

Status: **DRAFT for approval.** No wireframe is built until this plan + `docs/DESIGN-SYSTEM.md` are confirmed.

---

## 1. Objective & context

Produce an **interactive low-fidelity wireframe** of a Canva-style design platform, reproducing the **structure and behavior** in the 10 reference screenshots — not Canva's proprietary branding. The wireframe is the design artifact that feeds the rr slice architecture for the eventual real build.

**Why wireframe (not hi-fi clone):** the reference is a commercial product's branded UI. A grayscale, placeholder-driven wireframe captures the *functional* IA + interactions (a common product category) as an **original** artifact, cleanly and without reproducing branded visuals.

---

## 2. Scope

**In (screens):** Home (Beranda) · All Projects (Proyek) · Templates · Brand Kit (Merek) · Print Catalog (Cetak) · AI chat (AI Canva).
**In (overlays):** Create-design modal (Buat desain) · Account menu · Notifications panel (empty state) · "More" menu (Lainnya) · docked right-side AI panel (Home).
**In (behavior):** persistent left rail nav that switches the main region; sub-nav within Templates/Brand-Kit/Print; filter chips; search bars; hover/active/focus states; responsive collapse.

**Out (non-goals):** Canva branding/logo/exact palette; the in-editor canvas (design editor) itself; real auth, real data, real backend; pixel-perfect visuals; production code. (These arrive when slices are implemented in the rr repo.)

---

## 3. Assumptions & decisions (confirm)

Recommended defaults (mirror `CLAUDE.md §3`): full-app scope · faithful (not options) · interactive · low-fi grayscale · Indonesian labels (i18n-ready) · generic branding · both AI panel + AI chat · single interactive DC.

**Open questions to confirm before build:**
1. Full-app scope OK, or trim to a priority subset first?
2. Confirm **one faithful wireframe per screen** (vs. exploring 2–3 layout options for a hero screen)?
3. Confirm **interactive single DC** (vs. a static side-by-side screen map)?
4. Keep **Indonesian** labels as default (EN as a flip)?
5. Working product name for the placeholder wordmark — **chosen: "Rupa"** (Indonesian for *visual form / appearance*), lettermark "R". Originally offered: "Kreo" · "Studia" · "Bikin" · plain `[ LOGO ]` box.
6. Any single screen that matters most / should get extra detail?

---

## 4. Information architecture (sitemap)

```
App Shell (single outer chrome)
├─ Left rail:  Buat(+) · Beranda · Proyek · Template · Merek · AI Canva · Cetak · Lainnya
│              └ bottom: Notifikasi(bell) · Avatar(RF)
├─ Beranda (Home)          → hero + search + category rail + Desain Terbaru + [AI panel]
├─ Proyek (Projects)       → gradient hero + search + filter chips + recent rail + files table
├─ Template                → sub-nav + search + category chips + template grid + AI-effects rail
├─ Merek (Brand Kit)       → sub-nav + promo banner + asset-type grid
├─ Cetak (Print Catalog)   → sub-nav + welcome hero + search + "how it works" + product cards
├─ AI Canva (AI chat)      → chat-history sidebar + center hero + prompt + mode chips
└─ Overlays (shell-triggered): Buat-desain modal · Account menu · Notifications · Lainnya menu
```

---

## 5. Slice breakdown + future contracts

Each screen maps to a future `slices/<slug>/` (+ `convex/features/<slug>/`). "Contract" = the data/props the slice will need — documented now so the lift is `cp` + wire. (Contracts are design intent; validators/authz/indexes attach when the Convex functions are written, per rr Convex rules.) Component names use the **canonical taxonomy** — EN PascalCase, SSOT `docs/reference/ui-taxonomy.html`.

| Slice `<slug>` | Screen | Key components | Behaviors | Contract (props / future queries) |
| --- | --- | --- | --- | --- |
| `app-shell` | persistent chrome | `NavigationRail` (`BrandArea`, `NavItem`, `UserDock`), `TopBar` (`ProTrialBtn`), `Avatar`, `FAB` (help), `Tooltip` | route switch, overlay triggers, responsive collapse | `user{name,email,avatarInitials,plan}`, `navItems[]`, `activeRoute`, `proTrial:boolean` |
| `home` | Beranda | `HeroHeader`, `CommandSearch`, `QuickActionBar` (category icons), `ContentSection`, `DataTable`/`ListItem`, `FilterBar`, `RightPanel` (AI) | search, category click → create, list sort/filter, toggle AI panel | `recentDesigns[]`, `categories[]`, `filters{owner,type}`, `aiPanelOpen` · future: `listRecentDesigns` |
| `projects` | Proyek | `HeroHeader`, `CommandSearch`, `FilterBar` (`Dropdown` chips), `Carousel`, `Card`, `DataTable`/`TableRow`, `Badge`, `ViewToggle`, `ContextMenu` | filter dropdowns, grid/list toggle, sort, row overflow menu, star | `projects[]`, `folders[]`, `filters{jenis,kategori,pemilik,tanggal}`, `sort`, `view` · future: `listProjects` (paginated, indexed) |
| `templates` | Template | `SecondarySidebar`, `HeroHeader`, `CommandSearch`, `FilterBar` chips, `CardGrid`, `Carousel`, `Badge` (Baru) | sub-nav switch, category chips, horizontal scroll | `templateCats[]`, `templates[]`, `filters` · future: `listTemplates` |
| `brand-kit` | Merek | `SecondarySidebar` (+ `Breadcrumb`), `PromoBanner`, `CardGrid` (`AssetCard`), `Badge` | sub-nav switch, promo CTAs, asset grid | `brandKits[]`, `assetGroups[]` · future: `getBrandKit` |
| `print-catalog` | Cetak | `SecondarySidebar`, `HeroHeader`, `CommandSearch`, `StepCard`, `Carousel` (`ProductCard`) | search, step read, product scroll | `products[]`, `steps[]` · future: `listPrintProducts` |
| `ai-chat` | AI Canva | `SecondarySidebar` (chat history, `EmptyState`), `HeroHeader`, `CommandInput` (prompt), `ModeChip` | new chat, mode select, submit prompt (stub) | `chats[]`, `activeChat`, `modes[]` · future: `listChats`, `sendMessage` |
| `overlays` | modals/menus | `Backdrop`, `ModalDialog`, `PopoverMenu`, `ContextMenu`, `RightPanel`, `Drawer` (mobile), `EmptyState`, `QuickActionBar`, `CloseButton`, `Toast` | open/close, backdrop dismiss, focus trap | per-overlay `open`, `createMenu[]`, `quickActions[]`, `popular[]`, `tryNew[]`, `accountMenu[]`, `moreMenu[]`, `notifications[]` |
| `design-system` (shared) | — | tokens + all wireframe primitives + `labels` map | — | `lang:'id'|'en'`, `labels`, tokens |

### 5b. Minimum component coverage checklist (SSOT: `docs/reference/ui-taxonomy.html`)

Every taxonomy item MUST appear in the built wireframe. Placement:

1. `AppShell` — everywhere (single outer chrome)
2. `NavigationRail` — all screens (Buat/Beranda/Proyek/Template/Merek/AI/Cetak/Lainnya + bell/avatar dock)
3. `SecondarySidebar` — Template, Merek, Cetak, AI chat (+ create-modal category nav)
4. `MainRegion` — all screens
5. `HeroHeader` — Home, Proyek, Template, Cetak, AI hero
6. `CommandSearch` — Home, Proyek, Template, Cetak, create-modal; `CommandInput` variant = AI prompt
7. `QuickActionBar` — Home category icon row; create-modal "Tindakan cepat"
8. `ContentSection` — "Desain Terbaru", "Jelajahi template", "Cara kerja", "Coba yang ini!", "Populer", "Coba hal baru"
9. `Carousel` — Proyek recent rail, Template AI-effects, Cetak products, create-modal rows
10. `Card`/`Tile` — design/template/product/asset cards throughout
11. `DataTable`/`ListView` — Home + Proyek file lists (Nama · Orang · Jenis · Diedit)
12. `FilterBar` + `Dropdown` — Proyek (Jenis/Kategori/Pemilik/Tanggal), Home (Pemilik/Semua jenis), Template chips
13. `ViewToggle` — Proyek + Home list headers (grid/list)
14. `FAB` — help "?" bottom-right, all screens
15. `ModalDialog` — Buat desain
16. `Backdrop` — behind modal + menus
17. `PopoverMenu` — account menu, Lainnya menu, filter dropdowns
18. `ContextMenu` — row/card "…" overflow
19. `RightPanel` — Home AI assistant panel; Notifications panel
20. `Badge`/`Pill` — Private, Baru, Beta, Gratis, Folder
21. `EmptyState` — Notifications, AI chat history

Category-card extras (also covered): `Tooltip` (rail hover "Notifikasi"), `Toast` (star/action feedback), `Progress` (skeleton loading demo), `Breadcrumb` (Merek "Semua Template Merek"), `Tabs` (available primitive; chips default), `Drawer` (mobile panels), `CloseButton`, `NavItem`/`MenuItem`, `Avatar`, `Button`.

---

## 6. Interaction & behavior spec

- **Rail nav:** click an item → set `route`, swap the main region (SPA-in-DC). Active item shows accent + left marker. `Buat(+)` opens the **Create-design modal**. `Lainnya` opens the **More menu**. Bottom **bell** opens **Notifications**; **avatar** opens **Account menu**.
- **Overlays:** backdrop + Esc dismiss; only one open at a time; return focus to trigger. Modal centers; menus anchor to trigger; panels dock right.
- **Sub-nav (Template/Merek/Cetak):** left secondary list switches the sub-section (visual state; content may be representative in wireframe).
- **Filter chips:** pill + chevron; click shows a stub dropdown (wireframe: outline popover with sample options). Grid/list toggle on Projects.
- **Search bars:** focus ring + glowing outline analog (grayscale); non-functional placeholder text.
- **AI panel (Home):** docked right; collapsible; empty prompt state + input at bottom.
- **AI chat screen:** empty chat-history rail + "Obrolan baru"; center hero + prompt + mode chips (Desain/Gambar/Doc/Kode/Klip video).

---

## 7. States

- **Empty:** Notifications (bell glyph + message); AI chat history ("chats appear here").
- **Loading:** skeleton = striped placeholder bars (documented, optional to demo).
- **Hover:** surface tint + stronger stroke; **Active/selected:** accent; **Focus:** 2px accent ring.
- **Disabled:** reduced ink, no pointer.

---

## 8. Build approach in this environment

- **One interactive DC:** `Design Platform Wireframe.dc.html`. Screens are `<section>`s toggled by `state.route` (DC "one file by default"). Overlays are conditionally rendered.
- **Wireframe primitive kit** (the shadcn analog) defined once, reused everywhere — see `docs/DESIGN-SYSTEM.md §5`.
- **No hardcoded copy:** all strings from a `labels` map keyed by slice; `lang` tweak flips ID/EN.
- **Tweaks (root DC props):** `brandName` (text), `accent` (color · 4 swatches), `theme` (light/dark), `lang` (id/en), `fidelity` (sketch/clean), `annotate` (bool — anatomy-inspector mode: labels every region with its canonical taxonomy name, mirroring `docs/reference/ui-taxonomy.html`). Read via `this.props.x ?? default`.
- **rr mapping at handoff:** the single DC's sections correspond 1:1 to the slices in §5; when implemented in rr each becomes `slices/<slug>/` with the contract above.

---

## 9. rr conventions mapping (what applies when)

| rr rule area | In this wireframe (now) | In the real rr repo (later) |
| --- | --- | --- |
| Vertical slices | screens documented as slices + contracts | `slices/<slug>/` + `convex/features/<slug>/` |
| Props-driven / no hardcoded copy | ✅ `labels` map, no inline strings | ✅ same, plus env-configured allowlists |
| Tokens not hex | ✅ grayscale token set | ✅ Tailwind theme tokens + tones SSOT |
| shadcn primitives only | ✅ wireframe primitive kit | ✅ real shadcn `Button`/`ResponsiveDialog`/… |
| One outer chrome | ✅ single app shell | ✅ `dashboard-shell` |
| Mobile-first + states | ✅ responsive + empty/loading | ✅ + `error.tsx`/`not-found.tsx` |
| Convex validators/authz, `.withIndex` | N/A (no backend) | ✅ P0/P1 on every function |
| Next proxy/link/image/cache, preloadQuery | N/A (no Next runtime) | ✅ per Next + data-fetching rules |
| Stack pin, tsc, audits, publish, commits | N/A (no repo/npm) | ✅ per delivery + enforcement map |
| ≤200 LOC / SRP | followed in spirit; a DC is one streaming file by design | ✅ hard cap per file |

---

## 10. Milestones (build order — after approval)

1. **Wireframe kit** — tokens + primitives on one reference screen (lock the look).
2. **App shell + nav** — rail, top bar, route switching, responsive collapse.
3. **Beranda** (Home) — hero, category rail, recent list, AI panel.
4. **Proyek** (Projects) — gradient hero, filters, recent rail, files table.
5. **Template** — sub-nav, grid, AI-effects rail.
6. **Merek** (Brand Kit) — promo banner, asset grid.
7. **Cetak** (Print Catalog) — welcome hero, how-it-works, products.
8. **AI Canva** — chat screen + docked AI panel.
9. **Overlays** — create modal, account, notifications, more menu.
10. **Responsive + states + polish.**

---

## 11. Confirm to proceed

Reply with: scope OK? one-faithful vs options? interactive OK? language? product-name pick? any priority screen? — then I build in the order above.

---

## 12. Build progress (updated 2026-07-07)

Deliverable: `Design Platform Wireframe.dc.html` — one interactive, data-driven DC.

**Done**
- [x] App shell + NavigationRail routing across 6 screens
- [x] Screens: Beranda · Proyek · Template · Merek · Cetak · AI Canva
- [x] Overlays: create modal · account menu · notifications · more menu
- [x] All taxonomy components present (see §5b coverage checklist)
- [x] 100% data-driven (`labels` map, id/en), interactive (nav, filters, row menus, subnav, view toggle)
- [x] Responsive: ≥900 desktop · 640–900 hides AI panel · <640 rail→bottom bar, subnav→strip, table→name+actions, modal→fullscreen
- [x] Theme system: light/dark via `theme` prop + in-app "Tema" toggle (CSS vars on shell root)
- [x] Reusable-template props: `brandName`, `accent` (4 swatches)

**Completed to 100%**
- [x] `brandName` propagated into all copy (aiTitle, "Populer di …", "Program …", "Dapatkan Aplikasi …", Design School)
- [x] Dark-mode placeholder stripe contrast (theme-aware `--stripe` var)
- [x] Keyboard `:focus-visible` rings on all controls
- [x] <640 responsive verified via DOM + live toggle (sandbox can't screenshot a nested iframe)

**Progress = 100%** — structure/screens/overlays · dynamic · interactive · responsive · theme · reusable-template all complete.

---

## 13. Design System extraction (2026-07-08)

The wireframe was extracted from the single DC into a **compiler-consumable Design System** (see `CLAUDE.md §4b` and root `readme.md`). Mapping of this plan to the shipped system:

- Each slice in §5 now has real primitives: `components/<group>/*.jsx` (29 components) styled via `tokens/` and documented with `.d.ts` + `.prompt.md`.
- Each screen in §5 is a UI-kit file under `ui_kits/design-platform/` (`Home.jsx`, `Projects.jsx`, …), composed from those primitives — the literal starting point for lifting into `slices/<slug>/`.
- The taxonomy coverage checklist (§5b) is satisfied by the six component groups; `@startingPoint` tags mark the highest-value seeds (AppShell, DataTable, ModalDialog, Card, NavigationRail, CommandSearch, QuickActionBar, and the full Design Platform screen).
- `docs/DESIGN-SYSTEM.md` remains the deep spec; the implemented tokens/components match it.
