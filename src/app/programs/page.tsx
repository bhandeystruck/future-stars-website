import Image from "next/image";
import { Palette, Dumbbell, Music2, Trophy, Mic } from "lucide-react";
import { EditSecHead } from "@/components/HomeSections";
import ProgramsTabs from "@/components/ProgramsTabs";
import { getClubsPage } from "@/lib/content";
import { urlFor } from "@/lib/sanity";
import type { ClubsPageImages } from "@/lib/content";
import type { SanityImage } from "@/lib/sanity";
import type { LucideIcon } from "lucide-react";

export const metadata = {
  title: "Programs · Future Stars High School",
  description: "Grade 11 Science, Management, and Humanities streams plus clubs in Arts, Karate, Music, Sports, and VOFS.",
};

type Club = {
  key: keyof ClubsPageImages;
  icon: LucideIcon;
  name: string;
  tagline: string;
  body: string;
  chips: string[];
  dark: boolean;
  reverse: boolean;
};

const CLUBS: Club[] = [
  {
    key: "artsPhoto",
    icon: Palette,
    name: "Arts",
    tagline: "Where creativity finds its voice.",
    body: "From freehand sketching to mixed-media collage, our Arts club runs twice a week under a trained visual artist. Students explore colour theory, composition, and self-expression at their own pace. Every year-end, their work fills the school corridors for the Annual Arts Exhibition — open to families and the community.",
    chips: ["Grades 6–12", "Tue & Thu · 3:30–4:30 pm", "Annual exhibition", "Free with enrolment"],
    dark: false,
    reverse: false,
  },
  {
    key: "karatePhoto",
    icon: Dumbbell,
    name: "Karate",
    tagline: "Discipline that shows up in every class.",
    body: "NKF-affiliated training that takes students from white belt to brown belt over three years. Twice-weekly sessions focus on stances, kata, and controlled sparring. Students who complete the programme sit for grading exams recognised by the Nepal Karate Federation — a credential that follows them beyond school.",
    chips: ["Grades 6–12", "Mon & Wed · 3:30–5:00 pm", "NKF affiliated", "Belt grading exams"],
    dark: true,
    reverse: true,
  },
  {
    key: "musicPhoto",
    icon: Music2,
    name: "Music",
    tagline: "Find your sound. Perform for real.",
    body: "Vocals, guitar, madal, and keyboard — students choose one instrument and build from basics to performance level. The Music club performs at every school event, the Dashain cultural programme, and the Annual Music Night open to families. No prior experience needed; just the willingness to practise.",
    chips: ["Grades 6–12", "Fri · 2:00–4:00 pm", "Annual Music Night", "No experience needed"],
    dark: false,
    reverse: false,
  },
  {
    key: "sportsPhoto",
    icon: Trophy,
    name: "Sports",
    tagline: "Compete. Lose well. Win better.",
    body: "Football, basketball, volleyball, and badminton run daily after school with structured coaching. School teams compete in inter-school tournaments every Spring and Autumn. All equipment is provided — students only need their energy. Consistent attendance earns a place on the school's competition squad.",
    chips: ["Grades 6–12", "Daily · 3:30–5:00 pm", "Inter-school tournaments", "All equipment provided"],
    dark: true,
    reverse: true,
  },
  {
    key: "vofsPhoto",
    icon: Mic,
    name: "VOFS — Voice of Future Stars",
    tagline: "Speak up. Be heard.",
    body: "Voice of Future Stars is our student newsroom — part broadcast club, part debate team, part speaking school. Members write and present weekly news bulletins, compete in structured debate rounds, and receive one-on-one coaching from a working journalist. VOFS alumni have gone on to win national debate competitions.",
    chips: ["Grades 8–12", "Wed · 2:00–4:00 pm", "Weekly broadcasts", "Debate competitions"],
    dark: false,
    reverse: false,
  },
];

function ClubSection({ club, photo }: { club: Club; photo?: SanityImage }) {
  const { icon: Icon, name, tagline, body, chips, dark, reverse } = club;

  const photoSrc = photo
    ? urlFor(photo)?.width(900).height(675).fit("crop").auto("format").url()
    : null;

  return (
    <section className={`facility-section${dark ? " dark" : ""}`}>
      <div className="container">
        <div className={`facility-grid${reverse ? " reverse" : ""}`}>
          <div className="facility-content">
            <div className="facility-icon-badge">
              <Icon size={24} />
            </div>
            <p className="facility-eyebrow">Clubs &amp; Activities</p>
            <h2 className="facility-title">{name}</h2>
            <p className="facility-tagline">{tagline}</p>
            <p className="facility-body">{body}</p>
            <div className="facility-chips">
              {chips.map((chip) => (
                <span key={chip} className="facility-chip">{chip}</span>
              ))}
            </div>
          </div>

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

export default async function ProgramsPage() {
  const clubImages = await getClubsPage();

  return (
    <main>
      {/* Section 01 — Academic streams */}
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

      {/* Section 02 header */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <EditSecHead
            num="02"
            eyebrow="Beyond the classroom"
            title="Clubs &amp; Activities"
            aside="Included with enrolment · open to all grades"
          />
        </div>
      </section>

      {/* Alternating club sections */}
      {CLUBS.map((club) => (
        <ClubSection key={club.key} club={club} photo={clubImages[club.key]} />
      ))}
    </main>
  );
}
