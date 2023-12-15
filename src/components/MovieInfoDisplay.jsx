import React from "react";
import { useEffect, useState } from "react";
import '../Stylesheets/GeneralStylesheet.css';
import WatchlistButton from "./WatchlistButton";
import RateComponent from "./RateComponent";

const MovieInfoDisplay = ({ movieId, userId }) => {
    const [movie, setMovie] = useState();
    const [user, setUser] = useState();

 //Hent den specifikke film

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

    //Hent den specifikke bruger for at kunne vise om filmen er på brugerens watchlist
    useEffect(() => {
        const loadUser = () => {
            const url = "http://localhost:5001/api/users/" + userId

            fetch(url)
                .then((res) => res.json())
                .then((json) => setUser(json))
                .catch((error) => console.error("Error loading user:", error));
        };
        loadUser();
    }, [userId]);

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
                            <WatchlistButton movieId={movieId} userId={userId} user={user} />
                        </div>
                    </div>
                    <div className="Rating-container">
                        <p>
                        Rating: &#9733;{movie.averageRating} / 10
                        </p>
                        <p>
                            Number of votes: {movie.numVotes} 
                        </p>
                    </div>

                    <RateComponent movie={movie} movieId={movieId} userId={userId} user={user}/>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
export default MovieInfoDisplay;