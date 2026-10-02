# Adnan Rizvi: portfolio (Next.js 15, React 19, TypeScript, Tailwind v4, Motion)

## Run
    npm install
    npm run dev        # http://localhost:3000
    npm run lint       # type check
    npm run build && npm start

## Deploy (Vercel)
Push to GitHub, import the repo at vercel.com/new (framework auto-detected), set `NEXT_PUBLIC_SITE_URL` to your production URL (see `.env.example`), deploy.

## Update content
Everything lives in `src/data/portfolio.ts`: experience, projects, skills, publication, education, certifications, links.
Add `url` to a certification, `link` to the publication, or a repo URL once you have them. Replace `public/Adnan_Rizvi_Resume.pdf` to update the resume.

## Contact form
It validates and opens the visitor's mail app (mailto). To send from the site, add `src/app/api/contact/route.ts` calling Resend with `RESEND_API_KEY` (server-side env var) and post to it from `ContactForm.tsx`.
