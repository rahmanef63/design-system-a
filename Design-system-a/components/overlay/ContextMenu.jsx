import React from "react";
import { PopoverMenu } from "./PopoverMenu.jsx";

/**
 * ContextMenu — a kebab (⋯) trigger that opens a PopoverMenu of row/card
 * actions. Self-manages open state; closes on outside click. Composes
 * PopoverMenu.
 */
export function ContextMenu({ items = [], glyph = "⋯", align = "right", width = 176, style = {} }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const wrapped = items.map((it) =>
    it.divider ? it : { ...it, onClick: () => { setOpen(false); it.onClick && it.onClick(); } }
  );

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-flex", ...style }}>
      <button
        title="Lainnya"
        aria-label="Lainnya"
        onClick={() => setOpen((o) => !o)}
        style={{ width: "30px", height: "30px", borderRadius: "var(--radius-sm)", border: "var(--border-width) solid var(--border)", background: "var(--card)", color: "var(--muted-foreground)", display: "grid", placeItems: "center", cursor: "pointer", font: "600 13px var(--font-mono)" }}
      >
        {glyph}
      </button>
      {open ? (
        <div style={{ position: "absolute", top: "36px", [align]: 0, zIndex: 8 }}>
          <PopoverMenu items={wrapped} width={width} />
        </div>
      ) : null}
    </div>
  );
}
