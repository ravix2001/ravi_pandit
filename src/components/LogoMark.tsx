type LogoMarkProps = {
  size?: number;
  className?: string;
};

/**
 * The "R" brand mark: a monoline letterform inside a schematic registration circle,
 * matching the favicon. Uses currentColor for the linework and var(--accent) for the
 * terminal pin, so it adapts across paper/blueprint mode automatically.
 */
export function LogoMark({ size = 22, className = "" }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
    >
      <circle cx="32" cy="33" r="24" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.45" />
      <g stroke="currentColor" strokeWidth="1.4" opacity="0.45">
        <line x1="32" y1="5" x2="32" y2="10" />
        <line x1="32" y1="56" x2="32" y2="61" />
        <line x1="4" y1="33" x2="9" y2="33" />
        <line x1="55" y1="33" x2="60" y2="33" />
      </g>
      <path
        d="M22,48 L22,16 H33 C39,16 42,19 42,23.5 C42,28 38,30.5 32,30.5 H22"
        fill="none"
        stroke="currentColor"
        strokeWidth="5.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M30,30.5 L43,48" fill="none" stroke="currentColor" strokeWidth="5.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="50.5" cy="49" r="3.6" fill="var(--accent)" />
    </svg>
  );
}
