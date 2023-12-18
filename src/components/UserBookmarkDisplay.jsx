import React from "react";

const UserBookmarkDisplay = ({ user }) => {
    return (
        <div>
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