"use client";

import Image from "next/image";
import Script from "next/script";
import { useEffect, useRef } from "react";

const doorScrollScript = `
(function () {
  var rig = document.querySelector(".door-rig");
  if (!rig || rig.dataset.bound === "1") return;
  rig.dataset.bound = "1";
  var media = window.matchMedia("(prefers-reduced-motion: reduce)");
  var frame = 0;
  function apply() {
    if (media.matches) {
      rig.style.setProperty("--open", "0");
      return;
    }
    var hero = document.getElementById("top");
    var start = hero ? hero.offsetTop : 0;
    var distance = 520;
    var progress = Math.min(1, Math.max(0, (window.scrollY - start) / distance));
    var eased = progress;
    rig.style.setProperty("--open", eased.toFixed(4));
  }
  function onScroll() {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(apply);
  }
  apply();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  media.addEventListener("change", apply);
})();
`;

function Door({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={
        side === "left"
          ? "door door-left relative h-full min-w-0 flex-1"
          : "door door-right relative h-full min-w-0 flex-1"
      }
    >
      <div className="door-panel absolute inset-0 flex flex-col gap-2 p-2">
        <div className="flex-[2.2] rounded-[2px] border-2 border-[#4a2c1c] bg-[#a56b43]" />
        <div className="h-2 shrink-0 rounded-sm bg-[#4a2c1c]" />
        <div className="flex-1 rounded-[2px] border-2 border-[#4a2c1c] bg-[#a56b43]" />
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

      const hero = document.getElementById("top");
      const start = hero?.offsetTop ?? 0;
      const distance = 520;
      const progress = Math.min(1, Math.max(0, (window.scrollY - start) / distance));
      const eased = progress;
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
    <div ref={rigRef} className="door-rig h-96 w-full max-w-sm lg:h-3/4 lg:max-w-none" aria-hidden="true">
      <Script id="cafe-door-scroll" strategy="afterInteractive">
        {doorScrollScript}
      </Script>
      <div className="relative h-full bg-[#4a2c1c] p-1.5 shadow-card">
        <div className="absolute inset-1.5 overflow-hidden">
          <Image
            src="/cafe-interior.jpg"
            alt=""
            fill
            sizes="320px"
            className="cafe-blur object-cover"
          />
        </div>
        <div className="doorway absolute inset-1.5 flex">
          <Door side="left" />
          <Door side="right" />
        </div>
      </div>
      <p className="door-hint mt-2 text-center font-pixel text-[8px] tracking-wide text-ink">
        scroll to open
      </p>
    </div>
  );
}
