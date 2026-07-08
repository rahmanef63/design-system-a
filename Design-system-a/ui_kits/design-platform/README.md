# UI Kit — Design Platform (Rupa)

A high-fidelity **wireframe** recreation of a Canva-style design platform, composed entirely from the design-system primitives in `components/`. Low-fi grayscale by intent — it captures the information architecture and interaction model, not branded visuals.

## Run it
Open `index.html`. It mounts the `DesignPlatform` component from the compiled design-system bundle. The full standalone interactive version (theme toggle, all overlays, responsive) also lives at the project root: `Design Platform Wireframe.dc.html`.

## Screens (each = a future rr slice)
| File | Screen | Slice |
| --- | --- | --- |
| `Home.jsx` | Beranda — hero, category strip, recent table | `home` |
| `Projects.jsx` | Proyek — filters, recent carousel, files table | `projects` |
| `Templates.jsx` | Template — sub-nav, browse grid, AI rail | `templates` |
| `BrandKit.jsx` | Merek — promo banner, asset grid | `brand-kit` |
| `PrintCatalog.jsx` | Cetak — how-it-works, products | `print-catalog` |
| `AiChat.jsx` | AI Rupa — history, prompt, mode chips | `ai-chat` |
| `CreateModal.jsx` | Buat desain modal | `overlays` |
| `Menus.jsx` | Account + More popovers | `overlays` |
| `DesignPlatform.jsx` | The single AppShell that wires routing + overlays | `app-shell` |

## How it composes
- **One `AppShell`** owns the chrome (rail · main · optional AI panel · overlay layer), the theme, and the active preset (`preset` / `theme` props → `data-preset` / `data-theme`; swap the preset to reskin for another project).
- **`data.js`** holds all sample copy + content — props-driven, no strings hardcoded in the reusable components (rr portability). Swap it to retarget the kit.
- Screens with sub-navigation (`Templates`, `BrandKit`, `PrintCatalog`, `AiChat`) render their own `SecondarySidebar` inside a `data-r="subwrap"` region.
- Interactions: rail switches the route; `Buat`/`Lainnya`/bell/avatar open overlays; filter dropdowns, view toggle, and row overflow menus all work.

## Not included (by design)
The in-editor design canvas, real auth/data/back-end, and pixel-accurate branded visuals — those arrive when each screen is lifted into its rr slice (`slices/<slug>/` + `convex/features/<slug>/`) per the contracts in `docs/PLAN.md`.
