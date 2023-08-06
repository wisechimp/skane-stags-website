import { getNewsItems, getPage } from "@/sanity/sanity-utils"

import Jumbotron from "@/app/components/jumbotron/Jumbotron"
import NewsCard from "../components/newscard/NewsCard"
import * as styles from './home.module.css'
import Video from "../components/video/video"

const Home = async () => {
  const page = await getPage('home')
  console.log(page)
  const latestNews = await (await getNewsItems()).slice(0, 3)

  return (
    <div>
      <Jumbotron data={page} />
      <div className={styles.latestNewsContainer}>
        <h2>Latest News</h2>
        <div className={styles.latestNewsCardsContainer}>
          {latestNews.map(latestNewsItem => (
            <NewsCard newsItem={latestNewsItem} />
          ))}
        </div>
      </div>
      <div className={styles.videoPanel}>
        <h2>
          Stags TV -{" "}
          <span style={{
            fontWeight: 400
            }}>
            Highlights from the Skåne 9's when the Stags brought home
            the silverwear!
          </span>
        </h2>
        <Video
          videoId="AnQPQslLzkA"
          altText="Footage from the 2017 Skane 9's tournament."
        />
      </div>
    </div>
  )
}

export default Home
