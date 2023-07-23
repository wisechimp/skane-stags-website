"use client"

import { useState, createRef } from "react"
import { useRouter } from "next/navigation"
import Recaptcha, { ReCAPTCHA } from "react-google-recaptcha"

import * as styles from "./contactform.module.css"

const RECAPTCHA_KEY = "6Lc41aMUAAAAAKR4GYKIICBTqNz3Kp8ZukrUAq41"
if (typeof RECAPTCHA_KEY === "undefined") {
  throw new Error(`
    Env var GATSBY_SITE_RECAPTCHA_KEY is undefined! 
    You probably forget to set it in your Netlify build environment variables. 
    Make sure to get a Recaptcha key at https://www.netlify.com/docs/form-handling/#custom-recaptcha-2-with-your-own-settings
    Note this demo is specifically for Recaptcha v2
    `)
}

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = () => {
  const [state, setState] = useState({})
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const recaptchaRef = createRef<ReCAPTCHA>()
  const router = useRouter()

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const recaptchaValue = recaptchaRef.current?.getValue()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        "g-recaptcha-response": recaptchaValue,
        ...state,
      }),
    })
      .then(() => router.push('/thanks'))
      .catch(error => alert(error))
  }

  return (
    <div className={styles.contactForm}>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <noscript>
          <p>This form won’t work with Javascript disabled</p>
        </noscript>
        <fieldset>
          <div className={styles.formFields}>
            <p className={styles.formSugar}>
              <label>
                Don’t fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            <input type="hidden" name="form-name" value="contact" />
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
                required={true}
                onChange={handleChange}
              />
            </p>
            <p className={styles.formRow}>
              <label className={styles.formLabel} htmlFor="email">
                Email:
              </label>
              <input
                className={styles.formInput}
                type="text"
                id="email"
                name="email"
                placeholder="username@email.com"
                required={true}
                onChange={handleChange}
              />
            </p>
            <p className={styles.formRow}>
              <label className={styles.formLabel} htmlFor="message">
                Message:
              </label>
              <textarea
                className={styles.formInput}
                id="message"
                name="message"
                placeholder="Your message"
                required={true}
                rows={5}
                onChange={handleChange}
              />
            </p>
            <Recaptcha ref={recaptchaRef} sitekey={RECAPTCHA_KEY} onChange={() => setButtonDisabled(false)} />
            <button className={styles.formButton} type="submit" disabled={buttonDisabled}>
              Send Message
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default ContactForm