import logo from "@/assets/gstrack-logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-panel-border/60">
      <div className="absolute -top-px left-0 h-4 w-4 border-l-2 border-t-2 border-intel/60" />
      <div className="absolute -top-px right-0 h-4 w-4 border-r-2 border-t-2 border-panel-border" />
      <div className="mx-auto max-w-[1500px] px-6 py-8 font-mono text-muted-foreground">
        <div className="mb-8 grid grid-cols-1 items-start gap-8 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="GSTrack logo" className="h-10 w-auto" />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-muted-foreground/70">
                System Protocol
              </span>
              <span className="text-xs tracking-tight text-foreground">
                GSTrack<span className="text-intel">™</span> System Interface
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-intel shadow-[0_0_8px_hsl(var(--intel)/0.6)]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-intel/80">
                Active Link
              </span>
            </div>
            <p className="border-x border-panel-border px-6 text-center text-[10px] uppercase tracking-[0.35em]">
              Secure · Restricted · Intelligence Use Only
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <div className="mb-1 text-[10px] uppercase tracking-tighter text-muted-foreground/60">
              Uplink established // 128-bit
            </div>
            <div className="flex items-baseline gap-2 border border-panel-border bg-panel/40 px-3 py-1.5">
              <span className="text-[10px] font-bold text-intel">NODE</span>
              <span className="text-xs text-foreground">GST-07</span>
              <span className="text-[10px] text-muted-foreground/60">|</span>
              <span className="text-[10px]">v4.0712</span>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-between gap-4 border-t border-panel-border/50 pt-6 text-[11px] md:flex-row">
          <div className="flex flex-col items-center gap-3 md:flex-row md:gap-6">
            <div className="group flex items-center gap-2">
              <span className="font-bold text-intel/50 transition-colors group-hover:text-intel">
                LOC:
              </span>
              <span>The Octagon, Singapore 069534</span>
            </div>
            <div className="hidden h-3 w-px bg-panel-border md:block" />
            <div className="group flex items-center gap-2">
              <span className="font-bold text-intel/50 transition-colors group-hover:text-intel">
                COMMS:
              </span>
              <a
                href="mailto:leonardronny@gmail.com"
                className="transition-colors hover:text-intel"
              >
                leonardronny@gmail.com
              </a>
              <span className="border border-panel-border bg-panel/40 px-1 text-[9px] uppercase text-muted-foreground/70">
                (Ronny)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 opacity-40 transition-opacity hover:opacity-100">
            <span className="text-[9px] uppercase tracking-widest">
              Lat: 1.2789° N · Lon: 103.8475° E
            </span>
            <div className="flex gap-1">
              <div className="h-1 w-1 bg-panel-border" />
              <div className="h-1 w-1 bg-panel-border" />
              <div className="h-1 w-3 bg-intel/50" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-intel/30 to-transparent" />
    </footer>
  );
}