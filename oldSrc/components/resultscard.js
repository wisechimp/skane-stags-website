import React from "react"

import styles from "./resultscard.module.css"

export default(props) => (
  <div>
    <div className={styles.resultContainer}>
      <div className={styles.homeTeam}>
        <p>{props.homeTeam}</p>
      </div>
      <div className={styles.score}>
        <p>{props.homeScore} <b>v</b> {props.awayScore}</p>
      </div>
      <div className={styles.awayTeam}>
        <p>{props.awayTeam}</p>
      </div>
    </div>
    <div className={styles.matchDetails}>
      <p>{props.date}, {props.venue}</p>
    </div>
  </div>
)
