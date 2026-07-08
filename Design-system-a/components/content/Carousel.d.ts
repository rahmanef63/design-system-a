import * as React from "react";

/** Horizontal scrolling rail; children become fixed-width, non-shrinking items. */
export interface CarouselProps {
  children?: React.ReactNode;
  gap?: string;
  pad?: string;
  style?: React.CSSProperties;
}

export function Carousel(props: CarouselProps): JSX.Element;
