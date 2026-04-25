"use client";

import { useState } from "react";
import { Award, Calendar, FileText, MapPin } from "lucide-react";
import { Button, WhatsAppButton } from "./Primitives";

type FormState = {
  name: string;
  phone: string;
  stream: string;
};

const BULLETS: [React.ComponentType<{ size: number; style?: React.CSSProperties }>, string][] = [
  [Calendar, "Admissions close 15 Baishakh 2083 (28 Apr 2026)"],
  [Award, "Merit scholarships up to 100% of tuition"],
  [MapPin, "Kathmandu campus · shuttle from 3 neighbourhoods"],
  [FileText, "Grades 6–10 rolling admissions year-round"],
];

export default function AdmissionsSection() {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", stream: "Grade 11 · Science" });
  const [submitted, setSubmitted] = useState(false);

  return (
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
            {BULLETS.map(([Icon, text]) => (
              <li key={text} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 14, color: "var(--color-text)" }}>
                <Icon size={18} style={{ color: "var(--color-primary)" }} />
                {text}
              </li>
            ))}
          </ul>
          <WhatsAppButton size="lg" label="Ask on WhatsApp instead" />
        </div>

        <form className="adm-card" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          <h3>Request a school visit</h3>
          {submitted ? (
            <div style={{ background: "#D6F0E4", color: "#15704F", padding: 16, borderRadius: 8, fontSize: 14 }}>
              Thank you, {form.name || "parent"}. We&apos;ll reply on WhatsApp within one school day.
            </div>
          ) : (
            <>
              <div className="field">
                <label>Parent&apos;s full name</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Suman Shrestha"
                />
              </div>
              <div className="field">
                <label>WhatsApp number</label>
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+977 98…"
                />
                <div className="help">We&apos;ll reply within the school day.</div>
              </div>
              <div className="field">
                <label>Applying for</label>
                <select
                  value={form.stream}
                  onChange={(e) => setForm({ ...form, stream: e.target.value })}
                >
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
}
