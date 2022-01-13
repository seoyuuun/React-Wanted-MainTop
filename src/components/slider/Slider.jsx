import React, { useState, useRef, useEffect } from "react";
import "./slider.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SliderItem from "./slidItem/SliderItems";

const Slider = () => {
  const [slideNumber, setSlideNumber] = useState(0);

  const sliderRef = useRef();

  const hadleClick = (direction) => {
    let distance = sliderRef.current.getBoundingClientRect().x - 12;
    if (direction === "left") {
      setSlideNumber(slideNumber - 1);
      sliderRef.current.style.transform = `translateX(${1060 + distance}px)`;
    }
    if (direction === "right") {
      setSlideNumber(slideNumber + 1);
      sliderRef.current.style.transform = `translateX(${distance - 1060}px)`;
    }
  };

  return (
    <div className="slider">
      <div className="slider_wrapper">
        <div className="slider_preArrow">
          <IoIosArrowBack
            className="slider_arrow  left"
            onClick={() => hadleClick("left")}
          />
        </div>

        <div className="slider_container" ref={sliderRef}>
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
        </div>
        <div className="slider_nextArrow">
          <IoIosArrowForward
            className="slider_arrow  right"
            onClick={() => hadleClick("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
