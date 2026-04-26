import { defineField, defineType } from "sanity";

export const lifePhotoSchema = defineType({
  name: "lifePhoto",
  title: "Student Life Photos",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      description: "Short caption shown on the photo",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["Clubs", "Sport", "Arts", "STEM", "Research", "Trek", "Showcase"] },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({ name: "order", title: "Display order", type: "number" }),
  ],
  orderings: [
    { title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "label", subtitle: "category", media: "image" },
  },
});
