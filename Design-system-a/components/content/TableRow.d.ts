import * as React from "react";

export interface RowMenuItem {
  label: string;
  onClick?: () => void;
}

/**
 * One resource row in a DataTable — thumb, name (+sub), owner, type, edited,
 * and star + overflow actions. Self-manages the overflow menu.
 */
export interface TableRowProps {
  name: string;
  /** Optional nested-folder sub-line. */
  sub?: string;
  owner?: string;
  type?: string;
  edited?: string;
  menu?: RowMenuItem[];
  onStar?: () => void;
}

export function TableRow(props: TableRowProps): JSX.Element;
export const DATATABLE_GRID: string;
