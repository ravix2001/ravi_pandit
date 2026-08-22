import { Seo } from "../lib/Seo";
import { SheetHeading } from "../components/SheetHeading";
import { TitleBlock } from "../components/TitleBlock";
import { skillGroups } from "../data/skills";

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <Seo
        title="About"
        description="How a Computer Engineering degree turned into backend Java development, and the stack Ravi Pandit works in."
        path="/about"
      />

      <SheetHeading code="SHEET 01" title="About" />

      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 text-base leading-relaxed sm:text-lg" style={{ color: "var(--ink-soft)" }}>
          <p>
            My Computer Engineering degree covered the full stack of a system — logic gates up
            through operating systems, networks, and databases. Backend development is where
            that whole picture actually gets used at once: an API is a contract, the service
            underneath it is a state machine, and the database is where the physics of storage
            and indexing stop being theoretical.
          </p>
          <p>
            That's the throughline in how I work. I don't just make an endpoint return the right
            JSON — I think about what happens to the request before it gets there (auth, routing)
            and after it leaves (caching, persistence, what happens under concurrent load). Four
            years of engineering coursework taught me to reason about a system end to end; a year
            of production Java work at Restobrain has been about doing that under real traffic,
            with real consequences for getting an index or a cache invalidation wrong.
          </p>
          <p>
            Outside the day job, I've used the same instincts on smaller, self-directed projects —
            an image-captioning pipeline chaining two separate models, a browser extension doing
            live sentiment classification on scraped review text. Different domain, same habit:
            break the system into layers, and be deliberate about what each layer is responsible
            for.
          </p>
        </div>

        <div className="sheet-surface p-5">
          <div className="draft-label" style={{ color: "var(--accent)" }}>
            Bill of Materials
          </div>
          <p className="mt-2 text-sm" style={{ color: "var(--ink-faint)" }}>
            Grouped by the layer of the system each tool serves.
          </p>

          <div className="mt-5 divide-y" style={{ borderColor: "var(--surface-line)" }}>
            {skillGroups.map((group, i) => (
              <div key={group.id} className="py-4 first:pt-0 last:pb-0" style={{ borderColor: "var(--surface-line)" }}>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-mono text-xs uppercase tracking-wider" style={{ color: "var(--ink)" }}>
                    {String(i + 1).padStart(2, "0")} — {group.label}
                  </h3>
                </div>
                <p className="mt-1 text-xs" style={{ color: "var(--ink-faint)" }}>
                  {group.note}
                </p>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-sm border px-2 py-0.5 font-mono text-[0.68rem]"
                      style={{ borderColor: "var(--surface-line)", color: "var(--ink-soft)" }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <TitleBlock drawing="About" sheet="01/04" className="mt-14" />
    </div>
  );
}
