import React from "react";
import { CommandSearch } from "../../components/actions/CommandSearch.jsx";
import { Button } from "../../components/actions/Button.jsx";
import { proTrial } from "./data.js";

/**
 * Project-specific composites shared across screens (extracted on 2nd use):
 * the persistent "Coba Pro gratis" pill, the centered hero, the section head.
 */
export function ProTrialBtn() {
  return (
    <div style={{ position: "absolute", top: "16px", right: "24px", zIndex: 2 }}>
      <Button variant="dark" icon="★">{proTrial}</Button>
    </div>
  );
}

export function Hero({ title, searchPh, size = 40, children }) {
  return (
    <section style={{ position: "relative", padding: "52px 40px 22px", textAlign: "center", background: "linear-gradient(180deg, var(--primary-soft), transparent 88%)" }}>
      <ProTrialBtn />
      <h1 style={{ font: `700 ${size}px/1.05 var(--font-sans)`, margin: "8px 0 20px" }}>{title}</h1>
      {searchPh ? <div style={{ maxWidth: "720px", margin: "0 auto 16px" }}><CommandSearch placeholder={searchPh} /></div> : null}
      {children}
    </section>
  );
}

export function SectionHead({ title, children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap", marginBottom: "12px" }}>
      <h2 style={{ font: "700 22px var(--font-sans)", margin: 0 }}>{title}</h2>
      {children}
    </div>
  );
}

export const chip = {
  border: "var(--border-width) solid var(--border)",
  borderRadius: "var(--radius-pill)",
  padding: "8px 14px",
  background: "var(--card)",
  font: "400 13px var(--font-sans)",
  color: "var(--muted-foreground)",
};
