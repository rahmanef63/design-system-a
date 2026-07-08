import React from "react";
import { ProTrialBtn } from "./Parts.jsx";
import { SecondarySidebar } from "../../components/layout/SecondarySidebar.jsx";
import { Button } from "../../components/actions/Button.jsx";
import { CommandSearch } from "../../components/actions/CommandSearch.jsx";
import { EmptyState } from "../../components/feedback/EmptyState.jsx";
import { ai } from "./data.js";

/** AI Rupa — chat-history sidebar (empty), center hero + prompt + mode chips. */
export function AiChat() {
  const header = (
    <Button variant="outline" icon="✎" style={{ width: "100%", justifyContent: "flex-start" }}>{ai.newChat}</Button>
  );
  return (
    <div data-r="subwrap" style={{ display: "flex", minHeight: "100%" }}>
      <SecondarySidebar width={250} header={header}>
        <EmptyState bordered glyph="✎" title={ai.histTitle} body={ai.histBody} style={{ padding: "16px" }} />
      </SecondarySidebar>
      <div style={{ flex: 1, minWidth: 0, position: "relative", display: "flex", flexDirection: "column", background: "linear-gradient(160deg, var(--primary-soft), transparent 60%)" }}>
        <ProTrialBtn />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px", textAlign: "center" }}>
          <h1 style={{ font: "700 40px/1.05 var(--font-sans)", margin: "0 0 26px" }}>{ai.hero}</h1>
          <div style={{ width: "min(760px, 92%)" }}>
            <CommandSearch variant="input" placeholder={ai.inputPh} />
          </div>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginTop: "16px" }}>
            {ai.modes.map((m, i) => (
              <span key={i} style={{ position: "relative", border: "var(--border-width) solid var(--border)", borderRadius: "var(--radius-pill)", padding: "9px 16px", background: "var(--card)", font: "400 13px var(--font-sans)", color: "var(--foreground)" }}>
                {m.label}
                {m.badge ? <span style={{ position: "absolute", top: "-8px", right: "-6px", font: "700 8px var(--font-mono)", background: "var(--primary)", color: "var(--primary-foreground)", borderRadius: "var(--radius-sm)", padding: "1px 4px" }}>{m.badge}</span> : null}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
