**Card** — one object as a tile: hatched Thumb, title, optional mono meta, optional corner Badge. The template/project/product/asset card across the app.

```jsx
<Card title="Presentasi" thumbCaption="template" />
<Card title="Konten Instagram" ratio="4:5" badge="Baru" meta="Diedit 7 bulan lalu" onClick={open} />
```

- Put many in a **Carousel** (horizontal) or a CSS grid (browse). Composes Thumb + Badge — don't rebuild those inside.
