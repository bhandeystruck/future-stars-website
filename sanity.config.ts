import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { newsSchema } from "./sanity/schemas/news";
import { teacherSchema } from "./sanity/schemas/teacher";
import { principalSchema } from "./sanity/schemas/principal";
import { aboutPageSchema } from "./sanity/schemas/aboutPage";
import { admissionsPageSchema } from "./sanity/schemas/admissionsPage";
import { homePageSchema } from "./sanity/schemas/homePage";
import { eventSchema } from "./sanity/schemas/event";
import { facilitiesPageSchema } from "./sanity/schemas/facilitiesPage";
import { clubsPageSchema } from "./sanity/schemas/clubsPage";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
  name: "future-stars",
  title: "Future Stars Website",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [newsSchema, teacherSchema, principalSchema, aboutPageSchema, admissionsPageSchema, homePageSchema, eventSchema, facilitiesPageSchema, clubsPageSchema],
  },
});
