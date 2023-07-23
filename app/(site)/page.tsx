import { getNewsItems, getPage } from "@/sanity/sanity-utils"

import Jumbotron from "@/app/components/jumbotron/Jumbotron"
import NewsCard from "../components/newscard/NewsCard"
import * as styles from './home.module.css'

const Home = async () => {
  const page = await getPage('home')
  const { content, mainImage, mainImageAlt } = page
  const latestNews = await (await getNewsItems()).slice(0, 3)
  console.log(latestNews)

  return (
    <div>
      <Jumbotron image={mainImage} imageAlt={mainImageAlt} content={content} />
      <div className={styles.latestNewsContainer}>
        <h2>Latest News</h2>
        <div className={styles.latestNewsCardsContainer}>
          {latestNews.map(latestNewsItem => (
            <NewsCard newsItem={latestNewsItem} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
