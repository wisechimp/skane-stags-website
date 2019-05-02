import React, { Component } from "react"
import get from "lodash/get"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import KitCard from "../components/kitcard"

class Merchandise extends Component {
  render() {
    const kitCatalogue = get(this, 'props.data.allKitListJson.edges')
    console.log("something")
    console.log(kitCatalogue)

    return (
      <Layout>
        <h1>Kit</h1>
        <div className="playerCardsContainer">
          {kitCatalogue.map(({ node }) => {
            return (
              <KitCard
                key={node.id}
                kitImgSrc={node.imageSrc.childImageSharp.fluid}
                kitImgAlt={node.imageAlt}
                kitItemName={node.name}
                kitItemDescription={node.description}
              />
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Merchandise

export const kitQuery = graphql`
  query {
    allKitListJson {
      edges {
        node {
          id
          name
          description
          imageSrc {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imageAlt
        }
      }
    }
  }
`
