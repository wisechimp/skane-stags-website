import Image from "next/image"
import Link from "next/link"

import * as styles from './newscard.module.css'

const NewsCard = ({newsItem}) => {
  const { title, publishedOn, slug, mainImage, mainImageAltText } = newsItem
  return (
    <div className={styles.newsCardContainer}>
      <div className={styles.newsCardLeftRibbon}>
        {publishedOn}
      </div>
      <Image
        src={mainImage}
        alt={mainImageAltText}
        width={320}
        height={400}
        style={{ objectFit: "cover" }}
      />
      <div className={styles.newsCardRightRibbon}>
        <Link href={`/news/${slug}`}>{title}</Link>
      </div>
    </div>
  )
}

export default NewsCard