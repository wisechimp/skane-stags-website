import React from "react"
import Img from "gatsby-image"

import {
  playerCard,
  playerCardText,
  playerFlagPosition,
  playerNameText,
  playerPhoto,
} from "./playercard.module.css"

export default ({
  playerName,
  playerPosition,
  playersNat,
  playersFlag,
  imgSrc,
  sponsor,
}) => (
  <div className={playerCard}>
    <div className={playerPhoto}>
      <Img fluid={imgSrc} alt={playerName} />
      <div className={playerFlagPosition}>
        <Img fixed={playersFlag} alt={playersNat} />
      </div>
      <div className={playerNameText}>
        <p>{playerName}</p>
      </div>
    </div>
    <div className={playerCardText}>
      <p>Position: {playerPosition}</p>
      <p>Sponsored by: {sponsor}</p>
    </div>
  </div>
)
