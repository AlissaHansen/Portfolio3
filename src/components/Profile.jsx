import React from "react";
import FetchUserData from "./FetchUserData";
import '../Stylesheets/GeneralStylesheet.css';

const Profile = () => {

    const userId = localStorage.getItem ("userId");

    return (
        <div>
            <h1 className="Welcome-user" >Velkommen, {userId} </h1>
            <FetchUserData userId = {userId} />
        </div>
    );
}

export default Profile;