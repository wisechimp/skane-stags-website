import Image from 'next/image'

import * as styles from './jumbotron.module.css'
import { PortableText } from '@portabletext/react'

const Jumbotron = ({ image, imageAlt, content }) => {
  return (
    <div className={styles.jumbotronContainer}>
      <Image src={image} alt={imageAlt} width={1024} height={678} />
      <div className={styles.jumbotronText}>
        <PortableText value={content} />
      </div>
    </div>
  )
}

export default Jumbotron