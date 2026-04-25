import Link from "next/link";
import Image from "next/image";
import { WhatsAppButton, BSDate } from "./Primitives";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand">
              <Image src="/logo.png" alt="Future Stars" width={56} height={56} style={{ display: "block", objectFit: "contain" }} />
              <div className="word">Future Stars</div>
            </div>
            <p className="desc">
              A Kathmandu secondary school where every student is known by
              name. NEB-affiliated since 2064 BS. Grades 6–12.
            </p>
            <WhatsAppButton size="md" label="WhatsApp us" />
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li>
                <Link href="/programs">Programs & streams</Link>
              </li>
              <li>
                <Link href="/admissions">Admissions 2083 BS</Link>
              </li>
              <li>
                <Link href="/life">Student life</Link>
              </li>
              <li>
                <Link href="/about">About the school</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Visit us</h4>
            <ul>
              <li>Kathmandu campus</li>
              <li>Shuttle from Koteshwor, Baneshwor, Chabahil</li>
              <li>Sun–Fri · 10am–3pm</li>
              <li style={{ marginTop: 8 }}>
                <a href="tel:+97714000000">+977 1 4XXX XXX</a>
              </li>
              <li>
                <a href="mailto:hello@futurestars.edu.np">
                  hello@futurestars.edu.np
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              style={{ display: "block" }}
              aria-hidden="true"
            >
              <polygon
                points="0,0 14,6 0,12"
                fill="#DC143C"
                stroke="#003893"
                strokeWidth="1"
              />
              <polygon points="0,0 14,6 0,12" fill="#DC143C" />
              <circle cx="5" cy="3" r="1.5" fill="#fff" />
              <circle cx="5" cy="8.5" r="1.8" fill="#fff" />
            </svg>
            © 2083 BS (2026) Future Stars High School Nepal · NEB-affiliated
          </div>
          <div>
            Today · <BSDate bs="10 Baishakh 2083" ad="23 Apr 2026" />
          </div>
        </div>
      </div>
    </footer>
  );
}
