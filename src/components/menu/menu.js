import React, { useState } from "react"
import { Link } from "gatsby"

import Hamburger from "./hamburger"
import SocialMediaLinks from "./socialmedialinks"
import menuStyles from "./menu.module.css"

const Menu = ({ pageTitle }) => {
  const [flippingBurger, setFlippingBurger] = useState(false)
  const [teamDrop, setTeamDrop] = useState(false)
  const [aboutDrop, setAboutDrop] = useState(false)

  const drawerHandler = () => {
    if (flippingBurger) {
      return setFlippingBurger(false)
    }
    setFlippingBurger(true)
  }

  const teamHandler = () => {
    if (teamDrop) {
      return setTeamDrop(false)
    }
    setTeamDrop(true)
    setAboutDrop(false)
  }

  const aboutHandler = () => {
    if (aboutDrop) {
      return setAboutDrop(false)
    }
    setTeamDrop(false)
    setAboutDrop(true)
  }

  return (
    <div className={menuStyles.actionBar}>
      <div className={menuStyles.pageTitlePosition}>
        <h3 className={menuStyles.pageTitle}>{pageTitle}</h3>
      </div>
      <Hamburger
        flipper={drawerHandler}
        flippingBurger={flippingBurger}
        setFlippingBurger={setFlippingBurger}
      />
      <div
        className={`${menuStyles.navUnit} ${
          !flippingBurger ? "" : menuStyles.open
        }`}
      >
        <ul className={menuStyles.navLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news/">News</Link>
          </li>
          <li>
            <Link to="/membership/">Join Us</Link>
          </li>
          <li>
            <button onClick={teamHandler}>Team +</button>
            <div
              className={`${menuStyles.dropdownContent} ${
                !teamDrop ? "" : menuStyles.droppingDown
              }`}
            >
              <Link to="/results/">Results</Link>
              <Link to="/squad/">Squad</Link>
              <Link to="/training/">Training</Link>
            </div>
          </li>
          <li>
            <button onClick={aboutHandler}>About +</button>
            <div
              className={`${menuStyles.dropdownContent} ${
                !aboutDrop ? "" : menuStyles.droppingDown
              }`}
            >
              <Link to="/about/">Skane Stags</Link>
              <Link to="/rugbyleague/">Rugby League</Link>
              <Link to="/partners/">Partners</Link>
              <Link to="/contact/">Contact</Link>
            </div>
          </li>
          <li>
            <Link to="/merchandise/">Shop</Link>
          </li>
        </ul>
        <div className={menuStyles.socialButts}>
          <SocialMediaLinks />
        </div>
      </div>
    </div>
  )
}

export default Menu
