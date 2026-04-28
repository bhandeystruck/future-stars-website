import Image from "next/image";
import { Mic, Monitor, Atom, BookOpen, Utensils } from "lucide-react";
import { Button } from "@/components/Primitives";
import { getFacilitiesPage } from "@/lib/content";
import { urlFor } from "@/lib/sanity";
import type { FacilitiesPageImages } from "@/lib/content";
import type { SanityImage } from "@/lib/sanity";
import type { LucideIcon } from "lucide-react";

export const metadata = {
  title: "Facilities · Future Stars High School",
  description: "World-class facilities for every Future Stars student — auditorium, computer lab, science lab, library, and cafeteria on one campus.",
};

// ---------------------------------------------------------------------------
// Facility data (copy + chips are editorial, photos come from Sanity)
// ---------------------------------------------------------------------------
type Facility = {
  key: keyof FacilitiesPageImages;
  icon: LucideIcon;
  name: string;
  tagline: string;
  body: string;
  chips: string[];
  dark: boolean;
  reverse: boolean;
};

const FACILITIES: Facility[] = [
  {
    key: "auditoriumPhoto",
    icon: Mic,
    name: "Auditorium",
    tagline: "A stage for every voice.",
    body: "Our 400-seat auditorium hosts morning assemblies, annual prize distributions, drama productions, and inter-school competitions throughout the year. Fitted with a professional sound system, adjustable stage lighting, and an elevated proscenium stage that gives students a real performance experience.",
    chips: ["400 seats", "Stage 12m × 8m", "Air-conditioned", "Professional sound"],
    dark: false,
    reverse: false,
  },
  {
    key: "computerLabPhoto",
    icon: Monitor,
    name: "Computer Lab",
    tagline: "Modern tools, real skills.",
    body: "Thirty-six student workstations running Windows 11, connected to high-speed broadband and equipped with licensed Microsoft Office and educational software suites. ICT sessions run from Grade 6 through +2, covering everything from digital literacy to programming fundamentals.",
    chips: ["36 workstations", "Windows 11", "Broadband", "Grades 6–12"],
    dark: true,
    reverse: true,
  },
  {
    key: "scienceLabPhoto",
    icon: Atom,
    name: "Science Lab",
    tagline: "Discovery starts here.",
    body: "Separate Physics, Chemistry, and Biology laboratory rooms, each fitted with experiment-grade apparatus, fume hoods in Chemistry, and live specimen tanks in Biology. A shared preparation room serves all three. The full NEB practical curriculum is covered on-site — no student misses a practical.",
    chips: ["3 dedicated rooms", "NEB-aligned practicals", "Fume hoods", "Grades 9–12"],
    dark: false,
    reverse: false,
  },
  {
    key: "libraryPhoto",
    icon: BookOpen,
    name: "Library",
    tagline: "8,000 titles and one quiet rule.",
    body: "A curated collection of over 8,000 books in Nepali and English — fiction, reference, science, and exam-prep titles across every subject. Two reading zones: a silent room for Grade 10–12 board exam preparation, and a collaborative reading corner for junior grades. Open every school day.",
    chips: ["8,000+ titles", "Nepali & English", "2 reading zones", "Open daily"],
    dark: true,
    reverse: true,
  },
  {
    key: "cafeteriaPhoto",
    icon: Utensils,
    name: "Cafeteria",
    tagline: "Fuel for the afternoon.",
    body: "Warm, hygienic meals prepared fresh each morning — dal bhat, noodles, sandwiches, and seasonal specials. Separate seating areas for junior and senior students. All food is handled by our trained in-house kitchen team, with monthly inspections by the school health committee.",
    chips: ["Daily fresh meals", "200-seat dining", "Monthly inspections", "In-house kitchen"],
    dark: false,
    reverse: false,
  },
];

// ---------------------------------------------------------------------------
// FacilitySection component
// ---------------------------------------------------------------------------
function FacilitySection({
  facility,
  photo,
}: {
  facility: Facility;
  photo?: SanityImage;
}) {
  const { icon: Icon, name, tagline, body, chips, dark, reverse } = facility;

  const photoSrc = photo
    ? urlFor(photo)?.width(900).height(675).fit("crop").auto("format").url()
    : null;

  return (
    <section className={`facility-section${dark ? " dark" : ""}`}>
      <div className="container">
        <div className={`facility-grid${reverse ? " reverse" : ""}`}>
          {/* Content */}
          <div className="facility-content">
            <div className="facility-icon-badge">
              <Icon size={24} />
            </div>
            <p className="facility-eyebrow">Facilities</p>
            <h2 className="facility-title">{name}</h2>
            <p className="facility-tagline">{tagline}</p>
            <p className="facility-body">{body}</p>
            <div className="facility-chips">
              {chips.map((chip) => (
                <span key={chip} className="facility-chip">{chip}</span>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="facility-photo-wrap">
            <div className="facility-photo">
              {photoSrc ? (
                <Image
                  src={photoSrc}
                  alt={name}
                  fill
                  sizes="(max-width:1023px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <div className="facility-photo-placeholder">
                  <Icon size={64} strokeWidth={1} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default async function StudentLifePage() {
  const images = await getFacilitiesPage();

  return (
    <main>
      {/* Hero */}
      <section className="facility-hero">
        <div className="container" style={{ position: "relative" }}>
          <p className="eyebrow">Facilities</p>
          <h1 className="facility-hero-h1">
            Life at<br /><em>Future Stars</em>
          </h1>
          <p className="facility-hero-lead">
            Five purpose-built facilities on one campus in Kathmandu.
            Every student, well-resourced from Grade 6 through to +2.
          </p>
        </div>
      </section>

      {/* Facility sections */}
      {FACILITIES.map((f) => (
        <FacilitySection
          key={f.key}
          facility={f}
          photo={images[f.key]}
        />
      ))}

      {/* CTA */}
      <div className="facility-cta">
        <div className="container">
          <p className="facility-cta-eyebrow">Come and see</p>
          <h2>See every room.<br />Ask every question.</h2>
          <p>
            Campus visits run Sunday through Friday, 10 am to 3 pm.
            No appointment needed — just walk in.
          </p>
          <div className="facility-cta-btns">
            <Button variant="primary" size="lg" href="/contact">
              Get directions
            </Button>
            <Button variant="secondary" size="lg" href="/admissions">
              Admissions 2083 BS
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
