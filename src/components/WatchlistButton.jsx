import React from "react";
import Button from "react-bootstrap/Button";

const WatchlistButton = ({movieId, userId}) => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const bookmarkData = {
            MovieInfoId: movieId,
            userId: userId,
        };

        fetch("http://localhost:5001/api/moviebookmarks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoieEZyYW1lZSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVzZXIiLCJleHAiOjE3MDI4MTExNjJ9.aBnStd1yE9wfHl2Ysx2qwoxx3JqZRrbUdyBlfxqmYDfcpBX5uSTrf45kqK8m29e6D1uDlopaEBuj1MDdwUkMKA"
            },
            body: JSON.stringify(bookmarkData),
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