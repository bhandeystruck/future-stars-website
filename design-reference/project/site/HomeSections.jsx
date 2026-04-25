// Home-page sections (non-hero) and Mission band.

const EditSecHead = ({ num, eyebrow, title, aside }) => (
  <div className="sec-head-edit">
    <div>
      <div className="num">{num}</div>
    </div>
    <div>
      <div className="rule" />
      <div className="eyebrow" style={{ marginBottom: 8 }}>{eyebrow}</div>
      <h2>{title}</h2>
    </div>
    {aside && <div className="aside">{aside}</div>}
  </div>
);

const TrustStrip = () => (
  <div className="trust">
    <div className="container trust-row">
      <div className="trust-item"><Icon name="shield-check" size={18} />NEB-affiliated since 2064 BS</div>
      <div className="trust-item"><Icon name="award" size={18} />92% +2 pass rate · last 3 yrs</div>
      <div className="trust-item"><Icon name="users" size={18} />1:14 teacher ratio</div>
      <div className="trust-item"><Icon name="map-pin" size={18} />Shuttles from Koteshwor, Baneshwor, Chabahil</div>
    </div>
  </div>
);

const MissionBand = () => (
  <section className="mission">
    <div className="container" style={{ position: "relative" }}>
      <div className="eyebrow" style={{ marginBottom: 12 }}>Our promise</div>
      <h2>We do not chase rankings. We chase the quiet moments where a student asks the question she's been holding for a week.</h2>
      <p style={{ marginTop: 20 }}>
        Future Stars opened in 2064 BS with 38 students in a single building in
        Kathmandu. Today we are Grades 6–12 — still small enough that every teacher
        knows every student by name.
      </p>
      <div className="mission-grid">
        <div className="mi">
          <h4>Known by name</h4>
          <p>34 teachers for 480 students. The principal greets every Grade 6 parent at the gate in the first week.</p>
        </div>
        <div className="mi">
          <h4>Nepali first</h4>
          <p>NEB curriculum in English with Nepali literature, history, and civics taught by specialists, not generalists.</p>
        </div>
        <div className="mi">
          <h4>Whole-child</h4>
          <p>Daily afternoon study block. Weekly clubs. Annual Himalayan trek. Report cards track more than marks.</p>
        </div>
      </div>
    </div>
  </section>
);

const StatsSection = () => (
  <section className="section">
    <div className="container">
      <EditSecHead num="01" eyebrow="By the numbers" title="Real attention, not just small classes." aside="These are not projections — this is the last three years of graduates." />
      <div className="stat-grid">
        <StatBlock n="480" label="Students, Grades 6–12" />
        <StatBlock n="1:14" label="Teacher-to-student ratio" />
        <StatBlock n="92" suffix="%" label="+2 pass rate (3-yr avg)" />
        <StatBlock n="2064" label="NEB-affiliated since (BS)" />
      </div>
    </div>
  </section>
);

const STREAMS = [
  { pill: "Science", title: "Grade 11 Science", body: "Physics, Chemistry, and Biology or Maths. NEB-aligned labs and a dedicated afternoon study block.", seats: "48 seats", subs: ["Physics", "Chemistry", "Biology", "Maths"] },
  { pill: "Management", title: "Grade 11 Management", body: "Accountancy, Economics, Business Studies. Real case work with Kathmandu employers in Grade 12.", seats: "40 seats", subs: ["Accountancy", "Economics", "Business", "Marketing"] },
  { pill: "Humanities", title: "Grade 11 Humanities", body: "Nepali, English, Sociology, Political Science. Writing-focused, with a required community research project.", seats: "32 seats", subs: ["Nepali", "English", "Sociology", "Pol. Sci."] },
];

const StreamsSection = ({ onNav }) => (
  <section className="section tint">
    <div className="container">
      <EditSecHead num="02" eyebrow="Grade 11 streams · 2083 BS" title="Three streams. One family of teachers." aside="Every stream meets the same afternoon study block and shares the same clubs." />
      <div className="stream-grid">
        {STREAMS.map((s, i) => (
          <article key={i} className="stream">
            <div className="photo"><PhotoPlaceholder label={`${s.pill} classroom`} /></div>
            <div className="body">
              <span className="pill">{s.pill} stream</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <div className="foot">
                <span>{s.seats} · 2083 BS</span>
                <a href="#programs" onClick={(e) => { e.preventDefault(); onNav("programs"); }}>Read more →</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const TestimonialSection = () => (
  <section className="section">
    <div className="container">
      <div className="quote">
        <div className="mark">"</div>
        <blockquote>
          She comes home excited about chemistry class. That's all I needed to know.
        </blockquote>
        <div className="by">
          <strong>Sunita Karki</strong> · Parent, Grade 11 Science · Baneshwor
        </div>
      </div>
    </div>
  </section>
);

const TEACHERS = [
  { n: "Anjali Shrestha", r: "Principal · Physics", init: "AS" },
  { n: "Rajan Thapa", r: "Head of Humanities", init: "RT" },
  { n: "Pratibha Gurung", r: "Chemistry · Grade 11–12", init: "PG" },
  { n: "Dipesh Basnet", r: "Maths · Grade 9–12", init: "DB" },
];

const TeachersSection = () => (
  <section className="section">
    <div className="container">
      <EditSecHead num="03" eyebrow="Our teachers" title="Specialists, not generalists. Hired for care as much as for subject." aside="34 teachers across Grades 6–12. Average tenure: 7 years." />
      <div className="teachers">
        {TEACHERS.map((t, i) => (
          <div key={i} className="teacher">
            <div className="portrait">{t.init}</div>
            <div className="meta">
              <div className="n">{t.n}</div>
              <div className="r">{t.r}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const NEWS = [
  { d: "08", m: "Baishakh", y: "2083", title: "Open house for 2083 BS applicants", excerpt: "Tour classrooms, meet the principal, bring every hard question. Sun–Fri, 10am–3pm.", tag: "event" },
  { d: "28", m: "Chaitra", y: "2082", title: "92% of our +2 cohort passed NEB first attempt", excerpt: "Nine students scored above 3.8 GPA across Science and Management streams.", tag: "results" },
  { d: "14", m: "Chaitra", y: "2082", title: "Grade 9 community research project — published", excerpt: "A 40-page report on waste management in Baneshwor, researched, written, printed by students.", tag: "news" },
  { d: "02", m: "Falgun", y: "2082", title: "Annual Himalayan trek — Mardi Himal, Grade 10", excerpt: "Five days, three teachers, thirty-two students. Nobody turned back.", tag: "news" },
];

const NewsSection = () => (
  <section className="section tint">
    <div className="container">
      <EditSecHead num="04" eyebrow="News & events" title="What has been happening at Future Stars." aside="Updated in Bikram Sambat. Gregorian dates below." />
      <div className="news-row">
        {NEWS.map((n, i) => (
          <article key={i}>
            <div className="date">
              <div className="d">{n.d}</div>
              <div className="m">{n.m} {n.y}</div>
            </div>
            <div>
              <h3>{n.title}</h3>
              <p className="excerpt">{n.excerpt}</p>
            </div>
            <span className={`tag ${n.tag}`}>{n.tag === "event" ? "Event" : n.tag === "results" ? "Results" : "News"}</span>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const AdmissionsSection = ({ form, setForm, submitted, onSubmit }) => (
  <section id="admissions" className="section">
    <div className="container adm">
      <div>
        <div className="eyebrow">Admissions · 2083 BS</div>
        <h2>Book a school visit — or apply today.</h2>
        <p style={{ color: "var(--color-text)", lineHeight: 1.7, margin: "0 0 20px" }}>
          Tour classrooms, meet the principal, and ask every hard question. Visits
          run Sun–Fri, 10am–3pm. Bring your child if you can.
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "grid", gap: 10 }}>
          {[
            ["calendar", "Admissions close 15 Baishakh 2083 (28 Apr 2026)"],
            ["award", "Merit scholarships up to 100% of tuition"],
            ["map-pin", "Kathmandu campus · shuttle from 3 neighbourhoods"],
            ["file-text", "Grades 6–10 rolling admissions year-round"],
          ].map(([ic, t]) => (
            <li key={t} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 14, color: "var(--color-text)" }}>
              <Icon name={ic} size={18} style={{ color: "var(--color-primary)" }} />
              {t}
            </li>
          ))}
        </ul>
        <WhatsAppButton size="lg" label="Ask on WhatsApp instead" />
      </div>
      <form className="adm-card" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
        <h3>Request a school visit</h3>
        {submitted ? (
          <div style={{ background: "#D6F0E4", color: "#15704F", padding: 16, borderRadius: 8, fontSize: 14 }}>
            Thank you, {form.name || "parent"}. We'll reply on WhatsApp within one school day.
          </div>
        ) : (
          <>
            <div className="field">
              <label>Parent's full name</label>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Suman Shrestha" />
            </div>
            <div className="field">
              <label>WhatsApp number</label>
              <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+977 98…" />
              <div className="help">We'll reply within the school day.</div>
            </div>
            <div className="field">
              <label>Applying for</label>
              <select value={form.stream} onChange={(e) => setForm({ ...form, stream: e.target.value })}>
                <option>Grade 11 · Science</option>
                <option>Grade 11 · Management</option>
                <option>Grade 11 · Humanities</option>
                <option>Grade 6–10</option>
              </select>
            </div>
            <Button variant="primary" size="lg" type="submit">Request a visit</Button>
          </>
        )}
      </form>
    </div>
  </section>
);

Object.assign(window, { TrustStrip, MissionBand, StatsSection, StreamsSection, TestimonialSection, TeachersSection, NewsSection, AdmissionsSection, EditSecHead });
