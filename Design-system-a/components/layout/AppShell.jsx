import React from "react";

/**
 * AppShell — the single outer chrome. Lays out NavigationRail | (Secondary
 * Sidebar + MainRegion + RightPanel) and an OverlayLayer on top. Owns the
 * theme: sets data-theme for dark, data-preset for the active theme preset,
 * and overrides --primary when a custom accent is passed. NEVER nest two AppShells.
 */
export function AppShell({
  rail = null,
  sidebar = null,
  panel = null,
  overlays = null,
  theme = "light",
  preset = null,
  accent = null,
  children,
  style = {},
}) {
  const vars = {};
  if (accent) {
    vars["--primary"] = accent;
    vars["--primary-soft"] = `color-mix(in srgb, ${accent} 14%, transparent)`;
  }
  return (
    <div
      data-theme={theme === "dark" ? "dark" : undefined}
      data-preset={preset || undefined}
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "var(--background)",
        color: "var(--foreground)",
        fontFamily: "var(--font-sans)",
        ...vars,
        ...style,
      }}
    >
      {rail}
      <div style={{ flex: 1, display: "flex", minWidth: 0 }}>
        {sidebar}
        {children}
        {panel}
      </div>
      {overlays}
    </div>
  );
}
