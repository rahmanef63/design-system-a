**PopoverMenu** — the floating surface anchored to a trigger: account menu, More menu, filter flyouts. Feed `items` (with optional `divider`, `badge`, `chevron`, `danger`) or drop in custom `children`.

```jsx
<PopoverMenu header="Akun" items={[
  { label: "Akun Anda" }, { label: "Pengaturan" },
  { label: "Tema", chevron: true, onClick: toggleTheme },
  { divider: true },
  { label: "Keluar dari semua akun" },
]} />
```

- For the kebab (⋯) overflow trigger + this menu combined, use **ContextMenu**.
