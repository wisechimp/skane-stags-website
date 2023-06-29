import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout/Layout"

export default ({ data }) => {
  const { mobileAboutImage, desktopAboutImage } = data
  const sources = [
    mobileAboutImage.childImageSharp.fluid,
    {
      ...desktopAboutImage.childImageSharp.fluid,
      media: `(min-width: 769px)`,
    },
  ]

  return (
    <Layout pageTitle="About Skane Stags">
      <h1>About Skane Stags</h1>
      <div>
        <Img
          className="poster"
          fluid={sources}
          alt="Skane Stags rugby league team after a training session in Malmö"
        />
        <div className="bodyContent">
          <p>
            Skåne Stags were originally founded in 2013 as Skåne Crusaders by a
            dedicated group of individuals who had set up the Swedish National
            team a few years earlier and were looking to create a national
            competition to strengthen the game in Sweden. We adopted the Stags
            moniker in 2017 to be more representative of the region, as the
            official animal of Skåne is the majestic Stag. We have a broad range
            of backgrounds with many nationalities and levels of experience
            represented. Since being founded we have had several of our Swedish
            players go on to represent their national team, both in League and
            Union, and one has even taken a further step to represent Greece in
            their recent qualifiers for the 2021 world cup.
          </p>
          <br />
          <p>
            <Link to="/training/">Training</Link> is held every Saturday in
            Malmö during a season which generally runs from February to October
            depending on the fickle Skånsk weather. We are always looking for
            new players so if you've experienced rugby in either of its forms
            previously, are an American Football/Handball player looking for a
            challenge, or simply curious to try a new sport and meet new people
            then contact us and come along.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    mobileAboutImage: file(relativePath: { eq: "skanestags.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    desktopAboutImage: file(relativePath: { eq: "skanestags.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
