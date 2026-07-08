import React from "react";
import { TableRow, DATATABLE_GRID } from "./TableRow.jsx";

/**
 * DataTable — the file/resource list: a mono column header plus TableRows.
 * The Home + Projects "Nama · Orang · Jenis · Diedit" list.
 */
export function DataTable({ columns = {}, rows = [], rowMenu = [], style = {} }) {
  const c = { name: "Nama", owner: "Orang", type: "Jenis", edited: "Diedit", ...columns };
  return (
    <div style={{ borderTop: "var(--border-width) solid var(--border)", ...style }}>
      <div style={{ display: "grid", gridTemplateColumns: DATATABLE_GRID, gap: "8px", padding: "12px 8px", font: "600 11px var(--font-mono)", color: "var(--muted-foreground)", borderBottom: "var(--border-width) solid var(--border)" }}>
        <span>{c.name}</span>
        <span>{c.owner}</span>
        <span>{c.type}</span>
        <span>{c.edited}</span>
        <span />
      </div>
      {rows.map((r, i) => (
        <TableRow key={r.key ?? i} menu={rowMenu} {...r} />
      ))}
    </div>
  );
}
