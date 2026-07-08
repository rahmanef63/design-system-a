import * as React from "react";

export interface PopoverItem {
  label?: string;
  icon?: React.ReactNode;
  badge?: string;
  chevron?: boolean;
  danger?: boolean;
  divider?: boolean;
  onClick?: () => void;
}

/**
 * The floating menu surface — account menu, More menu, filter flyouts.
 * Pass `items` for the standard row list or arbitrary `children`.
 */
export interface PopoverMenuProps {
  items?: PopoverItem[];
  /** Uppercase mono section header. */
  header?: string;
  width?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function PopoverMenu(props: PopoverMenuProps): JSX.Element;
