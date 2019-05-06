import React, { Component } from "react"
import get from "lodash/get"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import NewsSnippet from "../components/newssnippet"

class News extends Component {
  render() {
    const newsList = get (this, 'props.data.allWordpressPost.edges')

    return (
      <Layout>
        <h1>News</h1>
        <div>
          {newsList.map(({ node }) => {
            return (
              <NewsSnippet
                headline={node.title}
                snippet={node.excerpt}
                slug={node.slug}
              />
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default News

export const newsQuery = graphql`
  query {
    allWordpressPost(
      sort:{
        fields:date
        order:ASC
      }
    ) {
      edges {
        node {
          id
          title
          content
          excerpt
          date
          slug
        }
      }
    }
  }
`
