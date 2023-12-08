import React, { useEffect, useState } from "react";
import MovieInfo from "./MovieInfo";

const MovieListComponent = ({ title, count, ranked }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const loadMovies = () => {
            const url = ranked
                ? "http://localhost:5001/api/movieinfos?ranked=true&pagesize=" + count
                : "http://localhost:5001/api/movieinfos?pagesize=" + count   

            fetch (url)
                .then((res) => res.json())
                .then((json) => setMovies(json.items))
                .catch((error) => console.error("Error loading movies:", error));
        };

        loadMovies();
    }, [count, ranked]);

    return (
        <div>
            <h1 className="Movies-headline">{title}</h1>
            <div className="Cards-outer-div" >
            {movies.map((movie, index) => (
                <MovieInfo movie={movie} index={index} />
            ))}
            </div>
        </div>
    );
};

export default MovieListComponent;
