import React from "react"

import oLearysLogo from "../images/olearysnewlogo.jpg"

export default () => (
  <div className="footer">
    <p>Supported by <a href="https://olearys.se/lund/" target="_blank" rel="nofollow noopener noreferrer">O'Leary's</a> in Lund.</p>
    <img className="advert"
      src={oLearysLogo}
      alt="Logo for o'Learys in Lund, sponsors of Skåne Stags Rugby League Club."
    />
    <p>Join us there after the game!</p>
  </div>
)
