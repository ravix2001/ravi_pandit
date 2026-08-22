import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { LogoMark } from "./LogoMark";
import { profile } from "../data/profile";

const LINKS = [
  { to: "/", label: "Home", code: "00" },
  { to: "/about", label: "About", code: "01" },
  { to: "/experience", label: "Experience", code: "02" },
  { to: "/projects", label: "Projects", code: "03" },
  { to: "/contact", label: "Contact", code: "04" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur"
      style={{ borderColor: "var(--surface-line)", background: "color-mix(in srgb, var(--bg) 88%, transparent)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <NavLink to="/" className="flex items-center gap-2 font-mono text-sm" aria-label="Ravi Pandit — home" style={{ color: "var(--ink)" }}>
          <LogoMark size={26} />
          <span>R. PANDIT</span>
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `group relative flex items-center gap-1.5 rounded-sm px-3 py-1.5 font-mono text-xs uppercase tracking-wide transition-colors ${
                  isActive ? "" : "hover:opacity-80"
                }`
              }
              style={({ isActive }) => ({
                color: isActive ? "var(--accent)" : "var(--ink-soft)",
              })}
            >
              {({ isActive }) => (
                <>
                  <span className="text-[0.65rem]" style={{ color: "var(--ink-faint)" }}>
                    {link.code}
                  </span>
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-[1px] left-2 right-2 h-[2px]"
                      style={{ background: "var(--accent)" }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            download
            className="hidden rounded-sm border px-2.5 py-1.5 font-mono text-[0.68rem] uppercase tracking-wider sm:inline-block"
            style={{ borderColor: "var(--surface-line)", color: "var(--ink-soft)" }}
          >
            Résumé ↓
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-sm border md:hidden"
            style={{ borderColor: "var(--surface-line)" }}
            aria-expanded={open}
            aria-label="Toggle navigation"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="font-mono text-xs">{open ? "×" : "≡"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t px-4 py-3 md:hidden"
          style={{ borderColor: "var(--surface-line)" }}
          aria-label="Primary mobile"
        >
          <ul className="flex flex-col">
            {LINKS.map((link) => (
              <li key={link.to} className="border-b" style={{ borderColor: "var(--surface-line)" }}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-3 font-mono text-sm uppercase tracking-wide"
                  style={({ isActive }) => ({ color: isActive ? "var(--accent)" : "var(--ink-soft)" })}
                >
                  <span>{link.label}</span>
                  <span className="text-[0.65rem]" style={{ color: "var(--ink-faint)" }}>
                    {link.code}
                  </span>
                </NavLink>
              </li>
            ))}
            <li className="pt-3">
              <a href={profile.resumeUrl} download className="font-mono text-xs uppercase tracking-wider" style={{ color: "var(--accent)" }}>
                Download résumé ↓
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
