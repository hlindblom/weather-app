import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Search from './Search.js';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <Navbar
            style={{ backgroundColor: '#0A1D2B' }}
            variant="dark"
            expand="sm"
        >
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Weatherwise
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            as={Link}
                            to="/"
                            className="text-center align-self-center"
                        >
                            <i className="bi bi-thermometer-sun"></i>
                            <p className="mb-0">Today</p>
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/hourly"
                            className="text-center align-self-center"
                        >
                            <i className="bi bi-stopwatch"></i>
                            <p className="mb-0">Hourly</p>
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/weekly"
                            className="text-center align-self-center"
                        >
                            <i className="bi bi-calendar-day"></i>
                            <p className="mb-0">Weekly</p>
                        </Nav.Link>
                        <Nav.Item className="align-self-center">
                            <Search className="form-control" />
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
