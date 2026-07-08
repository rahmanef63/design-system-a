import React from "react";

/**
 * Fab — the fixed floating action button, bottom-right. Defaults to the "?"
 * help button present on every screen.
 */
export function Fab({ icon = "?", title = "Bantuan", onClick, style = {} }) {
  return (
    <button
      title={title}
      onClick={onClick}
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        width: "52px",
        height: "52px",
        borderRadius: "var(--radius-pill)",
        background: "var(--primary)",
        color: "var(--primary-foreground)",
        border: 0,
        cursor: "pointer",
        font: "700 20px var(--font-mono)",
        boxShadow: "var(--elevation-overlay)",
        zIndex: 20,
        ...style,
      }}
    >
      {icon}
    </button>
  );
}
