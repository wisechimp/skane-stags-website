import { createClient } from "next-sanity"

const clientConfig = createClient({
  projectId: "9s5s2066",
  dataset: "production",
  apiVersion: "2023-06-28",
  useCdn: true,
})

export default clientConfig
