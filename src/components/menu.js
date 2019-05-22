import React from "react"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

import swedenFlag from "../images/sweden-flag-tn.png"

export default (props) => (
  <Navbar bg="dark" expand="sm" variant="dark">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Brand className="actionBar">{props.pageTitle}</Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/news/">News</Nav.Link>
        <NavDropdown title="Team" id="basic-nav-dropdown">
          <NavDropdown.Item href="/calendar/">Calendar</NavDropdown.Item>
          <NavDropdown.Item href="/squad/">Squad</NavDropdown.Item>
          <NavDropdown.Item href="/training/">Training</NavDropdown.Item>
          <NavDropdown.Item href="/results/">Results</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="About" id="basic-nav-dropdown">
          <NavDropdown.Item href="/about/">Skane Stags</NavDropdown.Item>
          <NavDropdown.Item href="/rugbyleague/">Rugby League</NavDropdown.Item>
          <NavDropdown.Item href="/partners/">Partners</NavDropdown.Item>
          <NavDropdown.Item href="/contact/">Contact</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/merchandise/">Kit</Nav.Link>
      </Nav>
    </Navbar.Collapse>

    <Nav.Link href="https://www.facebook.com/skanestags/">
      <FaFacebookSquare />
    </Nav.Link>
    <Nav.Link href="https://www.instagram.com/skanestags">
     <FaInstagram />
    </Nav.Link>
    <Nav.Link href="https://twitter.com/skanecrusaders">
      <FaTwitter />
    </Nav.Link>
    <Nav.Link href="https://www.youtube.com/channel/UClPPKnRY10Yp0YxlCnULkkQ">
      <FaYoutube />
    </Nav.Link>
    <Nav.Link href="/sv/">
      <img
        src={swedenFlag}
        alt="Sweden Flag"
      />
    </Nav.Link>
  </Navbar>
)
