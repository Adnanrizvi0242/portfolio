"use client";
import { useEffect, useRef } from "react";
export function Spotlight() {
  const dot = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const move = (e: PointerEvent) => {
      if (dot.current) { dot.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`; dot.current.style.opacity = "1"; }
      const card = (e.target as Element | null)?.closest<HTMLElement>(".spot");
      if (card) { const r = card.getBoundingClientRect(); card.style.setProperty("--mx", `${e.clientX - r.left}px`); card.style.setProperty("--my", `${e.clientY - r.top}px`); }
    };
    addEventListener("pointermove", move, { passive: true });
    return () => removeEventListener("pointermove", move);
  }, []);
  return <div ref={dot} className="cursor-glow" aria-hidden />;
}
