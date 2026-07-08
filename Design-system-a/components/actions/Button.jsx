import React from "react";

/**
 * Button — the wireframe's primary action affordance.
 * Variants: primary (accent fill), outline, ghost, dark (the "Coba Pro" pill).
 * Copy is props-driven — pass it as children; never hardcode inside.
 */
export function Button({
  variant = "primary",
  size = "md",
  icon = null,
  children,
  disabled = false,
  onClick,
  type = "button",
  title,
  style = {},
}) {
  const [hover, setHover] = React.useState(false);

  const pad = size === "sm" ? "7px 13px" : size === "lg" ? "13px 24px" : "10px 18px";
  const fs = size === "sm" ? "13px" : size === "lg" ? "15px" : "13px";

  const variants = {
    primary: { background: "var(--primary)", color: "var(--primary-foreground)", borderColor: "var(--primary)" },
    outline: {
      background: "var(--card)",
      color: "var(--foreground)",
      borderColor: hover ? "var(--border-strong)" : "var(--border)",
    },
    ghost: { background: hover ? "var(--muted)" : "transparent", color: "var(--muted-foreground)", borderColor: "transparent" },
    dark: { background: "var(--foreground)", color: "var(--card)", borderColor: "var(--foreground)" },
  };

  return (
    <button
      type={type}
      title={title}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "7px",
        padding: pad,
        fontFamily: "var(--font-sans)",
        fontWeight: 700,
        fontSize: fs,
        lineHeight: 1.1,
        borderRadius: "var(--radius-pill)",
        border: `var(--border-width) solid transparent`,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition: "background var(--motion) var(--ease), border-color var(--motion) var(--ease)",
        ...variants[variant],
        ...style,
      }}
    >
      {icon ? <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.95em", lineHeight: 1 }}>{icon}</span> : null}
      {children}
    </button>
  );
}
