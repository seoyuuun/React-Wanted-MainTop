import React, { useState, useRef } from "react";
import "./slider.scss";
import SliderItems from "./slidItem/SliderItems";

const Slider = () => {
  const [slideNumber, setSlideNumber] = useState(0);

  const sliderRef = useRef();

  const hadleClick = (direction) => {
    let distance = sliderRef.current.getBoundingClientRect().x;

    console.log(distance);

    if (direction === "left") {
      setSlideNumber(slideNumber - 1);
      sliderRef.current.style.transform = `translateX(${distance + 2000}px)`;
    }
    if (direction === "right") {
      setSlideNumber(slideNumber + 1);
      sliderRef.current.style.transform = `translateX(${distance - 210}px)`;
    }
  };

  return (
    <div className="slider">
      <div className="slider_container" ref={sliderRef}>
        <SliderItems />
      </div>
      <button
        className="slider_arrow arrow_prev"
        onClick={() => hadleClick("left")}
      >
        왼쪽
      </button>
      <button
        className="slider_arrow arrow_next"
        onClick={() => hadleClick("right")}
      >
        오른쪽
      </button>
    </div>
  );
};

export default Slider;
