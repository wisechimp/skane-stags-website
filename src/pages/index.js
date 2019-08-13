import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import ImageCarousel from "../components/imagecarousel"
import HomeTitle from "../components/hometitle"
import Layout from "../components/layout"
import Video from "../components/video"
import stagsLogo from "../images/skanestagslogo.png"
import stagstraining2019 from "../images/2019stagsgenerictraining.jpg"
import stags2017 from "../images/2017skanestagslund9steam.jpg"
import stags2018 from "../images/2018skanestagspolandteam.jpg"
import stagsPolandAction from "../images/2018skanestagspolandaction.jpg"

export default () => (
  <div>
    <Helmet>
      <meta property="og:title" content="Skane Stags Rugby League Club" />
      <meta property="og:description" content="Skane Stags are a rugby league club based in Skåne in southern Sweden." />
      <meta property="og:image" content="https://skanestags.com/skanestagslogo.png" />
      <meta property="og:url" content="https://skanestags.com/index.htm" />
      <meta name="twitter:image:alt" content="Skane Stags Rugby League Club logo." />
    </Helmet>
    <Layout
      pageTitle="Skane Stags RLC"
    >
      <HomeTitle
        title="Skåne Stags Rugby League Club"
        tagline="Skåne's representatives in the Swedish Rugby League's national championships."
        imgSrc={stagsLogo}
        imgAlt="The logo of Skane Stags Rugby League club"/>
      <ImageCarousel
        firstSlide={stagstraining2019}
        firstSlideAlt="Picture of Skane Stags Rugby League being briefed during a trainng session. Malmö's turning tower can be seen in the background"
        firstSlideCaption="Join us on Saturday mornings in Malmö!"
        secondSlide={stags2018}
        secondSlideAlt="The Skane Stags rugby league team who travelled to Poland to meet their national team in 2018."
        secondSlideCaption="Skane Stags Team ready to face Poland in 2018"
        thirdSlide={stagsPolandAction}
        thirdSlideAlt="Skane Stags rugby league team in action against Poland 2018."
        thirdSlideCaption="Action from the win against Poland."
        fourthSlide={stags2017}
        fourthSlideAlt="Skane Stags Rugby League team after winning the 2017 Skane 9\'s tournament"
        fourthSlideCaption="2017 Skane 9's winners!"
      />
      <div className="bodyContent">
        <p>
    			Rugby League is a fast, physical and fun sport with a lively social side!
    		</p>
        <br />
    		<p>
    			Skåne Stags were established in 2013 and are the current national champions. We have a blend of nationalities with ex-pats from the likes of England, Australia, France and Tonga joining local Swedish talent.
    		</p>
        <br />
    		<p>
    			We can be found training at <a href="https://www.google.se/maps/place/Limhamnsf%C3%A4ltet/@55.5953031,12.9474745,323m/data=!3m1!1e3!4m5!3m4!1s0x4653a697bedc6367:0xc54fe103ad8766d!8m2!3d55.5953031!4d12.9489246?hl=en">Limhamnsfältet</a> in Malmö every Saturday from 10am during the season. Check our <Link to="/calendar">calendar</Link> and <a href="https://www.facebook.com/skanestags">follow us on Facebook</a> for the latest schedule and news. All are welcome and talented players could make their way to the <a href="https://www.facebook.com/swedenrugbyleague/">Swedish National Team Squad</a>.
    	  </p>
        <br />
    		<p>
    			Check out the highlights from our home 9's tournament in 2017 featuring <a href="https://www.facebook.com/KungsbackaRugbyClub/">Kungsbacka Broncos</a>, <a href="https://www.facebook.com/stockholm.rl/">Stockholm Kungar</a> and <a href="https://www.facebook.com/CopenhagenRlfc/">Copenhagen</a>. Footage courtesy of our very own <a href="https://www.paulrhys.com/">Paul Rhys</a>.
    		</p>
      </div>
      <Video
        title="2017 Lund Nines Highlights"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/AnQPQslLzkA?rel=0"/>
    </Layout>
  </div>
)
