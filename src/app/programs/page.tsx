import { EditSecHead } from "@/components/HomeSections";
import ProgramsTabs from "@/components/ProgramsTabs";

export const metadata = {
  title: "Programs · Future Stars High School",
  description: "Grade 11 Science, Management, and Humanities streams. NEB-affiliated. Seats limited.",
};

export default function ProgramsPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <EditSecHead
            num="01"
            eyebrow="Programs · 2083 BS"
            title="What your child learns at Future Stars."
            aside="All three streams follow NEB curriculum. Seats are limited; merit scholarships available."
          />
          <ProgramsTabs />
        </div>
      </section>
    </main>
  );
}
