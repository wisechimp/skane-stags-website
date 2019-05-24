import React from "react"
import { graphql } from "gatsby"
import Parser from "html-react-parser"

import Layout from "../components/layout"
import styles from "./blogpost.module.css"

const BlogPostTemplate = ({ data }) => (
  <Layout
    pageTitle={Parser(data.wordpressPost.title)}
  >
    <div className={styles.blogpostStyle}>
      <h1>{Parser(data.wordpressPost.title)}</h1>
      <p>
        Written by {data.wordpressPost.author.name} on {data.wordpressPost.date}
      </p>
      <br />
      <p dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }} />
    </div>
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
