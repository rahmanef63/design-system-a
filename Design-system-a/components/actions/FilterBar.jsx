import React from "react";
import { Dropdown } from "./Dropdown.jsx";
import { ViewToggle } from "./ViewToggle.jsx";

/**
 * FilterBar — the row of filter Dropdown chips above a list/grid, with an
 * optional trailing ViewToggle. Composes Dropdown + ViewToggle; never
 * re-implements them.
 */
export function FilterBar({ filters = [], view, onViewChange, align = "center", style = {} }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        flexWrap: "wrap",
        justifyContent: align === "center" ? "center" : "flex-start",
        ...style,
      }}
    >
      {filters.map((f, i) => (
        <Dropdown key={f.key ?? i} label={f.label} options={f.options} onSelect={f.onSelect} />
      ))}
      {view != null ? (
        <div style={{ marginLeft: align === "center" ? 0 : "auto" }}>
          <ViewToggle value={view} onChange={onViewChange} />
        </div>
      ) : null}
    </div>
  );
}
