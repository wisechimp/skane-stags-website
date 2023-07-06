import MenuItem from "@/types/MenuItem";
import Page from '@/types/Page'
import Partner from "@/types/Partner";
import { groq } from "next-sanity";
import clientConfig from "./config/client-config";

const getMenuItems = async (): Promise<MenuItem[]> => {
  return clientConfig.fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
    }`
  )
}

const getPage = async (slug: string): Promise<Page> => {
  return clientConfig.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      content,
      "mainImage": mainImage.asset->url,
      "mainImageAltText": mainImage.altText,
    }`,
    { slug: slug }
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

export { getMenuItems, getPage, getPartners }