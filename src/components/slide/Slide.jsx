import React from "react";
import "./slide.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const slide = () => {
  return (
    <div className="slide">
      <div className="slide_wrapper">
        <IoIosArrowBack />
        <div className="slide_container"></div>
        <IoIosArrowForward />
      </div>
    </div>
  );
};

export default slide;
