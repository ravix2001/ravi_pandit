import { profile } from "../data/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="mt-24 border-t"
      style={{ borderColor: "var(--surface-line)" }}
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="draft-label">End of set</div>
            <p
              className="mt-2 max-w-sm text-sm"
              style={{ color: "var(--ink-soft)" }}
            >
              {profile.name} — {profile.role}. {profile.location}.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 font-mono text-xs tracking-wide sm:items-end">
            <a
              href={`mailto:${profile.email}`}
              style={{ color: "var(--ink-soft)" }}
            >
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--ink-soft)" }}
            >
              github.com/{profile.githubHandle}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--ink-soft)" }}
            >
              linkedin.com/in/{profile.linkedinHandle}
            </a>
            <a
              href={profile.resumeUrl}
              download
              style={{ color: "var(--accent)" }}
            >
              Download résumé ↓
            </a>
          </div>
        </div>
        <div
          className="mt-8 flex items-center justify-between border-t pt-4 font-mono text-[0.65rem]"
          style={{
            borderColor: "var(--surface-line)",
            color: "var(--ink-faint)",
          }}
        >
          <span>© {year} Ravi Pandit</span>
        </div>
      </div>
    </footer>
  );
}
