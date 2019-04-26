import React from "react"

export default (props) => (
  <div className="headerContainer">
    <div className="brandname">
      <h1>{props.title}</h1>
      <h3><i>{props.tagline}</i></h3>
    </div>
    <div className="logo">
      <img className="logo" src={props.imgSrc} alt={props.imgAlt} />
    </div>
  </div>
)
