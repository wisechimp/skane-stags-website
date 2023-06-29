import React from "react"
import { LiteYoutubeEmbed } from "react-lite-yt-embed"

import { videoWrapper } from "./video.module.css"

const Video = ({ videoId, altText }) => {
  return (
    <div className={videoWrapper}>
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
