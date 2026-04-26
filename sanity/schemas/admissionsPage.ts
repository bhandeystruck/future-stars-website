import { defineField, defineType } from "sanity";

const img = (name: string, title: string) =>
  defineField({ name, title, type: "image", options: { hotspot: true } });

export const admissionsPageSchema = defineType({
  name: "admissionsPage",
  title: "Admissions Page",
  type: "document",
  fields: [
    img("bannerPhoto",      "Banner photo — school entrance (portrait, right side of hero)"),
    img("processPhoto",     "Application process photo — classroom / school visit (landscape)"),
    img("feesPhoto",        "Fees & scholarships wide photo — library, hallway, or classroom"),
    img("boysUniformPhoto", "Boys uniform photo — full uniform head to toe (portrait 3:4)"),
    img("girlsUniformPhoto","Girls uniform photo — full uniform head to toe (portrait 3:4)"),
    img("openHousePhoto",   "Open house photo — parents & students at an event (landscape)"),
  ],
  preview: {
    prepare: () => ({ title: "Admissions Page" }),
  },
});
