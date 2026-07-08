import * as React from "react";
import { PopoverItem } from "./PopoverMenu";

/**
 * The kebab (⋯) overflow trigger + its dropdown of row/card actions.
 * Self-managing; composes PopoverMenu.
 */
export interface ContextMenuProps {
  items: PopoverItem[];
  glyph?: React.ReactNode;
  /** Which edge the menu aligns to. */
  align?: "left" | "right";
  width?: number;
  style?: React.CSSProperties;
}

export function ContextMenu(props: ContextMenuProps): JSX.Element;
