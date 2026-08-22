import { useTheme } from "../lib/theme";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isBlueprint = theme === "blueprint";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isBlueprint}
      className="group flex items-center gap-2 rounded-sm border px-2.5 py-1.5 font-mono text-[0.68rem] uppercase tracking-wider transition-colors"
      style={{ borderColor: "var(--surface-line)", color: "var(--ink-soft)" }}
      title="Toggle paper / blueprint mode"
    >
      <span
        className="relative inline-flex h-3.5 w-7 items-center rounded-full transition-colors"
        style={{ background: "var(--surface-line)" }}
      >
        <span
          className="inline-block h-2.5 w-2.5 translate-x-0.5 rounded-full transition-transform"
          style={{
            background: "var(--accent)",
            transform: isBlueprint ? "translateX(14px)" : "translateX(2px)",
          }}
        />
      </span>
      {isBlueprint ? "Dark" : "Light"}
    </button>
  );
}
