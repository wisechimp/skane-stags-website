import React from "react"

import Header from "./header"
import Menu from "./menu"
import Footer from "./footer"

export default ({ children }) => (
  <div>
    <Header />
    <Menu />
    {children}
    <Footer />
  </div>
)
