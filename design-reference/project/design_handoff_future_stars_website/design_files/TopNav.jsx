// Top navigation + mobile drawer + announcement bar.

const AnnouncementBar = () => (
  <div className="announce">
    Admissions open for Grade 11 · 2083 BS intake
    <a href="#admissions">Apply now →</a>
  </div>
);

const Brand = ({ onClick }) => (
  <a className="nav-brand" href="#" onClick={onClick}>
    <div className="mark">FS</div>
    <div className="word">
      Future Stars
      <small>फ्यूचर स्टार्स उ.मा.वि.</small>
    </div>
  </a>
);

const NAV = [
  { id: "home", label: "Home" },
  { id: "programs", label: "Programs" },
  { id: "admissions", label: "Admissions" },
  { id: "life", label: "Student life" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const TopNav = ({ page, onNav }) => {
  const [open, setOpen] = React.useState(false);
  const go = (id) => { onNav(id); setOpen(false); };
  return (
    <>
      <AnnouncementBar />
      <nav className="nav">
        <div className="container nav-inner">
          <Brand onClick={(e) => { e.preventDefault(); go("home"); }} />
          <div className="nav-links">
            {NAV.map(n => (
              <a key={n.id} href={`#${n.id}`} className={page === n.id ? "active" : ""}
                 onClick={(e) => { e.preventDefault(); go(n.id); }}>
                {n.label}
              </a>
            ))}
          </div>
          <div className="nav-cta">
            <Button variant="primary" size="sm" onClick={() => go("admissions")}>Apply</Button>
            <button className="burger" onClick={() => setOpen(true)} aria-label="Open menu">
              <Icon name="menu" size={22} />
            </button>
          </div>
        </div>
      </nav>
      <div className={`sheet ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
        <div className="sheet-panel" onClick={(e) => e.stopPropagation()}>
          <button className="sheet-close" onClick={() => setOpen(false)} aria-label="Close">
            <Icon name="x" size={22} />
          </button>
          <div style={{ paddingTop: 44 }}>
            {NAV.map(n => (
              <a key={n.id} href={`#${n.id}`} className={page === n.id ? "active" : ""}
                 onClick={(e) => { e.preventDefault(); go(n.id); }}
                 style={{ display: "block" }}>
                {n.label}
              </a>
            ))}
            <div style={{ marginTop: 16, display: "grid", gap: 8 }}>
              <WhatsAppButton size="md" />
              <Button variant="primary" size="md" onClick={() => go("admissions")}>Apply for 2083 BS</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Object.assign(window, { TopNav });
