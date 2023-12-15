import React, {useState} from "react";
import Button from "react-bootstrap/button";
import '../Stylesheets/GeneralStylesheet.css';

const DeleteRateButton = ({user, movieId}) => {

const [message, setMessage] = useState("");

const handleRemove = (event) => {
    event.preventDefault(); 

console.log("test", user);

const removeRatingData = {
    userId: user.userId, 
    movieId: movieId
};

fetch("http://localhost:5001/api/rate", {
    method: "DELETE", 
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(removeRatingData),
})
    .then(resonse => {
        if(resonse.ok) {
            window.location.reload();
        } else {
            setMessage("An error occurred");
        }
    })
    .catch((error) => {
        setMessage("An error occurred");
    });
    
}

return (
    <div>
        <Button className="Remove-rating-button" variant="light" onClick={handleRemove}>Remove rating</Button>
        {message && <p>{message}</p>}
    </div>
);
}

export default DeleteRateButton;
