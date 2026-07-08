import React from "react";
import { Thumb } from "./Thumb.jsx";
import { Badge } from "../feedback/Badge.jsx";

/**
 * Card — a self-contained content tile: Thumb + title + optional meta + badge.
 * The template / project / product / asset card. Composes Thumb + Badge.
 */
export function Card({ title, meta, badge, ratio = "4:3", thumbCaption = "template", onClick, style = {} }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        border: `var(--border-width) solid ${hover ? "var(--border-strong)" : "var(--border)"}`,
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        background: "var(--card)",
        cursor: onClick ? "pointer" : "default",
        ...style,
      }}
    >
      <div style={{ position: "relative" }}>
        <Thumb ratio={ratio} caption={thumbCaption} radius="0" />
        {badge ? (
          <span style={{ position: "absolute", top: "8px", left: "8px" }}>
            <Badge tone="new">{badge}</Badge>
          </span>
        ) : null}
      </div>
      <div style={{ padding: "9px 12px" }}>
        <div style={{ font: "400 13px var(--font-sans)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{title}</div>
        {meta ? <div style={{ font: "600 10px var(--font-mono)", color: "var(--subtle-foreground)", marginTop: "2px" }}>{meta}</div> : null}
      </div>
    </div>
  );
}
