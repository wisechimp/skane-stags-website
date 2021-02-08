import React from "react"

import { mapWrapper } from "./map.module.css"

export default props => (
  <div className={mapWrapper}>
    <iframe
      title={props.title}
      width={props.width}
      height={props.height}
      src={props.src}
      frameBorder="0"
    />
  </div>
)
