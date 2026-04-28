import Image from "next/image";
import {
  ShieldCheck, Award, Bus, Clock,
  GraduationCap, Trophy, BadgePercent, BookOpen, Leaf, DoorOpen,
} from "lucide-react";
import { PhotoPlaceholder, StatBlock } from "./Primitives";
import type { Principal } from "@/lib/content";
import { urlFor } from "@/lib/sanity";

/* ==========================================================================
   EditSecHead — editorial section header (01/02/03 · eyebrow · h2 · aside)
   Used across home + secondary pages.
   ========================================================================== */
export function EditSecHead({
  num,
  eyebrow,
  title,
  aside,
}: {
  num: string;
  eyebrow: string;
  title: string;
  aside?: string;
}) {
  return (
    <div className="sec-head-edit">
      <div>
        <div className="num">{num}</div>
      </div>
      <div>
        <div className="rule" />
        <div className="eyebrow" style={{ marginBottom: 8 }}>
          {eyebrow}
        </div>
        <h2>{title}</h2>
      </div>
      {aside ? <div className="aside">{aside}</div> : null}
    </div>
  );
}

/* ==========================================================================
   TrustStrip — credibility & logistics under the hero
   ========================================================================== */
export function TrustStrip() {
  return (
    <div className="trust">
      <div className="container trust-row">
        <div className="trust-item">
          <Award size={18} />
          Government-recognized private school
        </div>
        <div className="trust-item">
          <Bus size={18} />
          Shuttle from Koteshwor, Baneshwor & Chabahil
        </div>
        <div className="trust-item">
          <Clock size={18} />
          Open for visits Sun–Fri · 10 am – 3 pm
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   StatsSection — four proof-of-outcome numbers
   ========================================================================== */
export function StatsSection() {
  return (
    <section className="section">
      <div className="container">
        <EditSecHead
          num="01"
          eyebrow="By the numbers"
          title="Real outcomes, not just small classes."
          aside="These are not projections — this is the last three years of graduates."
        />
        <div className="stat-grid">
          <StatBlock n="480" label="Students enrolled, Grades 6–12" />
          <StatBlock n="100" suffix="%" label="Maximum scholarship available" />
          <StatBlock n="92" suffix="%" label="+2 NEB pass rate, 3-yr avg" />
          <StatBlock n="9" label="Students scored 3.8+ GPA last cohort" />
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   WhySection — "Why choose Future Stars" with center photo + feature pairs
   ========================================================================== */
const WHY_LEFT = [
  {
    Icon: GraduationCap,
    title: "19 graduating NEB batches",
    body: "NEB-affiliated since 2064 BS. Every cohort we have enrolled has reached their board exams here.",
  },
  {
    Icon: Trophy,
    title: "92% NEB pass rate",
    body: "Consistent across three consecutive years — above the Kathmandu district average.",
  },
  {
    Icon: BadgePercent,
    title: "Scholarships up to 100%",
    body: "Academic merit and financial-need awards issued automatically with every offer letter.",
  },
] as const;

const WHY_RIGHT = [
  {
    Icon: BookOpen,
    title: "34 subject-specialist teachers",
    body: "Every subject taught by a qualified specialist from your child's very first day.",
  },
  {
    Icon: Leaf,
    title: "Whole-child afternoons",
    body: "A daily study block, weekly clubs, and an annual Himalayan trek built into every school year.",
  },
  {
    Icon: DoorOpen,
    title: "Open door — always",
    body: "The principal is available every Friday. Parent messages replied within one school day.",
  },
] as const;

export function WhySection({ whyPhoto }: { whyPhoto?: Parameters<typeof urlFor>[0] }) {
  const src = whyPhoto
    ? urlFor(whyPhoto)?.width(480).height(640).fit("crop").auto("format").url()
    : null;

  return (
    <section className="why-section">
      <div className="container" style={{ position: "relative" }}>
        <div className="why-header">
          <div className="eyebrow" style={{ color: "var(--color-accent)" }}>Paving the way for a new generation of stars.</div>
          <h2 className="why-h2">Why choose <strong>Future Stars.</strong></h2>
        </div>
        <div className="why-grid">
          {/* Left column */}
          <div className="why-col why-col--left">
            {WHY_LEFT.map(({ Icon, title, body }) => (
              <div key={title} className="why-feature">
                <div className="why-num"><Icon size={20} /></div>
                <div>
                  <p className="why-feature-title">{title}</p>
                  <p className="why-feature-body">{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center photo */}
          <div className="why-photo-col">
            {src ? (
              <Image src={src} alt="Future Stars student" fill style={{ objectFit: "cover" }} />
            ) : (
              <PhotoPlaceholder label="Future Stars student" tone="navy" />
            )}
          </div>

          {/* Right column */}
          <div className="why-col why-col--right">
            {WHY_RIGHT.map(({ Icon, title, body }) => (
              <div key={title} className="why-feature">
                <div className="why-num"><Icon size={20} /></div>
                <div>
                  <p className="why-feature-title">{title}</p>
                  <p className="why-feature-body">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   TestimonialSection
   ========================================================================== */
export function TestimonialSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="quote">
          <div className="mark">&ldquo;</div>
          <blockquote>
            She comes home excited about chemistry class. That&apos;s all I
            needed to know.
          </blockquote>
          <div className="by">
            <strong>Sunita Karki</strong> · Parent, Grade 11 Science · Baneshwor
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   PrincipalSection — photo left, message right
   ========================================================================== */
export function PrincipalSection({ data }: { data: Principal }) {
  const imgUrl = data.image
    ? urlFor(data.image)?.width(600).height(800).fit("crop").auto("format").url()
    : null;

  return (
    <section className="section tint">
      <div className="container">
        <div className="principal-grid">

          {/* Photo column */}
          <div className="principal-photo-col">
            <div className="principal-photo">
              {imgUrl ? (
                <Image src={imgUrl} alt={data.name} fill sizes="(max-width:1023px) 80vw, 400px" style={{ objectFit: "cover" }} />
              ) : (
                <PhotoPlaceholder label={`Principal · ${data.name}`} tone="navy" />
              )}
            </div>
          </div>

          {/* Text column */}
          <div className="principal-body">
            <div className="eyebrow">From the Principal&apos;s Desk</div>
            <div className="rule" style={{ height: 1, background: "var(--color-border-strong)", margin: "12px 0 20px" }} />
            {data.quote && <h2 className="principal-heading">{data.quote}</h2>}
            {data.para1 && <p className="principal-sub">{data.para1}</p>}
            {data.para2 && <p className="principal-body-text">{data.para2}</p>}
            {data.para3 && <p className="principal-body-text">{data.para3}</p>}
            <div className="principal-sig">
              <div className="principal-sig-name">{data.name}</div>
              <div className="principal-sig-role">{data.role}</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   MissionBand — textured navy band (also used on /about)
   ========================================================================== */
export function MissionBand() {
  return (
    <section className="mission">
      <div className="container" style={{ position: "relative" }}>
        <div className="eyebrow" style={{ marginBottom: 12 }}>
          Our promise
        </div>
        <h2>
          Our mission is to help students grow with active and creative minds, striving them to develop a sense of understanding and compassion for others.
        </h2>
        <p style={{ marginTop: 20 }}>
          Future Stars opened in 2064 BS with 38 students in a single building
          in Lalitpur. Today we are Grades 6–12 — connected enough that every
          teacher knows every student by name.
        </p>
        <div className="mission-grid">
          <div className="mi">
            <h4>Known by name</h4>
            <p>
              34 teachers for 480 students. The principal greets every Grade 6
              parent at the gate in the first week.
            </p>
          </div>
          <div className="mi">
            <h4>Nepali first</h4>
            <p>
              NEB curriculum in English with Nepali literature, history, and
              civics taught by specialists, not generalists.
            </p>
          </div>
          <div className="mi">
            <h4>Whole-child</h4>
            <p>
              Daily afternoon study block. Weekly clubs. Annual Himalayan trek.
              Report cards track more than marks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
