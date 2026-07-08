import React from "react";
import { Backdrop } from "./Backdrop.jsx";
import { CloseButton } from "./CloseButton.jsx";

/**
 * Drawer — a slide-over panel from the right (default) or left. The mobile
 * presentation of RightPanel/Notifications. Esc + backdrop dismiss.
 * Composes Backdrop + CloseButton.
 */
export function Drawer({ open = true, onClose, side = "right", width = "min(380px, 92vw)", title, children, style = {} }) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose && onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const edge =
    side === "right"
      ? { right: 0, borderLeft: "var(--border-width) solid var(--border)", boxShadow: "-8px 0 30px rgba(0,0,0,.2)" }
      : { left: 0, borderRight: "var(--border-width) solid var(--border)", boxShadow: "8px 0 30px rgba(0,0,0,.2)" };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 50 }}>
      <Backdrop onClick={onClose} style={{ background: "rgba(20,20,18,.35)" }} />
      <div
        role="dialog"
        style={{
          position: "absolute",
          top: 0,
          height: "100vh",
          width,
          background: "var(--card)",
          display: "flex",
          flexDirection: "column",
          animation: "ds-ovin var(--motion) var(--ease)",
          ...edge,
          ...style,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", padding: "18px", borderBottom: "var(--border-width) solid var(--border)" }}>
          <h3 style={{ font: "700 18px var(--font-sans)", margin: 0 }}>{title}</h3>
          <CloseButton onClick={onClose} />
        </div>
        <div style={{ flex: 1, overflow: "auto" }}>{children}</div>
      </div>
    </div>
  );
}
