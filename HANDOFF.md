# HANDOFF — Future Stars Website

**Status:** mid-build. Scaffold + design system + most of Home is done. Secondary
pages, the Admissions form, page wiring, and Sanity are still to do.

This doc is for the next Claude Code session (running locally on your machine)
to pick up cleanly.

---

## How to resume

In your terminal, inside the cloned repo:

```bash
npm install
claude
```

Then paste this prompt to start:

> Read `HANDOFF.md` and `design-reference/CLAUDE-DESIGN-README.md`, then continue
> implementing the Future Stars website. The design source-of-truth is the
> `design-reference/` folder — match it pixel-perfectly. Don't improvise on
> visuals. Use the existing components in `src/components/` as the pattern for
> any new ones.

---

## ⚠️ Source-of-truth: `design-reference/`

The original Claude Design HTML/CSS/JS prototypes live at
`design-reference/project/`. **Match them exactly.** When porting a page or
component:

1. Read the corresponding file in `design-reference/project/site/` (e.g.
   `Pages.jsx` for secondary pages, `Heroes.jsx` for hero variants,
   `HomeSections.jsx` for home sections).
2. Read `design-reference/project/site/kit.css` and `kit-extra.css` — most of
   this is already ported into `src/app/components.css`. If a class is missing,
   port it.
3. Read `design-reference/chats/chat1.md` for the original design intent.

Port the JSX structure faithfully. Change only what's needed to fit Next.js
(routing via `next/link`, server vs client components, async data fetching).

---

## What's already done

### Stack
- **Next.js 16.2.4** App Router + TypeScript (`src/app/`)
- **Tailwind v4** with design tokens in `src/app/globals.css` via `@theme`
- **next/font:** Plus Jakarta Sans, Inter, Noto Sans Devanagari (in
  `src/app/layout.tsx`)
- **lucide-react** for icons
- **Sanity** chosen for CMS (not yet wired)
- **Vercel** as deploy target

### Files written
```
src/
├── app/
│   ├── layout.tsx          # Fonts + metadata (root layout)
│   ├── globals.css         # Tailwind import + @theme tokens + base styles
│   ├── components.css      # All component CSS (1100+ lines, ported from kit*.css)
│   └── page.tsx            # ⚠️ STILL the create-next-app default — needs replacing
├── components/
│   ├── Primitives.tsx      # Button, Pill, WhatsAppButton, StatBlock, BSDate, PhotoPlaceholder
│   ├── TopNav.tsx          # Sticky nav + announcement bar + mobile drawer (client)
│   ├── Footer.tsx          # 3-col footer w/ Nepali flag + BS date
│   ├── FloatingWhatsApp.tsx# Bottom-right FAB
│   ├── Heroes.tsx          # 4 variants + HeroSwitcher (server, takes `variant` prop)
│   ├── HomeSections.tsx    # EditSecHead, TrustStrip, StatsSection, StreamsSection,
│   │                       # TestimonialSection, MissionBand
│   ├── NewsSection.tsx     # Takes NewsItem[] prop
│   └── TeachersSection.tsx # Takes Teacher[] prop
└── lib/
    └── content.ts          # Types + fallback data + getNews()/getTeachers() async fetchers
```

### Design tokens (Tailwind `@theme` in `globals.css`)
All brand colors, neutrals, font CSS vars, radii, shadows, easing — already
wired. Use `var(--color-primary)`, etc. in custom CSS. Tailwind utilities
(`bg-primary`, etc.) also work.

---

## What's left

### 1. Build `AdmissionsSection` (client component)

Path: `src/components/AdmissionsSection.tsx`

Port from `design-reference/project/site/HomeSections.jsx` lines 172–229.
Has form state (parent name / WhatsApp / stream) and a "submitted" success
state. Mark `"use client"`.

### 2. Wire up the Home page

Replace `src/app/page.tsx`. Should be an `async` server component that:
- Reads `searchParams` for `?hero=` to pick the variant (default: editorial)
- Fetches news + teachers from `lib/content.ts`
- Renders: `<TopNav /> <HeroSwitcher /> <TrustStrip /> <StatsSection />
  <StreamsSection /> <MissionBand /> <TestimonialSection />
  <NewsSection items={news} /> <AdmissionsSection /> <Footer />
  <FloatingWhatsApp />`

Note: `<TopNav />` should live in the **root layout** (`src/app/layout.tsx`),
not on each page. Move it there along with `<Footer />` and `<FloatingWhatsApp />`.

### 3. Build secondary pages

Each is a new `src/app/<route>/page.tsx`. Port from `design-reference/project/site/Pages.jsx`.

- `src/app/programs/page.tsx` → `ProgramsPage` (has tab state — make a client
  child component for the tabs, page itself can be server)
- `src/app/admissions/page.tsx` → renders `<AdmissionsSection />` standalone
  (with `<EditSecHead />` above)
- `src/app/life/page.tsx` → `LifePage` (gallery + weekly schedule, all static)
- `src/app/about/page.tsx` → `AboutPage` (intro paragraphs + `<MissionBand />`
  + `<TeachersSection items={teachers} />`)
- `src/app/contact/page.tsx` → `ContactPage` (cards + map placeholder)

### 4. Set up Sanity

Don't skip the schemas — they're what makes the CMS useful.

```bash
npm install next-sanity @sanity/image-url
npm install -D sanity @sanity/vision
```

Then:
- Create `sanity/schemas/news.ts` and `sanity/schemas/teacher.ts` matching the
  `NewsItem` and `Teacher` types in `src/lib/content.ts`
- Create `sanity.config.ts` at the repo root
- Add `src/lib/sanity.ts` with the client (read `NEXT_PUBLIC_SANITY_PROJECT_ID`
  + `NEXT_PUBLIC_SANITY_DATASET` env vars)
- Update `getNews()` and `getTeachers()` in `src/lib/content.ts` to query
  Sanity if env vars are present, falling back to `FALLBACK_NEWS` / `FALLBACK_TEACHERS`
- Add an `/admin` route (or `/studio`) hosting Sanity Studio
- Create `.env.local.example` documenting the required env vars
- Document setup steps in README

### 5. Verify build

```bash
npm run build
```

Fix any type errors or missing imports. Test all routes.

### 6. Deploy

Push to GitHub, import the repo in Vercel, add Sanity env vars in Vercel's
dashboard. Should just work.

---

## Conventions to follow

- **Server components by default.** Add `"use client"` only when you need state,
  effects, or browser APIs.
- **Use Tailwind `@theme` tokens** (`var(--color-primary)`, etc.) rather than
  hard-coded hex values.
- **Match the design.** When in doubt, open the prototype HTML in
  `design-reference/project/site/index.html` in a browser and compare.
- **Imports use `@/...` alias.** E.g. `import { Button } from "@/components/Primitives"`.
- **Don't add features that aren't in the design.** No dark mode, no i18n,
  no analytics — unless Anjali explicitly asks.

---

## Read the Next.js docs first

This project uses Next.js 16.2.4. Some APIs (e.g. `params` and `searchParams`
are now Promises) differ from older versions. The bundled docs are at
`node_modules/next/dist/docs/`. Always check there before writing code that
touches Next.js APIs.

The `AGENTS.md` file at the repo root tells Claude Code to do this automatically.
