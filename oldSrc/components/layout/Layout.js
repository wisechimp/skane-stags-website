import React from "react"

import Header from "../header"
import Menu from "../menu/menu"
import Footer from "../footer"

export default ({ pageTitle, children }) => (
  <div>
    <Header />
    <Menu pageTitle={pageTitle} />
    {children}
    <Footer />
  </div>
)
