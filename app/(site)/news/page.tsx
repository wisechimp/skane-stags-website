import { getNewsItems } from "@/sanity/sanity-utils"
import NewsCard from "@/app/components/newscard/NewsCard"
import * as styles from './news.module.css'

const News = async () => {
  const newsItems = await getNewsItems()

  return <div className={styles.newsContainer}>{newsItems.map(newsItem => (
    <div>
      <NewsCard newsItem={newsItem} />
    </div>
  ))}</div>
}

export default News