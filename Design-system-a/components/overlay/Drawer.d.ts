import * as React from "react";

/** Slide-over panel (right/left) — the mobile presentation of side panels. */
export interface DrawerProps {
  open?: boolean;
  onClose?: () => void;
  side?: "right" | "left";
  width?: string;
  title?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Drawer(props: DrawerProps): JSX.Element | null;
