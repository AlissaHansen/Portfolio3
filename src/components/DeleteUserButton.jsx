import React, { useState } from "react";
import Button from "react-bootstrap/button";
import { useNavigate } from "react-router-dom";

const DeleteUserButton = ({ user }) => {

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState("");

    const handleDelete = () => {

        fetch("http://localhost:5001/api/users?userid=" + user.userId, {
            method: "DELETE"
        })
            .then(response => {
                if (response.ok) {
                    localStorage.removeItem("userId");
                    localStorage.removeItem("token");
                    navigate("/");

                }
                else {
                    setErrorMessage("An error occurred");
                }
            })
            .catch(() => {
                setErrorMessage("An error occurred");
            });
    }

    return (
        <div>
            <Button className="Delete-user-button" variant="danger" onClick={handleDelete}>Delete user</Button>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
}

export default DeleteUserButton;