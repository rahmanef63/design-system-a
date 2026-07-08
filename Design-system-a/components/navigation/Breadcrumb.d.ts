import * as React from "react";

/** Back affordance + current path. */
export interface BreadcrumbProps {
  path: string[];
  onBack?: () => void;
  style?: React.CSSProperties;
}

export function Breadcrumb(props: BreadcrumbProps): JSX.Element;
