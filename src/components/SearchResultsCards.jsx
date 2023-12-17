import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import '../Stylesheets/GeneralStylesheet.css';



const SearchResultsCards = ({movie, index}) => (
    <div key={index}>
      <Link to={"/movieinfo/" + movie.id}>
      <div class="row row-cols-3">
      <div class="col">
    <Card style={{ width: '14rem'}}>
      <Card.Img variant="top" src={movie.poster} style={{ height: '320px' }} />
      <Card.Body className="Card-body-fixed">
        <Card.Title>{movie.title}</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    </Link>
    </div>
);
export default SearchResultsCards;