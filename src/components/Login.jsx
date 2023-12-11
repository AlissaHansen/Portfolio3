import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import AvatarImage from '../images/avatar2Image.jpg';
import '../Stylesheets/GeneralStylesheet.css';


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const apiUrl = "http://localhost:5001/api/users/login";

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
            if (data.userId && data.token) {
                localStorage.setItem("userId", data.userId);
                navigate("/");
                window.location.reload();
            } else {
                setError("Invalid username or password...");
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
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;
