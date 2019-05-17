import React from "react"
import Axios from "axios"

import styles from "./contactform.module.css"
import Recaptcha from "./recaptcha"

const config = {
    apiKey: '****************', // Pull from .env
    databaseURL: 'https://skane-stags-website.firebaseio.com'
};

const handleSubmit = event => {

  if (!firebaseApp && window !== undefined) {
    const firebase = require('firebase/app');
    setFirebaseApp(firebase.initializeApp(config));
}

    event.preventDefault();

    const data = { email, message, name, time: getTime() };

    Axios.post('https://us-central1-skane-stags-website.cloudfunctions.net/submit', data).catch(error => {
        console.log(error);
    });
};

export default () => (
  <div className={styles.contactForm}>
    <form onSubmit="{handleSubmit}">
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
              value="{name}"
              onChange="{handleNameChange}"
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
              value="{email}"
              onChange="{handleEmailChange}"
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
              value="{message}"
              onChange="{handleMessageChange}"
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
