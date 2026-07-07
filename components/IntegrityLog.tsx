"use client";

import { heroLog } from "@/lib/data";

export function IntegrityLog() {
  const doubled = [...heroLog, ...heroLog];

  return (
    <div
      aria-hidden="true"
      className="relative h-full w-full overflow-hidden rounded-xl border border-border bg-surface/50 backdrop-blur-sm"
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-amber" />
        <span className="h-2 w-2 rounded-full bg-teal" />
        <span className="font-mono text-[0.65rem] tracking-[0.15em] text-text-dim ml-2">
          integrity_log.stream
        </span>
      </div>
      <div className="p-4 h-[220px] overflow-hidden relative">
        <ul className="animate-ticker-up motion-reduce:animate-none">
          {doubled.map((line, i) => (
            <li
              key={i}
              className="font-mono text-[0.72rem] leading-7 text-text-muted whitespace-nowrap"
            >
              <span className="text-teal">$</span> {line}
            </li>
          ))}
        </ul>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-surface to-transparent" />
      </div>
    </div>
  );
}
