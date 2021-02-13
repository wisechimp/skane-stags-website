import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Map from "../components/map"

export default ({ data }) => {
  const { mobileTrainingPoster, desktopTrainingPoster } = data
  const sources = [
    mobileTrainingPoster.childImageSharp.fluid,
    {
      ...desktopTrainingPoster.childImageSharp.fluid,
      media: `(min-width: 769px)`,
    },
  ]
  return (
    <Layout pageTitle="Training">
      <Img
        className="poster"
        fluid={sources}
        alt="Training poster for the Skane Stags"
      />
      <Map
        title="Limhansfältet, Skane Stags Rugby League Club's usual training location"
        width="800"
        height="600"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2938.420870229325!2d12.949971661712082!3d55.59596972092554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sse!4v1556632352524!5m2!1sen!2sse"
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    mobileTrainingPoster: file(
      relativePath: { eq: "2019stagstrainingen.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    desktopTrainingPoster: file(
      relativePath: { eq: "2019stagstrainingen.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
