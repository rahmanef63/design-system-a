import * as React from "react";

/**
 * The docked right column — AI assistant, help, or inspector. Optional close
 * button + sticky footer (e.g. prompt input).
 */
export interface RightPanelProps {
  onClose?: (() => void) | null;
  /** Sticky footer slot — commonly the assistant input. */
  footer?: React.ReactNode;
  width?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function RightPanel(props: RightPanelProps): JSX.Element;
