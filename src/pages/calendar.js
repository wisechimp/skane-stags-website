import React from "react"

import Layout from "../components/layout"
import Video from "../components/video"

export default () => (
  <Layout>
    <h1>Calendar</h1>
    <Video
      title="Skane Stags Rugby League Club Calendar"
      width="800"
      height="600"
      src="https://calendar.google.com/calendar/embed?src=skanerugbyleague%40gmail.com&ctz=Europe/Stockholm"
    />
  </Layout>
)
