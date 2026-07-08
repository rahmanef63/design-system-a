import * as React from "react";

export interface TabDef {
  key: string;
  label: string;
}

/** Horizontal segmented nav with an underline marker. Controlled. */
export interface TabsProps {
  tabs: TabDef[];
  value?: string;
  onChange?: (key: string) => void;
  style?: React.CSSProperties;
}

export function Tabs(props: TabsProps): JSX.Element;
