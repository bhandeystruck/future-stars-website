"use client";

import { useState } from "react";
import Link from "next/link";
import { Pill, Button } from "./Primitives";

const STREAMS = [
  {
    pill: "Science",
    title: "Grade 11 Science",
    n: "48",
    blurb:
      "Physics, Chemistry, Biology or Maths. NEB-aligned labs with a dedicated afternoon study block and teacher office hours twice a week.",
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
    pill: "Management",
    title: "Grade 11 Management",
    n: "40",
    blurb:
      "Accountancy, Economics, Business Studies, Marketing. Grade 12 students intern with Kathmandu employers for six weeks.",
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
    pill: "Humanities",
    title: "Grade 11 Humanities",
    n: "32",
    blurb:
      "Nepali, English, Sociology, Political Science. Writing-focused. Every Grade 11 student completes a 40-page community research project.",
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
] as const;

export default function ProgramsTabs() {
  const [active, setActive] = useState(0);
  const s = STREAMS[active];

  return (
    <>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
        {STREAMS.map((stream, i) => (
          <button
            key={stream.pill}
            onClick={() => setActive(i)}
            style={{
              padding: "10px 18px",
              borderRadius: 999,
              border: `1px solid ${active === i ? "var(--color-primary)" : "var(--color-border)"}`,
              background: active === i ? "var(--color-primary)" : "#fff",
              color: active === i ? "#fff" : "var(--color-text)",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "var(--font-display)",
            }}
          >
            {stream.pill}
          </button>
        ))}
      </div>

      <div className="program-detail">
        <div className="program-side">
          <Pill tone="accredited">Accredited · NEB</Pill>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, margin: "12px 0 4px" }}>
            <div className="big-n">{s.n}</div>
            <div style={{ fontSize: 14, color: "var(--color-text-muted)" }}>
              seats<br />2083 BS
            </div>
          </div>
          <h3 style={{ fontSize: 22, margin: "8px 0 12px" }}>{s.title}</h3>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--color-text)", margin: "0 0 20px" }}>
            {s.blurb}
          </p>
          <Button variant="primary" size="md" href="/admissions">
            Apply for this stream
          </Button>
        </div>

        <div>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Subjects &amp; timetable</div>
          <div className="subject-grid">
            {s.subs.map(([sn, sd]) => (
              <div key={sn} className="subject">
                <div className="sn">{sn}</div>
                <div className="sd">{sd}</div>
              </div>
            ))}
          </div>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Why this stream</div>
          <p style={{ fontSize: 15, lineHeight: 1.6, margin: 0 }}>{s.why}</p>
          <div
            style={{
              marginTop: 24,
              padding: 16,
              background: "var(--color-bg-tint)",
              borderRadius: 10,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "var(--color-primary)" }}>A day in Grade 11:</strong>{" "}
            8:15 morning assembly · 8:30–1:00 four subject periods · 1:00 lunch · 2:00–3:30 afternoon study block · 3:30–4:30 clubs or tuition.
          </div>
        </div>
      </div>
    </>
  );
}
