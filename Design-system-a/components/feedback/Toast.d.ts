import * as React from "react";

/** Brief action-feedback snackbar (star/copy/move). Presentational only. */
export interface ToastProps {
  icon?: React.ReactNode;
  message: string;
  /** Inline action label, e.g. "Urungkan". */
  action?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Toast(props: ToastProps): JSX.Element;
