import React from 'react';
import { FaSignInAlt, FaShoppingCart} from 'react-icons/fa';
import { IoMdNotificationsOutline} from 'react-icons/io';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Row, Col} from 'react-bootstrap'

function Header() {
    
    return (
        <div className="Header">
          <header id="header">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/" className="col-xs-3 col-md-2">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="col-xs-9 col-md-10" >
                    <Form className="d-flex mr-4 col-xs-8 col-md-7">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <div className="col-md-2"></div>
                <Nav
                className="my-2 my-lg-0 col-xs-4 col-md-3"
                style={{ maxHeight: '100px' }}
                navbarScroll>
                    <Nav.Link href="/signIn" className="col-md-4"><FaSignInAlt />Sign In</Nav.Link>
                    <NavDropdown title={<IoMdNotificationsOutline />} id="navbarScrollingDropdown" className="col-md-5" title="notification"></NavDropdown>
                    <Nav.Link href="#action2" className="col-md-3"><FaShoppingCart />Cart</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
          </header>
        </div>
        );
}

export default Header;