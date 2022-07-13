import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"

import Layout from "../components/layout/Layout"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import blogStyles from "./blogpost.module.css"

const mdxComponents = { OutboundLink }

const BlogPostTemplate = ({ data }) => {
  const { frontmatter, body } = data.mdx

  return (
    <Layout pageTitle="News">
      <div className={blogStyles.blogpostStyle}>
        <h1>{frontmatter.title}</h1>
        <p>
          Posted by {frontmatter.author} on {frontmatter.date}
        </p>
        <div className={blogStyles.imageWrapper}>
          <Img
            fluid={frontmatter.imageSrc.childImageSharp.fluid}
            alt=""
            style={{ height: "100%", width: "100%" }}
            imgStyle={{
              objectFit: "contain",
            }}
          />
        </div>
        <br />
        <MDXProvider components={mdxComponents}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query PostsById($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        author
        title
        date(formatString: "Do MMMM, YYYY")
        imageSrc {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
