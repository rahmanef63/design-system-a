import * as React from "react";

/**
 * The wireframe's primary action affordance — a pill button.
 *
 * @startingPoint section="Actions" subtitle="Pill button — primary, outline, ghost, dark" viewport="360x120"
 */
export interface ButtonProps {
  /** Visual weight. `dark` is the ink-filled "Coba Pro gratis" CTA pill. */
  variant?: "primary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  /** Leading glyph — a simple geometric/mono character (e.g. "+", "★"). */
  icon?: React.ReactNode;
  /** Button label. Always pass copy in — never hardcode strings inside primitives. */
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  title?: string;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
