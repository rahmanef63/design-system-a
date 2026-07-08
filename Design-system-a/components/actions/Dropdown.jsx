import React from "react";

/**
 * Dropdown — a pill trigger (label + chevron) that opens a small popover of
 * options. Uncontrolled by default; manages its own open state.
 */
export function Dropdown({ label, options = [], onSelect, style = {} }) {
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  return (
    <div ref={ref} style={{ position: "relative", ...style }}>
      <button
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "7px",
          border: `var(--border-width) solid ${hover || open ? "var(--border-strong)" : "var(--border)"}`,
          borderRadius: "var(--radius-pill)",
          padding: "9px 15px",
          background: "var(--card)",
          cursor: "pointer",
          font: "400 13px var(--font-sans)",
          color: "var(--foreground)",
        }}
      >
        {label} <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px" }}>▾</span>
      </button>
      {open ? (
        <div
          role="menu"
          style={{
            position: "absolute",
            top: "46px",
            left: 0,
            zIndex: 9,
            width: "196px",
            textAlign: "left",
            background: "var(--card)",
            border: "var(--border-width) solid var(--border)",
            borderRadius: "var(--radius-md)",
            boxShadow: "var(--elevation-overlay)",
            padding: "6px",
            animation: "ds-ovin var(--motion) var(--ease)",
          }}
        >
          {options.map((o, i) => (
            <MenuOption key={i} label={o} onClick={() => { onSelect && onSelect(o); setOpen(false); }} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function MenuOption({ label, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      role="menuitem"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: "100%",
        textAlign: "left",
        background: hover ? "var(--muted)" : "none",
        border: 0,
        borderRadius: "var(--radius-sm)",
        padding: "8px 10px",
        cursor: "pointer",
        font: "400 13px var(--font-sans)",
        color: "var(--foreground)",
      }}
    >
      {label}
    </button>
  );
}
