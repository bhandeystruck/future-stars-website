"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button, WhatsAppButton } from "./Primitives";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/admissions", label: "Admissions" },
  { href: "/life", label: "Student life" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

function AnnouncementBar() {
  return (
    <div className="announce">
      Admissions open for Grade 11 · 2083 BS intake
      <Link href="/admissions">Apply now →</Link>
    </div>
  );
}

function Brand() {
  return (
    <Link className="nav-brand" href="/">
      <Image src="/logo.png" alt="Future Stars" width={52} height={52} style={{ display: "block", objectFit: "contain" }} />
      <div className="word">
        Future Stars High School
        <small className="np-accent">फ्यूचर स्टार्स उ.मा.वि.</small>
      </div>
    </Link>
  );
}

export default function TopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);
  const close = () => setOpen(false);

  return (
    <>
      <AnnouncementBar />
      <nav className="nav">
        <div className="container nav-inner">
          <Brand />
          <div className="nav-links">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={isActive(n.href) ? "active" : ""}
              >
                {n.label}
              </Link>
            ))}
          </div>
          <div className="nav-cta">
            <Button variant="primary" size="sm" href="/admissions">
              Apply
            </Button>
            <button
              className="burger"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`sheet ${open ? "open" : ""}`}
        onClick={close}
        aria-hidden={!open}
      >
        <div className="sheet-panel" onClick={(e) => e.stopPropagation()}>
          <button
            className="sheet-close"
            onClick={close}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
          <div style={{ paddingTop: 44 }}>
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={isActive(n.href) ? "active" : ""}
                style={{ display: "block" }}
                onClick={close}
              >
                {n.label}
              </Link>
            ))}
            <div style={{ marginTop: 16, display: "grid", gap: 8 }}>
              <WhatsAppButton size="md" />
              <Button
                variant="primary"
                size="md"
                href="/admissions"
                onClick={close}
              >
                Apply for 2083 BS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
