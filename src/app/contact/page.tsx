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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28267.578834447388!2d85.2768796743164!3d27.672565199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb197dd904d259%3A0x1eb94a1917628795!2sFuture%20Stars%20High%20School!5e0!3m2!1sen!2snp!4v1777376738876!5m2!1sen!2snp"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "var(--radius-lg)", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Future Stars High School · Kathmandu"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
