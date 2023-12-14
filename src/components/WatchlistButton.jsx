import React from "react";
import Button from "react-bootstrap/Button";

const WatchlistButton = ({movieId, userId}) => {
    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("http://localhost:5001/api/moviebookmarks", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ movieId, userId }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div>
            <Button className="Watchlist-button" variant="warning" type="submit" onClick={handleSubmit}>Add to watchlist</Button>
        </div>
    );
}

export default WatchlistButton;