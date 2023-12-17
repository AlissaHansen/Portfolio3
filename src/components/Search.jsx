import React from "react";
import {useParams} from 'react-router-dom';
import SearchResults from "./SearchResults";

const Search = () => {
    const {searchTerm} = useParams();
    return (
        <SearchResults searchTerm={searchTerm}/>
    );
}

export default Search;