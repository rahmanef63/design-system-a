**TableRow** — one file row for the DataTable: thumb, name (+ optional `▸ folder` sub), owner pill, type, edited, and star + overflow (⋯) actions. The overflow menu opens on click and closes on outside click.

```jsx
<TableRow name="Unggahan" owner="Private" type="Folder" edited="10 bulan lalu"
  menu={[{ label: "Ganti nama" }, { label: "Hapus" }]} />
```

- Use inside **DataTable**, which owns the header and the shared column grid (`DATATABLE_GRID`).
