import * as React from "react";

/**
 * A pill trigger that opens a small popover of options. Self-managing
 * open state; closes on outside click.
 */
export interface DropdownProps {
  label: string;
  options?: string[];
  onSelect?: (option: string) => void;
  style?: React.CSSProperties;
}

export function Dropdown(props: DropdownProps): JSX.Element;
