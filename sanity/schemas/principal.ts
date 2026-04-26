import { defineField, defineType } from "sanity";

export const principalSchema = defineType({
  name: "principal",
  title: "Principal",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Full name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "role",
      title: "Role / credentials",
      type: "string",
      description: "e.g. Principal · B.Ed, M.Ed (TU) · Est. 2064 BS",
    }),
    defineField({
      name: "image",
      title: "Portrait photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "quote",
      title: "Heading quote",
      type: "text",
      rows: 2,
      description: "Bold pull-quote shown as the section heading",
    }),
    defineField({ name: "para1", title: "Paragraph 1", type: "text", rows: 4 }),
    defineField({ name: "para2", title: "Paragraph 2", type: "text", rows: 4 }),
    defineField({ name: "para3", title: "Paragraph 3", type: "text", rows: 4 }),
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "image" },
  },
});
