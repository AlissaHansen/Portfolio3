import React from "react"; 

const UserBookmarkDisplay = ({user}) => {
    return (
        <div>
            {user && user.movieBookmarkModels.map((bookmark, index) => (
                <div key={index}>
                    <p>{bookmark.movieInfoId}</p>
                </div>
            ))}
        </div>
    );
}
export default UserBookmarkDisplay;