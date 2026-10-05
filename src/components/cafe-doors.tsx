"use client";

import { useEffect, useRef } from "react";

function Door({ side }: { side: "left" | "right" }) {
  return (
    <div className={side === "left" ? "door door-left relative h-full min-w-0 flex-1" : "door door-right relative h-full min-w-0 flex-1"}>
      <div className="door-panel absolute inset-0 flex flex-col gap-2 p-2">
        <div className="grid flex-1 grid-cols-2 grid-rows-3 gap-1.5">
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className="glass-pane rounded-[2px]" />
          ))}
        </div>
        <div className="h-3 rounded-sm bg-wood-deep/80" />
        <div
          className={
            side === "left"
              ? "absolute top-[46%] right-2 h-2 w-8 rounded-full bg-brass shadow-sm"
              : "absolute top-[46%] left-2 h-2 w-8 rounded-full bg-brass shadow-sm"
          }
        />
      </div>
    </div>
  );
}

export function CafeDoors() {
  const rigRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rig = rigRef.current;
    if (!rig) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const apply = () => {
      if (media.matches) {
        rig.style.setProperty("--open", "0");
        return;
      }

      const range = Math.min(240, Math.max(160, window.innerHeight * 0.28));
      const progress = Math.min(1, Math.max(0, window.scrollY / range));
      const eased = 1 - (1 - progress) ** 2.2;
      rig.style.setProperty("--open", eased.toFixed(4));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    media.addEventListener("change", apply);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      media.removeEventListener("change", apply);
    };
  }, []);

  return (
    <div ref={rigRef} className="door-rig mx-auto w-[210px] sm:w-[240px]" aria-hidden="true">
      <div className="rounded-sm bg-wood-deep p-2 shadow-card">
        <div className="doorway relative h-[280px] sm:h-[320px]">
          <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-[#f8d7a4] via-[#e7a15a] to-[#b5653a]">
            <div className="mx-auto mt-5 h-4 w-4 rounded-full bg-[#fff1c9] shadow-[0_0_24px_12px_rgba(255,214,120,0.85)]" />
            <div className="mx-auto h-8 w-px bg-[#5c3a26]/50" />
            <p className="mt-6 text-center font-script text-4xl text-awning-dark">open</p>
            <div className="absolute inset-x-0 bottom-0 h-16 bg-[#6a412b]">
              <div className="mx-auto mt-3 h-8 w-24 rounded-t-md bg-[#8d5e40]" />
            </div>
          </div>
          <div className="absolute inset-0 flex gap-1">
            <Door side="left" />
            <Door side="right" />
          </div>
        </div>
      </div>
      <p className="door-hint mt-3 text-center font-pixel text-[8px] tracking-wide text-ink">
        scroll to open
      </p>
    </div>
  );
}
