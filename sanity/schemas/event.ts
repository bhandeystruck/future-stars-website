import { defineField, defineType } from "sanity";

export const eventSchema = defineType({
  name: "event",
  title: "Events",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Event name",
      type: "string",
      description: "e.g. Annual Sports Day 2083, Mardi Himal Trek 2083",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 80 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "date",
      title: "Event date",
      type: "date",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Sports", value: "Sports" },
          { title: "Arts & Culture", value: "Arts" },
          { title: "STEM & Robotics", value: "STEM" },
          { title: "Trek & Outdoors", value: "Trek" },
          { title: "Research", value: "Research" },
          { title: "Events & Celebrations", value: "Events" },
          { title: "Clubs", value: "Clubs" },
          { title: "Campus Life", value: "Campus" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "coverPhoto",
      title: "Cover photo",
      type: "image",
      options: { hotspot: true },
      description: "Shown on the gallery index card — pick the best shot from the event",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Short description",
      type: "text",
      rows: 2,
      description: "One or two sentences shown on the event page",
    }),
    defineField({
      name: "photos",
      title: "Event photos",
      type: "array",
      description: "Drag multiple images here at once, or click Add and select multiple files.",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
  ],
  orderings: [
    { title: "Newest first", name: "dateDesc", by: [{ field: "date", direction: "desc" }] },
  ],
  preview: {
    select: { title: "name", subtitle: "date", media: "coverPhoto" },
  },
});
