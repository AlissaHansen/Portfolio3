import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import AvatarImage from '../images/avatar2Image.jpg'
import '../Stylesheets/GeneralStylesheet.css';


const Login = () =>

    <div className="Outer-login-container">

        <div className="Left-container">
            <img src={AvatarImage} className="App-logo" alt="logo" />
        </div>

        <div className="Login-container">
            <h2 className="Login-header">MovieDB</h2>
            <Form>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>

                <Button className="Login-button" variant="dark" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    </div>

export default Login;