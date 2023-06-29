import React from "react"
import Img from "gatsby-image"

import { jumbotronic } from "./jumbotron.module.css"

export default props => {
  const { jumboImage } = props.images
  console.log(jumboImage)

  return (
    <div className={jumbotronic}>
      <Img
        fluid={jumboImage.childImageSharp.fluid}
        alt="Skane Stags player breaking through a tackle in Poland."
      />
      <p>Skane Stags in action in Poland.</p>
    </div>
  )
}
