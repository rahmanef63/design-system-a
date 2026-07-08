import React from "react";
import { Hero, SectionHead } from "./Parts.jsx";
import { FilterBar } from "../../components/actions/FilterBar.jsx";
import { ViewToggle } from "../../components/actions/ViewToggle.jsx";
import { Carousel } from "../../components/content/Carousel.jsx";
import { Thumb } from "../../components/content/Thumb.jsx";
import { DataTable } from "../../components/content/DataTable.jsx";
import { projects, files, rowMenu, recent } from "./data.js";

/** Proyek — hero + filter chips, recent carousel, full files table. */
export function Projects({ view, onView }) {
  return (
    <div style={{ paddingBottom: "70px" }}>
      <Hero title={projects.title} searchPh={projects.searchPh} size={38}>
        <div style={{ marginTop: "4px" }}>
          <FilterBar align="center" filters={projects.filters} />
        </div>
      </Hero>
      <section style={{ padding: "12px 40px 0" }}>
        <SectionHead title={projects.recentTitle}>
          <ViewToggle value={view} onChange={onView} />
        </SectionHead>
        <Carousel>
          {recent.map((r) => (
            <div key={r.key} style={{ width: "184px" }}>
              <Thumb ratio="4:3" caption="preview" />
              <div style={{ font: "400 13px var(--font-sans)", marginTop: "8px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.title}</div>
              <div style={{ font: "600 10px var(--font-mono)", color: "var(--subtle-foreground)" }}>{r.edited}</div>
            </div>
          ))}
        </Carousel>
      </section>
      <section style={{ padding: "6px 40px 0" }}>
        <DataTable rows={files} rowMenu={rowMenu} />
      </section>
    </div>
  );
}
