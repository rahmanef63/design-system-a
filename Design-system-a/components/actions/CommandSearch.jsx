import React from "react";

/**
 * CommandSearch — the big rounded search/omnibox that anchors every
 * exploration surface (Home, Projects, Templates, Print, Create modal).
 * `variant="input"` is the AI CommandInput (leading "+", trailing mic glyph).
 */
export function CommandSearch({
  placeholder = "",
  variant = "search",
  value,
  onChange,
  onFocus,
  onBlur,
  style = {},
}) {
  const [focus, setFocus] = React.useState(false);
  const isInput = variant === "input";

  return (
    <label
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        width: "100%",
        border: `var(--border-width) solid ${focus ? "var(--primary)" : "var(--border)"}`,
        boxShadow: focus ? "0 0 0 4px var(--primary-soft)" : "none",
        borderRadius: isInput ? "18px" : "var(--radius-lg)",
        padding: "15px 18px",
        background: "var(--card)",
        transition: "border-color var(--motion) var(--ease), box-shadow var(--motion) var(--ease)",
        ...style,
      }}
    >
      {isInput ? (
        <span
          style={{
            width: "26px",
            height: "26px",
            flex: "none",
            borderRadius: "var(--radius-sm)",
            border: "var(--border-width) solid var(--border)",
            display: "grid",
            placeItems: "center",
            font: "700 14px var(--font-mono)",
            color: "var(--subtle-foreground)",
          }}
        >
          +
        </span>
      ) : (
        <span
          style={{
            width: "15px",
            height: "15px",
            flex: "none",
            border: "2px solid var(--subtle-foreground)",
            borderRadius: "var(--radius-pill)",
          }}
        />
      )}
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={(e) => {
          setFocus(true);
          onFocus && onFocus(e);
        }}
        onBlur={(e) => {
          setFocus(false);
          onBlur && onBlur(e);
        }}
        style={{
          border: 0,
          background: "transparent",
          outline: "none",
          flex: 1,
          minWidth: 0,
          font: "400 15px var(--font-sans)",
          color: "var(--foreground)",
        }}
      />
      {isInput ? (
        <span style={{ width: "26px", flex: "none", fontFamily: "var(--font-mono)", color: "var(--subtle-foreground)", textAlign: "center" }}>◍</span>
      ) : null}
    </label>
  );
}
