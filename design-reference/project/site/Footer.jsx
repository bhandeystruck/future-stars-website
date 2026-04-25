// Footer + floating WhatsApp FAB.

const Footer = ({ onNav }) => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <div className="brand">
            <div className="mark">FS</div>
            <div className="word">Future Stars</div>
          </div>
          <p className="desc">
            A Kathmandu secondary school where every student is known by name.
            NEB-affiliated since 2064 BS. Grades 6–12.
          </p>
          <WhatsAppButton size="md" label="WhatsApp us" />
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNav("programs"); }}>Programs & streams</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNav("admissions"); }}>Admissions 2083 BS</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNav("life"); }}>Student life</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNav("about"); }}>About the school</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNav("contact"); }}>Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Visit us</h4>
          <ul>
            <li>Kathmandu campus</li>
            <li>Shuttle from Koteshwor, Baneshwor, Chabahil</li>
            <li>Sun–Fri · 10am–3pm</li>
            <li style={{ marginTop: 8 }}><a href="#">+977 1 4XXX XXX</a></li>
            <li><a href="#">hello@futurestars.edu.np</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <svg width="18" height="12" viewBox="0 0 18 12" style={{ display: "block" }}>
            <polygon points="0,0 14,6 0,12" fill="#DC143C" stroke="#003893" strokeWidth="1"/>
            <polygon points="0,0 14,6 0,12" fill="#DC143C" transform="translate(0,0)"/>
            <circle cx="5" cy="3" r="1.5" fill="#fff"/>
            <circle cx="5" cy="8.5" r="1.8" fill="#fff"/>
          </svg>
          © 2083 BS (2026) Future Stars High School Nepal · NEB-affiliated
        </div>
        <div>Today · <BSDate bs="10 Baishakh 2083" ad="23 Apr 2026" /></div>
      </div>
    </div>
  </footer>
);

const FloatingWhatsApp = () => (
  <button className="fab" aria-label="Chat on WhatsApp" onClick={() => alert("Would open wa.me/977… in real site")}>
    <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff">
      <path d="M20.5 3.5A11 11 0 0 0 3.6 17l-1.1 4.1 4.2-1.1a11 11 0 0 0 13.8-16.5Zm-3.5 10.2c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.8-.7-1.4-1.7-1.5-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5 0-.2 0-.4-.1-.5 0-.1-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.1 4.6l1.7.6c.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3Z"/>
    </svg>
  </button>
);

Object.assign(window, { Footer, FloatingWhatsApp });
