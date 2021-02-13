import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import { footer, footerLogo } from "./footer.module.css"

export default () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      mobileFooterImage: file(relativePath: { eq: "olearysnewlogo.jpg" }) {
        childImageSharp {
          fixed(width: 200, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      desktopFooterImage: file(relativePath: { eq: "olearysnewlogo.jpg" }) {
        childImageSharp {
          fixed(width: 500, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  const { mobileFooterImage, desktopFooterImage } = data
  const sources = [
    mobileFooterImage.childImageSharp.fixed,
    {
      ...desktopFooterImage.childImageSharp.fixed,
      media: `(min-width: 769px)`,
    },
  ]

  return (
    <div className={footer}>
      <p>
        Supported by{" "}
        <OutboundLink
          href="https://olearys.se/lund/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          O'Leary's
        </OutboundLink>{" "}
        in Lund.
      </p>
      <br />
      <Img
        className={footerLogo}
        fixed={sources}
        alt="Logo for o'Learys in Lund, sponsors of Skåne Stags Rugby League Club."
      />
      <p>Join us there after the game!</p>
    </div>
  )
}
