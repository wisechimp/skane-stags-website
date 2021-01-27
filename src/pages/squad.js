import React, { Component } from "react"
import get from "lodash/get"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PlayerCard from "../components/playercard"

class Squad extends Component {
  render() {
    const playerProfiles = get(this, "props.data.allMdx.edges")
    console.log(playerProfiles)

    return (
      <Layout pageTitle="Squad">
        <h1>Squad</h1>
        <div className="playerCardsContainer">
          {playerProfiles.map(({ node }) => {
            const {
              flag,
              imageSrc,
              nationality,
              number,
              position,
              sponsor,
              title,
            } = node.frontmatter
            return (
              <PlayerCard
                key={number}
                imgSrc={imageSrc.childImageSharp.fluid}
                playerName={title}
                playerPosition={position}
                playersFlag={flag}
                playersNat={nationality}
                sponsor={sponsor}
              />
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Squad

export const playerQuery = graphql`
  query {
    allMdx(sort: { fields: frontmatter___number }) {
      edges {
        node {
          frontmatter {
            number
            nationality
            position
            flag
            title
            imageSrc {
              childImageSharp {
                fluid(quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            sponsor
          }
        }
      }
    }
  }
`
