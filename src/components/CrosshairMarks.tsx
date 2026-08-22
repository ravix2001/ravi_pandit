export function CrosshairMarks() {
  return (
    <>
      <Mark className="top-3 left-3" />
      <Mark className="top-3 right-3" />
      <Mark className="bottom-3 left-3" />
      <Mark className="bottom-3 right-3" />
    </>
  );
}

function Mark({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`crosshair pointer-events-none absolute h-4 w-4 ${className}`}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path d="M8 0V6" stroke="currentColor" strokeWidth="1" />
      <path d="M8 10V16" stroke="currentColor" strokeWidth="1" />
      <path d="M0 8H6" stroke="currentColor" strokeWidth="1" />
      <path d="M10 8H16" stroke="currentColor" strokeWidth="1" />
      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
