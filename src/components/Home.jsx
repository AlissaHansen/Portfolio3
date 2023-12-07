import React from "react";
import MovieCarousel from "./MovieCarousel";
import MovieListComponent from "./MovieListComponenet";

const Home = () => 
<div>
    <MovieCarousel />
    <MovieListComponent title="Top rated movies" count={5}/>
</div>;

export default Home;