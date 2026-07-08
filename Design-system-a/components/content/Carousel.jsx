import React from "react";

/**
 * Carousel — a horizontally scrolling rail of fixed-width items (cards,
 * previews). Pure layout wrapper; pass items as children.
 */
export function Carousel({ children, gap = "14px", pad = "4px 2px 16px", style = {} }) {
  return (
    <div style={{ display: "flex", gap, overflow: "auto", padding: pad, ...style }}>
      {React.Children.map(children, (child) => (
        <div style={{ flex: "none" }}>{child}</div>
      ))}
    </div>
  );
}
