import React from "react";
import { Link } from "react-router-dom";
import '../Stylesheets/GeneralStylesheet.css';

const UserBookmarkDisplay = ({ user }) => {
    return (
        <div className="Bookmark-container">
            <h3>My watchlist</h3>
            {user && user.movieBookmarkModels &&
                <ul>
                    {user.movieBookmarkModels.map((bookmark, index) => (
                        <li key={index}>
                            <Link className="Bookmark-link" to={"/movieinfo/" + bookmark.movieInfoId}>{bookmark.movieInfoId}</Link>                        </li>
                    ))}
                </ul>
            }
        </div>
    );
}

export default UserBookmarkDisplay; 