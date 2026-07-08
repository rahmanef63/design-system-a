import React from "react";

/**
 * Tooltip — a small mono label shown on hover/focus of its child. Used on
 * icon-only controls (rail items, bell, overflow) to name them.
 */
export function Tooltip({ label, placement = "top", children, style = {} }) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: { bottom: "calc(100% + 6px)", left: "50%", transform: "translateX(-50%)" },
    right: { left: "calc(100% + 6px)", top: "50%", transform: "translateY(-50%)" },
    bottom: { top: "calc(100% + 6px)", left: "50%", transform: "translateX(-50%)" },
    left: { right: "calc(100% + 6px)", top: "50%", transform: "translateY(-50%)" },
  };
  return (
    <span
      style={{ position: "relative", display: "inline-flex", ...style }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      {children}
      {show && label ? (
        <span
          role="tooltip"
          style={{
            position: "absolute",
            zIndex: 30,
            ...pos[placement],
            whiteSpace: "nowrap",
            font: "600 10px var(--font-mono)",
            background: "var(--foreground)",
            color: "var(--card)",
            padding: "4px 8px",
            borderRadius: "var(--radius-sm)",
            boxShadow: "var(--elevation-overlay)",
            pointerEvents: "none",
            animation: "ds-fade var(--motion-fast) var(--ease)",
          }}
        >
          {label}
        </span>
      ) : null}
    </span>
  );
}
