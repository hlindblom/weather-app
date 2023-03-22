import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Search from './Search';

export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="sm">
            <Container>
                <Navbar.Brand href="#home">Weatherwise</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Today</Nav.Link>
                        <Nav.Link href="#link">Hourly</Nav.Link>
                        <Nav.Link href="#link">Weekly</Nav.Link>
                        <Search />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
