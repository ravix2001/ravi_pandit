import { Seo } from "../lib/Seo";
import { SheetHeading } from "../components/SheetHeading";
import { TitleBlock } from "../components/TitleBlock";
import { profile } from "../data/profile";

const CHANNELS = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: `github.com/${profile.githubHandle}`, href: profile.github },
  { label: "LinkedIn", value: `linkedin.com/in/${profile.linkedinHandle}`, href: profile.linkedin },
];

export default function Contact() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <Seo
        title="Contact"
        description="Get in touch with Ravi Pandit — email, GitHub, or LinkedIn."
        path="/contact"
      />

      <SheetHeading code="SHEET 04" title="Contact" description="Open to backend opportunities and technical collaborations." />

      <div className="grid gap-4 sm:grid-cols-3">
        {CHANNELS.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noreferrer" : undefined}
            className="sheet-surface p-5 transition-colors hover:border-[var(--accent)]"
          >
            <div className="draft-label" style={{ color: "var(--accent)" }}>
              {c.label}
            </div>
            <div className="mt-2 break-words font-mono text-sm" style={{ color: "var(--ink)" }}>
              {c.value}
            </div>
          </a>
        ))}
      </div>

      <p className="mt-8 max-w-xl text-sm" style={{ color: "var(--ink-soft)" }}>
        Currently working remotely as a Junior Java Developer for a team based in Darwin,
        Australia. Open to hearing about backend-focused roles and collaborations — email is the
        most reliable way to reach me.
      </p>

      <TitleBlock drawing="Contact" sheet="04/04" className="mt-14" />
    </div>
  );
}
