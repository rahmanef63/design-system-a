import React from "react";

/**
 * ViewToggle — the two-button grid/list switch that sits at the right of a
 * section header. Controlled via `value` + `onChange`.
 */
export function ViewToggle({ value = "list", onChange, style = {} }) {
  return (
    <div style={{ display: "flex", border: "var(--border-width) solid var(--border)", borderRadius: "var(--radius-md)", overflow: "hidden", ...style }}>
      <Seg glyph="≣" title="List" active={value === "list"} onClick={() => onChange && onChange("list")} />
      <Seg glyph="▦" title="Grid" active={value === "grid"} onClick={() => onChange && onChange("grid")} />
    </div>
  );
}

function Seg({ glyph, title, active, onClick }) {
  return (
    <button
      title={title}
      onClick={onClick}
      style={{
        width: "38px",
        height: "32px",
        border: 0,
        cursor: "pointer",
        font: "600 13px var(--font-mono)",
        background: active ? "var(--primary)" : "var(--card)",
        color: active ? "var(--primary-foreground)" : "var(--muted-foreground)",
      }}
    >
      {glyph}
    </button>
  );
}
