"use client";
import { useEffect, useState } from "react";
import { site } from "@/data/portfolio";
const links = ["About", "Experience", "Projects", "Skills", "Publication", "Education", "Certifications", "Contact"];
export function Nav() {
  const [active, setActive] = useState("home");
  const [small, setSmall] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setSmall(window.scrollY > 40);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    ["home", ...links.map((l) => l.toLowerCase())].forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${small ? "py-2" : "py-4"}`}>
      <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-line bg-ink/60 px-5 py-2 backdrop-blur-xl">
        <a href="#home" className="text-lg font-extrabold tracking-tight">Adnan Rizvi</a>
        <ul className="hidden gap-5 text-sm lg:flex">
          {links.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} aria-current={active === l.toLowerCase() ? "true" : undefined}
              className={active === l.toLowerCase() ? "text-accent" : "text-mute hover:text-text"}>{l}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href={site.resume} target="_blank" rel="noopener" className="rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-ink">Resume</a>
          <button className="rounded-full border border-line px-3 py-1.5 text-sm lg:hidden" aria-expanded={open} aria-controls="mnav" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
        </div>
      </nav>
      {open && (
        <ul id="mnav" className="mx-4 mt-2 grid gap-1 rounded-2xl border border-line bg-panel/95 p-3 backdrop-blur-xl lg:hidden">
          {links.map((l) => <li key={l}><a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-mute hover:text-text">{l}</a></li>)}
        </ul>
      )}
    </header>
  );
}
