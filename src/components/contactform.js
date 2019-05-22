import React, { Component } from "react"
import Axios from "axios"
import firebase from "@firebase/app"
import Reaptcha from "reaptcha"

import styles from "./contactform.module.css"

function ConfirmationMessage(props) {
  if (!props.confirmation) {
    return null;
  }

  return (
    <div>
      <p className={styles.confirmationMessage}>Thank you for your message!</p>
    </div>
  )
}

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactName: "",
      email: "",
      message: "",
      buttonEnabled: false,
      showConfirmationMessage: false
    };
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
    console.log(this.state)
  }

  onVerify = () => {
    this.setState({
      buttonEnabled: true
    });
  }

  allowValidation = event => {
    console.log("Allow Validation")
    document.getElementById('contactForm').removeAttribute('noValidate');
  }

  handleSubmit = event => {
    event.preventDefault();

    const config = {
        apiKey: `${process.env.FIREBASE_API_KEY}`, // Pull from .env
        databaseURL: 'https://skane-stags-website.firebaseio.com'
    };

    if (!firebase) {
      //const firebase = require('firebase/app');
      firebase.initializeApp(config);
  }

      const email = this.state.email
      const message = this.state.message
      const contactName = this.state.contactName
      const data = { email, message, contactName }
      console.log(data)

      Axios
        .post('https://us-central1-skane-stags-website.cloudfunctions.net/submit', data)
        .then(
          console.log("Wait a minute Mr Postman"),
          this.setState({
            showConfirmationMessage: true,
            buttonEnabled: false
          })
        )
        .catch(error => { console.log("What an error:" + error);
      });
  };

  render() {
    return (
      <div className={styles.contactForm}>
        <form
          id="contactForm"
          onSubmit={this.handleSubmit}
          noValidate
        >
          <fieldset>
            <div className={styles.formFields}>
              <p className={styles.formRow}>
                <label
                  className={styles.formLabel}
                  htmlFor="contactName"
                >
                  Name:
                </label>
                <input
                  className={styles.formInput}
                  type="text"
                  id="contactName"
                  name="contactName"
                  placeholder="Your name"
                  required="required"
                  value={this.state.contactName}
                  onChange={this.handleInputChange}
                />
              </p>
              <p className={styles.formRow}>
                <label
                  className={styles.formLabel}
                  htmlFor="email"
                >
                  Email:
                </label>
                <input
                  className={styles.formInput}
                  id="email"
                  type="email"
                  name="email"
                  placeholder="yourname@email.com"
                  required="required"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </p>
              <p className={styles.formRow}>
                <label
                  className={styles.formLabel}
                  htmlFor="message"
                >
                  Message:
                </label>
                <textarea
                  className={styles.formInput}
                  id="message"
                  name="message"
                  placeholder="Your message"
                  required="required"
                  rows="5"
                  value={this.state.message}
                  onChange={this.handleInputChange}
                />
              </p>
              <Reaptcha
                sitekey={`${process.env.RECAPTCHA_SITE_KEY}`}
                onVerify={this.onVerify}
              />
              <button className={styles.formButton}
                id="submitButton"
                onClick={this.allowValidation}
                disabled={!this.state.buttonEnabled}
              >
                Send message
              </button>
            </div>
          </fieldset>
        </form>
        <ConfirmationMessage confirmation={this.state.showConfirmationMessage} />
      </div>
    )
  }
}

export default ContactForm
