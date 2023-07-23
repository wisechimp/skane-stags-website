import Link from "next/link"
import Image from "next/image"

import NewsItem from "@/types/NewsItem"
import { getNewsItems } from "@/sanity/sanity-utils"

const News = async () => {
  const newsItems = await getNewsItems()

  return <div>{newsItems.map(newsItem => (
    <div>
      <p>{newsItem.title}</p>
      <Link href={`/news/${newsItem.slug}`}>Read More</Link>
    </div>
  ))}</div>
}

export default News