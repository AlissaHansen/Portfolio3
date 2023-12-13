import React from "react";
import { useEffect, useState } from "react";

const MovieInfoDisplay = ({id}) => {
const [movie, setMovie] = useState();

useEffect(() => {
    const loadMovie = () => {
        const url = "http://localhost:5001/api/movieinfos/" + id

        fetch (url)
            .then((res) => res.json())
            .then ((json) => setMovie(json))
            .catch((error) => console.error("Error loading movie:", error));
    };
    loadMovie();
}, [id]);

return (
    <div>
      {movie ? (
        <div>
          <h1>{movie.primarytitle}</h1>
          <h1>hejjjjj</h1>
          {/* Render other movie information here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default MovieInfoDisplay;