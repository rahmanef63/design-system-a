**Dropdown** — a filter/select chip: label + chevron that opens a popover list. Manages its own open state and closes on outside click. The building block of FilterBar.

```jsx
<Dropdown label="Jenis" options={["Semua", "Presentasi", "Video"]} onSelect={setJenis} />
```

- For a full row of these plus a view toggle, use **FilterBar** instead of hand-placing several.
