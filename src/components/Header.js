import React from 'react';
import logo from '../assets/images/case.png';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
      <>
        <Navbar expand="lg" className="bg-primary">
            <Container>
                  <Navbar.Brand to="/"><img src={logo} alt='logo'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to = "/">Home</Link>
                        <Link to = "/about">About Us</Link>
                        <Link to = "/contact">Contact Us</Link>
                       
                    </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
      </>
  )
}

export default Header;