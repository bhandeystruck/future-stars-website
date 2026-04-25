import { Calendar, CalendarDays, Camera, MessageCircle } from "lucide-react";
import {
  Button,
  WhatsAppButton,
  Pill,
  BSDate,
  PhotoPlaceholder,
} from "./Primitives";

export type HeroVariant = "editorial" | "split" | "bleed" | "stat";

/* ==========================================================================
   Editorial (default)
   ========================================================================== */
function HeroEditorial() {
  return (
    <section className="hero-edit">
      <div className="grain" />
      <div className="container">
        <div className="eyebrow-row">
          <Pill tone="admissions" icon={Calendar}>
            Admissions open · 2083 BS
          </Pill>
          <div className="sep" />
          <span className="meta">Est. 2064 BS · Kathmandu</span>
        </div>
        <div className="edit-grid">
          <div className="col-lede">
            <h1 className="display">
              A school where your child is <em>known by name.</em>
            </h1>
            <span className="np-accent">
              एउटा विद्यालय, जहाँ तपाईंको बच्चाको नाम थाहा छ।
            </span>
            <p>
              480 students. 34 teachers. NEB-affiliated since 2064 BS. Future
              Stars is a Kathmandu secondary school built around real
              attention — and a quiet kind of excellence.
            </p>
            <div className="ctas">
              <Button variant="primary" size="lg" icon={Calendar} href="/admissions">
                Book a school visit
              </Button>
              <WhatsAppButton size="lg" />
            </div>
            <div className="fine">
              <CalendarDays size={16} style={{ color: "var(--color-accent-700)" }} />
              Next open house ·{" "}
              <BSDate bs="12 Baishakh 2083" ad="25 Apr 2026" />
            </div>
          </div>
          <div className="col-photo">
            <div className="photo-stack">
              <div className="frame a">
                <span className="ph-label">
                  <Camera size={12} />
                  Grade 11 chemistry lab
                </span>
              </div>
              <div className="frame b">
                <span className="ph-label">
                  <Camera size={12} />
                  Morning assembly
                </span>
              </div>
              <span className="cap top">2083 BS intake</span>
              <span className="cap bot">★ 92% +2 pass</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   Split — paired photo + lede
   ========================================================================== */
function HeroSplit() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <Pill tone="admissions" icon={Calendar}>
            Admissions open · 2083 BS
          </Pill>
          <h1>A school where your child is known by name.</h1>
          <p className="lead">
            480 students. 34 teachers. NEB-affiliated since 2064 BS. Future
            Stars is a Kathmandu secondary school built around real attention —
            and a quiet kind of excellence.
          </p>
          <div className="hero-ctas">
            <Button variant="primary" size="lg" icon={Calendar} href="/admissions">
              Book a school visit
            </Button>
            <WhatsAppButton size="lg" />
          </div>
          <div style={{ fontSize: 13, color: "var(--color-text-muted)" }}>
            Next open house ·{" "}
            <BSDate bs="12 Baishakh 2083" ad="25 Apr 2026" />
          </div>
        </div>
        <div className="hero-photo">
          <PhotoPlaceholder label="Grade 11 chemistry lab" />
          <span className="label">Chemistry lab · Kathmandu campus</span>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   Full-bleed — navy bg, photo-as-backdrop
   ========================================================================== */
function HeroBleed() {
  return (
    <section className="hero-bleed">
      <div className="photo-bg" />
      <div className="container bleed-inner">
        <Pill tone="amber" icon={Calendar}>
          Admissions open · 2083 BS
        </Pill>
        <h1>
          A school where your child is <em>known by name.</em>
        </h1>
        <p className="np-line">एउटा विद्यालय, जहाँ तपाईंको बच्चाको नाम थाहा छ।</p>
        <p className="lead">
          480 students. 34 teachers. NEB-affiliated since 2064 BS — a quiet
          kind of excellence, in the heart of Kathmandu.
        </p>
        <div className="ctas">
          <Button variant="primary" size="lg" icon={Calendar} href="/admissions">
            Book a school visit
          </Button>
          <Button variant="secondary-dark" size="lg" icon={MessageCircle} href="https://wa.me/977">
            Chat on WhatsApp
          </Button>
        </div>
      </div>
      <div className="bleed-stats">
        <div className="container bleed-stats-row">
          <div className="bleed-stat">
            <strong>480</strong>
            <span>Students, Grades 6–12</span>
          </div>
          <div className="bleed-stat-sep" />
          <div className="bleed-stat">
            <strong>1:14</strong>
            <span>Teacher-to-student ratio</span>
          </div>
          <div className="bleed-stat-sep" />
          <div className="bleed-stat">
            <strong>92%</strong>
            <span>+2 pass rate · 3-yr avg</span>
          </div>
          <div className="bleed-stat-sep" />
          <div className="bleed-stat">
            <strong>2064 BS</strong>
            <span>NEB-affiliated since</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   Stat-led — four numbers
   ========================================================================== */
function HeroStat() {
  return (
    <section className="hero-stat">
      <div className="container">
        <Pill tone="admissions" icon={Calendar}>
          Admissions open · 2083 BS
        </Pill>
        <h1>Four numbers that tell you who we are.</h1>
        <div className="big-stats">
          <div>
            <div className="n">480</div>
            <div className="l">Students, Grades 6–12</div>
          </div>
          <div>
            <div className="n">1:14</div>
            <div className="l">Teacher-to-student ratio</div>
          </div>
          <div>
            <div className="n">
              92<sup>%</sup>
            </div>
            <div className="l">+2 pass rate · 3-yr avg</div>
          </div>
          <div>
            <div className="n">2064</div>
            <div className="l">NEB-affiliated (BS)</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Button variant="primary" size="lg" icon={Calendar} href="/admissions">
            Book a school visit
          </Button>
          <WhatsAppButton size="lg" />
          <span
            style={{
              fontSize: 13,
              color: "var(--color-text-muted)",
              marginLeft: 8,
            }}
          >
            Next open house ·{" "}
            <BSDate bs="12 Baishakh 2083" ad="25 Apr 2026" />
          </span>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   Switcher — renders the selected variant
   ========================================================================== */
export default function HeroSwitcher({
  variant = "bleed",
}: {
  variant?: HeroVariant;
}) {
  switch (variant) {
    case "split":
      return <HeroSplit />;
    case "bleed":
      return <HeroBleed />;
    case "stat":
      return <HeroStat />;
    case "editorial":
    default:
      return <HeroEditorial />;
  }
}
