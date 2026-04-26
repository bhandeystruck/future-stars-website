import Image from "next/image";
import { EditSecHead, MissionBand } from "@/components/HomeSections";
import { PhotoPlaceholder } from "@/components/Primitives";
import { HistorySection, AimsSection, PoliciesSection, SENSection } from "@/components/AboutSections";
import TeachersSection from "@/components/TeachersSection";
import { getTeachers, getAboutPage } from "@/lib/content";
import { urlFor } from "@/lib/sanity";

export const metadata = {
  title: "About · Future Stars High School",
  description: "Founded 2064 BS. NEB-affiliated. 480 students, 34 teachers — still small enough that every teacher knows every student by name.",
};

export default async function AboutPage() {
  const [teachers, about] = await Promise.all([getTeachers(), getAboutPage()]);

  const campusUrl = about.campusPhoto
    ? urlFor(about.campusPhoto)?.width(1400).height(438).fit("crop").auto("format").url()
    : null;

  return (
    <main>
      {/* 01 — Intro */}
      <section className="section">
        <div className="container">
          <EditSecHead
            num="01"
            eyebrow="About"
            title="A school built around real attention."
            aside="Founded 2064 BS. NEB-affiliated. 480 students. 34 teachers."
          />
          <div style={{ display: "grid", gap: 32, gridTemplateColumns: "1fr", maxWidth: 860 }}>
            <p style={{ fontSize: 20, lineHeight: 1.55, margin: 0, color: "var(--color-primary)", fontFamily: "var(--font-display)", fontWeight: 500 }}>
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

          {/* Wide campus photo */}
          <div className="about-hero-photo">
            {campusUrl ? (
              <Image
                src={campusUrl}
                alt="Campus · Future Stars, Kathmandu"
                fill
                sizes="(max-width:767px) calc(100vw - 32px), 1152px"
                style={{ objectFit: "cover" }}
                priority
              />
            ) : (
              <PhotoPlaceholder label="Campus · Future Stars, Kathmandu" tone="navy" />
            )}
          </div>
        </div>
      </section>

      {/* 02 — History */}
      <HistorySection
        photo1={about.historyPhoto1}
        photo2={about.historyPhoto2}
      />

      {/* Mission band */}
      <MissionBand />

      {/* 03 — Aims */}
      <AimsSection
        photos={[about.aimsPhoto1, about.aimsPhoto2, about.aimsPhoto3, about.aimsPhoto4]}
      />

      {/* 04 — Policies */}
      <PoliciesSection photo={about.policiesPhoto} />

      {/* 05 — SEN */}
      <SENSection photo={about.senPhoto} />

      {/* Teachers */}
      <TeachersSection items={teachers} />
    </main>
  );
}
