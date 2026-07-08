import * as React from "react";

export interface QuickAction {
  key?: string;
  label: string;
  /** Simple geometric glyph placeholder. */
  icon?: React.ReactNode;
  /** Small corner badge, e.g. "Baru". */
  badge?: string;
  onClick?: () => void;
}

/**
 * A scrolling row of shortcut tiles for the most-used create actions.
 *
 * @startingPoint section="Actions" subtitle="Shortcut tile strip with badges" viewport="620x120"
 */
export interface QuickActionBarProps {
  items: QuickAction[];
  style?: React.CSSProperties;
}

export function QuickActionBar(props: QuickActionBarProps): JSX.Element;
