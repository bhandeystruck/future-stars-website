import { AdmissionsBanner, ProcessSection, FeesSection, UniformSection, OpenHouseSection } from "@/components/AdmissionsSections";
import AdmissionsSection from "@/components/AdmissionsSection";
import { getAdmissionsPage } from "@/lib/content";

export const metadata = {
  title: "Admissions · Future Stars High School",
  description: "Book a school visit or apply for 2083 BS. Merit scholarships available up to 100% of tuition.",
};

export default async function AdmissionsPage() {
  const adm = await getAdmissionsPage();

  return (
    <main>
      <AdmissionsBanner photo={adm.bannerPhoto} />
      <ProcessSection />
      <AdmissionsSection />
      <FeesSection photo={adm.feesPhoto} />
      <UniformSection boysPhoto={adm.boysUniformPhoto} girlsPhoto={adm.girlsUniformPhoto} />
      <OpenHouseSection photo={adm.openHousePhoto} />
    </main>
  );
}
