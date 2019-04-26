import React from "react"
import { Carousel } from "react-bootstrap"

export default (props) => (
  <Carousel fade="true">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={props.firstSlide}
        alt={props.firstSlideAlt}
      />
      <p className="carouselCaption">{props.firstSlideCaption}</p>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={props.secondSlide}
        alt={props.secondSlideAlt}
      />
      <p className="carouselCaption">{props.secondSlideCaption}</p>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={props.thirdSlide}
        alt={props.thirdSlideAlt}
      />
      <p className="carouselCaption">{props.thirdSlideCaption}</p>
    </Carousel.Item>
  </Carousel>
)
