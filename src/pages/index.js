import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"

import HomeTitle from "../components/hometitle"
import Jumbotron from "../components/jumbotron"
import Layout from "../components/layout"
import Video from "../components/video"

export default ({ data }) => (
  <div>
    <Helmet>
      <meta property="og:title" content="Skane Stags Rugby League Club" />
      <meta
        property="og:description"
        content="Skane Stags are a rugby league club based in Skåne in southern Sweden."
      />
      <meta
        property="og:image"
        content="https://skanestags.com/skanestagslogo.png"
      />
      <meta property="og:url" content="https://skanestags.com/index.htm" />
      <meta
        name="twitter:image:alt"
        content="Skane Stags Rugby League Club logo."
      />
    </Helmet>
    <Layout pageTitle="Skane Stags RLC">
      <HomeTitle
        title="Skåne Stags Rugby League Club"
        tagline="Skåne's representatives in the Swedish Rugby League's national championships."
        imgSrcs={data}
        imgAlt="The logo of Skane Stags Rugby League club"
      />
      <Jumbotron images={data} />
      <div className="bodyContent">
        <p>
          Rugby League is a fast, physical and fun sport with a lively social
          side!
        </p>
        <p>
          Skåne Stags were established in 2013 and are the current national
          champions. We have a blend of nationalities with ex-pats from the
          likes of England, Australia, France and Tonga joining local Swedish
          talent.
        </p>
        <p>
          We can be found training at{" "}
          <a href="https://www.google.se/maps/place/Limhamnsf%C3%A4ltet/@55.5953031,12.9474745,323m/data=!3m1!1e3!4m5!3m4!1s0x4653a697bedc6367:0xc54fe103ad8766d!8m2!3d55.5953031!4d12.9489246?hl=en">
            Limhamnsfältet
          </a>{" "}
          in Malmö every Saturday from 10am during the season. Check our{" "}
          <Link to="/calendar">calendar</Link> and{" "}
          <a href="https://www.facebook.com/skanestags">
            follow us on Facebook
          </a>{" "}
          for the latest schedule and news. All are welcome and talented players
          could make their way to the{" "}
          <a href="https://www.swedenrugbyleague.com">
            Swedish National Team Squad
          </a>
          .
        </p>
        <p>
          Check out the highlights from our home 9's tournament in 2017
          featuring{" "}
          <a href="https://www.facebook.com/KungsbackaRugbyClub/">
            Kungsbacka Broncos
          </a>
          ,{" "}
          <a href="https://www.facebook.com/stockholm.rl/">Stockholm Kungar</a>{" "}
          and <a href="https://www.facebook.com/CopenhagenRlfc/">Copenhagen</a>.
          Footage courtesy of our very own{" "}
          <a href="https://www.paulrhys.com/">Paul Rhys</a>.
        </p>
      </div>
      <Video videoId="AnQPQslLzkA" />
    </Layout>
  </div>
)

export const query = graphql`
  query {
    mobileJumboImage: file(
      relativePath: { eq: "2018skanestagspolandaction.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    desktopJumboImage: file(
      relativePath: { eq: "2018skanestagspolandaction.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    mobileLogo: file(relativePath: { eq: "skanestagslogo.png" }) {
      childImageSharp {
        fixed(width: 300, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    desktopLogo: file(relativePath: { eq: "skanestagslogo.png" }) {
      childImageSharp {
        fixed(width: 200, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
