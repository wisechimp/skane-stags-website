import React from "react"
import Img from "gatsby-image"

import { headerContainer, brandname, logo } from "./hometitle.module.css"

export default ({ title, tagline, imgSrcs, imgAlt }) => {
  console.log(imgSrcs)
  const { mobileLogo, desktopLogo } = imgSrcs
  const sources = [
    mobileLogo.childImageSharp.fixed,
    {
      ...desktopLogo.childImageSharp.fixed,
      media: `(min-width: 769px)`,
    },
  ]

  return (
    <div className={headerContainer}>
      <div className={brandname}>
        <h1>{title}</h1>
        <h3>
          <i>{tagline}</i>
        </h3>
      </div>
      <div className={logo}>
        <Img fixed={sources} alt={imgAlt} />
      </div>
    </div>
  )
}
