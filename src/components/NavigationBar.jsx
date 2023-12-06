import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MoviedbLogo from '../images/moviedblogo.svg';
import UserLogo from '../images/userlogo.svg';
import '../NavigationBar.css';

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
            <Navbar.Brand href="/">MovieDB</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/movies">Movies</Nav.Link>
            </Nav>

            <Form inline className="my-2 my-lg-0">
                <Row>
                    <Col xs="auto" className="ml-auto">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit" className="search-button">Search</Button>
                    </Col>
                </Row>
            </Form>

            <Nav.Link href="/login">
                <img
                    src={UserLogo}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    alt="User Logo"
                />
            </Nav.Link>
        </Container>
    </Navbar>;

export default NavigationBar;