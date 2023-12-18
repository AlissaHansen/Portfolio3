import React from "react";
import RateModalComponent from "./RateModalComponent";
import DeleteRateButton from "./DeleteRateButton";
import '../Stylesheets/GeneralStylesheet.css';

const RateComponent = ({ movie, userId, movieId, user }) => {


    const isMovieRatedByUser = user && user.userRatingModels && user.userRatingModels.some(movie => movie.movieInfoId === movieId);

    return (
        <div>
            {isMovieRatedByUser ? (
                <div className="Movie-rating">
                    <p>Your rating: {user.userRatingModels.find(movie => movie.movieInfoId === movieId).rating}</p>
                    <DeleteRateButton user={user} movieId={movieId} />
                </div>
            ) : (
                <RateModalComponent movie={movie} movieId={movieId} userId={userId} user={user} />
            )}
        </div>
    );
}

export default RateComponent;