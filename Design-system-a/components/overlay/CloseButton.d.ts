import * as React from "react";

/** The ✕ dismiss button for overlays. */
export interface CloseButtonProps {
  onClick?: () => void;
  title?: string;
  /** `round` = pill (modals) · `default` = rounded square (panels). */
  variant?: "default" | "round";
  style?: React.CSSProperties;
}

export function CloseButton(props: CloseButtonProps): JSX.Element;
