import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SkaneStags from "../images/skanestags.jpg"

export default () => (
  <Layout
    pageTitle="About Skane Stags"
  >
    <h1>About Skane Stags</h1>
    <div>
      <img
        className="poster"
        src={SkaneStags}
        alt="Skane Stags rugby league team after a training session in Malmö"
      />
      <div className="bodyContent">
        <p>
          Skåne Stags were originally founded in 2013 as Skåne Crusaders by a dedicated group of individuals who had set up the Swedish National team a few years earlier and were looking to create a national competition to strengthen the game in Sweden. We adopted the Stags moniker in 2017 to be more representative of the region, as the official animal of Skåne is the majestic Stag. We have a broad range of backgrounds with many nationalities and levels of experience represented. Since being founded we have had several of our Swedish players go on the represent their national team and one has even taken a further step to represent Greece in their recent qualifiers for the 2021 world cup.
        </p>
        <br />
        <p>
          <Link to="/training/">Training</Link> is held every Saturday in Malmö during a season which generally runs from February to October depending on the fickle Skånsk weather. We are always looking for new players so if you've experienced rugby in either of its forms previously, are an American Footballer looking for a challenge, or simply curious to try a new sport and meet new people then contact us and come along.
        </p>
      </div>
    </div>
  </Layout>
)
