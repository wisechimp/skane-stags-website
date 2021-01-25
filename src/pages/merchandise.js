import React, { Component } from "react"
import get from "lodash/get"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import KitCard from "../components/kitcard"

class Merchandise extends Component {
  render() {
    const kitCatalogue = get(this, "props.data.allKitListJson.edges")
    console.log("something")
    console.log(kitCatalogue)

    return (
      <Layout pageTitle="Kit Store">
        <h1>Kit Store</h1>
        <div className="bodyContent">
          <p>
            All Skåne Stags kit is available to order directly from the club.{" "}
            <Link to="/contact/">Contact</Link> us with your request and we will
            get back you with payment details. To reduce kit costs we
            periodically place bulk orders with our supplier and would add your
            request to the next shipment. All kit is made to order so
            unfortunately no refunds are possible. Please reference our{" "}
            <a href="https://stag-sports.com/rugby-kits/sizing-information">
              manufacturer's website
            </a>{" "}
            for sizing information.
          </p>
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
