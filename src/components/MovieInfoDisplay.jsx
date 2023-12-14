import React from "react";
import { useEffect, useState } from "react";
import '../Stylesheets/GeneralStylesheet.css';
import WatchlistButton from "./WatchlistButton";
import RateButton from "./RateButton";

const MovieInfoDisplay = ({ movieId, userId }) => {
    const [movie, setMovie] = useState();

    useEffect(() => {
        const loadMovie = () => {
            const url = "http://localhost:5001/api/movieinfos/" + movieId

            fetch(url)
                .then((res) => res.json())
                .then((json) => setMovie(json))
                .catch((error) => console.error("Error loading movie:", error));
        };
        loadMovie();
    }, [movieId]);

    return (
        <div>
            {movie ? (
                <div>
                    <h1 className="Movie-title">{movie.primaryTitle}</h1>
                    <div>
                        <p className="Movieinfo-start-runtime">{movie.startYear} • {movie.runTime}m</p>
                    </div>
                    <div className="Movie-poster-div">
                        <img src={movie.poster} alt={`"Poster for movie:" ${movie.primaryTitle}`} />
                        <div className="Info-container">
                            <p>{movie.plot}</p>
                            <p className="Genre-info">
                                <span className="Genre-title">Genres: </span>{movie.genres.map((genre) => genre.genreName).join(", ")}
                            </p>
                            <div>
                                <span className="Starring-title">Starring: </span>{movie.moviePrincipals.map((name) => name.personName).join(", ")}.
                            </div>
                            <WatchlistButton movieId={movieId} userId={userId} />
                        </div>
                    </div>
                    <p className="Rating-container">
                        Rating: &#9733;{movie.averageRating} / 10 <RateButton />
                    </p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
export default MovieInfoDisplay;