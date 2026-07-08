import * as React from "react";

/**
 * The single outer chrome — rail + (sidebar + main + panel) + overlay layer.
 * Owns theming (data-theme + accent override). Exactly one per app; never
 * nest two shells.
 *
 * @startingPoint section="Layout" subtitle="Full app shell — rail, main, panel, overlays" viewport="1280x720"
 */
export interface AppShellProps {
  /** The NavigationRail. */
  rail?: React.ReactNode;
  /** Optional SecondarySidebar between rail and main. */
  sidebar?: React.ReactNode;
  /** Optional RightPanel docked at the far right. */
  panel?: React.ReactNode;
  /** OverlayLayer — modals/menus/drawers rendered above everything. */
  overlays?: React.ReactNode;
  theme?: "light" | "dark";
  /** Active theme preset name (sets data-preset) — e.g. "rupa", "modern-minimal", "emerald". */
  preset?: string | null;
  /** Override the accent hue for this app instance (sets --primary). */
  accent?: string | null;
  /** The MainRegion. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function AppShell(props: AppShellProps): JSX.Element;
