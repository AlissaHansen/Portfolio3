import React from "react";
import RateModalComponent from "./RateModalComponent";

const RateComponent = ({ movie, userId, movieId, user }) => {


    const isMovieRatedByUser = user && user.userRatingModels && user.userRatingModels.some(movie => movie.movieInfoId === movieId);

    return (
        <div>
            {isMovieRatedByUser ? (
                <p>er allerede rated</p>
            ) : (
            <RateModalComponent movie={movie} movieId={movieId} userId={userId} user={user} />
            )}
        </div>
    );
}

export default RateComponent;