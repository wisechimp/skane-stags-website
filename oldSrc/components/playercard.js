import React from "react"
import Img from "gatsby-image"
import ReactCountryFlag from "react-country-flag"

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
        <ReactCountryFlag
          countryCode={playersFlag}
          svg
          style={{
            width: "2em",
            height: "2em",
          }}
        />
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
