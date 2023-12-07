import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import OppenheimerImage from '../images/oppenheimerImage.jpeg';
import AvatarImage from '../images/avatar2Image.jpg';
import FightclubImage from '../images/fightclubImage.jpg';
import '../CarouselStylesheet.css';

const MovieCarousel = () => (
<div className="Carousel-container">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={OppenheimerImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>OPPENHEIMER</h2>
          <p>During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world's first nuclear explosion, forever changing the course of history.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={AvatarImage}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2>AVATAR 2</h2>
          <p>Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={FightclubImage}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2>FIGHT CLUB</h2>
          <p>A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his perfect apartment is destroyed. The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives. Their perfect partnership frays when Marla (Helena Bonham Carter), a fellow support group crasher, attracts Tyler's attention.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>
  );
  
  export default MovieCarousel;
