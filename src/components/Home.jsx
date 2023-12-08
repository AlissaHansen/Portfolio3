import React from "react";
import MovieCarousel from "./MovieCarousel";
import MovieListComponent from "./MovieListComponenet";
import '../Stylesheets/GeneralStylesheet.css';

const Home = () => 
<div>
    <MovieCarousel />
    <MovieListComponent title="Top rated movies" count={5} ranked/>
    <MovieListComponent title="Featured movies" count={5}/>
</div>;

export default Home;