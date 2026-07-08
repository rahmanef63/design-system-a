import React from "react";

/**
 * Backdrop — the scrim behind modals/drawers. Fixed by default; pass
 * position:"absolute" via style when nesting inside a positioned overlay.
 */
export function Backdrop({ onClick, dark = true, style = {} }) {
  return (
    <div
      onClick={onClick}
      style={{
        position: "fixed",
        inset: 0,
        background: dark ? "rgba(20, 20, 18, .5)" : "transparent",
        animation: "ds-fade var(--motion) var(--ease)",
        ...style,
      }}
    />
  );
}
