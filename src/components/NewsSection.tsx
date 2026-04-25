import type { NewsItem } from "@/lib/content";
import { EditSecHead } from "./HomeSections";

const TAG_LABELS: Record<NewsItem["tag"], string> = {
  event: "Event",
  results: "Results",
  news: "News",
};

export default function NewsSection({ items }: { items: NewsItem[] }) {
  return (
    <section className="section tint">
      <div className="container">
        <EditSecHead
          num="04"
          eyebrow="News & events"
          title="What has been happening at Future Stars."
          aside="Updated in Bikram Sambat. Gregorian dates below."
        />
        <div className="news-row">
          {items.map((n) => (
            <article key={n.id}>
              <div className="date">
                <div className="d">{n.day}</div>
                <div className="m">
                  {n.month} {n.year}
                </div>
              </div>
              <div>
                <h3>{n.title}</h3>
                <p className="excerpt">{n.excerpt}</p>
              </div>
              <span className={`tag ${n.tag}`}>{TAG_LABELS[n.tag]}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
