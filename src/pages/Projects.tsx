import { Link } from "react-router-dom";
import { Seo } from "../lib/Seo";
import { SheetHeading } from "../components/SheetHeading";
import { TitleBlock } from "../components/TitleBlock";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <Seo
        title="Projects"
        description="Four projects from Ravi Pandit, documented as service specs: problem, solution, architecture, and results."
        path="/projects"
      />

      <SheetHeading
        code="SHEET 03"
        title="Projects"
        description="Each one below is documented like a service spec, not a screenshot gallery."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.slug}
            to={`/projects/${p.slug}`}
            className="group flex flex-col sheet-surface p-6 transition-colors hover:border-[var(--accent)]"
          >
            <div className="flex items-center justify-between">
              <span className="draft-label" style={{ color: "var(--accent)" }}>
                {p.code}
              </span>
              <span
                aria-hidden="true"
                className="font-mono text-sm transition-transform group-hover:translate-x-1"
                style={{ color: "var(--ink-faint)" }}
              >
                →
              </span>
            </div>
            <h3 className="mt-4 text-xl font-semibold">{p.name}</h3>
            <p className="mt-2 flex-1 text-sm" style={{ color: "var(--ink-soft)" }}>
              {p.oneLiner}
            </p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.slice(0, 5).map((s) => (
                <li
                  key={s}
                  className="rounded-sm border px-2 py-0.5 font-mono text-[0.65rem]"
                  style={{ borderColor: "var(--surface-line)", color: "var(--ink-soft)" }}
                >
                  {s}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>

      <TitleBlock drawing="Projects — Index" sheet="03/04" className="mt-14" />
    </div>
  );
}
