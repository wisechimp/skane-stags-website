import React from "react"
import Img from "gatsby-image"

import { kitCard, kitImage, kitText } from "./kitcard.module.css"

export default ({ kitImgAlt, kitImgSrc, kitItemDescription, kitItemName }) => (
  <div className={kitCard}>
    <div className={kitImage}>
      <Img fluid={kitImgSrc} alt={kitImgAlt} />
    </div>
    <div className={kitText}>
      <p className="playerCardText">
        <b>{kitItemName}</b>
        <br />
        {kitItemDescription}
      </p>
    </div>
  </div>
)
