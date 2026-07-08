**ModalDialog** — the big focused overlay (Buat desain). Centered surface over a Backdrop, round CloseButton, optional left `nav` slot for categories. Esc and backdrop-click dismiss.

```jsx
<ModalDialog open={open} onClose={close} title="Buat desain"
  nav={cats.map(c => <NavItem key={c.key} orientation="horizontal" label={c.label} active={c.active} />)}>
  <CommandSearch placeholder="Apa yang ingin Anda buat?" />
  {/* quick actions + template grids */}
</ModalDialog>
```

- On narrow widths it should go full-screen and the nav becomes a horizontal strip (see UI-kit responsive rules).
