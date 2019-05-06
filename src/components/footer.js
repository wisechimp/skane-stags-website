import React from "react"

import styles from "./footer.module.css"
import oLearysLogo from "../images/olearysnewlogo.jpg"

export default () => (
  <div className={styles.footer}>
    <p>Supported by <a href="https://olearys.se/lund/" target="_blank" rel="nofollow noopener noreferrer">O'Leary's</a> in Lund.</p>
    <img className={styles.footerLogo}
      src={oLearysLogo}
      alt="Logo for o'Learys in Lund, sponsors of Skåne Stags Rugby League Club."
    />
    <p>Join us there after the game!</p>
  </div>
)
