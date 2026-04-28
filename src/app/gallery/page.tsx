import Link from "next/link";
import Image from "next/image";
import { Calendar, Images } from "lucide-react";
import { EditSecHead } from "@/components/HomeSections";
import { getEvents } from "@/lib/content";
import { urlFor } from "@/lib/sanity";

export const metadata = {
  title: "Gallery · Future Stars High School",
  description: "Photos from sports days, treks, science fairs, arts events, and daily campus life.",
};

const CATEGORY_COLORS: Record<string, string> = {
  Sports: "var(--color-success)",
  Arts: "#9b59b6",
  STEM: "var(--color-primary)",
  Trek: "#27ae60",
  Research: "#e67e22",
  Events: "var(--color-accent)",
  Clubs: "#2980b9",
  Campus: "var(--color-text-muted)",
};

export default async function GalleryPage() {
  const events = await getEvents();

  return (
    <main>
      <section className="section">
        <div className="container">
          <EditSecHead
            num="01"
            eyebrow="Gallery"
            title="Every event, remembered."
            aside={`${events.length} event${events.length !== 1 ? "s" : ""} · click any to see all photos`}
          />

          {events.length === 0 ? (
            <div className="gallery-empty">
              No events yet — create your first event in Sanity Studio under <strong>Events</strong>, then add photos.
            </div>
          ) : (
            <div className="events-grid">
              {events.map((ev) => {
                const coverSrc = ev.coverPhoto
                  ? urlFor(ev.coverPhoto)?.width(640).height(480).fit("crop").auto("format").url()
                  : null;
                const color = CATEGORY_COLORS[ev.category] ?? "var(--color-primary)";
                const dateLabel = ev.date
                  ? new Date(ev.date).toLocaleDateString("en-NP", { day: "numeric", month: "long", year: "numeric" })
                  : null;

                return (
                  <Link key={ev._id} href={`/gallery/${ev.slug}`} className="event-card">
                    <div className="event-card-photo">
                      {coverSrc ? (
                        <Image
                          src={coverSrc}
                          alt={ev.name}
                          fill
                          sizes="(max-width:599px) 100vw, (max-width:1023px) 50vw, 33vw"
                          style={{ objectFit: "cover" }}
                        />
                      ) : (
                        <div className="event-card-photo-placeholder" />
                      )}
                      <span className="event-cat-pill" style={{ background: color }}>
                        {ev.category}
                      </span>
                    </div>
                    <div className="event-card-body">
                      <h3 className="event-card-name">{ev.name}</h3>
                      <div className="event-card-meta">
                        {dateLabel && (
                          <span><Calendar size={13} />{dateLabel}</span>
                        )}
                        <span><Images size={13} />{ev.photoCount} photo{ev.photoCount !== 1 ? "s" : ""}</span>
                      </div>
                      {ev.description && (
                        <p className="event-card-desc">{ev.description}</p>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
