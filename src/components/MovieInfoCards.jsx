import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import '../Stylesheets/GeneralStylesheet.css';



const MovieInfoCards = ({ movie, index }) => (
  <div className="col-md-3 mb-4" key={index}>
    <Link to={"/movieinfo/" + movie.id}>
      <Card style={{ width: '14rem' }} className="mx-auto">
        <Card.Img variant="top" src={movie.poster} style={{ height: '320px' }} />
        <Card.Body className="Card-body-fixed">
          <Card.Title>{movie.primarytitle}</Card.Title>
          <Card.Text>{movie.startYear}</Card.Text>
          <Card.Text> Rating: {movie.averageRating}&#9733;</Card.Text>
          <Button variant="primary">See more</Button>
        </Card.Body>
      </Card>
    </Link>
  </div>
);
export default MovieInfoCards;