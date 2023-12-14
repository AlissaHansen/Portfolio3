import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const WatchlistButton = ({ movieId, userId, user }) => {

    const [message, setMessage] = useState("");

    const token = localStorage.getItem("userToken");

    const handleAdd = (event) => {
        event.preventDefault();

        const addBookmarkData = {
            MovieInfoId: movieId,
            userId: userId,
        };

        fetch("http://localhost:5001/api/moviebookmarks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(addBookmarkData),
        })
            .then(response => {
                if (response.status === 201) {
                    window.location.reload();
                } else {
                    setMessage("An error occurred");
                }
                return response.json();
            })
            .catch((error) => {
                setMessage("An error occurred");
            });
    };

    const handleRemove = (event) => {
        event.preventDefault();

        const removeBookmarkData = {
            MovieInfoId: movieId,
            userId: userId,
        };

        fetch("http://localhost:5001/api/moviebookmarks", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(removeBookmarkData),
        })
            .then(response => {
                if (response.status === 200) {
                    window.location.reload();
                } else {
                    setMessage("An error occurred");
                }
                return response.json();
            })
            .then(data => {
                console.log("Success:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
                setMessage("An error occurred");
            });
    }

    //Tjekker om filmen er på brugerens watchlist, så knappen kan ændre sig til "Remove from watchlist"
    //Tjekker også om der er en bruger, og om denne har bookmarked nogle film
    const isMovieInWatchlist = user && user.movieBookmarkModels && user.movieBookmarkModels.some(movie => movie.movieInfoId === movieId);

    return (
        <div>
            {isMovieInWatchlist ? (
                <Button className="Watchlist-button" variant="warning" onClick={handleRemove}>
                    Remove from watchlist
                </Button>
            ) : (
                <Button className="Watchlist-button" variant="warning" onClick={handleAdd}>
                    Add to watchlist
                </Button>
            )}
            {message && <p>{message}</p>}
        </div>
    );
}

export default WatchlistButton;