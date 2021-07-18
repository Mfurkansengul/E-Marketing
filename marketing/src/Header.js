import React from 'react';
import { FaBeer, FaSignInAlt, FaShoppingCart} from 'react-icons/fa';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

function Header() {
    
    return (
        <div className="Header">
          <header id="header">
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                    <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
                </Form>
                <Nav.Link href="/signIn"><FaSignInAlt /> Sign In</Nav.Link>
                <NavDropdown title="Notification" id="navbarScrollingDropdown">
                </NavDropdown>
                <Nav.Link href="#action2"><FaShoppingCart /></Nav.Link>
                </Nav>

            </Navbar.Collapse>
            </Navbar>
          </header>
        </div>

    );
}

export default Header;