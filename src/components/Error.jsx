import React from "react";
import SpilledPopcorn from '../images/spilledPopcorn.png';
import '../Stylesheets/GeneralStylesheet.css';

const Error = () => {
    return (
        <div className="Errorpage-div">
            <h1>404 Page Not Found</h1>
            <img src={SpilledPopcorn} alt="Spilled Popcorn" />
        </div>
    );
}

export default Error;