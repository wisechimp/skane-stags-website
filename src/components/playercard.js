import React from "react"
import Img from "gatsby-image"

export default (props) => (
  <div className="playerCard">
    <Img
      fluid={props.imgSrc}
      alt={props.imgAlt}
      width="200"
      height="200"
    />
    <div className="playerInfoContainer">
      <div className="playerInfo">
        <p className="playerCardText">
          <b>Name: {props.playerName}</b><br />
          Position: {props.playerPositiion}
        </p>
      </div>
      <div className="playerFlag">
        <Img
          fixed={props.playersNat}
          alt={props.playersFlag}
        />
      </div>
    </div>
  </div>
)
