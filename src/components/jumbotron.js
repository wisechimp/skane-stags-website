import React from "react"
import Img from "gatsby-image"

import { jumbotronic } from "./jumbotron.module.css"

export default props => {
  const { mobileJumboImage, desktopJumboImage } = props.images
  const sources = [
    mobileJumboImage.childImageSharp.fluid,
    {
      ...desktopJumboImage.childImageSharp.fluid,
      media: `(min-width: 769px)`,
    },
  ]

  return (
    <div className={jumbotronic}>
      <Img
        fluid={sources}
        alt="Skane Stags player breaking through a tackle in Poland."
      />
      <p>Skane Stags in action in Poland.</p>
    </div>
  )
}
