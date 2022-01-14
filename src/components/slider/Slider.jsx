import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import "./slider.scss";
import SliderContent from "./SliderContent";
import Slide from "./Slide";
// import Arrow from "./Arrow";

const Slider = (props) => {
  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition, activeIndex } = state;

  const nextSlide = () => {
    if (activeIndex === props.slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth(),
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (props.slides.length - 1) * getWidth(),
        activeIndex: props.slides.length - 1,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth(),
    });
  };

  return (
    <StyledSlider>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * props.slides.length}
      >
        {props.slides.map((slide, i) => (
          <Slide key={slide + i} content={slide} />
        ))}
      </SliderContent>
      <button
        className="slider_arrow arrow_prev"
        direction="left"
        handleClick={prevSlide}
      >
        왼쪽
      </button>
      <button
        className="slider_arrow arrow_next"
        direction="right"
        handleClick={nextSlide}
      >
        오른쪽
      </button>
      {/* <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} /> */}
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`;

export default Slider;
