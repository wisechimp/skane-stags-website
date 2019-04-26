import React from "react"

export default (props) => (
  <div className="videoWrapper">
    <iframe
      title={props.title}
      width={props.width}
      height={props.height}
      src={props.src}
      frameBorder="0"
      allowFullScreen
    />
  </div>
)
