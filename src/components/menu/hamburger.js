import React from 'react'

import hamburgerStyles from './hamburger.module.css'

const Hamburger = props => (
    <button className={`${hamburgerStyles.hamburger} ${!props.flippingBurger ? '' : hamburgerStyles.change}`} onClick={props.flipper} aria-label="Menu reveal">
        <div className={hamburgerStyles.hamburgerBunTop}/>
        <div className={hamburgerStyles.hamburgerMeat}/>
        <div className={hamburgerStyles.hamburgerBunBottom}/>
    </button>
)

export default Hamburger