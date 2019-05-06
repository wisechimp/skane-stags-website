import React from "react"
import Img from "gatsby-image"

import styles from "./playercard.module.css"

export default (props) => (
  <div className={styles.playerCard}>
    <Img
      fluid={props.imgSrc}
      alt={props.imgAlt}
      width="200"
      height="200"
    />
    <div className={styles.playerInfoContainer}>
      <div className={styles.playerInfo}>
        <p className={styles.playerCardText}>
          <b>Name: {props.playerName}</b><br />
          Position: {props.playerPositiion}
        </p>
      </div>
      <div className={styles.playerFlag}>
        <Img
          fixed={props.playersNat}
          alt={props.playersFlag}
        />
      </div>
    </div>
  </div>
)
