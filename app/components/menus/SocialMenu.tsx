import Link from "next/link"
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"

import * as styles from './socialmenu.module.css'

const SocialMenu = () => {
  return (
    <div className={styles.socialMenuContainer}>
      <Link href="/contact">Contact</Link>
      <div className={styles.socialMenuIcons}>
        <Link href="https://www.facebook.com/skanestags/" aria-label="Visit our Facebook page">
          <FaFacebookSquare />
        </Link>
        <Link href="https://www.instagram.com/skanestags" aria-label="Visit our Instagram feed">
          <FaInstagram />
        </Link>
        <Link href="https://twitter.com/skanecrusaders" aria-label="We're on Twitter too">
          <FaTwitter />
        </Link>
        <Link href="https://www.youtube.com/channel/UCFgK9OchuqAxrBLrvcs4MKg" aria-label="We occassionally post videos to YouTube">
          <FaYoutube />
        </Link>
      </div>
    </div>
  )
}

export default SocialMenu