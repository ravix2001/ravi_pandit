import { Seo } from "../lib/Seo";
import { SheetHeading } from "../components/SheetHeading";
import { TitleBlock } from "../components/TitleBlock";
import { experience } from "../data/experience";
import { education } from "../data/education";

export default function Experience() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <Seo
        title="Experience"
        description="Ravi Pandit's work history at Restobrain and Computer Engineering education timeline."
        path="/experience"
      />

      <SheetHeading code="SHEET 02" title="Experience" description="Work history, measured start to end." />

      <ol className="relative border-l pl-6" style={{ borderColor: "var(--surface-line)" }}>
        {experience.map((item) => (
          <li key={item.id} className="mb-10 last:mb-0">
            <span
              className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full"
              style={{ background: "var(--accent)" }}
              aria-hidden="true"
            />
            <div className="draft-label">
              {item.start} — {item.end}
            </div>
            <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
            <div className="font-mono text-sm" style={{ color: "var(--ink-soft)" }}>
              {item.org} · {item.location}
            </div>
            <p className="mt-3 max-w-2xl" style={{ color: "var(--ink-soft)" }}>
              {item.summary}
            </p>
            <ul className="mt-3 max-w-2xl space-y-1.5">
              {item.details.map((d) => (
                <li key={d} className="flex gap-2 text-sm" style={{ color: "var(--ink-soft)" }}>
                  <span style={{ color: "var(--accent)" }}>—</span>
                  {d}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-16">
        <SheetHeading code="SHEET 02B" title="Education" />
        <ol className="relative border-l pl-6" style={{ borderColor: "var(--surface-line)" }}>
          {education.map((item) => (
            <li key={item.id} className="mb-8 last:mb-0">
              <span
                className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full"
                style={{ background: "var(--line)" }}
                aria-hidden="true"
              />
              <div className="draft-label">
                {item.start === item.end ? item.start : `${item.start} — ${item.end}`}
              </div>
              <h3 className="mt-1 text-lg font-semibold">{item.credential}</h3>
              <div className="text-sm" style={{ color: "var(--ink-soft)" }}>
                {item.institution}
              </div>
              {/* <div className="mt-1 font-mono text-xs" style={{ color: "var(--ink-faint)" }}>
                {item.detail}
              </div> */}
            </li>
          ))}
        </ol>
      </div>

      <TitleBlock drawing="Experience" sheet="02/04" className="mt-14" />
    </div>
  );
}
