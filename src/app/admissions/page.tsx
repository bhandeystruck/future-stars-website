import { EditSecHead } from "@/components/HomeSections";
import AdmissionsSection from "@/components/AdmissionsSection";

export const metadata = {
  title: "Admissions · Future Stars High School",
  description: "Book a school visit or apply for 2083 BS. Merit scholarships available up to 100% of tuition.",
};

export default function AdmissionsPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <EditSecHead
            num="01"
            eyebrow="Admissions · 2083 BS"
            title="We'd love to show you around."
            aside="Admissions close 15 Baishakh 2083 (28 Apr 2026). Rolling admissions for Grades 6–10."
          />
        </div>
      </section>
      <AdmissionsSection />
    </main>
  );
}
