export function Footer() {
  return (
    <footer className="border-t border-panel-border/60 py-10">
      <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-4 px-6 font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-signal dot-blink" />
          GSTrack<span className="text-intel">™</span> System Interface
        </div>
        <div className="text-center">
          Secure · Restricted · Intelligence Use Only
        </div>
        <div>NODE GST-07 · v4.0712</div>
      </div>
    </footer>
  );
}