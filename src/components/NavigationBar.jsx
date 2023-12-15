import React, {useState} from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import MoviedbLogo from '../images/moviedblogo.svg';
import UserLogo from '../images/userlogo.svg';
import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';
import '../NavigationBar.css';
import { DropdownMenu } from "react-bootstrap";


const NavigationBar = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const userId = localStorage.getItem("userId");
    const userToken = localStorage.getItem("userToken");

    const history = useHistory();

    const handleSearch = (e) => {
        e.preventDefualt();
        history.push(`/search?term=${encodeURIComponent(searchTerm)}`);
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
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
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/movies">Movies</Nav.Link>
                    </Nav>

                    <Form onSubmit={handleSearch} inline className="my-2 my-lg-0">
                        <Row>
                            <Col xs="auto" className="ml-auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                    style={{ width: '300px' }}
                                />
                            </Col>
                            <Col xs="auto">
                                <Button type="submit" variant="secondary" className="search-button">
                                    Search
                                </Button>
                            </Col>
                        </Row>
                    </Form>

                    {userId && userToken ? (
                        <Dropdown>
                            <Dropdown.Toggle variant="dark">
                                <img
                                    src={UserLogo}
                                    width="40"
                                    height="40"
                                    className="d-inline-block"
                                    alt="User Logo"
                                />
                                {userId}
                            </Dropdown.Toggle>
                            <DropdownMenu >
                            <Link to="/profile">
                                <Dropdown.Item as="span">My page</Dropdown.Item>
                                </Link>  

                                <Dropdown.Item onClick={() => {
                                    localStorage.removeItem("userId");
                                    localStorage.removeItem("userToken");
                                    window.location.reload();
                                }}>Logout</Dropdown.Item>
                            </DropdownMenu>
                        </Dropdown>
                    ) : (
                        <Link to="/login">
                            <Button variant="secondary">Login</Button>
                        </Link>
                    )}

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
