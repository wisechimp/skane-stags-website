import React from "react"

import Header from "./header"
import Menu from "./menu"
import Footer from "./footer"

export default (props) => (
  <div>
    <Header />
    <Menu
      pageTitle={props.pageTitle}/>
    {props.children}
    <Footer />
  </div>
)
