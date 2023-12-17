import React from "react";
import MovieListComponent from "./MovieListComponenet";
import '../Stylesheets/GeneralStylesheet.css';

const Movies = () =>
    <div>
        <MovieListComponent title="Featured movies" count={30}/>
    </div>;

export default Movies;