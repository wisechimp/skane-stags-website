import React, { Component } from "react"
import get from "lodash/get"
import { graphql } from "gatsby"
import Parser from "html-react-parser"

import Layout from "../components/layout"
import NewsSnippet from "../components/newssnippet"

class News extends Component {
  render() {
    const newsList = get(this, "props.data.allWordpressPost.edges")

    return (
      <Layout pageTitle="News">
        <h1>News</h1>
        <div>
          {newsList.map(({ node }) => {
            return (
              <NewsSnippet
                headline={Parser(node.title)}
                snippet={Parser(node.excerpt)}
                date={node.date}
                slug={node.slug}
                imgSrc={node.featured_media.localFile.childImageSharp.fluid}
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
    allWordpressPost(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          title
          content
          excerpt
          date(formatString: "MMMM DD, YYYY")
          slug
          featured_media {
            id
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
