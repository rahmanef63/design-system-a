import React from "react";
import { ProTrialBtn } from "./Parts.jsx";
import { SecondarySidebar } from "../../components/layout/SecondarySidebar.jsx";
import { NavItem } from "../../components/navigation/NavItem.jsx";
import { Breadcrumb } from "../../components/navigation/Breadcrumb.jsx";
import { Button } from "../../components/actions/Button.jsx";
import { Thumb } from "../../components/content/Thumb.jsx";
import { brandKit, brand } from "./data.js";

/** Merek — brand-kit sub-nav, promo banner, asset-type grid. */
export function BrandKit() {
  const [sub, setSub] = React.useState(brandKit.subnav[0].key);
  const header = (
    <div>
      <Breadcrumb path={[brandKit.crumb]} onBack={() => {}} />
      <button style={{ display: "flex", alignItems: "center", gap: "8px", width: "100%", border: "var(--border-width) solid var(--border)", borderRadius: "var(--radius-md)", padding: "9px 10px", background: "var(--card)", cursor: "pointer", font: "700 13px var(--font-sans)", color: "var(--foreground)", marginTop: "8px" }}>
        <span style={{ width: "22px", height: "22px", borderRadius: "var(--radius-sm)", background: "var(--primary)", color: "var(--primary-foreground)", display: "grid", placeItems: "center", font: "700 9px var(--font-mono)" }}>{brand.initial}</span>
        {brandKit.kit}
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", marginLeft: "auto" }}>▾</span>
      </button>
    </div>
  );
  return (
    <div data-r="subwrap" style={{ display: "flex", minHeight: "100%" }}>
      <SecondarySidebar width={230} header={header}>
        {brandKit.subnav.map((s) => (
          <NavItem key={s.key} orientation="horizontal" icon="◦" label={s.label} badge={s.badge} active={sub === s.key} onClick={() => setSub(s.key)} />
        ))}
      </SecondarySidebar>
      <div style={{ flex: 1, minWidth: 0, paddingBottom: "60px" }}>
        <section style={{ position: "relative", padding: "44px 40px 12px", textAlign: "center", background: "linear-gradient(180deg, var(--primary-soft), transparent 92%)" }}>
          <ProTrialBtn />
          <h1 style={{ font: "700 34px var(--font-sans)", margin: "6px 0 4px" }}>✦ {brandKit.title}</h1>
        </section>
        <section style={{ padding: "16px 40px 0" }}>
          <div style={{ display: "flex", gap: "22px", alignItems: "center", justifyContent: "space-between", border: "var(--border-width) solid var(--border)", borderRadius: "var(--radius-lg)", padding: "24px", background: "linear-gradient(135deg, var(--primary-soft), transparent 80%)" }}>
            <div style={{ maxWidth: "58%" }}>
              <h3 style={{ font: "700 24px/1.15 var(--font-sans)", margin: "0 0 10px" }}>{brandKit.promoTitle}</h3>
              <p style={{ font: "400 14px/1.5 var(--font-sans)", color: "var(--muted-foreground)", margin: "0 0 16px" }}>{brandKit.promoBody}</p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <Button variant="primary" icon="★">{brandKit.cta1}</Button>
                <Button variant="outline" icon="+">{brandKit.cta2}</Button>
              </div>
            </div>
            <div style={{ width: "230px", flex: "none" }}><Thumb ratio="16:10" caption="brand art" /></div>
          </div>
        </section>
        <section style={{ padding: "24px 40px 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px" }}>
            {brandKit.assets.map((a, i) => (
              <div key={i} style={{ border: "var(--border-width) solid var(--border)", borderRadius: "var(--radius-lg)", overflow: "hidden", background: "var(--card)", cursor: "pointer" }}>
                <Thumb ratio="16:10" caption="aset" radius="0" />
                <div style={{ padding: "10px 14px", font: "700 14px var(--font-sans)" }}>{a}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
