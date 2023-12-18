import React from "react";
import { Link } from "react-router-dom";
import '../Stylesheets/GeneralStylesheet.css';

const UserRatingsDisplay = ({ user }) => {
    return (
        <div className="Bookmark-container">
            <h3>My ratings</h3>
            {user && user.userRatingModels &&
                <ul>
                    {user.userRatingModels.map((rating, index) => (
                        <li key={index}>
                            <Link className="Bookmark-link" to={"/movieinfo/" + rating.movieInfoId}>{rating.movieInfoId}: </Link>
                            Rated: {rating.rating}
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
}

export default UserRatingsDisplay; 