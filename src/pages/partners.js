import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SponsoredShirt from "../images/skanestagssponsorolearys.png"
import ManufacturersLogo from "../images/stagsportslogo.png"

export default () => (
  <Layout>
    <h1>Partners</h1>
    <div className="bodyContent">
      <h3><i>o'Leary's in Lund</i></h3>
    </div>
    <img className="poster"
      src={SponsoredShirt}
      alt="Skane Stags shirt showing the o'Leary's logo"
    />
    <div className="bodyContent">
      <p>
        We are grateful to our principal shirt sponsors, Johan and the team at <a href="https://olearys.se/lund/">O'Leary's in Lund</a>, for their support, excellent hospitality and shuffleboard!
      </p>
      <h3><i>Stag Sports</i></h3>
    </div>
    <img className="poster"
      src={ManufacturersLogo}
      alt="Stag Sports logo"
    />
    <div className="bodyContent">
      <p>We are also thankful to <a href="http://www.stag-sports.com">Stag Sports</a> our kit suppliers. You can buy your own Skåne Stags kit by visiting our <Link to="/merchandise/">shop</Link>.</p>
    </div>
  </Layout>
)
