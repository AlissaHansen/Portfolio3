import React from "react";
import RateModalComponent from "./RateModalComponent";

const RateComponent = ({movie, userId, movieId, user}) => 

<div>
    <RateModalComponent movie = {movie} movieId = {movieId} userId = {userId} user = {user} />
</div>

export default RateComponent;