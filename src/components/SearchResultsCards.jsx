import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import '../Stylesheets/GeneralStylesheet.css';



const SearchResultsCards = ({ movie, index }) => (
  <div className="col-md-3 mb-4" key={index}>
    <Link to={"/movieinfo/" + movie.movieInfoId}>
      <Card style={{ width: '14rem' }} className="mx-auto">
        <Card.Img variant="top" src={movie.poster} style={{ height: '320px' }} />
        <Card.Body className="Card-body-fixed">
          <Card.Title>{movie.title}</Card.Title>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Link>
  </div>
);

export default SearchResultsCards;