import Image from "next/image";
import {
  GraduationCap,
  Heart,
  Users,
  Globe,
  FileText,
  Award,
  CalendarCheck,
  ShieldCheck,
  BookOpen,
  Bus,
  Brain,
  ClipboardList,
  MessageSquare,
  Smile,
} from "lucide-react";
import { EditSecHead } from "./HomeSections";
import { PhotoPlaceholder } from "./Primitives";
import { urlFor } from "@/lib/sanity";
import type { SanityImage } from "@/lib/sanity";

/* ==========================================================================
   HistorySection
   ========================================================================== */
const MILESTONES = [
  {
    year: "2064 BS",
    title: "Founded",
    body: "Future Stars opened with 38 students and a single building in Lalitpur. From the first day, every teacher knew every student by name.",
  },
  {
    year: "2067 BS",
    title: "NEB affiliation secured",
    body: "The school became officially affiliated with the National Examinations Board, anchoring all Grade 9–12 programmes to Nepal's national curriculum.",
  },
  {
    year: "2070 BS",
    title: "Grade 11 Science stream launched",
    body: "A dedicated lab wing was built. Physics, Chemistry, and Biology classes moved into purpose-built rooms with full NEB-aligned equipment.",
  },
  {
    year: "2074 BS",
    title: "Management & Humanities streams added",
    body: "Grade 11 expanded to three streams. The Humanities programme introduced a required community research project, now in its ninth year.",
  },
  {
    year: "2078 BS",
    title: "Valley-wide shuttle service",
    body: "Daily school shuttles from Koteshwor, Baneshwor, and Chabahil, making Future Stars reachable to families across the Kathmandu valley.",
  },
  {
    year: "2082 BS",
    title: "92% NEB pass rate · 480 students",
    body: "Our largest cohort yet. Nine students scored above 3.8 GPA. The afternoon study block and teacher-to-student ratio remain unchanged.",
  },
] as const;

export function HistorySection({
  photo1,
  photo2,
}: {
  photo1?: SanityImage;
  photo2?: SanityImage;
}) {
  const url1 = photo1 ? urlFor(photo1)?.width(680).height(510).fit("crop").auto("format").url() : null;
  const url2 = photo2 ? urlFor(photo2)?.width(680).height(510).fit("crop").auto("format").url() : null;

  return (
    <section className="section">
      <div className="container">
        <EditSecHead
          num="02"
          eyebrow="Our history"
          title="Twenty years of keeping the same promise."
          aside="Every milestone below was driven by families, not rankings."
        />
        <div className="history-layout">
          <div className="history-list">
            {MILESTONES.map((m, i) => (
              <div key={i} className={`history-item${i === MILESTONES.length - 1 ? " last" : ""}`}>
                <div className="hi-year">{m.year}</div>
                <div className="hi-body">
                  <div className="hi-title">{m.title}</div>
                  <p className="hi-desc">{m.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="history-photos">
            <div className="history-photo-frame">
              {url1 ? (
                <Image src={url1} alt="School building · 2064 BS" fill sizes="(max-width:1023px) 45vw, 340px" style={{ objectFit: "cover" }} />
              ) : (
                <PhotoPlaceholder label="School building · 2064 BS" tone="navy" />
              )}
            </div>
            <div className="history-photo-frame">
              {url2 ? (
                <Image src={url2} alt="Campus today · 2082 BS" fill sizes="(max-width:1023px) 45vw, 340px" style={{ objectFit: "cover" }} />
              ) : (
                <PhotoPlaceholder label="Campus today · 2082 BS" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   AimsSection
   ========================================================================== */
const AIMS = [
  { Icon: GraduationCap, title: "Academic excellence",      photo: "Chemistry lab · Grade 11",       body: "NEB-aligned curriculum delivered by subject specialists. Every class has a goal, a plan, and time built in for questions." },
  { Icon: Heart,          title: "Whole-child development",  photo: "Annual Himalayan trek",           body: "Marks are one measure. Clubs, treks, community projects, and report cards that go beyond grades are the rest." },
  { Icon: Users,          title: "Belonging for every family", photo: "Morning assembly",             body: "Our parents are shopkeepers, doctors, drivers, and civil servants. Scholarships — up to 100% of tuition — keep it that way." },
  { Icon: Globe,          title: "Real-world learning",      photo: "Community research fieldwork",   body: "Grade 11 Humanities completes a published community research project. Grade 12 Management visits Kathmandu employers." },
] as const;

export function AimsSection({ photos = [] }: { photos?: (SanityImage | undefined)[] }) {
  return (
    <section className="section tint">
      <div className="container">
        <EditSecHead
          num="03"
          eyebrow="Our aims"
          title="What we are actually trying to do."
          aside="These are not aspirations. They are commitments we are held to every term."
        />
        <div className="aims-grid">
          {AIMS.map(({ Icon, title, photo, body }, i) => {
            const imgUrl = photos[i]
              ? urlFor(photos[i]!)?.width(400).height(300).fit("crop").auto("format").url()
              : null;
            return (
              <div key={title} className="aim-card">
                <div className="aim-card-photo">
                  {imgUrl ? (
                    <Image src={imgUrl} alt={photo} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw" style={{ objectFit: "cover" }} />
                  ) : (
                    <PhotoPlaceholder label={photo} />
                  )}
                </div>
                <div className="aim-card-content">
                  <div className="aim-icon"><Icon size={22} /></div>
                  <div className="aim-title">{title}</div>
                  <p className="aim-body">{body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   PoliciesSection
   ========================================================================== */
const POLICIES = [
  { Icon: FileText,     pill: "Enrolment", title: "Admission Policy",          body: "Open to all students in Grades 6–12. Admission is based on a short placement assessment and a parent-student interview — not on prior school ranking." },
  { Icon: Award,        pill: "Finance",   title: "Fee & Scholarship Policy",   body: "Full and partial scholarships are awarded each year on the basis of financial need and academic effort. No family is turned away for inability to pay." },
  { Icon: CalendarCheck,pill: "Conduct",   title: "Attendance & Punctuality",   body: "Students are expected at school by 9:45 AM. Absences beyond 10 days per term require a parent meeting. The afternoon study block is compulsory." },
  { Icon: ShieldCheck,  pill: "Wellbeing", title: "Behaviour & Safety Policy",  body: "We maintain a zero-tolerance approach to bullying and a restorative approach to minor misconduct. Every student has the right to a safe classroom." },
  { Icon: BookOpen,     pill: "Assessment",title: "Grading & Promotion Policy", body: "Internal assessments are held in Poush and Chaitra. NEB examinations govern Grade 10 and Grade 12. Academic support is offered before any student is held back." },
  { Icon: Bus,          pill: "Transport", title: "Shuttle & Transport Policy",  body: "School-operated shuttles run from Koteshwor, Baneshwor, and Chabahil. Punctuality is logged. Parents are notified of delays within 10 minutes." },
] as const;

export function PoliciesSection({ photo }: { photo?: SanityImage }) {
  const imgUrl = photo
    ? urlFor(photo)?.width(1400).height(400).fit("crop").auto("format").url()
    : null;

  return (
    <section className="section">
      <div className="container">
        <EditSecHead
          num="04"
          eyebrow="Policies"
          title="How we run the school — in plain language."
          aside="Full policy documents are available at the school office on request."
        />
        <div className="about-wide-photo">
          {imgUrl ? (
            <Image src={imgUrl} alt="School entrance · Kathmandu campus" fill sizes="(max-width:767px) calc(100vw - 32px), 1152px" style={{ objectFit: "cover" }} />
          ) : (
            <PhotoPlaceholder label="School entrance · Kathmandu campus" tone="navy" />
          )}
        </div>
        <div className="policies-grid">
          {POLICIES.map(({ Icon, pill, title, body }) => (
            <div key={title} className="policy-card">
              <div className="policy-card-head">
                <div className="policy-icon"><Icon size={18} /></div>
                <span className="policy-pill">{pill}</span>
              </div>
              <div className="policy-title">{title}</div>
              <p className="policy-body">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   SENSection
   ========================================================================== */
const SEN_FEATURES = [
  { Icon: Brain,         title: "Learning support teachers",       body: "Two dedicated SEN coordinators work with classroom teachers to identify needs early and design support without removing students from their peer group." },
  { Icon: ClipboardList, title: "Individualised support plans",    body: "Every student receiving additional support has a written ISP, reviewed each term with the parents, class teacher, and coordinator." },
  { Icon: MessageSquare, title: "Open-door parent partnership",    body: "Parents of SEN students have a direct line to the coordinator — not just the once-a-year report card. Friday appointments are always available." },
  { Icon: Smile,         title: "Inclusive classroom practice",    body: "All teachers are trained in differentiated instruction. Support happens inside the classroom, not in a separate room." },
] as const;

export function SENSection({ photo }: { photo?: SanityImage }) {
  const imgUrl = photo
    ? urlFor(photo)?.width(800).height(600).fit("crop").auto("format").url()
    : null;

  return (
    <section className="sen-section">
      <div className="container">
        <EditSecHead
          num="05"
          eyebrow="Special educational needs"
          title="Every child learns differently. We plan for that."
        />
        <div className="sen-layout">
          <div className="sen-lede">
            <div className="sen-lede-photo">
              {imgUrl ? (
                <Image src={imgUrl} alt="Learning support · one-on-one" fill sizes="(max-width:1024px) 80vw, 50vw" style={{ objectFit: "cover" }} />
              ) : (
                <PhotoPlaceholder label="Learning support · one-on-one" tone="navy" />
              )}
            </div>
            <p>
              At Future Stars, a student who needs more time is not a problem to
              be managed — they are a child to be understood. Our SEN programme
              has been part of the school since 2072 BS, when we trained our
              first dedicated learning support coordinator.
            </p>
            <p>
              We do not use the word &ldquo;special&rdquo; as a label. We use it
              as a reminder that every child has a specific set of needs, and
              that it is our job — not theirs — to adapt.
            </p>
          </div>
          <div className="sen-features">
            {SEN_FEATURES.map(({ Icon, title, body }) => (
              <div key={title} className="sen-feature">
                <div className="sen-feature-icon"><Icon size={18} /></div>
                <div>
                  <h4>{title}</h4>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
