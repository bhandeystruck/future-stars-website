import { defineField, defineType } from "sanity";

export const newsSchema = defineType({
  name: "news",
  title: "News & Events",
  type: "document",
  fields: [
    defineField({ name: "id", title: "Slug / ID", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({
      name: "tag",
      title: "Tag",
      type: "string",
      options: { list: ["event", "results", "news"] },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "image",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "day", title: "Day (BS)", type: "string", description: "e.g. 08" }),
    defineField({ name: "month", title: "Month (BS)", type: "string", description: "e.g. Baishakh" }),
    defineField({ name: "year", title: "Year (BS)", type: "string", description: "e.g. 2083" }),
  ],
  preview: {
    select: { title: "title", subtitle: "tag" },
  },
});
