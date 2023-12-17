import React, { useEffect, useState } from "react";
import SearchResultsCards from "./SearchResultsCards";
import '../Stylesheets/GeneralStylesheet.css';


const SearchResults = ({ searchTerm }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const loadMovies = () => {
            const url = "http://localhost:5001/api/searchmovie?searchterm=" + searchTerm;

            fetch(url)
                .then((res) => res.json())
                .then((json) => {
                    setMovies(json);
                })
                .catch((error) => console.error("Error loading movies:", error));
        };
        loadMovies();
    }, [searchTerm]);
    return (
            <div className="Search-cards-div" >
                {movies.map((movie, index) => (
                    <SearchResultsCards movie={movie} index={index} />
                ))}
            </div>
    );
};

export default SearchResults;
