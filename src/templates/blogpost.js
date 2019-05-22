import React from "react"
import { graphql } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"

const BlogPostTemplate = ({ data }) => (
  <Layout
    pageTitle={data.wordpressPost.title}
  >
    <h1>{data.wordpressPost.title}</h1>
    <p>
      Written by {data.wordpressPost.author.name} on {data.wordpressPost.date}
    </p>
    <p dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }} />
  </Layout>
)

export default BlogPostTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: {eq: $id }) {
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
      author {
        name
      }
    }
  }
`
