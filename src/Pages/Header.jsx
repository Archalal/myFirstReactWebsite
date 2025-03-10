import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="https://outofoffice.la/cdn/shop/files/ooo.png?v=1735591607&width=190"
            alt="Logo"
            style={{ height: "60px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto " style={{fontSize:"16px"}}>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          
            <Nav.Link as={Link} to='/about'>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Nav style={{fontSize:"16px"}}>
              <Nav.Link as={Link} to="/login" className="ms-auto">
              <i className="fa-solid fa-user"></i>
            <span className="ms-2">Login</span>
              </Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
