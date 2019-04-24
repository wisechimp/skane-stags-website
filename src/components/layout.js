import React from "react"

import Menu from "./menu"
import Footer from "./footer"

export default ({ children }) => (
  <div>
    <Menu />
    {children}
    <Footer />
  </div>
)
