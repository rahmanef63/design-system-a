import * as React from "react";

/**
 * The context column beside the rail — header slot, NavItem stack (children),
 * optional footer. Templates / Brand Kit / Print / AI chat.
 */
export interface SecondarySidebarProps {
  /** Header slot — a Breadcrumb, kit switcher, or "Obrolan baru" button. */
  header?: React.ReactNode;
  footer?: React.ReactNode;
  width?: number;
  /** The menu rows — horizontal NavItems. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function SecondarySidebar(props: SecondarySidebarProps): JSX.Element;
