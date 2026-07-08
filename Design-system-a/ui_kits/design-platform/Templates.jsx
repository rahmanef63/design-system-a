import React from "react";
import { Hero, chip } from "./Parts.jsx";
import { SecondarySidebar } from "../../components/layout/SecondarySidebar.jsx";
import { NavItem } from "../../components/navigation/NavItem.jsx";
import { Card } from "../../components/content/Card.jsx";
import { Thumb } from "../../components/content/Thumb.jsx";
import { Badge } from "../../components/feedback/Badge.jsx";
import { templates } from "./data.js";

/** Template — sub-nav sidebar, hero + category chips, browse grid, AI-effects rail. */
export function Templates() {
  const [sub, setSub] = React.useState(templates.subnav[0].key);
  return (
    <div data-r="subwrap" style={{ display: "flex", minHeight: "100%" }}>
      <SecondarySidebar>
        {templates.subnav.map((s) => (
          <NavItem key={s.key} orientation="horizontal" icon="◦" label={s.label} badge={s.badge} active={sub === s.key} onClick={() => setSub(s.key)} />
        ))}
      </SecondarySidebar>
      <div style={{ flex: 1, minWidth: 0, paddingBottom: "60px" }}>
        <Hero title={templates.title} searchPh={templates.searchPh} size={36}>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
            {templates.chips.map((c, i) => <span key={i} style={chip}>{c}</span>)}
          </div>
        </Hero>
        <section style={{ padding: "8px 40px 0" }}>
          <h2 style={{ font: "700 22px var(--font-sans)", margin: "0 0 14px" }}>{templates.exploreTitle}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "14px" }}>
            {templates.tiles.map((t, i) => <Card key={i} title={t} thumbCaption="template" onClick={() => {}} />)}
          </div>
        </section>
        <section style={{ padding: "26px 40px 0" }}>
          <h2 style={{ font: "700 22px var(--font-sans)", margin: "0 0 14px", display: "flex", alignItems: "center", gap: "10px" }}>
            {templates.aiTitle} <Badge tone="new">Baru</Badge>
          </h2>
          <div style={{ display: "flex", gap: "14px", overflow: "auto", paddingBottom: "14px" }}>
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} style={{ flex: "none", width: "150px", position: "relative" }}>
                <Thumb ratio="poster" caption="video" />
                <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "38px", height: "38px", borderRadius: "var(--radius-pill)", background: "rgba(43,43,40,.55)", color: "#fff", display: "grid", placeItems: "center", font: "600 13px var(--font-mono)" }}>▷</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
