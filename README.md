# Naragam Gnana Deepika — Portfolio

A from-scratch Next.js / TypeScript / Tailwind / Framer Motion portfolio. Built around one real idea:
Deepika's strongest projects (SFTS, WSMPA) are about verifying and monitoring systems — so the site's
signature visual is an ambient "integrity log" ticker, and project cards physically "decrypt open" to
reveal case-study depth, instead of a generic hero + grid template.

## Design system

| Token | Value | Use |
|---|---|---|
| `ink` | `#0C1116` | Background (dark) |
| `surface` | `#151B22` | Cards, panels |
| `border` | `#232B33` | Hairlines |
| `ivory` | `#F6F4EF` | Background (light) |
| `text.primary` | `#EAEFF3` | Body copy (dark mode) |
| `text.muted` | `#7C8896` | Secondary copy |
| `amber` | `#E7A33E` | Status / label accent |
| `teal` | `#3FD9C7` | Verified / primary CTA accent |

Type: **Space Grotesk** (display), **Inter** (body), **JetBrains Mono** (labels, timestamps, tags).

## Folder structure

```
app/
  layout.tsx       — fonts, metadata, theme provider
  page.tsx         — assembles all sections
  globals.css      — design tokens, base styles, utilities
  not-found.tsx     — custom 404
  sitemap.ts / robots.ts
components/
  Navbar, Hero, IntegrityLog, About, Skills, Projects, ProjectCard,
  Timeline, Certifications, Contact, Footer, ThemeToggle, ThemeProvider, ScrollReveal
lib/
  data.ts          — all real content lives here (edit this file to update copy)
```

## Before you deploy

1. **Contact form** — open `components/Contact.tsx` and replace:
   ```ts
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```
   Sign up free at [formspree.io](https://formspree.io), create a form, and paste your form ID in. No backend or API key needed.

2. **Resume file** — the "Download resume" button links to `/resume.pdf`. Add your resume PDF at
   `public/resume.pdf` (create the `public` folder if it doesn't exist).

3. **Favicon & OG image** — add `public/favicon.ico` and an Open Graph image (`public/og.png`, 1200×630)
   for social link previews, then reference the OG image in `app/layout.tsx` metadata `openGraph.images`.

4. **Domain** — the metadata currently uses `https://gnanadeepika.dev` as a placeholder in
   `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts`. Replace with your real deployed URL.

## Run locally

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # serve the production build
```

## Deploy (Vercel — recommended, free for personal projects)

1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Vercel auto-detects Next.js — no config needed. Click Deploy.
4. Add your custom domain under Project → Settings → Domains, if you have one.

## Accessibility checklist (implemented)

- [x] Semantic HTML landmarks (`header`, `nav`, `main`, `section`, `footer`)
- [x] Skip-to-content link
- [x] Visible focus states (`:focus-visible` ring, teal accent)
- [x] `aria-label` on icon-only buttons/links, `aria-expanded` on expandable cards
- [x] `prefers-reduced-motion` respected globally (scroll behavior + all animations)
- [x] Color contrast checked against WCAG AA on both dark and light themes
- [x] Keyboard-operable navigation, form, and project cards (no mouse-only interactions)

## Performance notes

- Fonts loaded via `next/font/google` (self-hosted at build time, no runtime request to Google).
- All animation is CSS transform/opacity based (GPU-friendly, no layout thrashing).
- Static generation (`○ Static` for all routes) — no server round-trip needed for content.
- No images in v1, so no image-optimization debt yet — add real project screenshots via `next/image` when ready, which will lazy-load and serve AVIF/WebP automatically.

## Future enhancements

- Swap `IntegrityLog` mock data for a live GitHub API call showing real recent commits.
- Add a `/blog` using MDX if you start writing.
- Add project screenshots/GIFs via `next/image` once available.
- Consider a command palette (`cmdk`) for power-user navigation.
- Wire up real analytics (Vercel Analytics is a one-line add for a Vercel deployment).
