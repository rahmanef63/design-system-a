import React from "react";

/**
 * Avatar — initials in a circle (user) or rounded square (team). Mono type.
 */
export function Avatar({ initials = "", size = 38, variant = "user", style = {} }) {
  const skins = {
    user: { background: "var(--primary)", color: "var(--primary-foreground)", border: 0, borderRadius: "var(--radius-pill)" },
    team: {
      background: "var(--muted)",
      color: "var(--muted-foreground)",
      border: "var(--border-width) solid var(--border)",
      borderRadius: "var(--radius-md)",
    },
  };
  return (
    <span
      style={{
        width: size,
        height: size,
        flex: "none",
        display: "grid",
        placeItems: "center",
        font: `700 ${Math.round(size * 0.34)}px var(--font-mono)`,
        ...skins[variant],
        ...style,
      }}
    >
      {initials}
    </span>
  );
}
