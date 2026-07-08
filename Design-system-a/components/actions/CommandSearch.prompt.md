**CommandSearch** — the oversized rounded search that opens every exploration surface. On focus it draws an accent border + soft glow (the grayscale analog of the reference's neon ring). Use `variant="input"` for the AI prompt bar.

```jsx
<CommandSearch placeholder="Cari desain, folder, dan unggahan" />
<CommandSearch variant="input" placeholder="Jelaskan ide Anda…" />
```

- Full-width by default — constrain with a `max-width` wrapper for centered heroes.
- Placeholder is the only copy; keep it props-driven.
