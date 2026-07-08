**ContextMenu** — the ⋯ overflow button that opens a PopoverMenu of actions (Ganti nama, Duplikat, Bagikan, Hapus). Self-manages open/close.

```jsx
<ContextMenu items={[
  { label: "Ganti nama" }, { label: "Duplikat" }, { divider: true },
  { label: "Hapus", danger: true },
]} />
```

- `TableRow` includes its own overflow menu; use ContextMenu on cards or custom rows.
