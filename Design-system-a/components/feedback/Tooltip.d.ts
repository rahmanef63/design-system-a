import * as React from "react";

/** Hover/focus label for icon-only controls. Wraps its trigger child. */
export interface TooltipProps {
  label: string;
  placement?: "top" | "right" | "bottom" | "left";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Tooltip(props: TooltipProps): JSX.Element;
