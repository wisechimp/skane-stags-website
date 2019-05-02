import React from "react"

import Layout from "../components/layout"
import Video from "../components/video"

export default () => (
  <Layout>
    <h1>Rugby League?</h1>
    <p>Check out the video below for a quick introduction to rugby league:</p>
    <Video
      title="Rugby League explained for beginners."
      width="1280"
      height="720"
      src="https://www.youtube.com/embed/vFwHtFJarhE"
    />
    <p>Rugby League originated in the north of England in 1895.</p>
  </Layout>
)
