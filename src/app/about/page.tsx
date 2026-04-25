import { EditSecHead, MissionBand } from "@/components/HomeSections";
import TeachersSection from "@/components/TeachersSection";
import { getTeachers } from "@/lib/content";

export const metadata = {
  title: "About · Future Stars High School",
  description: "Founded 2064 BS. NEB-affiliated. 480 students, 34 teachers — still small enough that every teacher knows every student by name.",
};

export default async function AboutPage() {
  const teachers = await getTeachers();

  return (
    <main>
      <section className="section">
        <div className="container">
          <EditSecHead
            num="01"
            eyebrow="About"
            title="A school built around real attention."
            aside="Founded 2064 BS. NEB-affiliated. 480 students. 34 teachers."
          />
          <div style={{ display: "grid", gap: 32, gridTemplateColumns: "1fr", maxWidth: 860 }}>
            <p
              style={{
                fontSize: 20,
                lineHeight: 1.55,
                margin: 0,
                color: "var(--color-primary)",
                fontFamily: "var(--font-display)",
                fontWeight: 500,
              }}
            >
              Future Stars opened in 2064 BS with 38 students in a single building in Kathmandu.
              Today we are Grades 6–12 with 480 students and 34 teachers — still small enough
              that every teacher knows every student by name.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.75, margin: 0 }}>
              We are NEB-affiliated. We do not chase rankings. We chase the kind of classroom where
              a quiet Grade 9 student feels safe to ask the question she&apos;s been holding for a
              week. That is our measure.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.75, margin: 0 }}>
              Our parents are shopkeepers, drivers, doctors, teachers, farmers, civil servants.
              Our scholarships — up to 100% of tuition — keep it that way. Our daily shuttle from
              Koteshwor, Baneshwor, and Chabahil makes a real Kathmandu school reachable to
              families across the valley.
            </p>
          </div>
        </div>
      </section>
      <MissionBand />
      <TeachersSection items={teachers} />
    </main>
  );
}
