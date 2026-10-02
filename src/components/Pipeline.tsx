"use client";
import { motion, useReducedMotion } from "motion/react";
export function Pipeline({ steps, note }: { steps: string[]; note?: string }) {
  const reduce = useReducedMotion();
  return (
    <figure aria-label={`Pipeline: ${steps.join(", then ")}`}>
      <ol className="flex flex-wrap items-center gap-y-3">
        {steps.map((s, i) => (
          <motion.li key={s} className="flex items-center" initial={reduce ? false : { opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
            <span className="rounded-md border border-line bg-panel px-3 py-1.5 text-sm">{s}</span>
            {i < steps.length - 1 && (
              <svg width="32" height="10" aria-hidden className="mx-1"><line x1="0" y1="5" x2="32" y2="5" stroke="var(--color-accent)" strokeWidth="1.5" className="flow" /></svg>
            )}
          </motion.li>
        ))}
      </ol>
      {note && <figcaption className="mt-3 text-sm text-mute">{note}</figcaption>}
    </figure>
  );
}
