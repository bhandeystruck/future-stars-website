# HANDOFF — Future Stars Website

**Status:** feature-complete. All pages built, Sanity wired, build passing. Only
remaining task is deploying to Vercel + setting up a real Sanity project.

---

## How to resume

```bash
npm install
npm run dev       # dev server at http://localhost:3000
npm run build     # verify build passes
```

---

## What's done (as of 2026-04-25)

### Stack
- **Next.js 16.2.4** App Router + TypeScript
- **Tailwind v4** + design tokens in `globals.css`
- **next/font:** Plus Jakarta Sans, Inter, Noto Sans Devanagari
- **lucide-react** icons
- **next-sanity 12** + Sanity v3 (schemas ready, studio at `/studio`)
- **Vercel** as deploy target

### All routes
| Route | File | Notes |
|---|---|---|
| `/` | `src/app/page.tsx` | async server, `?hero=` variant switcher |
| `/programs` | `src/app/programs/page.tsx` | static; tab state in `ProgramsTabs.tsx` (client) |
| `/admissions` | `src/app/admissions/page.tsx` | static |
| `/life` | `src/app/life/page.tsx` | static |
| `/about` | `src/app/about/page.tsx` | async server (fetches teachers) |
| `/contact` | `src/app/contact/page.tsx` | static |
| `/studio/[[...tool]]` | `src/app/studio/[[...tool]]/page.tsx` | Sanity Studio (client) |

### Components
```
src/components/
├── Primitives.tsx        # Button, Pill, WhatsAppButton, StatBlock, BSDate, PhotoPlaceholder
├── TopNav.tsx            # Sticky nav + announcement bar + mobile drawer
├── Footer.tsx            # 3-col footer
├── FloatingWhatsApp.tsx  # Bottom-right FAB
├── Heroes.tsx            # 4 variants + HeroSwitcher
├── HomeSections.tsx      # EditSecHead, TrustStrip, StatsSection, StreamsSection,
│                         #   TestimonialSection, MissionBand
├── NewsSection.tsx       # Accepts NewsItem[]
├── TeachersSection.tsx   # Accepts Teacher[]
├── AdmissionsSection.tsx # Client form (name / WhatsApp / stream) + success state
└── ProgramsTabs.tsx      # Client tab switcher for /programs
```

### Sanity
```
sanity/schemas/news.ts      # matches NewsItem type
sanity/schemas/teacher.ts   # matches Teacher type
sanity.config.ts            # Studio config (basePath: /studio)
src/lib/sanity.ts           # createClient (null if no env vars)
src/lib/content.ts          # getNews / getTeachers — queries Sanity or falls back
.env.local.example          # documents required env vars
```

---

## What's left

### Deploy to Vercel

1. Create a Sanity project at https://sanity.io/manage
2. Copy `.env.local.example` → `.env.local`, fill in `NEXT_PUBLIC_SANITY_PROJECT_ID`
3. Push to GitHub
4. Import repo in Vercel; add the two Sanity env vars in Vercel's dashboard
5. Deploy — should just work

### Add real content

Once Sanity is set up, go to `/studio` and create:
- News & Events entries (matching `NewsItem` type)
- Teacher entries (matching `Teacher` type)

### Add real photos

All photo slots use `PhotoPlaceholder` / CSS placeholder tiles. When real images
arrive, replace the placeholder elements with `next/image` components.

---

## Conventions

- **Server components by default.** `"use client"` only for state/effects.
- **Tailwind `@theme` tokens** — `var(--color-primary)`, etc., not hard-coded hex.
- **`@/...` alias** for all imports from `src/`.
- **No dark mode, no i18n, no analytics** — unless explicitly requested.
- **Next.js 16:** `searchParams` and `params` are Promises — always `await` them.
