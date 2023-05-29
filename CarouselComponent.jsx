import React from 'react';
import images1 from "../../assests/images/JPG/cleaning1.jpg"
import images2 from "../../assests/images/JPG/cleaning2.jpg"
import images3 from "../../assests/images/JPG/laundary.jpg"
import images4 from "../../assests/images/JPG/gardening.jpg"
import images5 from "../../assests/images/JPG/plastics.jpg"
import Carousel from 'react-bootstrap/Carousel';
import "../../styles/Carousel.css";



function CarouselComponent ()  {

    return ( 
        <Carousel controls ={false} fade={true}>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-5"
            src={images1}
            alt="Firstslide"
          />
          <Carousel.Caption>
            <h3>House Cleaning</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={images2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Glass Cleaning</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={images3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Laundary</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={images4}
            alt="fourth slide"
          />
          <Carousel.Caption>
            <h3>Gardening</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={images5}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Recycling and Upcycling </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
        </Carousel.Item>
      </Carousel>
     );
}

export default CarouselComponent;
