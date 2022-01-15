import React, { useState, useEffect } from "react";
// import SliderItems from "./sliderItems/SliderItems";
import "./slider.scss";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const Slider = (props) => {
  const { children, show } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };
  return (
    <div className="slider_container">
      <div className="slider_wrapper">
        <button className="slide_button prev_button" onClick={prev}>
          <GrFormPrevious />
        </button>
        <div className="slider_content_wrapper">
          <div
            className="slider_content"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </div>
        </div>
        <button className="slide_button next_button" onClick={next}>
          <GrFormNext />
        </button>
      </div>
    </div>
  );
};

export default Slider;
