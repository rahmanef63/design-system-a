**Button** — the pill-shaped action affordance. Use for any tap target that triggers an action; `primary` for the main action per surface, `dark` for the persistent "Coba Pro gratis" upgrade pill.

```jsx
<Button variant="primary" icon="+">Buat desain</Button>
<Button variant="outline">Bagikan</Button>
<Button variant="dark" icon="★">Coba Pro gratis</Button>
<Button variant="ghost" size="sm">Batal</Button>
```

- `variant`: `primary` (accent) · `outline` · `ghost` · `dark` (ink pill).
- `size`: `sm` · `md` · `lg`.
- Copy is always passed as children (props-driven). Disabled dims to 50%.
