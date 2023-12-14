import React from "react";
import { useParams } from "react-router-dom";
import MovieInfoDisplay from "./MovieInfoDisplay";

const MovieInfo = () => {

    const { id } = useParams();
    const userId = localStorage.getItem("userId");

    return (
        <div>
            <MovieInfoDisplay movieId = {id} userId = {userId}/>
        </div>
    );
}
export default MovieInfo;