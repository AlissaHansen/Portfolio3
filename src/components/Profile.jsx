import React from "react";
import FetchUserData from "./FetchUserData";

const Profile = () => {

    const userId = localStorage.getItem = ("userId");

    return (
        <div>
            <h1>Velkommen, {userId} </h1>
            <FetchUserData userId = {userId} />
        </div>
    );
}

export default Profile;