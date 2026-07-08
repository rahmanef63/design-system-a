import * as React from "react";

/**
 * The focused overlay flow (Create-design modal). Backdrop + centered
 * surface + close, with an optional left category nav.
 *
 * @startingPoint section="Overlay" subtitle="Create-design modal with category nav" viewport="720x520"
 */
export interface ModalDialogProps {
  open?: boolean;
  onClose?: () => void;
  title?: string;
  /** Optional left category-nav slot (renders a bordered sidebar). */
  nav?: React.ReactNode;
  width?: string;
  height?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function ModalDialog(props: ModalDialogProps): JSX.Element | null;
