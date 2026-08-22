type SheetHeadingProps = {
  code: string;
  title: string;
  description?: string;
};

export function SheetHeading({ code, title, description }: SheetHeadingProps) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3">
        <span className="draft-label" style={{ color: "var(--accent)" }}>
          {code}
        </span>
        <div className="dim-line flex-1" />
      </div>
      <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">{title}</h2>
      {description && (
        <p className="mt-3 max-w-2xl" style={{ color: "var(--ink-soft)" }}>
          {description}
        </p>
      )}
    </div>
  );
}
