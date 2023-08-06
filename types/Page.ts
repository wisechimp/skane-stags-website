import { PortableTextBlock } from "sanity"

type Page = {
  _id: string
  _createdAt: Date
  title: string
  slug: string
  mainImage: string
  mainImageAltText: string
  mainImageHeight: number
  mainImageWidth: number
  content: PortableTextBlock[]
}

export default Page
