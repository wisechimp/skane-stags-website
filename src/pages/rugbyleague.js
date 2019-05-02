import React from "react"

import Layout from "../components/layout"
import Video from "../components/video"

export default () => (
  <Layout>
    <h1>What's Rugby League?</h1>
    <div className="bodyContent">
      <p>Check out the video below for a quick introduction to rugby league:</p>
    </div>
    <Video
      title="Rugby League explained for beginners."
      width="1280"
      height="720"
      src="https://www.youtube.com/embed/vFwHtFJarhE"
    />
    <div className="bodyContent">
      <h3><i>A Brief History</i></h3>
      <p>Rugby League originated in the north of England in 1895.</p>
    </div>
  </Layout>
)
