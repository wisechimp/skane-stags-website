import React from "react"

import Layout from "../components/layout"
import NewsSnippet from "../components/newssnippet"

export default () => (
  <Layout>
    <h1>News</h1>
    <NewsSnippet
      headline="A headline"
      snippet="A taster to catch your attention"
    />
  </Layout>
)
