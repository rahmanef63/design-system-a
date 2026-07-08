import React from "react";

/**
 * SecondarySidebar — the context column beside the rail: an optional header
 * (Breadcrumb / kit switcher), a stack of NavItems (passed as children),
 * and an optional footer. Used by Templates, Brand Kit, Print, AI chat.
 */
export function SecondarySidebar({ header = null, footer = null, width = 212, children, style = {} }) {
  return (
    <nav
      style={{
        width,
        flex: "none",
        borderRight: "var(--border-width) solid var(--border)",
        padding: "18px 12px",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      {header ? <div style={{ marginBottom: "8px" }}>{header}</div> : null}
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>{children}</div>
      {footer ? <div style={{ marginTop: "auto", paddingTop: "12px" }}>{footer}</div> : null}
    </nav>
  );
}
