import React, { Component } from "react"
import get from "lodash/get"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PlayerCard from "../components/playercard"

class Squad extends Component {
  render() {
    const playerProfiles = get(this, 'props.data.allSquadListJson.edges')
    console.log(playerProfiles)

    return (
      <Layout>
        <h1>Squad</h1>
        <div className="playerCardsContainer">
          {playerProfiles.map(({ node }) => {
            return (
              <PlayerCard
                key={node.id}
                imgSrc={node.imageSrc.childImageSharp.fluid}
                imgAlt={node.imageAlt}
                playerName={node.name}
                playerPositiion={node.position}
                playersNat={node.flagSrc.childImageSharp.fixed}
                playersFlag={node.flagAlt}
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
    allSquadListJson {
      edges {
        node {
          id
          name
          position
          imageSrc {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imageAlt
          flagSrc {
            childImageSharp {
              fixed(width: 30, height: 20) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          flagAlt
        }
      }
    }
  }
`
