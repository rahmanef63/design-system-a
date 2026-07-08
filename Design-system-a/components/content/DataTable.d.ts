import * as React from "react";
import { TableRowProps, RowMenuItem } from "./TableRow";

/**
 * The file/resource list — mono column header + TableRows.
 *
 * @startingPoint section="Content" subtitle="Recent-files data table with row actions" viewport="640x260"
 */
export interface DataTableProps {
  /** Column labels; defaults to Indonesian Nama/Orang/Jenis/Diedit. */
  columns?: { name?: string; owner?: string; type?: string; edited?: string };
  rows: (TableRowProps & { key?: string })[];
  /** Shared overflow menu applied to every row. */
  rowMenu?: RowMenuItem[];
  style?: React.CSSProperties;
}

export function DataTable(props: DataTableProps): JSX.Element;
