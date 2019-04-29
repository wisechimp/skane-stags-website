import React from "react"
import { Link } from "gatsby"

export default (props) => (
  <div>
    <h3>{props.headline}</h3>
    <p>{props.newsSnippet}</p>
    <Link to="/newsitem/"><i>Read more...</i></Link>
  </div>
)
