"use client"

import { LiteYoutubeEmbed } from "react-lite-yt-embed"

import * as styles from "./video.module.css"

const Video = ({ videoId, altText }) => {
  return (
    <div className={styles.videoWrapper}>
      <LiteYoutubeEmbed
        id={videoId}
        lazyImage
        mute={false}
        isMobile
        imageAltText={altText}
      />
    </div>
  )
}

export default Video
