**EmptyState** — a centered glyph circle + message for screens with no data yet (empty notifications, fresh AI chat history). Always give the user a next step.

```jsx
<EmptyState glyph="◔" body="Notifikasi Anda akan muncul di sini." />
<EmptyState bordered title="Semua obrolan Anda muncul di sini" body="Mulai obrolan baru untuk mendesain bersama AI." />
```

- `bordered` wraps it in a dashed box (the sidebar hint card). Pass a `Button` as `action` for a CTA.
