import React, { useEffect, useState } from "react";
import MovieInfoCard from "./MovieInfoCards";
import Button from 'react-bootstrap/Button';
import '../Stylesheets/GeneralStylesheet.css';

const MovieListComponent = ({ title, count, ranked }) => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(0);
    const [numberOfPages, setNumberOfPages] = useState(0);

    useEffect(() => {
        const loadMovies = () => {
            const url = ranked
                ? "http://localhost:5001/api/movieinfos?ranked=true&pagesize=" + count + "&page=" + page
                : "http://localhost:5001/api/movieinfos?newest=true&pagesize=" + count + "&page=" + page

            fetch(url)
                .then((res) => res.json())
                .then((json) => {
                    setMovies(json.items);
                    setNumberOfPages(json.numberOfPages);
                })
                .catch((error) => console.error("Error loading movies:", error));
        };

        loadMovies();
    }, [count, ranked, page]);

    return (
        <div>
            <h1 className="Movies-headline">{title}</h1>
            <div className="Cards-outer-div" >
                {movies.map((movie, index) => (
                    <MovieInfoCard movie={movie} index={index} />
                ))}
            </div>
            <div className="Paging-controls">
                <Button variant="dark" onClick={() => page > 0 && setPage(prevPage => prevPage - 1)}>&lt;</Button>
                <Button variant="dark" onClick={() => setPage(0)}>1</Button>
                <Button variant="dark" onClick={() => setPage(page)}>{page + 1}</Button>
                <Button variant="dark" onClick={() => setPage(numberOfPages)}>{numberOfPages + 1}</Button>
                <Button variant="dark" onClick={() => page < numberOfPages && setPage(prevPage => prevPage + 1)}>&gt;</Button>            </div>
        </div>
    );
};

export default MovieListComponent;
