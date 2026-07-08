import React from "react";

/**
 * CloseButton — the ✕ icon button on overlays. `round` for modals (pill),
 * default rounded-square for panels. Always ≥ 30px hit target.
 */
export function CloseButton({ onClick, title = "Tutup", variant = "default", style = {} }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onClick={onClick}
      title={title}
      aria-label={title}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: variant === "round" ? "34px" : "32px",
        height: variant === "round" ? "34px" : "32px",
        borderRadius: variant === "round" ? "var(--radius-pill)" : "var(--radius-md)",
        border: `var(--border-width) solid ${hover ? "var(--border-strong)" : "var(--border)"}`,
        background: "var(--card)",
        color: "var(--foreground)",
        display: "grid",
        placeItems: "center",
        cursor: "pointer",
        font: "600 14px var(--font-mono)",
        ...style,
      }}
    >
      ✕
    </button>
  );
}
