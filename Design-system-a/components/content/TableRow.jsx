import React from "react";

const GRID = "minmax(0,2.4fr) 100px minmax(0,1.3fr) minmax(0,1fr) 92px";

/**
 * TableRow — one file/resource row inside a DataTable: small thumb, name
 * (+ optional sub folder), owner badge, type, edited, and row actions
 * (star + overflow context menu). Manages its own menu open state.
 */
export function TableRow({ name, sub, owner = "Private", type, edited, menu = [], onStar }) {
  const [hover, setHover] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const iconBtn = {
    width: "30px", height: "30px", flex: "none", borderRadius: "var(--radius-sm)",
    border: "var(--border-width) solid var(--border)", background: "var(--card)",
    color: "var(--muted-foreground)", display: "grid", placeItems: "center", cursor: "pointer", font: "600 13px var(--font-mono)",
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative", display: "grid", gridTemplateColumns: GRID, gap: "8px",
        padding: "11px 8px", alignItems: "center", borderBottom: "1px solid var(--border)",
        background: hover ? "var(--muted)" : "transparent",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0 }}>
        <div style={{ width: "44px", height: "32px", flex: "none", borderRadius: "var(--radius-sm)", border: "1px solid var(--border)", backgroundColor: "var(--muted)", backgroundImage: "repeating-linear-gradient(45deg, var(--stripe) 0 4px, transparent 4px 9px)" }} />
        <span style={{ font: "400 14px var(--font-sans)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {name}
          {sub ? <span style={{ display: "block", font: "600 10px var(--font-mono)", color: "var(--subtle-foreground)" }}>▸ {sub}</span> : null}
        </span>
      </div>
      <div><span style={{ font: "600 10px var(--font-mono)", border: "1px solid var(--border)", borderRadius: "var(--radius-pill)", padding: "3px 8px", color: "var(--muted-foreground)", background: "var(--muted)" }}>{owner}</span></div>
      <div style={{ font: "400 13px var(--font-sans)", color: "var(--muted-foreground)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{type}</div>
      <div style={{ font: "400 13px var(--font-sans)", color: "var(--muted-foreground)" }}>{edited}</div>
      <div ref={ref} style={{ display: "flex", gap: "6px", justifyContent: "flex-end", position: "relative" }}>
        <button title="Bintangi" onClick={onStar} style={iconBtn}>☆</button>
        <button title="Lainnya" onClick={() => setOpen((o) => !o)} style={iconBtn}>⋯</button>
        {open && menu.length ? (
          <div style={{ position: "absolute", top: "36px", right: 0, zIndex: 8, width: "176px", background: "var(--card)", border: "var(--border-width) solid var(--border)", borderRadius: "var(--radius-md)", boxShadow: "var(--elevation-overlay)", padding: "6px", animation: "ds-ovin var(--motion) var(--ease)" }}>
            {menu.map((m, i) => (
              <button key={i} onClick={() => { setOpen(false); m.onClick && m.onClick(); }} style={{ width: "100%", textAlign: "left", background: "none", border: 0, borderRadius: "var(--radius-sm)", padding: "8px 10px", cursor: "pointer", font: "400 13px var(--font-sans)", color: "var(--foreground)" }}>{m.label}</button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export const DATATABLE_GRID = GRID;
