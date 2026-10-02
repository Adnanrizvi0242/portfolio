"use client";
import { useState } from "react";
import { site } from "@/data/portfolio";
type Errs = Partial<Record<"name" | "email" | "message", string>>;

// Sending: opens the visitor's mail app via mailto. To send from the site instead,
// add a route handler (e.g. src/app/api/contact/route.ts) that calls Resend with
// process.env.RESEND_API_KEY, then replace the mailto line in onSubmit with a fetch to it.
export function ContactForm() {
  const [errs, setErrs] = useState<Errs>({});
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").trim(), email = String(f.get("email") ?? "").trim(), message = String(f.get("message") ?? "").trim();
    const next: Errs = {};
    if (name.length < 2) next.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email address.";
    if (message.length < 10) next.message = "Write at least 10 characters.";
    setErrs(next);
    if (Object.keys(next).length) return;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Portfolio message from " + name)}&body=${encodeURIComponent(message + "\n\n" + name + " (" + email + ")")}`;
  }
  const field = "w-full rounded-lg border border-line bg-ink px-3 py-2 text-text";
  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      {(["name", "email", "message"] as const).map((k) => (
        <div key={k}>
          <label htmlFor={k} className="mb-1 block text-sm text-mute">{k[0].toUpperCase() + k.slice(1)}</label>
          {k === "message" ? <textarea id={k} name={k} rows={5} className={field} aria-invalid={!!errs[k]} aria-describedby={`${k}-e`} />
            : <input id={k} name={k} type={k === "email" ? "email" : "text"} className={field} aria-invalid={!!errs[k]} aria-describedby={`${k}-e`} />}
          <p id={`${k}-e`} role="alert" className="mt-1 min-h-5 text-sm text-red-700">{errs[k]}</p>
        </div>
      ))}
      <button className="justify-self-start rounded-full bg-accent px-6 py-2.5 font-medium text-ink">Send by email</button>
    </form>
  );
}
