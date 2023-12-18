import React, {useState, useEffect} from "react";
import UserBookmarkDisplay from "./UserBookmarkDisplay";

const FetchUserData = ({userId}) => {

    const [user, setUser] = useState();

    useEffect(() => {
        const loadUser = () => {
            const url = "http://localhost:5001/api/users/" + userId

            fetch(url)
                .then((res) => res.json())
                .then((json) => setUser(json))
                .catch((error) => console.error("Error loading user.", error));
        };
        loadUser();
    }, [userId]);

    return (
        <UserBookmarkDisplay user = {user} />
    );
}

export default FetchUserData;