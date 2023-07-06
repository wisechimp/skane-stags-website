import { PortableTextBlock } from "sanity"

type Page = {
  _id: string
  _createdAt: Date
  title: string
  slug: string
  mainImage: string
  mainImageAlt: string
  content: PortableTextBlock[]
}

export default Page
