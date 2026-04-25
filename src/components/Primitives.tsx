import Link from "next/link";
import { MessageCircle, type LucideIcon } from "lucide-react";
import type { ReactNode, ComponentType } from "react";

/* ==========================================================================
   Pill
   ========================================================================== */
type PillTone = "accredited" | "admissions" | "navy" | "amber" | "ghost";

const pillTones: Record<PillTone, { bg: string; fg: string; border?: string }> = {
  accredited: { bg: "#D6F0E4", fg: "#15704F" },
  admissions: { bg: "#FFE9C2", fg: "#7A4A00" },
  navy: { bg: "#E8F4FF", fg: "#1B4F8C" },
  amber: { bg: "#F5A623", fg: "#412402" },
  ghost: { bg: "transparent", fg: "#1B4F8C", border: "1px solid #C9C3B6" },
};

export function Pill({
  tone = "navy",
  icon: Icon,
  children,
}: {
  tone?: PillTone;
  icon?: LucideIcon;
  children: ReactNode;
}) {
  const t = pillTones[tone];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 10px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 600,
        background: t.bg,
        color: t.fg,
        border: t.border ?? "none",
        fontFamily: "var(--font-body)",
      }}
    >
      {Icon ? <Icon size={14} /> : null}
      {children}
    </span>
  );
}

/* ==========================================================================
   Button
   ========================================================================== */
type ButtonVariant = "primary" | "secondary" | "secondary-dark" | "whatsapp";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconRight?: LucideIcon;
  children: ReactNode;
} & (
  | { href: string; onClick?: () => void; type?: never }
  | { href?: undefined; onClick?: () => void; type?: "button" | "submit" }
);

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "lg",
    icon: Icon,
    iconRight: IconRight,
    children,
    onClick,
  } = props;
  const cls = `btn btn-${size} btn-${variant}`;
  const iconSize = size === "sm" ? 14 : 18;
  const content = (
    <>
      {Icon ? <Icon size={iconSize} /> : null}
      {children}
      {IconRight ? <IconRight size={iconSize} /> : null}
    </>
  );
  if (props.href) {
    return (
      <Link className={cls} href={props.href} onClick={onClick}>
        {content}
      </Link>
    );
  }
  return (
    <button className={cls} type={props.type ?? "button"} onClick={onClick}>
      {content}
    </button>
  );
}

/* ==========================================================================
   WhatsAppButton
   ========================================================================== */
export function WhatsAppButton({
  size = "lg",
  label = "Chat on WhatsApp",
}: {
  size?: ButtonSize;
  label?: string;
}) {
  return (
    <Button variant="whatsapp" size={size} icon={MessageCircle}>
      {label}
    </Button>
  );
}

/* ==========================================================================
   StatBlock
   ========================================================================== */
export function StatBlock({
  n,
  suffix,
  label,
}: {
  n: string;
  suffix?: string;
  label: string;
}) {
  return (
    <div className="stat">
      <div className="n">
        {n}
        {suffix ? <sup>{suffix}</sup> : null}
      </div>
      <div className="l">{label}</div>
    </div>
  );
}

/* ==========================================================================
   BSDate — Bikram Sambat + Gregorian
   ========================================================================== */
export function BSDate({ bs, ad }: { bs: string; ad: string }) {
  return (
    <span>
      <strong style={{ color: "var(--color-text)" }}>{bs} BS</strong>
      <span style={{ color: "var(--color-text-muted)" }}> ({ad})</span>
    </span>
  );
}

/* ==========================================================================
   PhotoPlaceholder — navy or sky tile; labeled tile until real photos arrive
   ========================================================================== */
export function PhotoPlaceholder({
  label,
  tone = "sky",
}: {
  label: string;
  tone?: "sky" | "navy";
}) {
  const bg = tone === "navy" ? "var(--color-primary)" : "var(--color-primary-100)";
  const fg = tone === "navy" ? "#E8F4FF" : "var(--color-primary)";
  return (
    <div
      style={{
        background: bg,
        color: fg,
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: 13,
        opacity: 0.8,
      }}
    >
      Photo · {label}
    </div>
  );
}
