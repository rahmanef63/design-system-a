import * as React from "react";

/**
 * A blank-state placeholder: glyph, message, helper text, optional CTA.
 * Keeps empty screens instructive.
 */
export interface EmptyStateProps {
  /** Geometric glyph for the circle. */
  glyph?: React.ReactNode;
  title?: string;
  body?: string;
  /** Optional CTA node (e.g. a Button). */
  action?: React.ReactNode;
  /** Dashed border wrapper (sidebar hint variant). */
  bordered?: boolean;
  style?: React.CSSProperties;
}

export function EmptyState(props: EmptyStateProps): JSX.Element;
