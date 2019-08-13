import React from "react"
import { Carousel } from "react-bootstrap"

import styles from "./imagecarousel.module.css"

export default (props) => (
  <Carousel fade="true">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={props.firstSlide}
        alt={props.firstSlideAlt}
      />
      <p className={styles.carouselCaption}>{props.firstSlideCaption}</p>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={props.secondSlide}
        alt={props.secondSlideAlt}
      />
      <p className={styles.carouselCaption}>{props.secondSlideCaption}</p>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={props.thirdSlide}
        alt={props.thirdSlideAlt}
      />
      <p className={styles.carouselCaption}>{props.thirdSlideCaption}</p>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={props.fourthSlide}
        alt={props.fourthSlideAlt}
      />
      <p className={styles.carouselCaption}>{props.fourthSlideCaption}</p>
    </Carousel.Item>
  </Carousel>
)
