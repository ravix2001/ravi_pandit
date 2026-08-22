type Field = { label: string; value: string };

type TitleBlockProps = {
  drawing: string;
  sheet: string;
  scale?: string;
  rev?: string;
  extra?: Field[];
  className?: string;
};

/**
 * Recurring signature element: a compressed version of the metadata block found in the
 * corner of every real engineering drawing. Appears on every page and every project card
 * so the "drawing set" metaphor holds together across the whole site, not just the hero.
 */
export function TitleBlock({ drawing, sheet, scale = "N.T.S.", rev = "A", extra = [], className = "" }: TitleBlockProps) {
  const fields: Field[] = [
    { label: "Drawing", value: drawing },
    { label: "Sheet", value: sheet },
    { label: "Scale", value: scale },
    { label: "Rev", value: rev },
    { label: "Drawn by", value: "R. PANDIT" },
    ...extra,
  ];

  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-3 border-t ink-rule font-mono text-[0.65rem] ${className}`}
      style={{ borderColor: "var(--surface-line)" }}
    >
      {fields.map((f) => (
        <div key={f.label} className="border-b border-r px-3 py-2" style={{ borderColor: "var(--surface-line)" }}>
          <div className="draft-label !text-[0.6rem]">{f.label}</div>
          <div style={{ color: "var(--ink-soft)" }} className="mt-0.5 truncate">
            {f.value}
          </div>
        </div>
      ))}
    </div>
  );
}
