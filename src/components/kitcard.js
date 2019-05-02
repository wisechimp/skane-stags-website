import React from "react"
import Img from "gatsby-image"

export default (props) => (
  <div>
    <Img
      fluid={props.kitImgSrc}
      alt={props.kitImgAlt}
      width="300"
    />
    <div>
      <p>
        <b>{props.kitItemName}</b><br />
        {props.kitItemDescription}
      </p>
    </div>
  </div>
)
