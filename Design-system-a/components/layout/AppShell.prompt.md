**AppShell** — the one outer chrome that wraps the whole app. Slots: `rail`, optional `sidebar`, `children` (the MainRegion), optional `panel`, and `overlays`. It owns theming — pass `preset` (which theme preset) + `theme="dark"`, or a custom `accent`, and the tokens cascade to every child including overlays.

```jsx
<AppShell
  preset="rupa"        {/* "rupa" | "modern-minimal" | "emerald" | any themes/ preset */}
  theme={theme}        {/* "light" | "dark" */}
  accent={null}        {/* optional --primary override */}
  rail={<NavigationRail brand={brand} items={nav} dock={dock} />}
  panel={showAi ? <RightPanel onClose={closeAi}>…</RightPanel> : null}
  overlays={<><ModalDialog … /><Drawer … /></>}
>
  <MainRegion>{screen}</MainRegion>
</AppShell>
```

- `preset` sets `data-preset`; `theme="dark"` sets `data-theme` — both resolve against `styles.css` / `themes/*`. Exactly one AppShell per app.
