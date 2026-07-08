**DataTable** — the recent-files list with a mono column header and a shared column grid. Feed it `rows`; it renders a **TableRow** for each and applies `rowMenu` to all.

```jsx
<DataTable
  columns={{ name: "Nama", owner: "Orang", type: "Jenis", edited: "Diedit" }}
  rows={files}
  rowMenu={[{ label: "Ganti nama" }, { label: "Duplikat" }, { label: "Hapus" }]}
/>
```

- Collapses to name + actions on narrow widths (see the UI kit's responsive rules).
