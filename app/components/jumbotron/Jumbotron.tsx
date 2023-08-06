import Image from 'next/image'

import * as styles from './jumbotron.module.css'
import { PortableText } from '@portabletext/react'

const Jumbotron = ({ data }) => {
  const { content, mainImage, mainImageAltText, mainImageHeight, mainImageWidth, publishedOn } = data
  const mainImageOrientation = parseInt(mainImageHeight)/parseInt(mainImageWidth)
  return (
    <div
      className={
        mainImageOrientation > 1
          ? styles.jumbotronContainerPortrait
          : styles.jumbotronContainerLandscape
      }
    >
      <Image
        src={mainImage}
        alt={mainImageAltText}
        width={parseInt(mainImageWidth)}
        height={parseInt(mainImageHeight)}
        sizes="
          (min-width: 1200px) 50vw, 100vw"
        priority={true}
      />
      <div className={styles.jumbotronText}>
        <h3>{publishedOn}</h3>
        <PortableText value={content} />
      </div>
    </div>
  )
}

export default Jumbotron