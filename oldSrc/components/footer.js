import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import { footer } from "./footer.module.css"

export default () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      footerImage: file(relativePath: { eq: "olearysnewlogo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const { footerImage } = data
  console.log(footerImage)

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
        fluid={footerImage.childImageSharp.fluid}
        alt="Logo for o'Learys in Lund, sponsors of Skåne Stags Rugby League Club."
      />
      <p>Join us there after the game!</p>
    </div>
  )
}
