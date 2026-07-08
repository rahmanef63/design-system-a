import * as React from "react";

export interface FilterDef {
  key?: string;
  label: string;
  options?: string[];
  onSelect?: (option: string) => void;
}

/**
 * A row of filter dropdown chips with an optional grid/list toggle.
 * Composes Dropdown + ViewToggle.
 */
export interface FilterBarProps {
  filters: FilterDef[];
  /** When provided, renders a trailing ViewToggle bound to this value. */
  view?: "list" | "grid";
  onViewChange?: (v: "list" | "grid") => void;
  align?: "center" | "start";
  style?: React.CSSProperties;
}

export function FilterBar(props: FilterBarProps): JSX.Element;
