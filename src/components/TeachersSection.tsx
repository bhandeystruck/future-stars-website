import Image from "next/image";
import type { Teacher } from "@/lib/content";
import { urlFor } from "@/lib/sanity";
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
          {items.map((t) => {
            const imgUrl = t.image ? urlFor(t.image)?.width(400).height(533).fit("crop").auto("format").url() : null;
            return (
              <div key={t.id} className="teacher">
                <div className={`portrait${imgUrl ? " has-photo" : ""}`}>
                  {imgUrl ? (
                    <Image
                      src={imgUrl}
                      alt={t.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    t.initials
                  )}
                </div>
                <div className="meta">
                  <div className="n">{t.name}</div>
                  <div className="r">{t.role}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
