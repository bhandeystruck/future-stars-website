import Image from "next/image";
import { EditSecHead } from "@/components/HomeSections";
import { getLifePhotos } from "@/lib/content";
import { urlFor } from "@/lib/sanity";

export const metadata = {
  title: "Student Life · Future Stars High School",
  description: "Clubs, sport, community research, Himalayan treks, and more. Every student joins at least one club.",
};

const PLACEHOLDER_CELLS = [
  { cls: "tall navy", lab: "Clubs", title: "Debate · Nepali & English" },
  { cls: "", lab: "Sport", title: "Football" },
  { cls: "amber", lab: "Arts", title: "Traditional music" },
  { cls: "", lab: "STEM", title: "Robotics" },
  { cls: "navy", lab: "Research", title: "Community research project" },
  { cls: "", lab: "Trek", title: "Himalayan annual trek" },
  { cls: "tall", lab: "Showcase", title: "Grade 10 art exhibition" },
  { cls: "", lab: "Sport", title: "Basketball" },
] as const;

const WEEK = [
  ["Sun", "Morning assembly · full academic day · debate club"],
  ["Mon", "Science labs (Grade 11–12) · football practice"],
  ["Tue", "Afternoon study block with teacher office hours"],
  ["Wed", "Community research fieldwork (Grade 11 Humanities)"],
  ["Thu", "Robotics · traditional music · basketball"],
  ["Fri", "Half day · class trips · parent-teacher conversations"],
] as const;

export default async function LifePage() {
  const lifePhotos = await getLifePhotos();
  const hasPhotos = lifePhotos.length > 0;

  return (
    <main>
      <section className="section">
        <div className="container">
          <EditSecHead
            num="01"
            eyebrow="Student life"
            title="Clubs, sport, research, and the small things."
            aside="Every club is student-run, teacher-mentored. Every student joins at least one."
          />
          <div className="life-gallery">
            {hasPhotos
              ? lifePhotos.map((p) => {
                  const imgUrl = urlFor(p.image)?.width(800).height(800).fit("crop").auto("format").url();
                  return (
                    <div key={p._id} className="cell has-photo">
                      {imgUrl && (
                        <Image
                          src={imgUrl}
                          alt={p.label}
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                          style={{ objectFit: "cover" }}
                        />
                      )}
                      <div className="cell-overlay">
                        <div className="lab">{p.category}</div>
                        <div className="title">{p.label}</div>
                      </div>
                    </div>
                  );
                })
              : PLACEHOLDER_CELLS.map((c, i) => (
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
            {WEEK.map(([day, text]) => (
              <div
                key={day}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: 16,
                  padding: "14px 0",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <strong style={{ color: "var(--color-primary)", fontFamily: "var(--font-display)" }}>
                  {day}
                </strong>
                <span style={{ fontSize: 15 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
