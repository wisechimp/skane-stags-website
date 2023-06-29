import React from "react"

import Layout from "../components/layout/Layout"
import ConnectMessenger from "../components/connectmessenger"
import ContactForm from "../components/contactform"

export default () => (
  <Layout pageTitle="Contact Us">
    <div className="contactContainer">
      <div className="contactBox">
        <ContactForm />
      </div>
      <p className="contactOr">OR</p>
      <div className="contactBox">
        <ConnectMessenger />
      </div>
    </div>
  </Layout>
)
