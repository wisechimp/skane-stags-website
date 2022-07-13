import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"

export default ({ data }) => {
  const { mobilePoster, desktopPoster } = data
  const sources = [
    mobilePoster.childImageSharp.fluid,
    {
      ...desktopPoster.childImageSharp.fluid,
      media: `(min-width: 769px)`,
    },
  ]
  return (
    <Layout pageTitle="Join Us">
      <div>
        <Img
          className="poster"
          fluid={sources}
          alt="Poster calling for subs payments"
        />
        <p className="membershipText">
          The membership fee provides you the following benefits:
        </p>
        <ul>
          <li>
            Training sessions with a qualified coach from February to October
          </li>
          <li>10% discount at our main sponsor o'Leary's</li>
          <li>Subsidised merchandise</li>
          <li>Subsidised away trips</li>
          <li>The opportunity to vote at the AGM</li>
          <li>
            A warm feeling from supporting Rugby League in Skåne and Sweden!
            This benefit can be appreciated the most in winter...
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    mobilePoster: file(relativePath: { eq: "2019stagssubs.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    desktopPoster: file(relativePath: { eq: "2019stagssubs.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
