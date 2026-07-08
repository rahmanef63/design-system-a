**FilterBar** — the facet controls above a list or grid: a set of Dropdown chips (Jenis, Kategori, Pemilik, Tanggal) plus an optional ViewToggle. Composes the two primitives; don't rebuild them.

```jsx
<FilterBar
  align="center"
  filters={[
    { key: "jenis", label: "Jenis", options: ["Semua", "Presentasi", "Video"] },
    { key: "pemilik", label: "Pemilik", options: ["Siapa saja", "Dimiliki saya"] },
  ]}
  view={view}
  onViewChange={setView}
/>
```

- Omit `view` to hide the toggle. `align="start"` pushes the toggle to the far right.
