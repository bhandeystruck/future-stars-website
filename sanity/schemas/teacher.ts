import { defineField, defineType } from "sanity";

export const teacherSchema = defineType({
  name: "teacher",
  title: "Teachers",
  type: "document",
  fields: [
    defineField({ name: "id", title: "Slug / ID", type: "slug", options: { source: "name" }, validation: (r) => r.required() }),
    defineField({ name: "name", title: "Full name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", title: "Role", type: "string", description: "e.g. Principal · Physics", validation: (r) => r.required() }),
    defineField({ name: "initials", title: "Initials", type: "string", description: "e.g. AS", validation: (r) => r.required().max(3) }),
    defineField({ name: "order", title: "Display order", type: "number" }),
  ],
  orderings: [{ title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name", subtitle: "role" },
  },
});
