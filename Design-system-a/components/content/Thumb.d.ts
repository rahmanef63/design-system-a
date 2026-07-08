import * as React from "react";

/**
 * The hatched placeholder for any image slot. Signals "art goes here"
 * without faking finished visuals.
 */
export interface ThumbProps {
  /** Aspect ratio keyword or raw CSS value. */
  ratio?: "1:1" | "4:5" | "4:3" | "16:9" | "16:10" | "poster" | string;
  /** Mono caption shown inside, e.g. "template", "produk". Wrapped in [ ]. */
  caption?: string;
  radius?: string;
  style?: React.CSSProperties;
}

export function Thumb(props: ThumbProps): JSX.Element;
