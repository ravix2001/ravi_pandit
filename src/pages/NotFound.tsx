import { Link } from "react-router-dom";
import { Seo } from "../lib/Seo";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-start px-4 py-28 sm:px-6">
      <Seo title="Sheet not found" description="This sheet doesn't exist in the set." path="/404" />
      <div className="draft-label" style={{ color: "var(--accent)" }}>
        Sheet not found
      </div>
      <h1 className="mt-3 text-4xl font-semibold">404 — off the drawing.</h1>
      <p className="mt-3" style={{ color: "var(--ink-soft)" }}>
        There's no sheet at this reference. It may have been renumbered.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-sm px-4 py-2.5 font-mono text-xs uppercase tracking-wider"
        style={{ background: "var(--accent)", color: "var(--bg)" }}
      >
        Back to Sheet 00
      </Link>
    </div>
  );
}
