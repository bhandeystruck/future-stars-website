import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const devanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Future Stars High School — Kathmandu",
  description:
    "A Kathmandu secondary school where every student is known by name. NEB-affiliated since 2064 BS. Grades 6–12.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} ${devanagari.variable}`}
    >
      <body>
        <TopNav />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
