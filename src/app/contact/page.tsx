import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { EditSecHead } from "@/components/HomeSections";

export const metadata = {
  title: "Contact · Future Stars High School",
  description: "Reach Future Stars High School by WhatsApp, phone, or email. We reply within one school day.",
};

const CONTACT_CARDS = [
  {
    Icon: MessageCircle,
    title: "WhatsApp",
    detail: "+977 98XX XXX XXX",
    sub: "Admissions, school visits, transport — anything.",
  },
  {
    Icon: Phone,
    title: "Phone",
    detail: "+977 1 4XXX XXX",
    sub: "Front desk · Sun–Fri · 9am–5pm",
  },
  {
    Icon: Mail,
    title: "Email",
    detail: "hello@futurestars.edu.np",
    sub: "Good for prospectus requests and transcripts.",
  },
  {
    Icon: MapPin,
    title: "Visit us",
    detail: "Kathmandu campus · Sun–Fri 10am–3pm",
    sub: "Shuttle from Koteshwor, Baneshwor, Chabahil.",
  },
] as const;

export default function ContactPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <EditSecHead
            num="01"
            eyebrow="Contact"
            title="The fastest way to reach us is WhatsApp."
            aside="We reply within one school day, Sun–Fri."
          />
          <div className="contact-grid">
            {CONTACT_CARDS.map(({ Icon, title, detail, sub }) => (
              <div key={title} className="contact-card">
                <div className="ico">
                  <Icon size={22} />
                </div>
                <div>
                  <h4>{title}</h4>
                  <p>{detail}</p>
                  <div className="sub">{sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 32 }}>
            <div className="map-placeholder">
              <div className="grid-lines" />
              <div className="pin" />
              <div className="label">Future Stars · Kathmandu</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
