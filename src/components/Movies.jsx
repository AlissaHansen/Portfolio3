import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import MovieListComponent from "./MovieListComponenet";
import '../Stylesheets/GeneralStylesheet.css';

const Movies = () => {

    const [filter, setFilter] = useState("featured");

    return (

        <div>
            <div className="Movie-filter-buttons">
                <Button variant="secondary" onClick={() => setFilter("ranked")}>Ranked</Button>
                <Button variant="secondary" onClick={() => setFilter("featured")}>Featured</Button>
            </div>
            <MovieListComponent title={filter + " movies"} count={20} filter={filter} />
        </div>
    );
}
export default Movies;