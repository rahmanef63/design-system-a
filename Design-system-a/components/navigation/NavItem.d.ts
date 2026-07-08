import * as React from "react";

/**
 * A navigation entry — a vertical rail tile or a horizontal sidebar/menu row.
 * Doubles as MenuItem in the horizontal orientation.
 */
export interface NavItemProps {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
  /** Trailing badge, e.g. "Baru". */
  badge?: string;
  /** Trailing chevron (nested/settings rows). */
  chevron?: boolean;
  /** Small ★ crown marker on the rail tile (premium features). */
  crown?: boolean;
  /** Accent-filled tile — the rail "Buat" (+) create action. */
  accent?: boolean;
  /** Render the tile as a round avatar (rail user dock). */
  avatar?: boolean;
  orientation?: "vertical" | "horizontal";
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function NavItem(props: NavItemProps): JSX.Element;
