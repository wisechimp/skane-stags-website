import Partner from "@/types/Partner";
import { groq } from "next-sanity";
import clientConfig from "./config/client-config";

const getPartners = async (): Promise<Partner[]> => {
  return clientConfig.fetch(
    groq`*[_type == "partner"]{
      _id,
      _createdAt,
      name,
      "logo": logo.asset->url,
      "logoAltText": logo.altText,
      url,
    }`
  )
}

export { getPartners }