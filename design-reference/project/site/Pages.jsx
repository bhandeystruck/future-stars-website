// Secondary pages — Programs detail, Admissions (full), Student Life, About, Contact.

const ProgramsPage = ({ onNav }) => {
  const [active, setActive] = React.useState(0);
  const s = [
    {
      pill: "Science", title: "Grade 11 Science", n: "48",
      blurb: "Physics, Chemistry, Biology or Maths. NEB-aligned labs with a dedicated afternoon study block and teacher office hours twice a week.",
      subs: [
        ["Physics", "4 hrs / week · Mr. Adhikari"],
        ["Chemistry", "4 hrs / week · Ms. Gurung"],
        ["Biology", "4 hrs / week · Ms. Shahi"],
        ["Maths", "4 hrs / week · Mr. Basnet"],
        ["English", "3 hrs / week"],
        ["Nepali", "3 hrs / week"],
      ],
      why: "For students who want a medical, engineering or research path. We share NEB-aligned lab equipment with two partner colleges in Lalitpur.",
    },
    {
      pill: "Management", title: "Grade 11 Management", n: "40",
      blurb: "Accountancy, Economics, Business Studies, Marketing. Grade 12 students intern with Kathmandu employers for six weeks.",
      subs: [
        ["Accountancy", "4 hrs / week · Mr. Rajbhandari"],
        ["Economics", "4 hrs / week · Ms. Karki"],
        ["Business Studies", "4 hrs / week"],
        ["Marketing", "3 hrs / week"],
        ["English", "3 hrs / week"],
        ["Nepali", "3 hrs / week"],
      ],
      why: "For students thinking about business, finance, or running their family's shop better. We keep the maths rigorous.",
    },
    {
      pill: "Humanities", title: "Grade 11 Humanities", n: "32",
      blurb: "Nepali, English, Sociology, Political Science. Writing-focused. Every Grade 11 student completes a 40-page community research project.",
      subs: [
        ["Nepali Literature", "4 hrs / week · Mr. Thapa"],
        ["English Literature", "4 hrs / week"],
        ["Sociology", "4 hrs / week"],
        ["Political Science", "4 hrs / week"],
        ["History", "3 hrs / week"],
        ["Mass Comm.", "3 hrs / week"],
      ],
      why: "For students who want to write, teach, research, or enter law. Small cohort, big conversations.",
    },
  ][active];

  return (
    <section className="section">
      <div className="container">
        <EditSecHead num="01" eyebrow="Programs · 2083 BS" title="What your child learns at Future Stars." aside="All three streams follow NEB curriculum. Seats are limited; merit scholarships available." />
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {["Science", "Management", "Humanities"].map((t, i) => (
            <button key={t}
              onClick={() => setActive(i)}
              style={{
                padding: "10px 18px", borderRadius: 999, border: "1px solid " + (active === i ? "var(--color-primary)" : "var(--color-border)"),
                background: active === i ? "var(--color-primary)" : "#fff",
                color: active === i ? "#fff" : "var(--color-text)",
                fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "var(--font-display)",
              }}>{t}</button>
          ))}
        </div>
        <div className="program-detail">
          <div className="program-side">
            <Pill tone="accredited">Accredited · NEB</Pill>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12, margin: "12px 0 4px" }}>
              <div className="big-n">{s.n}</div>
              <div style={{ fontSize: 14, color: "var(--color-text-muted)" }}>seats<br/>2083 BS</div>
            </div>
            <h3 style={{ fontSize: 22, margin: "8px 0 12px" }}>{s.title}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--color-text)", margin: "0 0 20px" }}>{s.blurb}</p>
            <Button variant="primary" size="md" onClick={() => onNav("admissions")}>Apply for this stream</Button>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Subjects & timetable</div>
            <div className="subject-grid">
              {s.subs.map(([sn, sd], i) => (
                <div key={i} className="subject">
                  <div className="sn">{sn}</div>
                  <div className="sd">{sd}</div>
                </div>
              ))}
            </div>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Why this stream</div>
            <p style={{ fontSize: 15, lineHeight: 1.6, margin: 0 }}>{s.why}</p>
            <div style={{ marginTop: 24, padding: 16, background: "var(--color-bg-tint)", borderRadius: 10, fontSize: 14, lineHeight: 1.6 }}>
              <strong style={{ color: "var(--color-primary)" }}>A day in Grade 11:</strong> 8:15 morning assembly · 8:30–1:00 four subject periods · 1:00 lunch · 2:00–3:30 afternoon study block · 3:30–4:30 clubs or tuition.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LifePage = () => {
  const cells = [
    { cls: "tall navy", lab: "Clubs", title: "Debate · Nepali & English", sub: "Weekly, after class" },
    { cls: "", lab: "Sport", title: "Football", sub: "" },
    { cls: "amber", lab: "Arts", title: "Traditional music", sub: "" },
    { cls: "", lab: "STEM", title: "Robotics", sub: "" },
    { cls: "navy", lab: "Research", title: "Community research project", sub: "" },
    { cls: "", lab: "Trek", title: "Himalayan annual trek", sub: "" },
    { cls: "tall", lab: "Showcase", title: "Grade 10 art exhibition", sub: "Open to parents" },
    { cls: "", lab: "Sport", title: "Basketball", sub: "" },
  ];
  return (
    <>
      <section className="section">
        <div className="container">
          <EditSecHead num="01" eyebrow="Student life" title="Clubs, sport, research, and the small things." aside="Every club is student-run, teacher-mentored. Every student joins at least one." />
          <div className="life-gallery">
            {cells.map((c, i) => (
              <div key={i} className={`cell ${c.cls}`}>
                <div>
                  <div className="lab">{c.lab}</div>
                  <div className="title">{c.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section tint">
        <div className="container">
          <EditSecHead num="02" eyebrow="A typical week" title="Beyond the classroom." />
          <div style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr", maxWidth: 800 }}>
            {[
              ["Sun", "Morning assembly · full academic day · debate club"],
              ["Mon", "Science labs (Grade 11–12) · football practice"],
              ["Tue", "Afternoon study block with teacher office hours"],
              ["Wed", "Community research fieldwork (Grade 11 Humanities)"],
              ["Thu", "Robotics · traditional music · basketball"],
              ["Fri", "Half day · class trips · parent-teacher conversations"],
            ].map(([d, t]) => (
              <div key={d} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 16, padding: "14px 0", borderBottom: "1px solid var(--color-border)" }}>
                <strong style={{ color: "var(--color-primary)", fontFamily: "var(--font-display)" }}>{d}</strong>
                <span style={{ fontSize: 15 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const AboutPage = () => (
  <>
    <section className="section">
      <div className="container">
        <EditSecHead num="01" eyebrow="About" title="A school built around real attention." aside="Founded 2064 BS. NEB-affiliated. 480 students. 34 teachers." />
        <div style={{ display: "grid", gap: 32, gridTemplateColumns: "1fr", maxWidth: 860 }}>
          <p style={{ fontSize: 20, lineHeight: 1.55, margin: 0, color: "var(--color-primary)", fontFamily: "var(--font-display)", fontWeight: 500, textWrap: "balance" }}>
            Future Stars opened in 2064 BS with 38 students in a single building in Kathmandu. Today we are Grades 6–12 with 480 students and 34 teachers — still small enough that every teacher knows every student by name.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.75, margin: 0 }}>
            We are NEB-affiliated. We do not chase rankings. We chase the kind of classroom where a quiet Grade 9 student feels safe to ask the question she's been holding for a week. That is our measure.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.75, margin: 0 }}>
            Our parents are shopkeepers, drivers, doctors, teachers, farmers, civil servants. Our scholarships — up to 100% of tuition — keep it that way. Our daily shuttle from Koteshwor, Baneshwor, and Chabahil makes a real Kathmandu school reachable to families across the valley.
          </p>
        </div>
      </div>
    </section>
    <MissionBand />
    <TeachersSection />
  </>
);

const ContactPage = () => (
  <>
    <section className="section">
      <div className="container">
        <EditSecHead num="01" eyebrow="Contact" title="The fastest way to reach us is WhatsApp." aside="We reply within one school day, Sun–Fri." />
        <div className="contact-grid">
          <div className="contact-card">
            <div className="ico"><Icon name="message-circle" size={22} /></div>
            <div>
              <h4>WhatsApp</h4>
              <p>+977 98XX XXX XXX</p>
              <div className="sub">Admissions, school visits, transport — anything.</div>
            </div>
          </div>
          <div className="contact-card">
            <div className="ico"><Icon name="phone" size={22} /></div>
            <div>
              <h4>Phone</h4>
              <p>+977 1 4XXX XXX</p>
              <div className="sub">Front desk · Sun–Fri · 9am–5pm</div>
            </div>
          </div>
          <div className="contact-card">
            <div className="ico"><Icon name="mail" size={22} /></div>
            <div>
              <h4>Email</h4>
              <p>hello@futurestars.edu.np</p>
              <div className="sub">Good for prospectus requests and transcripts.</div>
            </div>
          </div>
          <div className="contact-card">
            <div className="ico"><Icon name="map-pin" size={22} /></div>
            <div>
              <h4>Visit us</h4>
              <p>Kathmandu campus · Sun–Fri 10am–3pm</p>
              <div className="sub">Shuttle from Koteshwor, Baneshwor, Chabahil.</div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 32 }}>
          <div className="map-placeholder">
            <div className="grid-lines" />
            <div className="pin" />
            <div className="label">Future Stars · Kathmandu</div>
          </div>
        </div>
      </div>
    </section>
  </>
);

Object.assign(window, { ProgramsPage, LifePage, AboutPage, ContactPage });
