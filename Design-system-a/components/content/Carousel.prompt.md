**Carousel** — a horizontal scroller for recommendation/recent rails. Wraps its children so each becomes a fixed-width, non-shrinking item.

```jsx
<Carousel>
  {recent.map(r => <div style={{ width: 184 }} key={r.id}><Thumb ratio="4:3" caption="preview" />…</div>)}
</Carousel>
```

- Give each child its own explicit width. Overflows horizontally; vertical space is saved.
