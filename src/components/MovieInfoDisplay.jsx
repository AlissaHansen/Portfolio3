import React from "react";
import { useEffect, useState } from "react";
import '../Stylesheets/GeneralStylesheet.css';
import Button from 'react-bootstrap/Button';

const MovieInfoDisplay = ({ id }) => {
    const [movie, setMovie] = useState();

    useEffect(() => {
        const loadMovie = () => {
            const url = "http://localhost:5001/api/movieinfos/" + id

            fetch(url)
                .then((res) => res.json())
                .then((json) => setMovie(json))
                .catch((error) => console.error("Error loading movie:", error));
        };
        loadMovie();
    }, [id]);

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
                        <div>
                        <p>{movie.plot}</p>
                        <p className="Genre-info">
                            Genres: {movie.genres.map((genre) => genre.genreName).join(", ")}
                        </p>
                        <div>
                            <span className="Starring-title">Starring: </span>{movie.moviePrincipals.map((name) => name.personName).join(", ")}.
                        </div>
                        <div>
                            <Button variant="warning">Add to watchlist</Button>
                        </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
export default MovieInfoDisplay;