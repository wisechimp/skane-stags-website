import React from "react"

import Layout from "../components/layout/Layout"

export default () => (
  <Layout pageTitle="Calendar">
    <h1>Calendar</h1>
    <div className="calendarWrapper">
      <iframe
        title="Skane Stags Rugby League Club Calendar"
        width="800"
        height="600"
        src="https://calendar.google.com/calendar/embed?src=skanerugbyleague%40gmail.com&ctz=Europe/Stockholm"
        frameBorder="0"
      />
    </div>
  </Layout>
)
