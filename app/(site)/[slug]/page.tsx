import { getPage } from "@/sanity/sanity-utils"

import Jumbotron from "@/app/components/jumbotron/Jumbotron"
import { PortableText } from "@portabletext/react"

type PageProps = {
  params: { slug: string }
}

const Page = async ({ params }: PageProps) => {
  const slug = params.slug
  const page = await getPage(slug)
  const { content, mainImage, mainImageAltText } = page

  return (
    <div>
      {mainImage 
        ? <Jumbotron image={mainImage} imageAlt={mainImageAltText} content={content}/>
        : <PortableText value={content} />}
    </div>
  )
}

export default Page
