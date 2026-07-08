import * as React from "react";

/** Initials avatar — circle for a person, rounded square for a team. */
export interface AvatarProps {
  initials: string;
  size?: number;
  variant?: "user" | "team";
  style?: React.CSSProperties;
}

export function Avatar(props: AvatarProps): JSX.Element;
