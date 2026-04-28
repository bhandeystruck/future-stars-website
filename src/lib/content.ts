import { sanityClient } from "./sanity";
import type { SanityImage } from "./sanity";

export type NewsTag = "event" | "results" | "news";

export type NewsItem = {
  id: string;
  day: string;
  month: string;
  year: string;
  title: string;
  excerpt: string;
  tag: NewsTag;
  image?: SanityImage;
};

export type Teacher = {
  id: string;
  name: string;
  role: string;
  initials: string;
  image?: SanityImage;
};

export type EventPhoto = {
  _key: string;
  asset: SanityImage["asset"];
  hotspot?: SanityImage["hotspot"];
  crop?: SanityImage["crop"];
};

export type SchoolEvent = {
  _id: string;
  name: string;
  slug: string;
  date: string;
  category: string;
  description?: string;
  coverPhoto?: SanityImage;
  photoCount: number;
  photos?: EventPhoto[];
};

export type Principal = {
  name: string;
  role: string;
  quote?: string;
  para1?: string;
  para2?: string;
  para3?: string;
  image?: SanityImage;
};

export type AboutPageImages = {
  campusPhoto?: SanityImage;
  historyPhoto1?: SanityImage;
  historyPhoto2?: SanityImage;
  aimsPhoto1?: SanityImage;
  aimsPhoto2?: SanityImage;
  aimsPhoto3?: SanityImage;
  aimsPhoto4?: SanityImage;
  policiesPhoto?: SanityImage;
  senPhoto?: SanityImage;
};

export type HomePageImages = {
  heroPhoto?: SanityImage;
  whyPhoto?: SanityImage;
};

export type AdmissionsPageImages = {
  bannerPhoto?: SanityImage;
  feesPhoto?: SanityImage;
  boysUniformPhoto?: SanityImage;
  girlsUniformPhoto?: SanityImage;
  openHousePhoto?: SanityImage;
};

export type FacilitiesPageImages = {
  auditoriumPhoto?: SanityImage;
  computerLabPhoto?: SanityImage;
  scienceLabPhoto?: SanityImage;
  libraryPhoto?: SanityImage;
  cafeteriaPhoto?: SanityImage;
};

export type ClubsPageImages = {
  artsPhoto?: SanityImage;
  karatePhoto?: SanityImage;
  musicPhoto?: SanityImage;
  sportsPhoto?: SanityImage;
  vofsPhoto?: SanityImage;
};

const FALLBACK_NEWS: NewsItem[] = [
  {
    id: "open-house-2083",
    day: "08",
    month: "Baishakh",
    year: "2083",
    title: "Open house for 2083 BS applicants",
    excerpt: "Tour classrooms, meet the principal, bring every hard question. Sun–Fri, 10am–3pm.",
    tag: "event",
  },
  {
    id: "neb-2082-results",
    day: "28",
    month: "Chaitra",
    year: "2082",
    title: "92% of our +2 cohort passed NEB first attempt",
    excerpt: "Nine students scored above 3.8 GPA across Science and Management streams.",
    tag: "results",
  },
  {
    id: "g9-community-research",
    day: "14",
    month: "Chaitra",
    year: "2082",
    title: "Grade 9 community research project — published",
    excerpt: "A 40-page report on waste management in Baneshwor, researched, written, printed by students.",
    tag: "news",
  },
  {
    id: "mardi-himal-2082",
    day: "02",
    month: "Falgun",
    year: "2082",
    title: "Annual Himalayan trek — Mardi Himal, Grade 10",
    excerpt: "Five days, three teachers, thirty-two students. Nobody turned back.",
    tag: "news",
  },
];

const FALLBACK_TEACHERS: Teacher[] = [
  { id: "anjali-shrestha", name: "Anjali Shrestha", role: "Principal · Physics", initials: "AS" },
  { id: "rajan-thapa", name: "Rajan Thapa", role: "Head of Humanities", initials: "RT" },
  { id: "pratibha-gurung", name: "Pratibha Gurung", role: "Chemistry · Grade 11–12", initials: "PG" },
  { id: "dipesh-basnet", name: "Dipesh Basnet", role: "Maths · Grade 9–12", initials: "DB" },
];

const FALLBACK_PRINCIPAL: Principal = {
  name: "Manju Karki",
  role: "Principal · B.Ed, M.Ed (TU) · Est. 2064 BS",
  quote: "Every child who walks through our gate deserves to be seen — not just taught.",
  para1:
    "When I joined Future Stars in 2064 BS, we had 38 students and one building. What we had in abundance was a belief: that a small school could do something a large school cannot — know every child by name, and mean it.",
  para2:
    "Today, with 480 students across Grades 6–12, that belief is harder to keep. We keep it anyway. Our teachers are hired for care as much as for subject knowledge. Our afternoons are structured so no student falls behind quietly. Our doors — mine included — are open every Friday for parents who have questions they've been holding all week.",
  para3:
    "If you are considering Future Stars for your child, come and visit. Sit in a class. Watch the morning assembly. Ask the hard questions. We have nothing to hide and everything to show.",
};

export async function getNews(): Promise<NewsItem[]> {
  if (!sanityClient) return FALLBACK_NEWS;
  try {
    const items = await sanityClient.fetch<NewsItem[]>(
      `*[_type == "news"] | order(_createdAt desc) {
        "id": id.current,
        day, month, year, title, excerpt, tag,
        image { asset, hotspot, crop }
      }`
    );
    return items.length ? items : FALLBACK_NEWS;
  } catch {
    return FALLBACK_NEWS;
  }
}

export async function getTeachers(): Promise<Teacher[]> {
  if (!sanityClient) return FALLBACK_TEACHERS;
  try {
    const items = await sanityClient.fetch<Teacher[]>(
      `*[_type == "teacher"] | order(order asc) {
        "id": id.current,
        name, role, initials,
        image { asset, hotspot, crop }
      }`
    );
    return items.length ? items : FALLBACK_TEACHERS;
  } catch {
    return FALLBACK_TEACHERS;
  }
}

export async function getPrincipal(): Promise<Principal> {
  if (!sanityClient) return FALLBACK_PRINCIPAL;
  try {
    const item = await sanityClient.fetch<Principal | null>(
      `*[_type == "principal"][0] {
        name, role, quote, para1, para2, para3,
        image { asset, hotspot, crop }
      }`
    );
    return item ?? FALLBACK_PRINCIPAL;
  } catch {
    return FALLBACK_PRINCIPAL;
  }
}

export async function getAboutPage(): Promise<AboutPageImages> {
  if (!sanityClient) return {};
  try {
    const item = await sanityClient.fetch<AboutPageImages | null>(
      `*[_type == "aboutPage"][0] {
        campusPhoto { asset, hotspot, crop },
        historyPhoto1 { asset, hotspot, crop },
        historyPhoto2 { asset, hotspot, crop },
        aimsPhoto1 { asset, hotspot, crop },
        aimsPhoto2 { asset, hotspot, crop },
        aimsPhoto3 { asset, hotspot, crop },
        aimsPhoto4 { asset, hotspot, crop },
        policiesPhoto { asset, hotspot, crop },
        senPhoto { asset, hotspot, crop }
      }`
    );
    return item ?? {};
  } catch {
    return {};
  }
}

export async function getHomePage(): Promise<HomePageImages> {
  if (!sanityClient) return {};
  try {
    const item = await sanityClient.fetch<HomePageImages | null>(
      `*[_type == "homePage"][0] {
        heroPhoto { asset, hotspot, crop },
        whyPhoto { asset, hotspot, crop }
      }`
    );
    return item ?? {};
  } catch {
    return {};
  }
}

export async function getAdmissionsPage(): Promise<AdmissionsPageImages> {
  if (!sanityClient) return {};
  try {
    const item = await sanityClient.fetch<AdmissionsPageImages | null>(
      `*[_type == "admissionsPage"][0] {
        bannerPhoto { asset, hotspot, crop },
        feesPhoto { asset, hotspot, crop },
        boysUniformPhoto { asset, hotspot, crop },
        girlsUniformPhoto { asset, hotspot, crop },
        openHousePhoto { asset, hotspot, crop }
      }`
    );
    return item ?? {};
  } catch {
    return {};
  }
}

export async function getFacilitiesPage(): Promise<FacilitiesPageImages> {
  if (!sanityClient) return {};
  try {
    const item = await sanityClient.fetch<FacilitiesPageImages | null>(
      `*[_type == "facilitiesPage"][0] {
        auditoriumPhoto { asset, hotspot, crop },
        computerLabPhoto { asset, hotspot, crop },
        scienceLabPhoto { asset, hotspot, crop },
        libraryPhoto { asset, hotspot, crop },
        cafeteriaPhoto { asset, hotspot, crop }
      }`
    );
    return item ?? {};
  } catch {
    return {};
  }
}

export async function getClubsPage(): Promise<ClubsPageImages> {
  if (!sanityClient) return {};
  try {
    const item = await sanityClient.fetch<ClubsPageImages | null>(
      `*[_type == "clubsPage"][0] {
        artsPhoto { asset, hotspot, crop },
        karatePhoto { asset, hotspot, crop },
        musicPhoto { asset, hotspot, crop },
        sportsPhoto { asset, hotspot, crop },
        vofsPhoto { asset, hotspot, crop }
      }`
    );
    return item ?? {};
  } catch {
    return {};
  }
}

export async function getEvents(): Promise<SchoolEvent[]> {
  if (!sanityClient) return [];
  try {
    return await sanityClient.fetch<SchoolEvent[]>(
      `*[_type == "event"] | order(date desc) {
        _id, name, "slug": slug.current, date, category, description,
        coverPhoto { asset, hotspot, crop },
        "photoCount": count(photos)
      }`
    );
  } catch {
    return [];
  }
}

export async function getEventBySlug(slug: string): Promise<SchoolEvent | null> {
  if (!sanityClient) return null;
  try {
    return await sanityClient.fetch<SchoolEvent | null>(
      `*[_type == "event" && slug.current == $slug][0] {
        _id, name, "slug": slug.current, date, category, description,
        coverPhoto { asset, hotspot, crop },
        "photoCount": count(photos),
        photos[] { _key, asset, hotspot, crop }
      }`,
      { slug }
    );
  } catch {
    return null;
  }
}
