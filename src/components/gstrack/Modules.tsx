import { SectionHeader } from "./SectionHeader";

const modules = [
  {
    id: "M-01",
    name: "Device Integration Layer",
    short: "Hardware-agnostic uplink",
    detail:
      "Onboards trackers, vehicles, sensors and wearables through a single normalized telemetry pipeline.",
  },
  {
    id: "M-02",
    name: "Field Operations App",
    short: "Operator companion",
    detail:
      "Tactical mobile interface for ground teams with offline maps, secure handoff and silent alerts.",
  },
  {
    id: "M-03",
    name: "Geospatial Intelligence Engine",
    short: "Spatial reasoning core",
    detail:
      "Fuses positional streams with terrain, infrastructure and behavioral overlays in real time.",
  },
  {
    id: "M-04",
    name: "Autonomous Geofencing System",
    short: "Self-learning perimeters",
    detail:
      "Dynamic zones that adapt to subject behavior — trigger silent escalations on boundary breach.",
  },
  {
    id: "M-05",
    name: "Annotation & Tagging Layer",
    short: "Collaborative intel",
    detail:
      "Analyst-grade tagging, evidence chains and case linking across operations and time.",
  },
  {
    id: "M-06",
    name: "Predictive Analytics Core",
    short: "Anticipate, not react",
    detail:
      "ML models forecast next-likely positions, contact networks and high-probability event windows.",
  },
  {
    id: "M-07",
    name: "Secure & Anonymous Network",
    short: "Zero-attribution channel",
    detail:
      "End-to-end encrypted mesh with hardened relays — operators leave no signature on the wire.",
  },
];

export function Modules() {
  return (
    <section className="relative border-t border-panel-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-[1500px] px-6">
        <SectionHeader
          index="// 04"
          label="Core Modules"
          title="Seven systems. One operational picture."
          kicker="07 modules · interlocked"
        />

        <div className="grid gap-px border border-panel-border bg-panel-border/40 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <article
              key={m.id}
              className={`group relative overflow-hidden bg-card/60 p-7 transition-all duration-300 hover:bg-card ${
                i === 6 ? "lg:col-span-3" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-intel">
                  {m.id}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-signal">
                  ◉ ACTIVE
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold leading-tight text-foreground">
                {m.name}
              </h3>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {m.short}
              </p>
              <div className="mt-6 max-h-0 overflow-hidden text-sm leading-relaxed text-muted-foreground transition-all duration-500 group-hover:max-h-40">
                {m.detail}
              </div>
              <div className="mt-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition-colors group-hover:text-intel">
                <span className="h-px w-6 bg-current transition-all group-hover:w-12" />
                Open module
              </div>
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle, oklch(0.62 0.22 295 / 0.4), transparent 70%)" }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}