import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import OppenheimerImage from '../images/oppenheimerImage.jpeg';
import BarbieImage from '../images/barbieImage.jpg';
import FightclubImage from '../images/fightclubImage.jpg';

const MovieCarousel = () => (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={OppenheimerImage}
          alt="First slide"
          style={{ height: '800px', width: '1600px' }}
        />
        <Carousel.Caption>
          <h2>OPPENHEIMER</h2>
          <p>During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world's first nuclear explosion, forever changing the course of history.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BarbieImage}
          alt="Second slide"
          style={{ height: '800px', width: '1600px' }}
        />
        <Carousel.Caption>
          <h2 style={{ color: 'black' }}>BARBIE</h2>
          <p style={{ color: 'black' }}>Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={FightclubImage}
          alt="Third slide"
          style={{ height: '800px', width: '1600px' }}
        />
        <Carousel.Caption>
          <h2>FIGHT CLUB</h2>
          <p>A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his perfect apartment is destroyed. The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives. Their perfect partnership frays when Marla (Helena Bonham Carter), a fellow support group crasher, attracts Tyler's attention.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
  
  export default MovieCarousel;
