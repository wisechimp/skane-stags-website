import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  const {
    mobileOlearysShirt,
    desktopOlearysShirt,
    mobileStagLogo,
    desktopStagLogo,
  } = data

  const olearysSources = [
    mobileOlearysShirt.childImageSharp.fluid,
    {
      ...desktopOlearysShirt.childImageSharp.fluid,
      media: `(min-width: 769px)`,
    },
  ]

  const stagSources = [
    mobileStagLogo.childImageSharp.fluid,
    {
      ...desktopStagLogo.childImageSharp.fluid,
      media: `(min-width: 769px)`,
    },
  ]

  console.log(stagSources)

  return (
    <Layout pageTitle="Partners">
      <h1>Partners</h1>
      <div className="bodyContent">
        <h3>
          <i>o'Leary's in Lund</i>
        </h3>
        <Img
          className="poster"
          fluid={olearysSources}
          alt="Skane Stags shirt showing the o'Leary's logo"
        />
        <p>
          We are grateful to our principal shirt sponsors, Johan and the team at{" "}
          <OutboundLink
            href="https://olearys.se/lund/"
            target="_blank"
            rel="noopener noreferrer"
          >
            O'Leary's in Lund
          </OutboundLink>
          , for their support, excellent hospitality and shuffleboard!
        </p>
        <h3>
          <i>Stag Sports</i>
        </h3>
        <Img className="poster" fluid={stagSources} alt="Stag Sports logo" />
        <p>
          We are also thankful to{" "}
          <OutboundLink
            href="https://www.stag-sports.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stag Sports
          </OutboundLink>{" "}
          our kit suppliers. You can order your own Skåne Stags kit by visiting
          our <Link to="/merchandise/">shop</Link>.
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    mobileOlearysShirt: file(
      relativePath: { eq: "skanestagssponsorolearys.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    desktopOlearysShirt: file(
      relativePath: { eq: "skanestagssponsorolearys.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    mobileStagLogo: file(relativePath: { eq: "stagsportslogo.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    desktopStagLogo: file(relativePath: { eq: "stagsportslogo.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
