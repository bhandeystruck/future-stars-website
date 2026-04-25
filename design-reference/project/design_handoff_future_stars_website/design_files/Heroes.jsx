// Hero variants — editorial, split, full-bleed, stat-led.

const HeroEditorial = ({ onNav }) => (
  <section className="hero-edit">
    <div className="grain" />
    <div className="container">
      <div className="eyebrow-row">
        <Pill tone="admissions" icon="calendar">Admissions open · 2083 BS</Pill>
        <div className="sep" />
        <span className="meta">Est. 2064 BS · Kathmandu</span>
      </div>
      <div className="edit-grid">
        <div className="col-lede">
          <h1 className="display">
            A school where your child is <em>known by name.</em>
          </h1>
          <span className="np-accent">एउटा विद्यालय, जहाँ तपाईंको बच्चाको नाम थाहा छ।</span>
          <p>
            480 students. 34 teachers. NEB-affiliated since 2064 BS.
            Future Stars is a Kathmandu secondary school built around real
            attention — and a quiet kind of excellence.
          </p>
          <div className="ctas">
            <Button variant="primary" size="lg" icon="calendar" onClick={() => onNav("admissions")}>
              Book a school visit
            </Button>
            <WhatsAppButton size="lg" />
          </div>
          <div className="fine">
            <Icon name="calendar-days" size={16} style={{ color: "var(--color-accent-700)" }} />
            Next open house · <BSDate bs="12 Baishakh 2083" ad="25 Apr 2026" />
          </div>
        </div>
        <div className="col-photo">
          <div className="photo-stack">
            <div className="frame a">
              <span className="ph-label"><Icon name="camera" size={12} />Grade 11 chemistry lab</span>
            </div>
            <div className="frame b">
              <span className="ph-label"><Icon name="camera" size={12} />Morning assembly</span>
            </div>
            <span className="cap top">2083 BS intake</span>
            <span className="cap bot">★ 92% +2 pass</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HeroSplit = ({ onNav }) => (
  <section className="hero">
    <div className="container hero-grid">
      <div>
        <Pill tone="admissions" icon="calendar">Admissions open · 2083 BS</Pill>
        <h1>A school where your child is known by name.</h1>
        <p className="lead">
          480 students. 34 teachers. NEB-affiliated since 2064 BS.
          Future Stars is a Kathmandu secondary school built around real
          attention — and a quiet kind of excellence.
        </p>
        <div className="hero-ctas">
          <Button variant="primary" size="lg" icon="calendar" onClick={() => onNav("admissions")}>
            Book a school visit
          </Button>
          <WhatsAppButton size="lg" />
        </div>
        <div style={{ fontSize: 13, color: "var(--color-text-muted)" }}>
          Next open house · <BSDate bs="12 Baishakh 2083" ad="25 Apr 2026" />
        </div>
      </div>
      <div className="hero-photo">
        <PhotoPlaceholder label="Grade 11 chemistry lab" />
        <span className="label">Chemistry lab · Kathmandu campus</span>
      </div>
    </div>
  </section>
);

const HeroBleed = ({ onNav }) => (
  <section className="hero-bleed">
    <div className="photo-bg" />
    <div className="container bleed-inner">
      <Pill tone="amber" icon="calendar">Admissions open · 2083 BS</Pill>
      <h1 style={{ marginTop: 20 }}>
        A school where your child is <em>known by name.</em>
      </h1>
      <p className="lead">
        480 students. 34 teachers. NEB-affiliated since 2064 BS — a quiet kind of excellence, in the heart of Kathmandu.
      </p>
      <div className="ctas">
        <Button variant="primary" size="lg" icon="calendar" onClick={() => onNav("admissions")}>Book a school visit</Button>
        <Button variant="secondary-dark" size="lg" icon="message-circle" onClick={() => {}}>Chat on WhatsApp</Button>
      </div>
    </div>
    <div className="bleed-meta">
      <div><strong>480</strong>Students, Grades 6–12</div>
      <div><strong>1:14</strong>Teacher-to-student ratio</div>
      <div><strong>92%</strong>+2 pass rate · 3-yr avg</div>
    </div>
  </section>
);

const HeroStat = ({ onNav }) => (
  <section className="hero-stat">
    <div className="container">
      <Pill tone="admissions" icon="calendar">Admissions open · 2083 BS</Pill>
      <h1>
        Four numbers that tell you who we are.
      </h1>
      <div className="big-stats">
        <div><div className="n">480</div><div className="l">Students, Grades 6–12</div></div>
        <div><div className="n">1:14</div><div className="l">Teacher-to-student ratio</div></div>
        <div><div className="n">92<sup>%</sup></div><div className="l">+2 pass rate · 3-yr avg</div></div>
        <div><div className="n">2064</div><div className="l">NEB-affiliated (BS)</div></div>
      </div>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
        <Button variant="primary" size="lg" icon="calendar" onClick={() => onNav("admissions")}>Book a school visit</Button>
        <WhatsAppButton size="lg" />
        <span style={{ fontSize: 13, color: "var(--color-text-muted)", marginLeft: 8 }}>
          Next open house · <BSDate bs="12 Baishakh 2083" ad="25 Apr 2026" />
        </span>
      </div>
    </div>
  </section>
);

const HeroSwitcher = ({ variant, onNav }) => {
  if (variant === "split") return <HeroSplit onNav={onNav} />;
  if (variant === "bleed") return <HeroBleed onNav={onNav} />;
  if (variant === "stat") return <HeroStat onNav={onNav} />;
  return <HeroEditorial onNav={onNav} />;
};

Object.assign(window, { HeroEditorial, HeroSplit, HeroBleed, HeroStat, HeroSwitcher });
