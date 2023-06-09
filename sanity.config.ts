import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemas";
const config = defineConfig({
  projectId: projectId,
  dataset: dataset,
  title: "promoto site",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemaTypes },
});
export default config;
