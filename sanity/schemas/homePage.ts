import { defineField, defineType } from "sanity";

const img = (name: string, title: string) =>
  defineField({ name, title, type: "image", options: { hotspot: true } });

export const homePageSchema = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    img("heroPhoto",  "Hero background photo — school campus, morning assembly, or wide classroom shot (landscape 16:9)"),
    img("whyPhoto",   "Why Future Stars — student portrait, full length, centre of section (portrait 3:4)"),
  ],
  preview: {
    prepare: () => ({ title: "Home Page" }),
  },
});
