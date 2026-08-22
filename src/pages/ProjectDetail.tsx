import { Link, Navigate, useParams } from "react-router-dom";
import { Seo } from "../lib/Seo";
import { TitleBlock } from "../components/TitleBlock";
import { projects } from "../data/projects";

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="draft-label" style={{ color: "var(--accent)" }}>
        {label}
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const index = projects.findIndex((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  const next = projects[(index + 1) % projects.length];

  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <Seo title={project.name} description={project.oneLiner} path={`/projects/${project.slug}`} />

      <Link to="/projects" className="draft-label inline-block" style={{ color: "var(--ink-faint)" }}>
        ← Back to Sheet 03
      </Link>

      <div className="mt-4 flex items-center gap-3">
        <span className="draft-label" style={{ color: "var(--accent)" }}>
          {project.code}
        </span>
        <div className="dim-line flex-1" />
      </div>

      <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">{project.name}</h1>
      <p className="mt-3 max-w-2xl text-lg" style={{ color: "var(--ink-soft)" }}>
        {project.oneLiner}
      </p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <li
            key={s}
            className="rounded-sm border px-2 py-0.5 font-mono text-[0.68rem]"
            style={{ borderColor: "var(--surface-line)", color: "var(--ink-soft)" }}
          >
            {s}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-sm border px-4 py-2 font-mono text-xs uppercase tracking-wider"
          style={{ borderColor: "var(--surface-line)", color: "var(--ink-soft)" }}
        >
          View on GitHub ↗
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm px-4 py-2 font-mono text-xs uppercase tracking-wider"
            style={{ background: "var(--accent)", color: "var(--bg)" }}
          >
            Live demo ↗
          </a>
        )}
      </div>

      <div className="mt-12 space-y-10 sheet-surface p-6 sm:p-8">
        <Block label="Problem">
          <p style={{ color: "var(--ink-soft)" }}>{project.problem}</p>
        </Block>
        <Block label="Solution">
          <p style={{ color: "var(--ink-soft)" }}>{project.solution}</p>
        </Block>
        <Block label="Architecture">
          <ul className="space-y-2">
            {project.architecture.map((a) => (
              <li key={a} className="flex gap-2 text-sm" style={{ color: "var(--ink-soft)" }}>
                <span style={{ color: "var(--accent)" }}>—</span>
                {a}
              </li>
            ))}
          </ul>
        </Block>
        <Block label="Challenges">
          <ul className="space-y-2">
            {project.challenges.map((c) => (
              <li key={c} className="flex gap-2 text-sm" style={{ color: "var(--ink-soft)" }}>
                <span style={{ color: "var(--accent)" }}>—</span>
                {c}
              </li>
            ))}
          </ul>
        </Block>
        <Block label="Results">
          <ul className="space-y-2">
            {project.results.map((r) => (
              <li key={r} className="flex gap-2 text-sm" style={{ color: "var(--ink-soft)" }}>
                <span style={{ color: "var(--accent)" }}>—</span>
                {r}
              </li>
            ))}
          </ul>
        </Block>
      </div>

      <TitleBlock
        drawing={project.name}
        sheet={project.code}
        className="mt-10"
        extra={[{ label: "Next", value: next.name }]}
      />

      <Link
        to={`/projects/${next.slug}`}
        className="mt-6 flex items-center justify-between border-t pt-4 font-mono text-xs uppercase tracking-wider"
        style={{ borderColor: "var(--surface-line)", color: "var(--ink-soft)" }}
      >
        <span>Next sheet</span>
        <span>
          {next.name} →
        </span>
      </Link>
    </div>
  );
}
