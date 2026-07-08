**QuickActionBar** — the horizontally scrolling shortcut strip: icon tile + label, optional "Baru" badge. Home's category row and the create-modal quick actions.

```jsx
<QuickActionBar items={[
  { key: "tpl", label: "Template" },
  { key: "magic", label: "Lapisan Ajaib", badge: "Baru" },
  { key: "video", label: "Video" },
]} />
```

- Items overflow-scroll horizontally; keep tiles at the fixed 74px width for rhythm.
- `icon` defaults to a geometric glyph placeholder — pass your own mono glyph if needed.
