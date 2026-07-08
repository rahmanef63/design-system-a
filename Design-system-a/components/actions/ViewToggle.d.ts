import * as React from "react";

/** The grid/list display switch. Controlled. */
export interface ViewToggleProps {
  value?: "list" | "grid";
  onChange?: (v: "list" | "grid") => void;
  style?: React.CSSProperties;
}

export function ViewToggle(props: ViewToggleProps): JSX.Element;
