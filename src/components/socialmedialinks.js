import React from "react"
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

import styles from "./socialmedialinks.module.css"

export default() => (
  <div className={styles.socialGroup}>
    <a
      href="https://www.facebook.com/skanestags/"
      aria-label="Facebook icon link to Skane Stag's Facebook page"
    >
      <FaFacebookSquare />
    </a>
    <a
      href="https://www.instagram.com/skanestags"
      aria-label="Instagram icon link to Skane Stag's Instagram page"
    >
     <FaInstagram />
    </a>
    <a
      href="https://twitter.com/skanecrusaders"
      aria-label="Twitter icon link to Skane Stag's Twitter page"
    >
      <FaTwitter />
    </a>
    <a
      href="https://www.youtube.com/channel/UClPPKnRY10Yp0YxlCnULkkQ"
      aria-label="Youtube icon link to Skane Stag's Youtube page"
    >
      <FaYoutube />
    </a>
  </div>
)
