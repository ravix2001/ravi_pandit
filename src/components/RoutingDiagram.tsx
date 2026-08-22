import { motion, useReducedMotion } from "framer-motion";

const NODES = [
  { id: "client", x: 20, y: 90, w: 88, h: 44, label: "CLIENT" },
  { id: "gateway", x: 168, y: 90, w: 100, h: 44, label: "API" },
  { id: "service", x: 328, y: 90, w: 128, h: 44, label: "SPRING BOOT" },
  { id: "cache", x: 516, y: 30, w: 96, h: 44, label: "REDIS" },
  { id: "db", x: 516, y: 150, w: 96, h: 44, label: "POSTGRES" },
];

const PATHS = [
  { d: "M108,112 H168", id: "p1" },
  { d: "M268,112 H328", id: "p2" },
  { d: "M456,112 C486,112 486,52 516,52", id: "p3" },
  { d: "M456,112 C486,112 486,172 516,172", id: "p4" },
];

export function RoutingDiagram({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 640 220"
      className={className}
      role="img"
      aria-label="Diagram: a client request routed through an API layer to a Spring Boot service, which reads from Redis and writes to PostgreSQL"
    >
      {PATHS.map((p) => (
        <path key={p.id} d={p.d} fill="none" stroke="var(--surface-line)" strokeWidth="1.5" />
      ))}

      {!reduce &&
        PATHS.map((p, i) => (
          <motion.circle
            key={`pulse-${p.id}`}
            r="2.6"
            fill="var(--accent)"
            initial={{ offsetDistance: "0%", opacity: 0 }}
            animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            style={{ offsetPath: `path('${p.d}')` }}
          />
        ))}

      {NODES.map((n) => (
        <g key={n.id}>
          <rect
            x={n.x}
            y={n.y}
            width={n.w}
            height={n.h}
            rx="2"
            fill="var(--surface)"
            stroke="var(--surface-line)"
            strokeWidth="1.2"
          />
          <text
            x={n.x + n.w / 2}
            y={n.y + n.h / 2 + 4}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="10"
            letterSpacing="0.05em"
            fill="var(--ink-soft)"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
