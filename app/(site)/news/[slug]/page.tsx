import { getNews } from "@/sanity/sanity-utils"

import Jumbotron from "@/app/components/jumbotron/Jumbotron"
import { PortableText } from "@portabletext/react"

type NewsProps = {
  params: { slug: string }
}

const Page = async ({ params }: NewsProps) => {
  const slug = params.slug
  const page = await getNews(slug)
  const { content, mainImage, mainImageAlt } = page

  return (
    <div>
      {mainImage ? (
        <Jumbotron
          image={mainImage}
          imageAlt={mainImageAlt}
          content={content}
        />
      ) : (
        <PortableText value={content} />
      )}
    </div>
  )
}

export default Page
