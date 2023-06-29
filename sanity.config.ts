import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
// import schemas from "./sanity/schemas"

const config = defineConfig({
  title: "Skane Stags Content",
  projectId: "9s5s2066",
  dataset: "production",
  apiVersion: "2023-06-28",
  basePath: "/studio",
  plugins: [deskTool()],
  /* schema: {
    types: schemas,
  }, */
})

export default config
