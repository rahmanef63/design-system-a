import React from "react";
import { Hero } from "./Parts.jsx";
import { SecondarySidebar } from "../../components/layout/SecondarySidebar.jsx";
import { NavItem } from "../../components/navigation/NavItem.jsx";
import { Card } from "../../components/content/Card.jsx";
import { Thumb } from "../../components/content/Thumb.jsx";
import { print } from "./data.js";

/** Cetak — print catalog: sub-nav, welcome hero, how-it-works steps, products. */
export function PrintCatalog() {
  const [sub, setSub] = React.useState(print.subnav[0].key);
  return (
    <div data-r="subwrap" style={{ display: "flex", minHeight: "100%" }}>
      <SecondarySidebar>
        {print.subnav.map((s) => (
          <NavItem key={s.key} orientation="horizontal" icon="◦" label={s.label} active={sub === s.key} onClick={() => setSub(s.key)} />
        ))}
      </SecondarySidebar>
      <div style={{ flex: 1, minWidth: 0, paddingBottom: "60px" }}>
        <Hero title={print.title} searchPh={print.searchPh} size={34} />
        <section style={{ padding: "12px 40px 0" }}>
          <h2 style={{ font: "700 22px var(--font-sans)", margin: "0 0 14px" }}>{print.stepsTitle}</h2>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {print.steps.map((st, i) => (
              <div key={i} style={{ flex: 1, minWidth: "220px", border: "var(--border-width) solid var(--border)", borderRadius: "var(--radius-lg)", padding: "18px", background: "var(--card)", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ font: "700 11px var(--font-mono)", color: "var(--subtle-foreground)", letterSpacing: ".08em" }}>{st.kicker}</span>
                <span style={{ font: "400 17px var(--font-sans)" }}>{st.label}</span>
                <Thumb ratio="16:9" caption="ilustrasi" />
              </div>
            ))}
          </div>
        </section>
        <section style={{ padding: "26px 40px 0" }}>
          <h2 style={{ font: "700 22px var(--font-sans)", margin: "0 0 14px" }}>{print.tryTitle}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px" }}>
            {print.products.map((p, i) => <Card key={i} title={p} thumbCaption="produk" onClick={() => {}} />)}
          </div>
        </section>
      </div>
    </div>
  );
}
