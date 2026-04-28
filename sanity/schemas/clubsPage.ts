import { defineField, defineType } from "sanity";

const img = (name: string, title: string) =>
  defineField({ name, title, type: "image", options: { hotspot: true } });

export const clubsPageSchema = defineType({
  name: "clubsPage",
  title: "Clubs & Activities",
  type: "document",
  fields: [
    img("artsPhoto", "Arts club photo"),
    img("karatePhoto", "Karate club photo"),
    img("musicPhoto", "Music club photo"),
    img("sportsPhoto", "Sports photo"),
    img("vofsPhoto", "VOFS — Voice of Future Stars photo"),
  ],
  preview: {
    prepare: () => ({ title: "Clubs & Activities" }),
  },
});
