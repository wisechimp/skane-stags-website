import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import { OutboundLink } from "gatsby-plugin-google-analytics"

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
          <OutboundLink
            href="https://www.google.se/maps/place/Limhamnsf%C3%A4ltet/@55.5953031,12.9474745,323m/data=!3m1!1e3!4m5!3m4!1s0x4653a697bedc6367:0xc54fe103ad8766d!8m2!3d55.5953031!4d12.9489246?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Limhamnsfältet
          </OutboundLink>{" "}
          in Malmö every Saturday from 10am during the season. Check our{" "}
          <Link to="/calendar">calendar</Link> and{" "}
          <OutboundLink
            href="https://www.facebook.com/skanestags"
            target="_blank"
            rel="noopener noreferrer"
          >
            follow us on Facebook
          </OutboundLink>{" "}
          for the latest schedule and news. All are welcome and talented players
          could make their way to the{" "}
          <OutboundLink
            href="https://www.swedenrugbyleague.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Swedish National Team Squad
          </OutboundLink>
          .
        </p>
        <p>
          Check out the highlights from our home 9's tournament in 2017
          featuring{" "}
          <OutboundLink
            href="https://www.facebook.com/KungsbackaRugbyClub/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kungsbacka Broncos
          </OutboundLink>
          ,{" "}
          <OutboundLink
            href="https://www.facebook.com/stockholm.rl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stockholm Kungar
          </OutboundLink>{" "}
          and{" "}
          <OutboundLink
            href="https://www.facebook.com/CopenhagenRlfc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Copenhagen
          </OutboundLink>
          . Footage courtesy of our very own{" "}
          <OutboundLink
            href="https://www.paulrhys.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Paul Rhys
          </OutboundLink>
          .
        </p>
      </div>
      <Video
        videoId="AnQPQslLzkA"
        altText="Footage from the 2017 Skane 9's tournament."
      />
    </Layout>
  </div>
)

export const query = graphql`
  query {
    jumboImage: file(
      relativePath: { eq: "2018skanestagspolandactiondesktop.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    stagsLogo: file(relativePath: { eq: "skanestagslogo.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
