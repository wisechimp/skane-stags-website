import MenuItem from "@/types/MenuItem";
import Page from '@/types/Page'
import Partner from "@/types/Partner";
import { groq } from "next-sanity";
import clientConfig from "./config/client-config";
import NewsItem from "@/types/NewsItem";

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
      "mainImageHeight": mainImage.imagesize[]->height,
      "mainImageWidth": mainImage.imagesize[]->width
    }`,
    { slug: slug }
  )
}

const getNewsItems = async (): Promise<NewsItem[]> => {
  return clientConfig.fetch(
    groq`*[_type == "news" ] | order(publishedOn desc) {
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      "mainImageAltText": mainImage.altText,
      publishedOn
    }`
  )
}

const getNews = async (slug: string): Promise<Page> => {
  return clientConfig.fetch(
    groq`*[_type == "news" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content,
      "mainImage": mainImage.asset->url,
      "mainImageAltText": mainImage.altText,
      "mainImageHeight": mainImage.imagesize[]->height,
      "mainImageWidth": mainImage.imagesize[]->width,
      publishedOn
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

export { getMenuItems, getPage, getNews, getNewsItems, getPartners }