import React from "react";

/**
 * MainRegion — the scrolling work area that holds a page's header + sections.
 * Full-height, its own scroll context, positioned for a floating FAB.
 */
export function MainRegion({ children, style = {} }) {
  return (
    <main style={{ flex: 1, minWidth: 0, height: "100vh", overflow: "auto", position: "relative", ...style }}>
      {children}
    </main>
  );
}
