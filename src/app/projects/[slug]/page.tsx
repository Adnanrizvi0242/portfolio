import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/portfolio";
import { Pipeline } from "@/components/Pipeline";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.overview, alternates: { canonical: `/projects/${p.slug}` } } : {};
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  const S = ({ t, children }: { t: string; children: React.ReactNode }) => (
    <section className="mt-12"><h2 className="mb-4 text-xl font-semibold">{t}</h2>{children}</section>
  );
  return (
    <main className="mx-auto max-w-3xl px-5 py-16">
      <Link href="/#projects" className="text-sm text-accent">← All projects</Link>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight">{p.title}</h1>
      <p className="mt-4 text-lg text-mute">{p.overview}</p>
      <S t="Architecture"><Pipeline steps={p.pipeline} note={p.pipelineNote} /></S>
      <S t="Implementation"><ul className="grid gap-3 text-mute">{p.implementation.map((i) => <li key={i}>{i}</li>)}</ul></S>
      {p.results && (
        <S t="Results">
          <dl className="grid gap-4 sm:grid-cols-2">{p.results.map((r) => (
            <div key={r.label} className="rounded-xl border border-line p-4"><dd className="text-4xl font-semibold text-accent">{r.value}</dd><dt className="text-sm text-mute">{r.label}</dt></div>
          ))}</dl>
        </S>
      )}
      <S t="Technologies"><ul className="flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="rounded-full border border-line px-3 py-1 text-sm text-mute">{t}</li>)}</ul></S>
      <S t="Code">
        <a href={p.repo} target="_blank" rel="noopener noreferrer" className="text-accent">View repository on GitHub →</a>
      </S>
    </main>
  );
}
