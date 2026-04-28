import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Images } from "lucide-react";
import GalleryClient, { type GalleryPhoto } from "@/components/GalleryClient";
import { getEventBySlug } from "@/lib/content";
import { urlFor } from "@/lib/sanity";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const ev = await getEventBySlug(slug);
  if (!ev) return {};
  return {
    title: `${ev.name} · Future Stars Gallery`,
    description: ev.description ?? `Photos from ${ev.name} at Future Stars High School.`,
  };
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const ev = await getEventBySlug(slug);

  if (!ev) notFound();

  const photos: GalleryPhoto[] = (ev.photos ?? [])
    .filter((p) => p.asset)
    .map((p) => ({
      _id: p._key,
      src: urlFor(p)?.width(640).height(480).fit("crop").auto("format").url() ?? "",
      srcLarge: urlFor(p)?.width(1800).auto("format").url() ?? "",
    }));

  const dateLabel = ev.date
    ? new Date(ev.date).toLocaleDateString("en-NP", { day: "numeric", month: "long", year: "numeric" })
    : null;

  return (
    <main>
      <section className="section">
        <div className="container">
          <Link href="/gallery" className="event-back">
            <ArrowLeft size={16} />
            All events
          </Link>

          <div className="event-header">
            <span className="event-header-cat">{ev.category}</span>
            <h1 className="event-header-title">{ev.name}</h1>
            <div className="event-header-meta">
              {dateLabel && <span><Calendar size={14} />{dateLabel}</span>}
              <span><Images size={14} />{photos.length} photo{photos.length !== 1 ? "s" : ""}</span>
            </div>
            {ev.description && <p className="event-header-desc">{ev.description}</p>}
          </div>

          <GalleryClient photos={photos} />
        </div>
      </section>
    </main>
  );
}
