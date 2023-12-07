import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const MovieInfo = ({movie, index}) => (
    <div key={index}>
    <Card style={{ width: '14rem'}}>
      <Card.Img variant="top" src={movie.poster} style={{ height: '320px' }} />
      <Card.Body>
        <Card.Title>{movie.primarytitle}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
);
export default MovieInfo;