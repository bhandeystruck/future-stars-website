/**
 * Content module — types + fallback data for news, teachers, etc.
 *
 * The exported fetchers (`getNews`, `getTeachers`) query Sanity when
 * NEXT_PUBLIC_SANITY_PROJECT_ID is set, and fall back to static data otherwise.
 */

import { sanityClient } from "./sanity";

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

/** Get news/events — queries Sanity if configured, otherwise returns fallback. */
export async function getNews(): Promise<NewsItem[]> {
  if (!sanityClient) return FALLBACK_NEWS;
  try {
    const items = await sanityClient.fetch<NewsItem[]>(
      `*[_type == "news"] | order(_createdAt desc) {
        "id": id.current,
        day,
        month,
        year,
        title,
        excerpt,
        tag
      }`
    );
    return items.length ? items : FALLBACK_NEWS;
  } catch {
    return FALLBACK_NEWS;
  }
}

/** Get teachers — queries Sanity if configured, otherwise returns fallback. */
export async function getTeachers(): Promise<Teacher[]> {
  if (!sanityClient) return FALLBACK_TEACHERS;
  try {
    const items = await sanityClient.fetch<Teacher[]>(
      `*[_type == "teacher"] | order(order asc) {
        "id": id.current,
        name,
        role,
        initials
      }`
    );
    return items.length ? items : FALLBACK_TEACHERS;
  } catch {
    return FALLBACK_TEACHERS;
  }
}
