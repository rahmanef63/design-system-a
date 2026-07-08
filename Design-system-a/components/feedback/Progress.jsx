import React from "react";

/**
 * Progress — loading feedback. `skeleton` renders striped placeholder bars;
 * `bar` renders a determinate accent track (0–100).
 */
export function Progress({ variant = "skeleton", lines = 3, value = 40, style = {} }) {
  if (variant === "bar") {
    return (
      <div style={{ height: "8px", borderRadius: "var(--radius-pill)", background: "var(--muted)", overflow: "hidden", ...style }}>
        <div style={{ width: `${Math.max(0, Math.min(100, value))}%`, height: "100%", background: "var(--primary)", transition: "width var(--motion) var(--ease)" }} />
      </div>
    );
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", ...style }}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          style={{
            height: "14px",
            width: i === lines - 1 ? "60%" : "100%",
            borderRadius: "var(--radius-sm)",
            backgroundColor: "var(--muted)",
            backgroundImage: "repeating-linear-gradient(45deg, var(--stripe) 0 6px, transparent 6px 12px)",
          }}
        />
      ))}
    </div>
  );
}
