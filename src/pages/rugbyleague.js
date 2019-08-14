import React from "react"

import Layout from "../components/layout"
import Video from "../components/video"

export default () => (
  <Layout
    pageTitle="Rugby League"
  >
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
      <br />
      <h3><i>A Brief History</i></h3>
      <div>
        <p>
          In 1895 representatives of 22 clubs based in the North of England decided to split from the Rugby Football Union (RFL) and start a new organisation called the Northern Union,   which would become the Rugby Football League (RFL). The reason for this split was the desire to pay players for turning out for the club. At the time players worked 6 days a week and would have to take time off from work to play, which of course meant that they missed out on their work payment. This wasn't such an issue for clubs in the south of England where players were often wealthy gentlemen. However in poorer regions this was a problem. The Northern clubs had proposed to reimburse people for lost earnings but this had been refused by the RFU. They had seen how Football had recently become amateur and were concerned at the increasing numbers of working class people playing that game, a situation that they didn't want repeated with rugby!
        </p>
        <br />
        <p>
          Over the following years the RFL took steps to make the game more open and exciting for fans, in order to afford paying their players, such as reducing the number of players to 13, removing the line out, reducing the number of points for a penalty kicks to encourage more tries and eventually the play the ball after a tackle giving us the game we know and recognise today as a distinct sport from rugby union.
        </p>
      </div>
    </div>
  </Layout>
)
