import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import OppenheimerImage from '../images/oppenheimerImage.jpeg';
import BarbieImage from '../images/barbieImage.jpg';

const MovieCarousel = () => (
    <Carousel style={{ maxHeight: '1080px' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={OppenheimerImage}
          alt="First slide"
          style={{ maxHeight: '1080px', maxWidth: '100%' }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BarbieImage}
          alt="Second slide"
          style={{ maxHeight: '1080px', maxWidth: '100%' }}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={OppenheimerImage}
          alt="Third slide"
          style={{ maxHeight: '1080px', maxWidth: '100%' }}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
  
  export default MovieCarousel;
