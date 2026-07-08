import React from "react";
import { ModalDialog } from "../../components/overlay/ModalDialog.jsx";
import { NavItem } from "../../components/navigation/NavItem.jsx";
import { CommandSearch } from "../../components/actions/CommandSearch.jsx";
import { QuickActionBar } from "../../components/actions/QuickActionBar.jsx";
import { Card } from "../../components/content/Card.jsx";
import { createModal } from "./data.js";

/** The "Buat desain" create modal — category nav + search + quick actions + template grids. */
export function CreateModal({ open, onClose }) {
  const [cat, setCat] = React.useState(0);
  const nav = createModal.catNav.map((label, i) => (
    <NavItem key={i} orientation="horizontal" icon="◦" label={label} badge={label === "Kode" ? "Baru" : null} active={cat === i} onClick={() => setCat(i)} />
  ));
  return (
    <ModalDialog open={open} onClose={onClose} title={createModal.title} nav={nav}>
      <div style={{ marginBottom: "24px" }}>
        <CommandSearch placeholder={createModal.searchPh} />
      </div>
      <h4 style={{ font: "700 15px var(--font-sans)", margin: "0 0 12px" }}>{createModal.quickTitle}</h4>
      <div style={{ marginBottom: "20px" }}>
        <QuickActionBar items={createModal.quick.map((q, i) => ({ key: "q" + i, label: q.label, badge: q.badge, icon: "○" }))} />
      </div>
      <ModalGrid title={createModal.popTitle} items={createModal.popular} caption="template" />
      <ModalGrid title={createModal.tryTitle} items={createModal.tryNew} caption="baru" />
    </ModalDialog>
  );
}

function ModalGrid({ title, items, caption }) {
  return (
    <>
      <h4 style={{ font: "700 15px var(--font-sans)", margin: "6px 0 12px" }}>{title}</h4>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "14px", marginBottom: "22px" }}>
        {items.map((p, i) => <Card key={i} title={p} thumbCaption={caption} onClick={() => {}} />)}
      </div>
    </>
  );
}
