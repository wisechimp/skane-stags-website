import React from "react"

import styles from "./contactform.module.css"
import Recaptcha from "./recaptcha"

export default () => (
  <div className={styles.contactForm}>
    <form method="post" action="script.url">
      <fieldset>
        <div className={styles.formFields}>
          <p className={styles.formRow}>
            <label
              className={styles.formLabel}
              for="name"
            >
              Name:
            </label>
            <input
              className={styles.formInput}
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required="required"
            />
          </p>
          <p className={styles.formRow}>
            <label
              className={styles.formLabel}
              for="email"
            >
              Email:
            </label>
            <input
              className={styles.formInput}
              type="email"
              id="email"
              email="email"
              placeholder="yourname@email.com"
              required="required"
            />
          </p>
          <p className={styles.formRow}>
            <label
              className={styles.formLabel}
              for="message"
            >
              Message:
            </label>
            <textarea
              className={styles.formInput}
              id="message"
              message="message"
              placeholder="Your message"
              required="required"
              rows="5"
            />
          </p>
          <Recaptcha />
          <div className={styles.formButton}>
            <input
              type="submit"
              value="Send message"
            />
          </div>
        </div>
      </fieldset>
    </form>
  </div>
)
