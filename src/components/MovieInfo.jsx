import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const MovieInfo = ({movie, index}) => (
    <div key={index}>
    <Card style={{ width: '14rem'}}>
      <Card.Img variant="top" src={movie.poster} style={{ height: '320px' }} />
      <Card.Body>
        <Card.Title>{movie.primarytitle}</Card.Title>
        <Card.Text>{movie.startYear}</Card.Text>
        <Card.Text> Rating: {movie.averageRating}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
);
export default MovieInfo;