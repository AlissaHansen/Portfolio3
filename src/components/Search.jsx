import React from "react";
import { useParams } from 'react-router-dom';
import SearchResults from "./SearchResults";
import '../Stylesheets/GeneralStylesheet.css';

const Search = () => {
    const { searchTerm } = useParams();
    return (
        <>
        <h1 className="Search-header">Search Results for: "{searchTerm}"</h1>
            <SearchResults searchTerm={searchTerm} />
        </>
    );
}

export default Search;