import { useState } from "react";
import { CrosshairMarks } from "./CrosshairMarks";

type PhotoFigureProps = {
  src: string;
  alt: string;
  figureLabel?: string;
  caption?: string;
  className?: string;
};

export function PhotoFigure({ src, alt, figureLabel = "Fig. 01", caption = "R. Pandit", className = "" }: PhotoFigureProps) {
  const [errored, setErrored] = useState(false);

  return (
    <div className={`w-full max-w-[260px] ${className}`}>
      <div className="relative aspect-[4/5] sheet-surface overflow-hidden">
        <CrosshairMarks />
        {!errored ? (
          <img
            src={src}
            alt={alt}
            onError={() => setErrored(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-6 text-center">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" style={{ color: "var(--ink-faint)" }} aria-hidden="true">
              <circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.3" />
              <path d="M4.5 20c1.6-4 4.2-6 7.5-6s5.9 2 7.5 6" stroke="currentColor" strokeWidth="1.3" />
            </svg>
            <p className="draft-label !text-[0.62rem]" style={{ color: "var(--ink-faint)" }}>
              Photo pending — place file at<br />
              <span style={{ color: "var(--accent)" }}>public{src}</span>
            </p>
          </div>
        )}
      </div>
      <div
        className="flex items-center justify-between border-t border-x border-b px-3 py-2 font-mono text-[0.65rem]"
        style={{ borderColor: "var(--surface-line)", color: "var(--ink-faint)" }}
      >
        <span>{figureLabel}</span>
        <span style={{ color: "var(--ink-soft)" }}>{caption}</span>
      </div>
    </div>
  );
}
