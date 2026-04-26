import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { newsSchema } from "./sanity/schemas/news";
import { teacherSchema } from "./sanity/schemas/teacher";
import { lifePhotoSchema } from "./sanity/schemas/lifePhoto";
import { principalSchema } from "./sanity/schemas/principal";
import { aboutPageSchema } from "./sanity/schemas/aboutPage";
import { admissionsPageSchema } from "./sanity/schemas/admissionsPage";

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
    types: [newsSchema, teacherSchema, lifePhotoSchema, principalSchema, aboutPageSchema, admissionsPageSchema],
  },
});
