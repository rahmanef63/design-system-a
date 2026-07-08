**RightPanel** — the docked assistant/help column (Home AI panel). Close button top-right, scrollable body, sticky footer for the input. On mobile it becomes a **Drawer**.

```jsx
<RightPanel onClose={closeAi} footer={<AiInput />}>
  <AiIntro />
</RightPanel>
```

- Hidden below 900px in the reference layout; surface it as a Drawer instead.
