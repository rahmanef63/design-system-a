import React from "react";
import { Backdrop } from "./Backdrop.jsx";
import { CloseButton } from "./CloseButton.jsx";

/**
 * ModalDialog — the focused overlay flow (Buat desain). Backdrop + centered
 * surface + CloseButton, with an optional left category `nav` slot. Esc and
 * backdrop click dismiss. Composes Backdrop + CloseButton.
 */
export function ModalDialog({
  open = true,
  onClose,
  title,
  nav = null,
  width = "min(1040px, 96vw)",
  height = "min(640px, 90vh)",
  children,
  style = {},
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose && onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 50, display: "grid", placeItems: "center", padding: "22px" }}>
      <Backdrop onClick={onClose} style={{ position: "absolute" }} />
      <div
        role="dialog"
        aria-modal="true"
        style={{
          position: "relative",
          width,
          height,
          background: "var(--card)",
          border: "var(--border-width) solid var(--border)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--elevation-modal)",
          display: "flex",
          overflow: "hidden",
          animation: "ds-ovin var(--motion) var(--ease)",
          ...style,
        }}
      >
        <div style={{ position: "absolute", top: "14px", right: "14px", zIndex: 4 }}>
          <CloseButton onClick={onClose} variant="round" />
        </div>
        {nav ? (
          <nav style={{ width: "236px", flex: "none", borderRight: "var(--border-width) solid var(--border)", padding: "22px 12px", overflow: "auto" }}>
            {title ? <h3 style={{ font: "700 22px var(--font-sans)", margin: "0 0 14px", padding: "0 8px" }}>{title}</h3> : null}
            {nav}
          </nav>
        ) : null}
        <div style={{ flex: 1, minWidth: 0, overflow: "auto", padding: "22px 26px 30px" }}>
          {!nav && title ? <h3 style={{ font: "700 22px var(--font-sans)", margin: "0 0 18px" }}>{title}</h3> : null}
          {children}
        </div>
      </div>
    </div>
  );
}
