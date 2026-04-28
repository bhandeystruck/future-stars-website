import type { HeroVariant } from "@/components/Heroes";
import HeroSwitcher from "@/components/Heroes";
import { TrustStrip, StatsSection, WhySection, MissionBand, PrincipalSection } from "@/components/HomeSections";
import NewsSection from "@/components/NewsSection";
import AdmissionsSection from "@/components/AdmissionsSection";
import { getNews, getTeachers, getPrincipal, getHomePage } from "@/lib/content";
import TeachersSection from "@/components/TeachersSection";

const HERO_VARIANTS: HeroVariant[] = ["editorial", "split", "bleed", "stat"];

function isHeroVariant(v: string | undefined): v is HeroVariant {
  return HERO_VARIANTS.includes(v as HeroVariant);
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ hero?: string }>;
}) {
  const { hero } = await searchParams;
  const variant: HeroVariant = isHeroVariant(hero) ? hero : "bleed";

  const [news, teachers, principal, home] = await Promise.all([getNews(), getTeachers(), getPrincipal(), getHomePage()]);

  return (
    <main>
      <HeroSwitcher variant={variant} heroPhoto={home.heroPhoto} />
      <TrustStrip />
      <StatsSection />
      <MissionBand />
      <PrincipalSection data={principal} />
      <WhySection whyPhoto={home.whyPhoto} />
      <TeachersSection items={teachers} />
      <NewsSection items={news} />
      <AdmissionsSection />
    </main>
  );
}
