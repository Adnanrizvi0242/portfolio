"use client";
import { useEffect, useRef } from "react";
import { site } from "@/data/portfolio";

export function Spotlight() {
  const el = useRef<HTMLDivElement>(null);
  const effect = site.cursorEffect;
  useEffect(() => {
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const move = (e: PointerEvent) => {
      const t = e.target as Element | null;
      if (el.current) {
        el.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        el.current.style.opacity = "1";
        el.current.dataset.hot = t?.closest("a,button,input,textarea,.spot") ? "1" : "0";
      }
      const card = t?.closest<HTMLElement>(".spot");
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
    };
    addEventListener("pointermove", move, { passive: true });
    return () => removeEventListener("pointermove", move);
  }, []);
  if (effect === "none") return null;
  return <div ref={el} className={`cursor-fx cursor-${effect}`} aria-hidden />;
}