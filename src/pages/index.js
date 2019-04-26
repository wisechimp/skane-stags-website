import React from "react"

import Layout from "../components/layout"
import stagsLogo from "../images/skanestagslogo.png"

export default () => (
  <Layout>
    <div className="headerContainer">
      <div className="brandname">
        <h1>Skåne Stags Rugby League Club</h1>
        <h3><i>Skåne's representatives in the Swedish Rugby League's national championships.</i></h3>
      </div>
      <div className="logo">
        <img className="logo" src={stagsLogo} alt="The logo of Skane Stags Rugby League club" />
      </div>
    </div>
    <p>
			Rugby League is a fast, physical and fun sport with a lively social side!
		</p>
		<p>
			Skåne Stags were established in 2013 and are the current national champions. We have a blend of nationalities with ex-pats from the likes of England, Australia and New Zealand joining local Swedish talent.
		</p>
		<p>
			We can be found training at <a href="https://www.google.se/maps/place/Limhamnsf%C3%A4ltet/@55.5953031,12.9474745,323m/data=!3m1!1e3!4m5!3m4!1s0x4653a697bedc6367:0xc54fe103ad8766d!8m2!3d55.5953031!4d12.9489246?hl=en">Limhamnsfältet</a> in Malmö every Saturday from 10am during the season. Check our <a href="calender.php">calender</a> and <a href="https://www.facebook.com/skanestags">follow us on Facebook</a> for the latest schedule and news. All are welcome and talented players could make their way to the <a href="http://rugbyleague.se/">Swedish National Team Squad</a>.
	  </p>
		<p>
			Check out the highlights from our home 9's tournament last season featuring <a href="https://www.facebook.com/KungsbackaRugbyClub/">Kungsbacka Broncos</a>, <a href="https://www.facebook.com/stockholm.rl/">Stockholm Kungar</a> and <a href="http://crlfc.dk/">Copenhagen</a>. Footage courtesy of our very own <a href="http://www.paulrhys.com/">Paul Rhys</a>.
		</p>
    <div className="videoWrapper">
  		<iframe
        title="2017 Lund Nines Highlights"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/AnQPQslLzkA?rel=0"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  </Layout>
)
