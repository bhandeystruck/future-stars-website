import type { Teacher } from "@/lib/content";
import { EditSecHead } from "./HomeSections";

export default function TeachersSection({ items }: { items: Teacher[] }) {
  return (
    <section className="section">
      <div className="container">
        <EditSecHead
          num="03"
          eyebrow="Our teachers"
          title="Specialists, not generalists. Hired for care as much as for subject."
          aside="34 teachers across Grades 6–12. Average tenure: 7 years."
        />
        <div className="teachers">
          {items.map((t) => (
            <div key={t.id} className="teacher">
              <div className="portrait">{t.initials}</div>
              <div className="meta">
                <div className="n">{t.name}</div>
                <div className="r">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
