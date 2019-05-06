import React from "react"
import { Link } from "gatsby"

export default (props) => (
  <div>
    <h3>{props.headline}</h3>
    <p dangerouslySetInnerHTML={{ __html: {this.props.snippet} }} />
    <Link to={`/news/${props.slug}`}><i>Read more...</i></Link>
  </div>
)
