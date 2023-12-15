import React from "react";
import RateModalComponent from "./RateModalComponent";
import DeleteRateButton from "./DeleteRateButton";

const RateComponent = ({ movie, userId, movieId, user }) => {


    const isMovieRatedByUser = user && user.userRatingModels && user.userRatingModels.some(movie => movie.movieInfoId === movieId);

    return (
        <div>
            {isMovieRatedByUser ? (
                <DeleteRateButton user = {user} movieId = {movieId} />
            ) : (
            <RateModalComponent movie={movie} movieId={movieId} userId={userId} user={user} />
            )}
        </div>
    );
}

export default RateComponent;