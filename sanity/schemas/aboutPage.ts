import { defineField, defineType } from "sanity";

const img = (name: string, title: string) =>
  defineField({ name, title, type: "image", options: { hotspot: true } });

export const aboutPageSchema = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    // Intro
    img("campusPhoto", "Campus hero photo  (intro section — wide panoramic)"),

    // History
    img("historyPhoto1", "History photo 1 — older (e.g. original school building)"),
    img("historyPhoto2", "History photo 2 — recent (e.g. campus today)"),

    // Aims — one per card, in order
    img("aimsPhoto1", "Aims photo 1 — Academic excellence (e.g. lab)"),
    img("aimsPhoto2", "Aims photo 2 — Whole-child development (e.g. trek)"),
    img("aimsPhoto3", "Aims photo 3 — Belonging (e.g. assembly)"),
    img("aimsPhoto4", "Aims photo 4 — Real-world learning (e.g. fieldwork)"),

    // Policies
    img("policiesPhoto", "Policies wide photo (e.g. school entrance)"),

    // SEN
    img("senPhoto", "SEN photo — learning support (e.g. one-on-one session)"),
  ],
  preview: {
    prepare: () => ({ title: "About Page" }),
  },
});
