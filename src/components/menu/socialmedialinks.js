import React from "react"
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import { socialGroup } from "./socialmedialinks.module.css"

export default () => (
  <div className={socialGroup}>
    <OutboundLink
      href="https://www.facebook.com/skanestags/"
      aria-label="Facebook icon link to Skane Stag's Facebook page"
    >
      <FaFacebookSquare />
    </OutboundLink>
    <OutboundLink
      href="https://www.instagram.com/skanestags"
      aria-label="Instagram icon link to Skane Stag's Instagram page"
    >
      <FaInstagram />
    </OutboundLink>
    <OutboundLink
      href="https://twitter.com/skanecrusaders"
      aria-label="Twitter icon link to Skane Stag's Twitter page"
    >
      <FaTwitter />
    </OutboundLink>
    <OutboundLink
      href="https://www.youtube.com/channel/UCFgK9OchuqAxrBLrvcs4MKg"
      aria-label="Youtube icon link to Skane Stag's Youtube page"
    >
      <FaYoutube />
    </OutboundLink>
  </div>
)
