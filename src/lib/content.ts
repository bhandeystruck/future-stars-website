/**
 * Content module — types + fallback data for news, teachers, etc.
 *
 * The exported fetchers (`getNews`, `getTeachers`) return the fallback data
 * today. When Sanity is wired (see src/lib/sanity.ts), they'll query the CMS
 * and fall back to this data if credentials/network are missing.
 */

export type NewsTag = "event" | "results" | "news";

export type NewsItem = {
  id: string;
  day: string;
  month: string;
  year: string;
  title: string;
  excerpt: string;
  tag: NewsTag;
};

export type Teacher = {
  id: string;
  name: string;
  role: string;
  initials: string;
};

const FALLBACK_NEWS: NewsItem[] = [
  {
    id: "open-house-2083",
    day: "08",
    month: "Baishakh",
    year: "2083",
    title: "Open house for 2083 BS applicants",
    excerpt:
      "Tour classrooms, meet the principal, bring every hard question. Sun–Fri, 10am–3pm.",
    tag: "event",
  },
  {
    id: "neb-2082-results",
    day: "28",
    month: "Chaitra",
    year: "2082",
    title: "92% of our +2 cohort passed NEB first attempt",
    excerpt:
      "Nine students scored above 3.8 GPA across Science and Management streams.",
    tag: "results",
  },
  {
    id: "g9-community-research",
    day: "14",
    month: "Chaitra",
    year: "2082",
    title: "Grade 9 community research project — published",
    excerpt:
      "A 40-page report on waste management in Baneshwor, researched, written, printed by students.",
    tag: "news",
  },
  {
    id: "mardi-himal-2082",
    day: "02",
    month: "Falgun",
    year: "2082",
    title: "Annual Himalayan trek — Mardi Himal, Grade 10",
    excerpt:
      "Five days, three teachers, thirty-two students. Nobody turned back.",
    tag: "news",
  },
];

const FALLBACK_TEACHERS: Teacher[] = [
  { id: "anjali-shrestha", name: "Anjali Shrestha", role: "Principal · Physics", initials: "AS" },
  { id: "rajan-thapa", name: "Rajan Thapa", role: "Head of Humanities", initials: "RT" },
  { id: "pratibha-gurung", name: "Pratibha Gurung", role: "Chemistry · Grade 11–12", initials: "PG" },
  { id: "dipesh-basnet", name: "Dipesh Basnet", role: "Maths · Grade 9–12", initials: "DB" },
];

/** Get news/events — today this returns fallback; Sanity plugs in later. */
export async function getNews(): Promise<NewsItem[]> {
  return FALLBACK_NEWS;
}

/** Get teachers — today this returns fallback; Sanity plugs in later. */
export async function getTeachers(): Promise<Teacher[]> {
  return FALLBACK_TEACHERS;
}
