import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { site, experience, projects, skills, publication, education, certifications } from "@/data/portfolio";

const H = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <h2 id={id} className="mb-10 text-3xl font-semibold tracking-tight sm:text-4xl">{children}</h2>
);
const Sec = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} aria-labelledby={`${id}-h`} className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
    <H id={`${id}-h`}>{title}</H>{children}
  </section>
);
const Chip = ({ t }: { t: string }) => <li className="chip rounded-full border border-line px-3 py-1 text-xs text-mute">{t}</li>;
const btn = "rounded-full px-6 py-3 font-medium transition-transform hover:-translate-y-0.5";

const facts = [["Role", "Software Engineer (Trainee), PeopleStrong"], ["Education", "B.Tech Computer Science, VIT · CGPA 8.59"], ["Focus", "Backend · Generative AI · Data/ML"], ["Location", "India"]];
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <section id="home" className="mx-auto grid min-h-svh max-w-6xl items-center gap-12 px-5 pb-16 pt-32 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <h1 className="text-6xl font-extrabold leading-[0.95] tracking-tight sm:text-8xl">Adnan Rizvi</h1>
            <p className="mt-6 max-w-2xl text-2xl font-medium leading-snug sm:text-3xl">{site.headline}</p>
            <p className="mt-4 max-w-2xl text-lg text-mute">{site.summary}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#projects" className={`${btn} bg-accent text-white hover:shadow-lg hover:shadow-accent/30`}>View Projects</a>
              <a href={site.resume} download className={`${btn} border border-line hover:border-accent hover:text-accent`}>Download Resume</a>
              <a href="#contact" className={`${btn} border border-line hover:border-accent hover:text-accent`}>Contact Me</a>
            </div>
            <div className="mt-6 flex gap-5 text-sm text-mute">
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">GitHub</a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">LinkedIn</a>
            </div>
          </div>
          <aside aria-label="About Adnan" className="spot rounded-3xl border border-line bg-panel/80 p-4 shadow-xl">
            <Image src="/adnan.jpg" alt="Portrait of Adnan Rizvi" width={640} height={640} priority className="aspect-square w-full rounded-2xl object-cover object-top" />
            <dl className="mt-5 grid gap-3 px-2 pb-2 text-sm">
              {facts.map(([k, v]) => <div key={k}><dt className="text-mute">{k}</dt><dd className="font-medium">{v}</dd></div>)}
              <div><dt className="text-mute">Contact</dt><dd className="font-medium"><a href={`tel:+91${site.phone}`} className="hover:text-accent">{site.phone}</a> · <a href={`mailto:${site.email}`} className="break-all hover:text-accent">{site.email}</a></dd></div>
            </dl>
          </aside>
        </section>

        <Sec id="about" title="About">
          <div className="grid max-w-3xl gap-5 text-lg leading-relaxed text-mute">{site.about.map((p) => <Reveal key={p}><p>{p}</p></Reveal>)}</div>
        </Sec>

        <Sec id="experience" title="Experience">
          <ol className="relative grid gap-8 border-l border-line pl-6 sm:pl-10">
            {experience.map((j, i) => (
              <li key={j.company} className="relative">
                <span className="absolute -left-[1.85rem] top-2 size-2.5 rounded-full bg-accent sm:-left-[2.85rem]" aria-hidden />
                <Reveal delay={i * 0.05}>
                  <article className={`spot rounded-2xl border bg-panel/70 p-6 backdrop-blur ${i === 0 ? "border-accent/40" : "border-line"}`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-xl font-semibold">{j.company}</h3><p className="text-sm text-mute">{j.dates}</p>
                    </div>
                    <p className="mt-1 text-accent">{j.role}</p>
                    {j.metrics && (
                      <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                        {j.metrics.map((m) => (
                          <div key={m.label} className="rounded-xl border border-line p-4">
                            <dt className="sr-only">{m.label}</dt><dd className="text-4xl font-semibold text-accent">{m.value}</dd>
                            <p className="mt-1 text-sm text-mute" aria-hidden>{m.label}</p>
                          </div>
                        ))}
                      </dl>
                    )}
                    <ul className="mt-5 grid gap-2 text-mute">{j.points.map((p) => <li key={p} className="max-w-3xl">{p}</li>)}</ul>
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">{j.tech.map((t) => <Chip key={t} t={t} />)}</ul>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </Sec>

        <Sec id="projects" title="Projects">
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.07}>
                <article className="spot group flex h-full flex-col rounded-2xl border border-line bg-panel/70 p-6 hover:-translate-y-1">
                  <h3 className="text-xl font-semibold"><Link href={`/projects/${p.slug}`} className="after:absolute after:inset-0 after:content-['']">{p.title}</Link></h3>
                  <p className="mt-2 flex-1 text-mute">{p.tagline}</p>
                  {p.results && <p className="mt-4 text-accent">{p.results.map((r) => `${r.value} ${r.label}`).join(", ")}</p>}
                  <ul className="mt-4 flex flex-wrap gap-2">{p.tech.slice(0, 4).map((t) => <Chip key={t} t={t} />)}</ul>
                  <div className="mt-5 flex items-center justify-between text-sm">
                    <span className="text-accent transition-transform group-hover:translate-x-1">View details →</span>
                    <a href={p.repo} target="_blank" rel="noopener noreferrer" className="relative z-10 rounded-full border border-line px-3 py-1 hover:border-accent hover:text-accent">GitHub</a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Sec>

        <Sec id="skills" title="Skills">
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {Object.entries(skills).map(([g, items]) => (
              <Reveal key={g}><h3 className="mb-3 font-medium">{g}</h3><ul className="flex flex-wrap gap-2">{items.map((t) => <Chip key={t} t={t} />)}</ul></Reveal>
            ))}
          </div>
        </Sec>

        <Sec id="publication" title="Publication">
          <Reveal>
            <article className="spot max-w-3xl rounded-2xl border border-line bg-panel/70 p-7">
              <p className="text-sm text-mute">{publication.publisher}, {publication.date}</p>
              <h3 className="mt-2 font-serif text-2xl">{publication.title}</h3>
              <p className="mt-1 text-accent">{publication.role}</p>
              <p className="mt-4 text-mute">{publication.summary}</p>
              {publication.link && <a href={publication.link} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-accent">Read the publication →</a>}
            </article>
          </Reveal>
        </Sec>

        <Sec id="education" title="Education">
          <Reveal>
            <article className="max-w-3xl">
              <h3 className="text-xl font-semibold">{education.school}</h3>
              <p className="text-mute">{education.degree} · {education.dates} · CGPA {education.cgpa}</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Relevant coursework">{education.coursework.map((c) => <Chip key={c} t={c} />)}</ul>
              <ul className="mt-6 grid gap-1 text-sm text-mute">{education.schooling.map((s) => <li key={s}>{s}</li>)}</ul>
            </article>
          </Reveal>
        </Sec>

        <Sec id="certifications" title="Certifications">
          <ul className="grid gap-4 sm:grid-cols-2">
            {certifications.map((c) => (
              <li key={c.name} className="spot rounded-2xl border border-line bg-panel/70 p-5">
                <h3 className="font-medium">{c.name}</h3><p className="mt-1 text-sm text-mute">{c.detail}</p>
                {c.url && <a href={c.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-accent">View certificate →</a>}
              </li>
            ))}
          </ul>
        </Sec>

        <Sec id="contact" title="Contact">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="grid content-start gap-3 text-lg">
              <p className="text-mute">Open to software engineering roles in backend, AI/GenAI and data.</p>
              <a href={`mailto:${site.email}`} className="text-accent">{site.email}</a>
              <a href={`tel:+91${site.phone}`}>{site.phone}</a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <ContactForm />
          </div>
        </Sec>
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-mute">
          <div><p className="text-text">Adnan Rizvi</p><p>{site.title}</p><p>© {new Date().getFullYear()} Adnan Rizvi</p></div>
          <nav aria-label="Footer" className="flex flex-wrap gap-4">
            <a href={site.github}>GitHub</a><a href={site.linkedin}>LinkedIn</a><a href={`mailto:${site.email}`}>Email</a><a href={`tel:+91${site.phone}`}>{site.phone}</a><a href={site.resume}>Resume</a><a href="#home">Back to top</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
