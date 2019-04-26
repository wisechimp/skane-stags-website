import React from "react"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"

import swedenFlag from "../images/sweden-flag-tn.png"

export default () => (
  <Navbar bg="dark" expand="md" variant="dark">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/news/">News</Nav.Link>
        <NavDropdown title="Team" id="basic-nav-dropdown">
          <NavDropdown.Item href="/fixtures/">Fixtures</NavDropdown.Item>
          <NavDropdown.Item href="/training/">Training</NavDropdown.Item>
          <NavDropdown.Item href="/results/">Results</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="About" id="basic-nav-dropdown">
          <NavDropdown.Item href="/about/">Skane Stags</NavDropdown.Item>
          <NavDropdown.Item href="/rugby-league/">Rugby League</NavDropdown.Item>
          <NavDropdown.Item href="/partners/">Partners</NavDropdown.Item>
          <NavDropdown.Item href="/contact/">Contact</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    <Nav.Link href="/sv/">
      <img
        src={swedenFlag}
        alt="Sweden Flag"
      />
    </Nav.Link>
  </Navbar>
)
