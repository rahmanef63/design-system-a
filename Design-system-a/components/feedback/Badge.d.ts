import * as React from "react";

/** Small mono status/label chip (Baru, Private, Beta, Gratis, Folder). */
export interface BadgeProps {
  tone?: "default" | "new" | "highlight" | "outline";
  icon?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
