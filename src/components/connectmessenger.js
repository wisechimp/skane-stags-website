import React from  "react"

import messyLogo from "../images/messengerlogo.svg"
import styles from "./connectmessenger.module.css"

export default () => (
  <div className={styles.connectMessenger}>
    <img
      className={styles.messyLogo}
      src={messyLogo}
      alt="Facebook's Messenger logo"
    />
    <p>
      <a
        className={styles.messageButt}
        href="https://m.me/skanestags"
      >
          Connect with us on Messenger
      </a>
    </p>
  </div>
)
