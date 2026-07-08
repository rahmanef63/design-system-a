import React from "react";
import { Hero, SectionHead } from "./Parts.jsx";
import { QuickActionBar } from "../../components/actions/QuickActionBar.jsx";
import { FilterBar } from "../../components/actions/FilterBar.jsx";
import { DataTable } from "../../components/content/DataTable.jsx";
import { home, files, rowMenu } from "./data.js";

/** Beranda — hero + search, category shortcut strip, recent-files table. */
export function Home({ view, onView, onCreate }) {
  return (
    <div style={{ paddingBottom: "70px" }}>
      <Hero title={home.hero} searchPh={home.searchPh} />
      <section style={{ padding: "20px 40px 6px" }}>
        <QuickActionBar items={home.cats.map((c) => ({ ...c, onClick: onCreate }))} />
      </section>
      <section style={{ padding: "16px 40px 0" }}>
        <SectionHead title={home.recentTitle}>
          <FilterBar align="start" filters={home.filters} view={view} onViewChange={onView} />
        </SectionHead>
        <DataTable rows={files} rowMenu={rowMenu} />
      </section>
    </div>
  );
}
