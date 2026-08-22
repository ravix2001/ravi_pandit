import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Seo } from "../lib/Seo";
import { profile } from "../data/profile";
import { TitleBlock } from "../components/TitleBlock";
import { CrosshairMarks } from "../components/CrosshairMarks";
import { RoutingDiagram } from "../components/RoutingDiagram";
import { SheetHeading } from "../components/SheetHeading";
import { PhotoFigure } from "../components/PhotoFigure";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <div>
      <Seo
        title="Backend Java Developer"
        description={profile.pitch}
        path="/"
      />

      <section className="relative mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-16">
        <div className="relative sheet-surface px-5 py-10 sm:px-10 sm:py-16">
          <CrosshairMarks />
          <div className="draft-label">Sheet 00 — Cover</div>

          <div className="mt-4 flex flex-col-reverse gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-6xl"
              >
                {profile.name}, backend engineer.
                <br />
                <span className="gradient-text">Java &amp; Spring Boot, mostly.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="mt-6 max-w-xl text-base sm:text-lg"
                style={{ color: "var(--ink-soft)" }}
              >
                {profile.pitch}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18, ease: "easeOut" }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link
                  to="/projects"
                  className="rounded-sm px-4 py-2.5 font-mono text-xs uppercase tracking-wider"
                  style={{ background: "var(--accent)", color: "var(--bg)" }}
                >
                  View the projects
                </Link>
                <Link
                  to="/contact"
                  className="rounded-sm border px-4 py-2.5 font-mono text-xs uppercase tracking-wider"
                  style={{ borderColor: "var(--surface-line)", color: "var(--ink-soft)" }}
                >
                  Get in touch
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="mx-auto lg:mx-0"
            >
              <PhotoFigure
                src={profile.photoUrl}
                alt={`Portrait of ${profile.name}`}
                figureLabel="Fig. 01 — Subject"
                caption="R. Pandit"
                className="w-[200px] sm:w-[220px]"
              />
            </motion.div>
          </div>

          <div className="mt-12 overflow-x-auto">
            <RoutingDiagram className="h-auto w-full min-w-[520px] max-w-2xl" />
          </div>
        </div>

        <TitleBlock
          drawing="Ravi Pandit — Portfolio"
          sheet="00/04"
          extra={[{ label: "Based in", value: "Biratnagar, NP" }]}
        />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SheetHeading
          code="SVC-INDEX"
          title="Selected services"
          description="Four shipped projects, each documented like a service spec: problem, solution, architecture, results."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.slice(0, 4).map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="group sheet-surface p-5 transition-colors hover:border-[var(--accent)]"
            >
              <div className="flex items-center justify-between">
                <span className="draft-label" style={{ color: "var(--accent)" }}>
                  {p.code}
                </span>
                <span aria-hidden="true" className="font-mono text-sm transition-transform group-hover:translate-x-1" style={{ color: "var(--ink-faint)" }}>
                  →
                </span>
              </div>
              <h3 className="mt-3 text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm" style={{ color: "var(--ink-soft)" }}>
                {p.oneLiner}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
