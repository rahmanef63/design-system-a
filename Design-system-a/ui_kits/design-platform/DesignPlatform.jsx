import React from "react";
import { AppShell } from "../../components/layout/AppShell.jsx";
import { NavigationRail } from "../../components/layout/NavigationRail.jsx";
import { MainRegion } from "../../components/layout/MainRegion.jsx";
import { RightPanel } from "../../components/layout/RightPanel.jsx";
import { Fab } from "../../components/actions/Fab.jsx";
import { Drawer } from "../../components/overlay/Drawer.jsx";
import { EmptyState } from "../../components/feedback/EmptyState.jsx";
import { Home } from "./Home.jsx";
import { Projects } from "./Projects.jsx";
import { Templates } from "./Templates.jsx";
import { BrandKit } from "./BrandKit.jsx";
import { PrintCatalog } from "./PrintCatalog.jsx";
import { AiChat } from "./AiChat.jsx";
import { CreateModal } from "./CreateModal.jsx";
import { AccountMenu, MoreMenu } from "./Menus.jsx";
import { nav, brand, home as homeData } from "./data.js";

/**
 * DesignPlatform — the interactive Rupa wireframe. The single AppShell wires
 * rail routing, the docked AI panel, and every overlay. Screens compose the
 * design-system primitives; nothing here is a one-off.
 */
export function DesignPlatform({ theme = "light", preset = "rupa", accent = null }) {
  const [route, setRoute] = React.useState("home");
  const [overlay, setOverlay] = React.useState(null);
  const [view, setView] = React.useState("list");
  const [aiOpen, setAiOpen] = React.useState(true);
  const [themeState, setTheme] = React.useState(theme);
  React.useEffect(() => setTheme(theme), [theme]);

  const go = (r) => { setRoute(r); setOverlay(null); };
  const open = (o) => setOverlay(o);
  const close = () => setOverlay(null);
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const railItems = nav.main.map((n) => ({
    key: n.key, icon: n.icon, label: n.label, accent: n.accent, crown: n.crown,
    active: (n.route && n.route === route) || (n.overlay && n.overlay === overlay),
    onClick: () => (n.route ? go(n.route) : open(n.overlay)),
  }));
  const railDock = nav.dock.map((n) => ({
    key: n.key, icon: n.icon, label: n.label, avatar: n.avatar,
    active: n.overlay === overlay, onClick: () => open(n.overlay),
  }));

  const screens = {
    home: <Home view={view} onView={setView} onCreate={() => open("create")} />,
    projects: <Projects view={view} onView={setView} />,
    templates: <Templates />,
    brand: <BrandKit />,
    print: <PrintCatalog />,
    ai: <AiChat />,
  };

  const aiFooter = (
    <div>
      <label style={{ display: "flex", alignItems: "center", gap: "10px", border: "var(--border-width) solid var(--border)", borderRadius: "var(--radius-lg)", padding: "12px 14px", background: "var(--background)" }}>
        <input placeholder={homeData.ai.input} style={{ border: 0, background: "transparent", outline: "none", flex: 1, font: "400 13px var(--font-sans)", color: "var(--foreground)" }} />
        <span style={{ width: "30px", height: "30px", flex: "none", borderRadius: "var(--radius-md)", background: "var(--primary)", color: "var(--primary-foreground)", display: "grid", placeItems: "center", font: "700 14px var(--font-mono)" }}>↑</span>
      </label>
      <p style={{ font: "400 10px/1.5 var(--font-mono)", color: "var(--subtle-foreground)", textAlign: "center", margin: "10px 0 0" }}>{homeData.ai.disc}</p>
    </div>
  );

  const panel = route === "home" && aiOpen ? (
    <div data-r="panel" style={{ flex: "none", display: "flex" }}>
      <RightPanel onClose={() => setAiOpen(false)} footer={aiFooter}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "20px 26px" }}>
          <div style={{ width: "54px", height: "54px", borderRadius: "var(--radius-lg)", border: "var(--border-width) solid var(--border)", display: "grid", placeItems: "center", font: "700 15px var(--font-mono)", color: "var(--subtle-foreground)", marginBottom: "18px" }}>AI</div>
          <h3 style={{ font: "700 22px/1.15 var(--font-sans)", margin: "0 0 10px" }}>{homeData.ai.title}</h3>
          <p style={{ font: "400 13px var(--font-sans)", color: "var(--muted-foreground)", margin: 0 }}>{homeData.ai.sub}</p>
        </div>
      </RightPanel>
    </div>
  ) : null;

  const overlays = (
    <>
      <CreateModal open={overlay === "create"} onClose={close} />
      <AccountMenu open={overlay === "account"} onClose={close} onTheme={toggleTheme} />
      <MoreMenu open={overlay === "more"} onClose={close} />
      <Drawer open={overlay === "notif"} onClose={close} title="Notifikasi">
        <EmptyState glyph="◔" body="Notifikasi Anda akan muncul di sini." />
      </Drawer>
    </>
  );

  return (
    <AppShell
      theme={themeState}
      preset={preset}
      accent={accent}
      rail={<NavigationRail brand={brand} items={railItems} dock={railDock} />}
      panel={panel}
      overlays={overlays}
    >
      <MainRegion>
        {screens[route]}
        <Fab icon="?" title="Bantuan" />
      </MainRegion>
    </AppShell>
  );
}
