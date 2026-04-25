import Link from "next/link";
import { Award, MapPin, ShieldCheck, Users } from "lucide-react";
import { PhotoPlaceholder, StatBlock } from "./Primitives";

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
   TrustStrip — four trust items under the hero
   ========================================================================== */
export function TrustStrip() {
  return (
    <div className="trust">
      <div className="container trust-row">
        <div className="trust-item">
          <ShieldCheck size={18} />
          NEB-affiliated since 2064 BS
        </div>
        <div className="trust-item">
          <Award size={18} />
          92% +2 pass rate · last 3 yrs
        </div>
        <div className="trust-item">
          <Users size={18} />
          1:14 teacher ratio
        </div>
        <div className="trust-item">
          <MapPin size={18} />
          Shuttles from Koteshwor, Baneshwor, Chabahil
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   StatsSection — four big numbers
   ========================================================================== */
export function StatsSection() {
  return (
    <section className="section">
      <div className="container">
        <EditSecHead
          num="01"
          eyebrow="By the numbers"
          title="Real attention, not just small classes."
          aside="These are not projections — this is the last three years of graduates."
        />
        <div className="stat-grid">
          <StatBlock n="480" label="Students, Grades 6–12" />
          <StatBlock n="1:14" label="Teacher-to-student ratio" />
          <StatBlock n="92" suffix="%" label="+2 pass rate (3-yr avg)" />
          <StatBlock n="2064" label="NEB-affiliated since (BS)" />
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   StreamsSection — Grade 11 stream cards
   ========================================================================== */
const STREAMS = [
  {
    pill: "Science",
    title: "Grade 11 Science",
    body: "Physics, Chemistry, and Biology or Maths. NEB-aligned labs and a dedicated afternoon study block.",
    seats: "48 seats",
  },
  {
    pill: "Management",
    title: "Grade 11 Management",
    body: "Accountancy, Economics, Business Studies. Real case work with Kathmandu employers in Grade 12.",
    seats: "40 seats",
  },
  {
    pill: "Humanities",
    title: "Grade 11 Humanities",
    body: "Nepali, English, Sociology, Political Science. Writing-focused, with a required community research project.",
    seats: "32 seats",
  },
] as const;

export function StreamsSection() {
  return (
    <section className="section tint">
      <div className="container">
        <EditSecHead
          num="02"
          eyebrow="Grade 11 streams · 2083 BS"
          title="Three streams. One family of teachers."
          aside="Every stream meets the same afternoon study block and shares the same clubs."
        />
        <div className="stream-grid">
          {STREAMS.map((s) => (
            <article key={s.pill} className="stream">
              <div className="photo">
                <PhotoPlaceholder label={`${s.pill} classroom`} />
              </div>
              <div className="body">
                <span className="pill">{s.pill} stream</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <div className="foot">
                  <span>{s.seats} · 2083 BS</span>
                  <Link href="/programs">Read more →</Link>
                </div>
              </div>
            </article>
          ))}
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
          We do not chase rankings. We chase the quiet moments where a student
          asks the question she&apos;s been holding for a week.
        </h2>
        <p style={{ marginTop: 20 }}>
          Future Stars opened in 2064 BS with 38 students in a single building
          in Kathmandu. Today we are Grades 6–12 — still small enough that every
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
