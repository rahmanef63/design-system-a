import React from "react";

/**
 * EmptyState — a centered glyph + message + helper text + optional CTA.
 * Notifications ("appear here") and AI chat history ("start a chat").
 */
export function EmptyState({ glyph = "◔", title, body, action = null, bordered = false, style = {} }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "24px",
        border: bordered ? "var(--border-width) dashed var(--border)" : "none",
        borderRadius: bordered ? "var(--radius-md)" : 0,
        ...style,
      }}
    >
      <div
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "var(--radius-pill)",
          border: "var(--border-width) solid var(--border)",
          background: "var(--muted)",
          display: "grid",
          placeItems: "center",
          font: "600 22px var(--font-mono)",
          color: "var(--subtle-foreground)",
          marginBottom: "16px",
        }}
      >
        {glyph}
      </div>
      {title ? <div style={{ font: "700 15px var(--font-sans)", color: "var(--foreground)", marginBottom: "6px" }}>{title}</div> : null}
      {body ? <p style={{ font: "400 13px/1.5 var(--font-sans)", color: "var(--muted-foreground)", margin: 0, maxWidth: "240px" }}>{body}</p> : null}
      {action ? <div style={{ marginTop: "16px" }}>{action}</div> : null}
    </div>
  );
}
