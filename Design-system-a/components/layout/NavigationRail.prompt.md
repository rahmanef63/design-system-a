**NavigationRail** — the persistent 76px icon rail: brand mark, the main destinations, a spacer, then the bell + avatar dock. Feed it `items` and `dock` as NavItem prop objects.

```jsx
<NavigationRail
  brand={{ name: "Rupa", initial: "R" }}
  items={[
    { key: "create", icon: "+", label: "Buat", accent: true, onClick: openCreate },
    { key: "home", icon: "B", label: "Beranda", active: true },
    { key: "brand", icon: "M", label: "Merek", crown: true },
  ]}
  dock={[
    { key: "notif", icon: "◻", label: "Notifikasi", onClick: openNotif },
    { key: "me", icon: "RF", label: "Akun", avatar: true, onClick: openAccount },
  ]}
/>
```

- Below 640px it should dock to the bottom as a horizontal bar (see the UI kit).
