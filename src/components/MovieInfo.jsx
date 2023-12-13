import React from "react";
import { useParams } from "react-router-dom";
import MovieInfoDisplay from "./MovieInfoDisplay";

const MovieInfo = () => {

    const { id } = useParams();

    return (
        <div>
            <MovieInfoDisplay id = {id}/>
        </div>
    );
}
export default MovieInfo;