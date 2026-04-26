import Image from "next/image";
import {
  Calendar,
  Award,
  MapPin,
  FileText,
  MessageCircle,
  ClipboardCheck,
  School,
  BadgeCheck,
  UserCheck,
  Pencil,
  Shirt,
} from "lucide-react";
import { Button, WhatsAppButton, PhotoPlaceholder, Pill } from "./Primitives";
import { EditSecHead } from "./HomeSections";
import { urlFor } from "@/lib/sanity";
import type { SanityImage } from "@/lib/sanity";

/* ==========================================================================
   AdmissionsBanner — hero strip at the top of the admissions page
   ========================================================================== */
const BULLETS = [
  { Icon: Calendar, text: "Admissions close 15 Baishakh 2083 · 28 Apr 2026" },
  { Icon: Award,    text: "Merit scholarships up to 100% of tuition" },
  { Icon: MapPin,   text: "Kathmandu campus · shuttle from 3 neighbourhoods" },
  { Icon: FileText, text: "Grades 6–10 open for rolling admissions year-round" },
] as const;

export function AdmissionsBanner({ photo }: { photo?: SanityImage }) {
  const src = photo ? urlFor(photo)?.width(800).height(1000).fit("crop").auto("format").url() : null;

  return (
    <section className="adm-banner-section">
      <div className="container adm-banner-grid">
        <div className="adm-banner-text">
          <div style={{ marginBottom: 20 }}>
            <Pill tone="admissions" icon={Calendar}>Admissions open · 2083 BS</Pill>
          </div>
          <h1 className="adm-banner-h1">
            We&apos;d love to show you around.
          </h1>
          <p className="adm-banner-lede">
            Future Stars is a Kathmandu secondary school where every student is
            known by name. Come and see for yourself — no appointment needed.
          </p>
          <ul className="adm-banner-bullets">
            {BULLETS.map(({ Icon, text }) => (
              <li key={text}>
                <Icon size={16} />
                {text}
              </li>
            ))}
          </ul>
          <div className="adm-banner-ctas">
            <Button variant="primary" size="lg" icon={Calendar} href="#admissions">
              Book a school visit
            </Button>
            <WhatsAppButton size="lg" label="Ask on WhatsApp" />
          </div>
        </div>

        <div className="adm-banner-photo">
          {src ? (
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <Image src={src} alt="School entrance · Future Stars" fill style={{ objectFit: "cover", borderRadius: "var(--radius-lg)" }} />
            </div>
          ) : (
            <PhotoPlaceholder label="School entrance · Future Stars" tone="navy" />
          )}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   ProcessSection — numbered steps + optional photo
   ========================================================================== */
const STEPS = [
  {
    Icon: MessageCircle,
    title: "Enquire",
    body: "Fill our brief form below or message us on WhatsApp. We'll reply within one school day with next steps.",
  },
  {
    Icon: School,
    title: "Visit the school",
    body: "Come in Sun–Fri between 10am and 3pm. Tour classrooms, meet the principal, sit in on a lesson if you like.",
  },
  {
    Icon: Pencil,
    title: "Placement assessment",
    body: "Grade 9–11 applicants complete a short written assessment. It is not competitive — it helps us plan your child's support.",
  },
  {
    Icon: BadgeCheck,
    title: "Receive your offer",
    body: "We issue offer letters within 3 school days. The offer includes your stream placement and any scholarship awarded.",
  },
  {
    Icon: UserCheck,
    title: "Enrol",
    body: "Pay the one-time registration fee, submit documents, and your place is confirmed. Orientation is held the week before term.",
  },
] as const;

export function ProcessSection({ photo }: { photo?: SanityImage }) {
  const src = photo ? urlFor(photo)?.width(700).height(520).fit("crop").auto("format").url() : null;

  return (
    <section className="section tint">
      <div className="container">
        <EditSecHead
          num="01"
          eyebrow="How to apply"
          title="Five steps from enquiry to first day."
          aside="The whole process takes under two weeks for most families."
        />
        <div className="adm-process-layout">
          {/* Steps */}
          <div className="adm-steps">
            {STEPS.map(({ Icon, title, body }, i) => (
              <div key={title} className="adm-step">
                <div className="adm-step-left">
                  <div className="adm-step-num">{i + 1}</div>
                  {i < STEPS.length - 1 && <div className="adm-step-line" />}
                </div>
                <div className="adm-step-content">
                  <div className="adm-step-icon"><Icon size={18} /></div>
                  <div className="adm-step-title">{title}</div>
                  <p className="adm-step-body">{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Photo */}
          <div className="adm-process-photo">
            {src ? (
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <Image src={src} alt="Classroom visit · Future Stars" fill style={{ objectFit: "cover", borderRadius: "var(--radius-lg)" }} />
              </div>
            ) : (
              <PhotoPlaceholder label="Classroom visit · Future Stars" tone="navy" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   FeesSection — wide photo + two info cards
   ========================================================================== */
const FEE_ITEMS = [
  { label: "Registration fee (one-time)", value: "Rs. 3,000" },
  { label: "Monthly tuition · Grades 6–8", value: "Rs. 4,500" },
  { label: "Monthly tuition · Grades 9–10", value: "Rs. 5,200" },
  { label: "Monthly tuition · Grades 11–12", value: "Rs. 6,000" },
  { label: "Annual development fee", value: "Rs. 8,000" },
  { label: "NEB examination fee", value: "At cost" },
] as const;

const SCHOLARSHIP_ITEMS = [
  { label: "Academic merit", value: "Up to 50% off tuition" },
  { label: "Financial need", value: "Up to 100% off tuition" },
  { label: "Staff child", value: "30% off tuition" },
  { label: "Sibling discount", value: "10% from second child" },
] as const;

export function FeesSection({ photo }: { photo?: SanityImage }) {
  const src = photo ? urlFor(photo)?.width(1200).height(480).fit("crop").auto("format").url() : null;

  return (
    <section className="section">
      <div className="container">
        <EditSecHead
          num="02"
          eyebrow="Fees & scholarships"
          title="No family turned away for inability to pay."
          aside="Scholarship decisions are made with every offer letter."
        />

        {/* Wide photo */}
        <div className="adm-fees-photo">
          {src ? (
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <Image src={src} alt="Students in library · Future Stars" fill style={{ objectFit: "cover", borderRadius: "var(--radius-lg)" }} />
            </div>
          ) : (
            <PhotoPlaceholder label="Students in library · Future Stars" tone="navy" />
          )}
        </div>

        {/* Two cards */}
        <div className="adm-fees-cards">
          {/* Fees card */}
          <div className="adm-fee-card">
            <div className="adm-fee-card-head">
              <FileText size={18} />
              <span>Tuition fees · 2083 BS</span>
            </div>
            <div className="adm-fee-rows">
              {FEE_ITEMS.map(({ label, value }) => (
                <div key={label} className="adm-fee-row">
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
            <p className="adm-fee-note">
              Fees are reviewed annually in Shrawan. Shuttle fees billed separately
              based on route. No hidden charges.
            </p>
          </div>

          {/* Scholarships card */}
          <div className="adm-fee-card adm-fee-card--accent">
            <div className="adm-fee-card-head">
              <Award size={18} />
              <span>Scholarships</span>
            </div>
            <div className="adm-fee-rows">
              {SCHOLARSHIP_ITEMS.map(({ label, value }) => (
                <div key={label} className="adm-fee-row">
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
            <p className="adm-fee-note">
              Scholarships are applied automatically at the offer stage — you do not
              need to apply separately. All awards are reviewed each academic year.
            </p>
            <Button variant="primary" size="md" href="#admissions">
              Apply and mention your situation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   UniformSection — two portrait cards, boys & girls
   ========================================================================== */
const UNIFORMS = [
  {
    gender: "Boys",
    tone: "navy" as const,
    photoLabel: "Boys school uniform · Future Stars",
    items: [
      "White half-sleeve shirt — Monday to Thursday",
      "White full-sleeve shirt — Friday",
      "Navy blue trousers",
      "School tie — navy & gold stripe",
      "Navy blue V-neck sweater (winter term)",
      "School blazer — navy with crest (Fridays & events)",
      "Black leather shoes",
      "White socks · navy belt",
      "School crest badge on left chest pocket",
    ],
    note: "Winter uniform (sweater + blazer) is compulsory from Mangsir to Falgun.",
  },
  {
    gender: "Girls",
    tone: "sky" as const,
    photoLabel: "Girls school uniform · Future Stars",
    items: [
      "White kurta — half-sleeve, Monday to Thursday",
      "White full-sleeve kurta — Friday",
      "Navy blue salwar",
      "White dupatta",
      "Navy blue V-neck sweater (winter term)",
      "School blazer — navy with crest (Fridays & events)",
      "Black flat shoes",
      "White socks",
      "School crest badge on left chest",
    ],
    note: "Winter uniform (sweater + blazer) is compulsory from Mangsir to Falgun.",
  },
] as const;

export function UniformSection({
  boysPhoto,
  girlsPhoto,
}: {
  boysPhoto?: SanityImage;
  girlsPhoto?: SanityImage;
}) {
  const photos = [boysPhoto, girlsPhoto];

  return (
    <section className="section tint">
      <div className="container">
        <EditSecHead
          num="03"
          eyebrow="School uniform"
          title="One school, one look — worn with pride."
          aside="Uniforms are available at the school office. Bring your child for sizing."
        />
        <div className="uniform-grid">
          {UNIFORMS.map(({ gender, tone, photoLabel, items, note }, i) => {
            const photo = photos[i];
            const src = photo
              ? urlFor(photo)?.width(480).height(640).fit("crop").auto("format").url()
              : null;
            return (
              <div key={gender} className="uniform-card">
                {/* Portrait photo — full uniform head to toe */}
                <div className="uniform-photo">
                  {src ? (
                    <div style={{ position: "relative", width: "100%", height: "100%" }}>
                      <Image src={src} alt={photoLabel} fill style={{ objectFit: "cover", borderRadius: "var(--radius-lg) var(--radius-lg) 0 0" }} />
                    </div>
                  ) : (
                    <PhotoPlaceholder label={photoLabel} tone={tone} />
                  )}
                </div>
                <div className="uniform-body">
                  <div className={`uniform-gender-pill uniform-gender-pill--${gender.toLowerCase()}`}>
                    <Shirt size={13} />
                    {gender}&apos;s uniform
                  </div>
                  <h3 className="uniform-name">{gender}&apos;s Uniform</h3>
                  <ul className="uniform-items">
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="uniform-note">{note}</p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="uniform-purchase-note">
          Full uniform sets are available for purchase at the school office (Room 101) on any school day, 9am–3pm.
          Replacement items can also be ordered via WhatsApp.
        </p>
      </div>
    </section>
  );
}

/* ==========================================================================
   OpenHouseSection — navy band, photo left, details right
   ========================================================================== */
export function OpenHouseSection({ photo }: { photo?: SanityImage }) {
  const src = photo ? urlFor(photo)?.width(700).height(520).fit("crop").auto("format").url() : null;

  return (
    <section className="adm-oh-section">
      <div className="container adm-oh-layout">
        {/* Photo */}
        <div className="adm-oh-photo">
          {src ? (
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
              <Image src={src} alt="Open house · parents & students" fill style={{ objectFit: "cover", borderRadius: "var(--radius-lg)" }} />
            </div>
          ) : (
            <PhotoPlaceholder label="Open house · parents & students" tone="navy" />
          )}
        </div>

        {/* Details */}
        <div className="adm-oh-body">
          <div className="eyebrow" style={{ color: "var(--color-accent)" }}>
            Open house
          </div>
          <h2 className="adm-oh-heading">
            Come on a Saturday morning. No pressure, no presentation.
          </h2>
          <div className="adm-oh-date">
            <ClipboardCheck size={18} />
            <div>
              <strong>12 Baishakh 2083</strong>
              <span> · 25 Apr 2026 · 10:00 AM – 1:00 PM</span>
            </div>
          </div>
          <ul className="adm-oh-list">
            <li>Self-guided tour of all classrooms and labs</li>
            <li>Sit in on a live Grade 11 lesson</li>
            <li>Q&amp;A with the principal (no appointment needed)</li>
            <li>Meet current students and parents</li>
            <li>Pick up the 2083 BS prospectus</li>
          </ul>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
            <Button variant="primary" size="lg" icon={Calendar} href="#admissions">
              Reserve a spot
            </Button>
            <Button variant="secondary" size="lg" icon={MessageCircle} href="https://wa.me/977">
              Ask a question first
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
