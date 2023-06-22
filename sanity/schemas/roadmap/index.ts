import { defineField } from "sanity";

const Roadmap = {
  name: "roadmap",
  title: "Roadmaps",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "user" }],
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "curriculums",
      title: "Curriculums",
      type: "array",
      of: [
        {
          type: "object",
          name: "curriculumItem",
          fields: [
            { type: "string", name: "subject" },
            { type: "string", name: "detail" },
            { type: "number", name: "requiredTimeHour" },
            { type: "number", name: "requiredTimeMin" },
          ],
        },
      ],
    }),
  ],
};

export default Roadmap;
