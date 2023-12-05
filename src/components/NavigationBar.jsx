import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import MoviedbLogo from '../images/moviedblogo.svg';

const NavigationBar = () =>
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/">
                <img
                    src={MoviedbLogo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Brand href="#home">MovieDB</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#movies">Movies</Nav.Link>
                <Nav.Link href="#actors">Actors</Nav.Link>
                <Nav.Link href="#">Pricing</Nav.Link>
            </Nav>
        </Container>
    </Navbar>;

export default NavigationBar;