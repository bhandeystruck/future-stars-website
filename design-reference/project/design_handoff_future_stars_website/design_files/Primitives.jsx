// Shared UI primitives for the Future Stars website kit.
// Expose everything to window so other <script type="text/babel"> files see them.

const Icon = ({ name, size = 20, className = "", style = {} }) => {
  // Lucide is attached via CDN; we just render a placeholder <i> and let
  // lucide.createIcons() swap it for an SVG after mount.
  return <i data-lucide={name} className={className} style={{ width: size, height: size, ...style }} />;
};

const Pill = ({ tone = "navy", children, icon }) => {
  const tones = {
    accredited: { bg: "#D6F0E4", fg: "#15704F" },
    admissions: { bg: "#FFE9C2", fg: "#7A4A00" },
    navy:       { bg: "#E8F4FF", fg: "#1B4F8C" },
    amber:      { bg: "#F5A623", fg: "#412402" },
    ghost:      { bg: "transparent", fg: "#1B4F8C", border: "1px solid #C9C3B6" },
  };
  const t = tones[tone] || tones.navy;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "4px 10px", borderRadius: 999, fontSize: 12, fontWeight: 600,
      background: t.bg, color: t.fg, border: t.border || "none",
      fontFamily: "var(--font-body)",
    }}>
      {icon && <Icon name={icon} size={14} />}
      {children}
    </span>
  );
};

const Button = ({ variant = "primary", size = "lg", icon, iconRight, href, onClick, children, type = "button" }) => {
  const cls = `btn btn-${size} btn-${variant}`;
  const content = (
    <>
      {icon && <Icon name={icon} size={size === "sm" ? 14 : 18} />}
      {children}
      {iconRight && <Icon name={iconRight} size={size === "sm" ? 14 : 18} />}
    </>
  );
  if (href) return <a className={cls} href={href} onClick={onClick}>{content}</a>;
  return <button type={type} className={cls} onClick={onClick}>{content}</button>;
};

const WhatsAppButton = ({ size = "lg", label = "Chat on WhatsApp" }) => (
  <Button variant="whatsapp" size={size} icon="message-circle">{label}</Button>
);

const StatBlock = ({ n, suffix, label }) => (
  <div className="stat">
    <div className="n">{n}{suffix && <sup>{suffix}</sup>}</div>
    <div className="l">{label}</div>
  </div>
);

const BSDate = ({ bs, ad }) => (
  <span>
    <strong style={{ color: "var(--color-text)" }}>{bs} BS</strong>
    <span style={{ color: "var(--color-text-muted)" }}> ({ad})</span>
  </span>
);

const PhotoPlaceholder = ({ label, tone = "sky", style = {} }) => {
  const bg = tone === "navy" ? "var(--color-primary)" : "var(--color-primary-100)";
  const fg = tone === "navy" ? "#E8F4FF" : "var(--color-primary)";
  return (
    <div style={{
      background: bg, color: fg, width: "100%", height: "100%",
      display: "grid", placeItems: "center", fontFamily: "var(--font-display)",
      fontWeight: 600, fontSize: 13, opacity: 0.8, ...style,
    }}>
      Photo · {label}
    </div>
  );
};

Object.assign(window, { Icon, Pill, Button, WhatsAppButton, StatBlock, BSDate, PhotoPlaceholder });
