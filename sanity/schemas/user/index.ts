import { defineField } from "sanity";

const User = {
  name: "user",
  title: "Users",
  type: "document",
  fields: [
    defineField({
      name: "username",
      title: "Username",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "profilePhoto",
      title: "profilePhoto",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "accountType",
      title: "accountType",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "isUserActive",
      title: "IsUserActive",
      type: "boolean",
      validation: (rule) => rule.required(),
    }),
  ],
};

export default User;
