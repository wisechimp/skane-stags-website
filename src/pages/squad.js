import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PlayerCard from "../components/playercard"
import stagsLogo from "../images/skanestagslogo.png"
import swedenFlag from "../images/sweden-flag-tn.png"

export default () => (

    <Layout>
      <h1>Squad</h1>
      <PlayerCard
        imgSrc={stagsLogo}
        imgAlt="Player's photo"
        playerName="Player 1"
        playerPositiion="Prop"
        playersNat={swedenFlag}
        playersFlag="Player's Flag"
      />
    </Layout>
  )
