import React from "react"

export default (props) => (
  <div className="playerCard">
    <img
      src={props.imgSrc}
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
        <img
          src={props.playersNat}
          alt={props.playersFlag}
          width="30px"
          height="20px"
        />
      </div>
    </div>
  </div>
)
