import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import StagsLogo from "../images/skanestagslogo.png"

export default () => (
  <Layout
    pageTitle="Whoops!"
  >
    <h1>Whoops!</h1>
    <img className="poster"
      src={StagsLogo}
      alt="The Skane Stags Logo"
    />
    <div className="bodyContent">
      <p align="center">Sorry someone's dropped a ball somewhere as this doesn't appear to be the page you're looking for. You can return to the <Link to="/">home</Link> page or go back to the previous page.</p>
    </div>
  </Layout>
)
