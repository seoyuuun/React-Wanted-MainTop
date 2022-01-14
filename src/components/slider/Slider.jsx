import React from "react";
import SliderContent from "./SliderContent";
import "./slider.scss";

const Slider = () => {
  return (
    <div
      className="slider"
      style={{ width: "100%", height: "100%", background: "#333" }}
    >
      <SliderContent />
    </div>
  );
};

export default Slider;
