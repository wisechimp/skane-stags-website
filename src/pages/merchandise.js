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
        <div className="bodyContent">
          <p>All Skåne Stags kit is available to order directly from the club. Email us with your request and we will contact you with payment details. All orders are processed by our supplier and take about 6 weeks plus postage to Sweden. All kit is made to order so unfortunately no refunds are possible. Please reference our <a href="https://stag-sports.com/rugby-kits/sizing-information">manufacturer's website</a> for sizing information.</p>
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
