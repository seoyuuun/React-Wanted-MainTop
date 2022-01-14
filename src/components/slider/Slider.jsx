import React from "react";
import "./slider.scss";
import SliderItems from "./slidItem/SliderItems";

const Slider = () => {
  return (
    <div className="slider">
      <SliderItems />
      <button className="slider_arrow arrow_prev">왼쪽</button>
      <button className="slider_arrow arrow_next">오른쪽</button>
    </div>
  );
};

export default Slider;
