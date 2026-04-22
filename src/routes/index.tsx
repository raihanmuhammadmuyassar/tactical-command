import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { StatusBar } from "@/components/gstrack/StatusBar";
import { BootSequence } from "@/components/gstrack/BootSequence";
import { Hero } from "@/components/gstrack/Hero";
import { Briefing } from "@/components/gstrack/Briefing";
import { SystemOverview } from "@/components/gstrack/SystemOverview";
import { Modules } from "@/components/gstrack/Modules";
import { LiveOps } from "@/components/gstrack/LiveOps";
import { VisualIntel } from "@/components/gstrack/VisualIntel";
import { Outcomes } from "@/components/gstrack/Outcomes";
import { Access } from "@/components/gstrack/Access";
import { Footer } from "@/components/gstrack/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GSTrack™ — Covert Tracking Intelligence System" },
      {
        name: "description",
        content:
          "GSTrack™ is a covert tracking intelligence system for environments where visibility is impossible. Multi-source fusion, predictive analytics, secure mesh.",
      },
      { property: "og:title", content: "GSTrack™ — Covert Tracking Intelligence System" },
      {
        property: "og:description",
        content:
          "Tracking without limits. Operational intelligence for denied terrain.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("gst-booted")) setBooted(true);
  }, []);

  const handleDone = () => {
    sessionStorage.setItem("gst-booted", "1");
    setBooted(true);
  };

  return (
    <main className="relative min-h-screen text-foreground antialiased">
      {!booted && <BootSequence onDone={handleDone} />}
      <StatusBar />
      <Hero />
      <Briefing />
      <SystemOverview />
      <Modules />
      <LiveOps />
      <VisualIntel />
      <Outcomes />
      <Access />
      <Footer />
    </main>
  );
}
