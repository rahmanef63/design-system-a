import * as React from "react";
import { NavItemProps } from "../navigation/NavItem";

/**
 * The thin vertical primary nav — brand, main items, utility dock.
 *
 * @startingPoint section="Layout" subtitle="Icon navigation rail with brand + dock" viewport="76x520"
 */
export interface NavigationRailProps {
  brand?: { name: string; initial: string };
  /** Main nav tiles (NavItem props; orientation is forced vertical). */
  items?: (NavItemProps & { key?: string })[];
  /** Bottom dock tiles — notifications bell + user avatar. */
  dock?: (NavItemProps & { key?: string })[];
  style?: React.CSSProperties;
}

export function NavigationRail(props: NavigationRailProps): JSX.Element;
