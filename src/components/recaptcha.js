import React from "react"
import { Helmet } from "react-helmet"

//import styles from "./contactform.module.css"

export default () => (
  <div>
    <Helmet>
      <script src="https://www.google.com/recaptcha/api.js" async defer />
    </Helmet>
    <form action="?" method="POST">
      <div class="g-recaptcha" data-sitekey={`${process.env.RECAPTCHA_SITE_KEY}`} />
    </form>
  </div>
)
