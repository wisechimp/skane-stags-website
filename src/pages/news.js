import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import NewsSnippet from "../components/newssnippet"

export default ({ data }) => {
  return (
    <Layout pageTitle="Latest News">
      <h1>Latest News</h1>
      <div>
        {data.allFile.nodes.map(({ childMdx }) => {
          if (childMdx === null) {
            return
          }
          const { id, excerpt, frontmatter } = childMdx
          return (
            <NewsSnippet
              key={id}
              headline={frontmatter.title}
              date={frontmatter.date}
              snippet={excerpt}
              slug={frontmatter.path}
              imgSrc={frontmatter.imageSrc.childImageSharp.fluid}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export const newsQuery = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "news" } }
      sort: { fields: childMdx___frontmatter___date, order: DESC }
    ) {
      nodes {
        childMdx {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "Do MMMM, YYYY")
            path
            imageSrc {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
