import React from "react"

import styles from "./video.module.css"

export default (props) => (
  <div className={styles.videoWrapper}>
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
