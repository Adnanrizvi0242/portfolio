import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import { site } from "@/data/portfolio";
import { Spotlight } from "@/components/Spotlight";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const sg = Schibsted_Grotesk({ subsets: ["latin"], variable: "--font-sg", display: "swap" });
const desc = "Software engineer working across Python and FastAPI backends, Generative AI and RAG, and data/ML pipelines.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Adnan Rizvi | Software Engineer (Backend, AI/GenAI, Data)", template: "%s | Adnan Rizvi" },
  description: desc,
  alternates: { canonical: "/" },
  openGraph: { title: "Adnan Rizvi | Software Engineer", description: desc, url: site.url, type: "website", siteName: "Adnan Rizvi" },
  twitter: { card: "summary", title: "Adnan Rizvi | Software Engineer", description: desc },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ld = { "@context": "https://schema.org", "@type": "Person", name: site.name, jobTitle: "Software Engineer", url: site.url, sameAs: [site.github, site.linkedin], email: site.email, telephone: site.phone };
  return (
    <html lang="en" className={sg.variable}>
      <body className="antialiased">
        <Spotlight /><div className="grid-bg" aria-hidden /><div className="glow" aria-hidden />
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <Analytics />
      </body>
    </html>
  );
}
