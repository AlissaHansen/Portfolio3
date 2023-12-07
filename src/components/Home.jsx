import React from "react";
import MovieCarousel from "./MovieCarousel";
import MovieListComponent from "./MovieListComponenet";

const Home = () => 
<div>
    <MovieCarousel />
    <MovieListComponent title="Top rated movies" />
</div>;

export default Home;