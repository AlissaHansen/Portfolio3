import React, {useState} from "react";
import Button from "react-bootstrap/button";

const DeleteUserButton = ({ user }) => {

    const [errorMessage, setErrorMessage] = useState("");

    const handleDelete = (event) => {
        event.preventDefault();

        fetch("http://localhost:5001/api/users?userid=" + user.userId, {
            method: "DELETE"
        })
            .then(response => {
                if (response.ok) {
                    //navigate user to home
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