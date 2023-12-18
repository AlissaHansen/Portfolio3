import React from "react";
import '../Stylesheets/GeneralStylesheet.css';

const UserBookmarkDisplay = ({ user }) => {
    return (
        <div className="Bookmark-container">
            <h3>My watchlist</h3>
            {user && user.movieBookmarkModels &&
                <ul>
                    {user.movieBookmarkModels.map((bookmark, index) => (
                        <li key={index}>
                            {bookmark.movieInfoId}
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
}

export default UserBookmarkDisplay; 