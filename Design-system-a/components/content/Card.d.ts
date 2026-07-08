import * as React from "react";

/**
 * A self-contained content tile (template / project / product / asset).
 * Composes Thumb + Badge.
 *
 * @startingPoint section="Content" subtitle="Content/template card with thumb + badge" viewport="200x210"
 */
export interface CardProps {
  title: string;
  /** Mono sub-line, e.g. "Diedit 7 bulan lalu". */
  meta?: string;
  /** Corner badge label, e.g. "Baru". */
  badge?: string;
  ratio?: string;
  thumbCaption?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
