import React, { useEffect, useState } from "react";
import MovieInfo from "./MovieInfo";
import '../Stylesheets/GeneralStylesheet.css';

const MovieListComponent = ({ title, count }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const loadMovies = () => {
            fetch("http://localhost:5001/api/movieinfos?ranked=true&pagesize=" + count)
                .then((res) => res.json())
                .then((json) => setMovies(json.items))
                .catch((error) => console.error("Error loading movies:", error));
        };

        loadMovies();
    }, [count]);

    return (
        <div>
            <h1>{title}</h1>
            <div className="Cards-outer-div" >
            {movies.map((movie, index) => (
                <MovieInfo movie={movie} index={index} />
            ))}
            </div>
        </div>
    );
};

export default MovieListComponent;
