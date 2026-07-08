import React from "react";

/**
 * Breadcrumb — a back affordance plus the current path. Brand-kit's
 * "◂ Semua Template Merek".
 */
export function Breadcrumb({ path = [], onBack, style = {} }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "6px", font: "400 12px var(--font-sans)", color: "var(--muted-foreground)", ...style }}>
      <button onClick={onBack} title="Kembali" style={{ background: "none", border: 0, cursor: "pointer", color: "var(--muted-foreground)", font: "inherit", padding: 0 }}>◂</button>
      {path.map((p, i) => (
        <React.Fragment key={i}>
          {i > 0 ? <span style={{ color: "var(--subtle-foreground)" }}>/</span> : null}
          <span style={{ color: i === path.length - 1 ? "var(--foreground)" : "var(--muted-foreground)" }}>{p}</span>
        </React.Fragment>
      ))}
    </div>
  );
}
