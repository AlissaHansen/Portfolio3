import React from "react";
import MovieCarousel from "./MovieCarousel";
import MovieListComponent from "./MovieListComponenet";
import '../Stylesheets/GeneralStylesheet.css';

const Home = () => 
<div>
    <MovieCarousel />
    <MovieListComponent title="Top rated movies" count={4} filter = "ranked"/>
    <MovieListComponent title="Featured movies" count={4}/>
</div>;

export default Home;