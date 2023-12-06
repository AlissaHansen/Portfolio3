import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
            <Navbar.Brand href="/">MovieDB</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/movies">Movies</Nav.Link>
                
                <Form inline>
                    <Row>
                        <Col xs="auto" className="ml-auto">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className=" mr-sm-2"
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Nav>
        </Container>
    </Navbar>;

export default NavigationBar;