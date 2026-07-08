import React from "react";
import { PopoverMenu } from "../../components/overlay/PopoverMenu.jsx";
import { Avatar } from "../../components/content/Avatar.jsx";
import { accountMenu, moreMenu } from "./data.js";

/** A bottom-left anchored popover (account / more), dismissed by outside click. */
function BottomLeftPopover({ onClose, bottom, children }) {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 50 }}>
      <div onClick={onClose} style={{ position: "absolute", inset: 0 }} />
      <div style={{ position: "absolute", left: "84px", bottom, zIndex: 51 }}>{children}</div>
    </div>
  );
}

const row = { display: "flex", alignItems: "center", gap: "10px", width: "100%", textAlign: "left", background: "none", border: 0, borderRadius: "var(--radius-sm)", padding: "9px 10px", cursor: "pointer", font: "400 13px var(--font-sans)", color: "var(--foreground)" };
const idBox = { width: "20px", height: "20px", flex: "none", borderRadius: "var(--radius-sm)", border: "var(--border-width) solid var(--border)" };

/** Account popover — user + team header, then grouped actions (Tema toggles theme). */
export function AccountMenu({ open, onClose, onTheme }) {
  if (!open) return null;
  return (
    <BottomLeftPopover onClose={onClose} bottom="16px">
      <PopoverMenu width={302}>
        <div style={{ font: "700 10px var(--font-mono)", color: "var(--subtle-foreground)", padding: "8px 10px 4px", textTransform: "uppercase", letterSpacing: ".06em" }}>{accountMenu.header}</div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "6px 10px 12px", borderBottom: "var(--border-width) solid var(--border)" }}>
          <Avatar initials={accountMenu.user.initials} />
          <span style={{ minWidth: 0 }}>
            <span style={{ display: "block", font: "700 14px var(--font-sans)" }}>{accountMenu.user.name}</span>
            <span style={{ display: "block", font: "400 11px var(--font-mono)", color: "var(--muted-foreground)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{accountMenu.user.email}</span>
          </span>
          <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", color: "var(--subtle-foreground)" }}>›</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px", borderBottom: "var(--border-width) solid var(--border)" }}>
          <Avatar initials={accountMenu.user.initials} variant="team" size={34} />
          <span style={{ minWidth: 0 }}>
            <span style={{ display: "block", font: "700 13px var(--font-sans)" }}>{accountMenu.team.name}</span>
            <span style={{ display: "block", font: "400 11px var(--font-mono)", color: "var(--muted-foreground)" }}>{accountMenu.team.meta}</span>
          </span>
          <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", color: "var(--subtle-foreground)" }}>›</span>
        </div>
        <div style={{ paddingTop: "6px" }}>
          {accountMenu.items.map((it, i) =>
            it.divider ? (
              <div key={i} style={{ borderTop: "var(--border-width) solid var(--border)", margin: "6px 0" }} />
            ) : (
              <button key={i} style={row} onClick={it.action === "theme" ? onTheme : undefined}>
                <span style={idBox} />
                {it.label}
                {it.badge ? <span style={{ font: "700 8px var(--font-mono)", background: "var(--muted)", border: "1px solid var(--border)", color: "var(--muted-foreground)", borderRadius: "var(--radius-sm)", padding: "1px 5px", marginLeft: "4px" }}>{it.badge}</span> : null}
                {it.chevron ? <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", color: "var(--subtle-foreground)" }}>›</span> : null}
              </button>
            )
          )}
        </div>
      </PopoverMenu>
    </BottomLeftPopover>
  );
}

/** More popover — feature entries with label + badge + description. */
export function MoreMenu({ open, onClose }) {
  if (!open) return null;
  return (
    <BottomLeftPopover onClose={onClose} bottom="88px">
      <PopoverMenu width={322}>
        {moreMenu.map((mi, i) => (
          <button key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", width: "100%", textAlign: "left", background: "none", border: 0, borderRadius: "var(--radius-md)", padding: "11px 10px", cursor: "pointer" }}>
            <span style={{ width: "30px", height: "30px", flex: "none", borderRadius: "var(--radius-md)", border: "var(--border-width) solid var(--border)", background: "var(--muted)" }} />
            <span style={{ minWidth: 0 }}>
              <span style={{ display: "block", font: "700 13px var(--font-sans)", color: "var(--foreground)" }}>
                {mi.label}
                {mi.badge ? <span style={{ font: "700 8px var(--font-mono)", background: "var(--primary)", color: "var(--primary-foreground)", borderRadius: "var(--radius-sm)", padding: "1px 5px", marginLeft: "6px" }}>{mi.badge}</span> : null}
              </span>
              <span style={{ display: "block", font: "400 11px/1.4 var(--font-sans)", color: "var(--muted-foreground)" }}>{mi.desc}</span>
            </span>
          </button>
        ))}
      </PopoverMenu>
    </BottomLeftPopover>
  );
}
