import * as React from "react";

/**
 * The big rounded search bar that anchors exploration surfaces; the
 * `input` variant is the AI prompt CommandInput.
 *
 * @startingPoint section="Actions" subtitle="Command search / omnibox with focus glow" viewport="560x90"
 */
export interface CommandSearchProps {
  placeholder?: string;
  /** `search` = magnifier omnibox · `input` = AI prompt (leading +, trailing mic). */
  variant?: "search" | "input";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

export function CommandSearch(props: CommandSearchProps): JSX.Element;
