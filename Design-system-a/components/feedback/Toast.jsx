import React from "react";

/**
 * Toast — a brief action-feedback snackbar (star, copy, move). Icon +
 * message + optional inline action. Presentational; host controls timing.
 */
export function Toast({ icon = "✓", message, action = null, style = {} }) {
  return (
    <div
      role="status"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        background: "var(--foreground)",
        color: "var(--card)",
        borderRadius: "var(--radius-md)",
        padding: "11px 14px",
        boxShadow: "var(--elevation-overlay)",
        font: "400 13px var(--font-sans)",
        animation: "ds-ovin var(--motion) var(--ease)",
        ...style,
      }}
    >
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px" }}>{icon}</span>
      <span>{message}</span>
      {action ? (
        <button style={{ background: "none", border: 0, color: "var(--primary)", cursor: "pointer", font: "700 13px var(--font-sans)", padding: 0, marginLeft: "4px" }}>{action}</button>
      ) : null}
    </div>
  );
}
