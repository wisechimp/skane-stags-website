import React, { useState } from "react"
import { Link } from "gatsby"

import Hamburger from "./hamburger"
import SocialMediaLinks from "./socialmedialinks"
import menuStyles from "./menu.module.css"

const Menu = props => {
  const [flippingBurger, setFlippingBurger] = useState(false)
  const [newsDrop, setNewsDrop] = useState(false)
  const [aboutDrop, setAboutDrop] = useState(false)

  const drawerHandler = () => {
    if (flippingBurger) {
      return setFlippingBurger(false)
    }
    setFlippingBurger(true)
  }

  const newsHandler = () => {
    if (newsDrop) {
      return setNewsDrop(false)
    }
    setNewsDrop(true)
    setAboutDrop(false)
  }

  const aboutHandler = () => {
    if (aboutDrop) {
      return setAboutDrop(false)
    }
    setNewsDrop(false)
    setAboutDrop(true)
  }

  return (
    <div className={menuStyles.actionBar}>
      <div className={menuStyles.pageTitlePosition}>
        <h3 className={menuStyles.pageTitle}>{props.pageTitle}</h3>
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
            <button onClick={newsHandler}>Latest +</button>
            <div
              className={`${menuStyles.dropdownContent} ${
                !newsDrop ? "" : menuStyles.droppingDown
              }`}
            >
              <Link to="/latest-news">News</Link>
              <Link to="/media">Media</Link>
              <Link to="results">Results</Link>
            </div>
          </li>
          <li>
            <Link to="/clubs">Clubs</Link>
          </li>
          <li>
            <button onClick={aboutHandler}>About +</button>
            <div
              className={`${menuStyles.dropdownContent} ${
                !aboutDrop ? "" : menuStyles.droppingDown
              }`}
            >
              <Link to="/contact">Contact</Link>
              <Link to="/what-is-rugby-league">Rugby League</Link>
            </div>
          </li>
          <li>
            <Link to="/merchandise">Shop</Link>
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
