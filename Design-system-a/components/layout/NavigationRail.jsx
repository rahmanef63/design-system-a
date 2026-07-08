import React from "react";
import { NavItem } from "../navigation/NavItem.jsx";

/**
 * NavigationRail — the thin vertical primary nav: BrandArea, main NavItems,
 * a spacer, then the UtilityDock (bell + avatar). Composes NavItem.
 */
export function NavigationRail({ brand = null, items = [], dock = [], style = {} }) {
  return (
    <aside
      style={{
        width: "76px",
        flex: "none",
        height: "100vh",
        position: "sticky",
        top: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "12px 6px 14px",
        borderRight: "var(--border-width) solid var(--border)",
        background: "var(--card)",
        zIndex: 3,
        ...style,
      }}
    >
      {brand ? (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", margin: "6px 0 10px" }}>
          <div style={{ width: "40px", height: "40px", borderRadius: "var(--radius-md)", background: "var(--primary)", color: "var(--primary-foreground)", display: "grid", placeItems: "center", font: "700 16px var(--font-mono)" }}>{brand.initial}</div>
          <span style={{ font: "700 11px var(--font-sans)", color: "var(--foreground)" }}>{brand.name}</span>
        </div>
      ) : null}
      {items.map((it, i) => (
        <NavItem key={it.key ?? i} orientation="vertical" {...it} />
      ))}
      <div style={{ flex: 1, minHeight: "14px" }} />
      {dock.map((it, i) => (
        <NavItem key={it.key ?? i} orientation="vertical" {...it} />
      ))}
    </aside>
  );
}
