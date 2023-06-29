import React, { Component } from "react"
import get from "lodash/get"
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"
import ResultsCard from "../components/resultscard"

class Results extends Component {
  render() {
    const resultsList = get(this, "props.data.allResultsJson.edges")

    return (
      <Layout pageTitle="Results">
        <h1>Results</h1>
        <div>
          {resultsList.map(({ node }) => {
            return (
              <ResultsCard
                key={node.id}
                homeTeam={node.homeTeam}
                homeScore={node.homeScore}
                awayScore={node.awayScore}
                awayTeam={node.awayTeam}
                date={node.date}
                venue={node.venue}
              />
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Results

export const resultsQuery = graphql`
  query {
    allResultsJson {
      edges {
        node {
          id
          homeTeam
          homeScore
          awayTeam
          awayScore
          date
          venue
        }
      }
    }
  }
`
