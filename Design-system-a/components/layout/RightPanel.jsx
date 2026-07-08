import React from "react";
import { CloseButton } from "../overlay/CloseButton.jsx";

/**
 * RightPanel — the docked assistant/help/inspector column on the right.
 * Optional close button (top-right), a body (children), and a sticky
 * footer slot (e.g. the AI input). Composes CloseButton.
 */
export function RightPanel({ onClose = null, footer = null, width = 340, children, style = {} }) {
  return (
    <aside
      style={{
        width,
        flex: "none",
        height: "100vh",
        overflow: "auto",
        borderLeft: "var(--border-width) solid var(--border)",
        background: "var(--card)",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      {onClose ? (
        <div style={{ display: "flex", justifyContent: "flex-end", padding: "14px 14px 0" }}>
          <CloseButton onClick={onClose} />
        </div>
      ) : null}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>{children}</div>
      {footer ? <div style={{ padding: "14px" }}>{footer}</div> : null}
    </aside>
  );
}
