import React from "react";

/**
 * QuickActionBar — a horizontally scrolling row of shortcut tiles
 * (icon + label + optional badge). The Home category strip and the
 * create-modal "Tindakan cepat" row.
 */
export function QuickActionBar({ items = [], style = {} }) {
  return (
    <div style={{ display: "flex", gap: "14px", overflow: "auto", padding: "6px 2px 10px", ...style }}>
      {items.map((it, i) => (
        <QuickAction key={it.key ?? i} {...it} />
      ))}
    </div>
  );
}

function QuickAction({ label, badge, icon = "◧", onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        flex: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        width: "74px",
        background: "none",
        border: 0,
        cursor: "pointer",
        color: hover ? "var(--primary)" : "var(--muted-foreground)",
      }}
    >
      <span
        style={{
          position: "relative",
          width: "56px",
          height: "56px",
          borderRadius: "var(--radius-lg)",
          border: "var(--border-width) solid var(--border)",
          background: "var(--card)",
          display: "grid",
          placeItems: "center",
          font: "700 15px var(--font-mono)",
          color: "var(--subtle-foreground)",
        }}
      >
        {icon}
        {badge ? (
          <span
            style={{
              position: "absolute",
              top: "-7px",
              right: "-9px",
              font: "700 8px var(--font-mono)",
              background: "var(--primary)",
              color: "var(--primary-foreground)",
              borderRadius: "var(--radius-sm)",
              padding: "1px 4px",
            }}
          >
            {badge}
          </span>
        ) : null}
      </span>
      <span style={{ font: "400 11px/1.15 var(--font-sans)", textAlign: "center" }}>{label}</span>
    </button>
  );
}
