import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const HeaderForUser = ({ searchvalue, setSearchvalue, handleSearch }) => {
    const userId = sessionStorage.getItem("roleId");

    return (
        <div>
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
                        <Nav className="me-auto" style={{ fontSize: "16px" }}>
                            <Nav.Link as={Link} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/about">
                                About
                            </Nav.Link>
                            <Nav.Link as={Link} to="/contact">
                                Contact
                            </Nav.Link>
                        </Nav>

                        {/* Search Bar */}
                        <Form className="d-flex" onSubmit={handleSearch}>
                            <FormControl
                                onChange={(e) => setSearchvalue(e.target.value)}
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                name="search"
                                value={searchvalue}
                            />
                            <Button variant="outline-success" type="submit">
                                Search
                            </Button>
                        </Form>

                        <Nav style={{ fontSize: "16px" }}>
                            <Nav.Link as={Link} to={`/${userId}/cart`} className="ms-auto">
                                <span className="m-1">
                                    <i className="fa-solid fa-cart-shopping ms-1"></i>Cart
                                </span>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/" className="ms-auto">
                                <i className="fa-solid fa-power-off ms-2"></i>
                                <span className="ms-1">Logout</span>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default HeaderForUser;