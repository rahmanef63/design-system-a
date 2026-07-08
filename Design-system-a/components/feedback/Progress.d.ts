import * as React from "react";

/** Loading feedback — striped skeleton bars or a determinate accent track. */
export interface ProgressProps {
  variant?: "skeleton" | "bar";
  /** skeleton: number of bars. */
  lines?: number;
  /** bar: fill percentage 0–100. */
  value?: number;
  style?: React.CSSProperties;
}

export function Progress(props: ProgressProps): JSX.Element;
