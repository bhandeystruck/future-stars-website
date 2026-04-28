import { defineField, defineType } from "sanity";

export const lifePhotoSchema = defineType({
  name: "lifePhoto",
  title: "Event Photos",
  type: "document",
  fields: [
    defineField({
      name: "event",
      title: "Event",
      type: "reference",
      to: [{ type: "event" }],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "label",
      title: "Caption (optional)",
      type: "string",
      description: "Short caption shown in the lightbox",
    }),
    defineField({
      name: "order",
      title: "Order within event",
      type: "number",
      description: "Lower numbers appear first. Leave blank for auto.",
    }),
  ],
  orderings: [
    { title: "Manual order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "label", subtitle: "event.name", media: "image" },
    prepare({ title, subtitle, media }) {
      return { title: title ?? "Untitled photo", subtitle, media };
    },
  },
});
