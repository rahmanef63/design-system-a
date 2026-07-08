import * as React from "react";

/** The dimming scrim behind an overlay. Dismiss on click. */
export interface BackdropProps {
  onClick?: () => void;
  dark?: boolean;
  style?: React.CSSProperties;
}

export function Backdrop(props: BackdropProps): JSX.Element;
