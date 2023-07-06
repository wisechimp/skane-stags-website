import { getPage } from "@/sanity/sanity-utils"

import Jumbotron from "@/app/components/jumbotron/Jumbotron"

const Home = async () => {
  const page = await getPage('home')
  const { content, mainImage, mainImageAlt } = page

  return (
    <div>
      <Jumbotron image={mainImage} imageAlt={mainImageAlt} content={content} />
    </div>
  )
}

export default Home
