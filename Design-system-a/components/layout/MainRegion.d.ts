import * as React from "react";

/** The scrolling main work area; owns its own scroll + positioning context. */
export interface MainRegionProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function MainRegion(props: MainRegionProps): JSX.Element;
