**NavItem** — one navigation entry, in two orientations. `vertical` = a NavigationRail tile (icon box + tiny label). `horizontal` = a SecondarySidebar / popover MenuItem (icon + label + optional badge/chevron).

```jsx
<NavItem orientation="vertical" icon="+" label="Buat" accent />
<NavItem orientation="vertical" icon="M" label="Merek" crown active />
<NavItem orientation="horizontal" icon="◦" label="Template Merek" badge="Baru" />
<NavItem orientation="horizontal" label="Tema" chevron onClick={toggleTheme} />
```

- `accent` = the create (+) tile. `avatar` = the user dock. `crown` marks premium.
