import { PortableTextBlock } from "sanity"

type Page = {
  _id: string
  _createdAt: Date
  title: string
  slug: string
  mainImage: string
  mainImageAltText: string
  content: PortableTextBlock[]
}

export default Page
