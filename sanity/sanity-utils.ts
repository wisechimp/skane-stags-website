import MenuItem from "@/types/MenuItem";
import Partner from "@/types/Partner";
import { groq } from "next-sanity";
import clientConfig from "./config/client-config";

const getMenuItems = async (): Promise<MenuItem[]> => {
  return clientConfig.fetch(
    groq`*[_type == "menuItem"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
    }`
  )
}

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

export { getMenuItems, getPartners }