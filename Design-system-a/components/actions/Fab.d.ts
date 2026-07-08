import * as React from "react";

/** The fixed floating action button (defaults to the help "?"). */
export interface FabProps {
  icon?: React.ReactNode;
  title?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function Fab(props: FabProps): JSX.Element;
