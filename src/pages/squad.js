import React, { Component } from "react"
import get from "lodash/get"
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"
import PlayerCard from "../components/playercard"

class Squad extends Component {
  render() {
    const playerProfiles = get(this, "props.data.allFile.nodes")
    console.log(playerProfiles)

    return (
      <Layout pageTitle="Squad">
        <h1>Squad</h1>
        <div className="playerCardsContainer">
          {playerProfiles.map(({ childMdx }) => {
            const {
              flag,
              imageSrc,
              nationality,
              number,
              position,
              sponsor,
              title,
            } = childMdx.frontmatter
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
    allFile(
      filter: { sourceInstanceName: { eq: "squad" } }
      sort: { fields: childMdx___frontmatter___number }
    ) {
      nodes {
        childMdx {
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
