import { defineField, defineType } from "sanity";

const img = (name: string, title: string) =>
  defineField({ name, title, type: "image", options: { hotspot: true } });

export const facilitiesPageSchema = defineType({
  name: "facilitiesPage",
  title: "Facilities",
  type: "document",
  fields: [
    img("auditoriumPhoto", "Auditorium photo"),
    img("computerLabPhoto", "Computer Lab photo"),
    img("scienceLabPhoto", "Science Lab photo"),
    img("libraryPhoto", "Library photo"),
    img("cafeteriaPhoto", "Cafeteria photo"),
  ],
  preview: {
    prepare: () => ({ title: "Facilities" }),
  },
});
