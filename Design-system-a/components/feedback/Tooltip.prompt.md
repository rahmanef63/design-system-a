**Tooltip** — the small ink label that names icon-only controls on hover/focus (rail items, bell, overflow). Wrap the trigger; pass `label`.

```jsx
<Tooltip label="Notifikasi" placement="right">
  <button>◻</button>
</Tooltip>
```

- Required on every icon-only button for accessibility (also set a matching `title`/`aria-label`).
