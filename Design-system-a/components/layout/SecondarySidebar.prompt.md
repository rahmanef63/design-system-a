**SecondarySidebar** — the sub-navigation column for Templates, Brand Kit, Print, and AI chat. Header slot (Breadcrumb / kit switcher / new-chat button), a stack of horizontal NavItems as children, optional footer.

```jsx
<SecondarySidebar header={<Breadcrumb path={["Semua Template Merek"]} />}>
  <NavItem orientation="horizontal" label="Semua aset" active />
  <NavItem orientation="horizontal" label="Logo" />
</SecondarySidebar>
```

- On mobile it flattens into a horizontal scrolling strip.
