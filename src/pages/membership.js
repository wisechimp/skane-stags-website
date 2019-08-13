import React from "react"

import Layout from "../components/layout"
import StagsSubsImg from "../images/2019stagssubs.png"

export default () => (
  <Layout pageTitle="Join Us">
    <div>
      <img className="poster"
        src={StagsSubsImg}
        alt="Poster calling for subs payments"
      />
      <p>The membership fee provides you the following benefits:</p>
      <ul>
        <li>Training sessions with a qualified coach from February to October</li>
        <li>10% discount at our main sponsor o'Leary's</li>
        <li>Subsidised merchandise</li>
        <li>Subsidised away trips</li>
        <li>The opportunity to vote at the AGM</li>
        <li>A warm feeling from supporting Rugby League in Skåne and Sweden! This benefit can be appreciated the most in winter...</li>
      </ul>
    </div>
  </Layout>
)
