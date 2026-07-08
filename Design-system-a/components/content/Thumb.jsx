import React from "react";

/**
 * Thumb — the honest placeholder that stands in for real art everywhere:
 * a hatched box with a mono caption. Never fake finished imagery.
 */
export function Thumb({ ratio = "4:3", caption = "", radius = "var(--radius-md)", style = {} }) {
  const ratios = { "1:1": "1 / 1", "4:5": "4 / 5", "4:3": "4 / 3", "16:9": "16 / 9", "16:10": "16 / 10", poster: "3 / 4" };
  return (
    <div
      style={{
        aspectRatio: ratios[ratio] || ratio,
        border: "var(--border-width) solid var(--border)",
        borderRadius: radius,
        backgroundColor: "var(--muted)",
        backgroundImage: "repeating-linear-gradient(45deg, var(--stripe) 0 6px, transparent 6px 12px)",
        display: "grid",
        placeItems: "center",
        color: "var(--subtle-foreground)",
        font: "600 10px var(--font-mono)",
        ...style,
      }}
    >
      {caption ? `[ ${caption} ]` : null}
    </div>
  );
}
