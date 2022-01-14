import React from "react";
import "./slider.scss";
import SliderItems from "./slidItem/SliderItems";

const Slider = () => {
  return (
    <div className="slider">
      <SliderItems />
      <button className="slider_arrow arrow_prev"></button>
      <button className="slider_arrow arrow_next"></button>
    </div>
  );
};

export default Slider;
