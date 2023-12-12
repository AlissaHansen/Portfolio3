import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import AvatarImage from '../images/avatar2Image.jpg';
import '../Stylesheets/GeneralStylesheet.css';


const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (username.length < 4) {
            setError("Username must be longer than 3 characters");
            return;
        }
        if (password.length < 6) {
            setError("Passwoord must be longer than 5 characters");
            return;
        }

        const apiUrl = "http://localhost:5001/api/users";

        const formData = {
            UserId: username,
            Password: password,
        };

        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.userId) {
                navigate("/login", {state: { message: "User created sucessfully!"}});
                window.location.reload();
            } else {
                setError("Invalid username or password...");
                console.log("dårlig");
                setPassword("");
            }
        })
        .catch((error) => {
            console.error("SENDE FEJL", error);
        });
    };

    return (
        <div className="Outer-login-container">
            <div className="Left-container">
                <img src={AvatarImage} className="App-logo" alt="logo" />
            </div>
            <div className="Login-container">
                <h2 className="Login-header">MovieDB</h2>
                {error && <p className="Login-error-message">{error}</p>}
                <Form onSubmit={handleSubmit}>
                    <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FloatingLabel>

                    <Button className="Login-button" variant="dark" type="submit">
                        Sign up
                    </Button>
                </Form>
                <p className="Sign-up-text">
                    Already have a user? <a href="/login">Login!</a>
                </p>

            </div>
        </div>
    );
};

export default Signup;
