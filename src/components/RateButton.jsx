import React from "react";
import Button from "react-bootstrap/Button";

const RateButton = (movieId, userId, user) => {
    return (
        <div className="Rate-button">
            <Button className="Rate-button" variant="secondary">Give a rating</Button>
        </div>
    );
}

export default RateButton;