import React from "react";

/**
 * PopoverMenu — the floating surface for account menu, More menu, filter
 * flyouts. Pass `items` for the common row list, or arbitrary `children`.
 * Supports section headers and dividers.
 */
export function PopoverMenu({ items = null, header = null, width = 200, children, style = {} }) {
  return (
    <div
      role="menu"
      style={{
        width,
        background: "var(--card)",
        border: "var(--border-width) solid var(--border)",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--elevation-overlay)",
        padding: "6px",
        animation: "ds-ovin var(--motion) var(--ease)",
        ...style,
      }}
    >
      {header ? <div style={{ font: "700 10px var(--font-mono)", color: "var(--subtle-foreground)", padding: "8px 10px 4px", textTransform: "uppercase", letterSpacing: ".06em" }}>{header}</div> : null}
      {items
        ? items.map((it, i) =>
            it.divider ? (
              <div key={i} style={{ borderTop: "var(--border-width) solid var(--border)", margin: "6px 0" }} />
            ) : (
              <MenuRow key={i} {...it} />
            )
          )
        : children}
    </div>
  );
}

function MenuRow({ label, icon = null, badge = null, chevron = false, danger = false, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      role="menuitem"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        width: "100%",
        textAlign: "left",
        background: hover ? "var(--muted)" : "none",
        border: 0,
        borderRadius: "var(--radius-sm)",
        padding: "9px 10px",
        cursor: "pointer",
        font: "400 13px var(--font-sans)",
        color: danger ? "var(--primary)" : "var(--foreground)",
      }}
    >
      {icon ? <span style={{ width: "20px", height: "20px", flex: "none", borderRadius: "var(--radius-sm)", border: "var(--border-width) solid var(--border)", display: "grid", placeItems: "center", font: "600 10px var(--font-mono)", color: "var(--subtle-foreground)" }}>{icon}</span> : null}
      {label}
      {badge ? <span style={{ font: "700 8px var(--font-mono)", background: "var(--muted)", border: "1px solid var(--border)", color: "var(--muted-foreground)", borderRadius: "var(--radius-sm)", padding: "1px 5px", marginLeft: "4px" }}>{badge}</span> : null}
      {chevron ? <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", color: "var(--subtle-foreground)" }}>›</span> : null}
    </button>
  );
}
