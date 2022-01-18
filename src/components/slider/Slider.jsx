import React, { useState, useEffect, useRef, useCallback } from "react";
import { sliderData } from "./sliderData";
import useInterval from "../../hooks/useInterval";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "../../css/slider.scss";
import styled from "styled-components";

const Slider = (props) => {
  const { children, infiniteLoop, setSlideTime = 4000 } = props;

  const Loop = 3;
  const SliderMaxLenght = sliderData.length - Loop;
  const SliderTotal = SliderMaxLenght * Loop;

  const [currentIndex, setCurrentIndex] = useState(1);
  const [length, setLength] = useState(sliderData.length);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isRepeating, setIsRepeating] = useState(
    infiniteLoop && sliderData.length > Loop
  );

  const sliderRef = useRef();

  useInterval(() => {
    onMoveSlider("next");
  }, setSlideTime);

  useEffect(() => {
    setLength(sliderData.length);
    setIsRepeating(infiniteLoop && sliderData.length > Loop);
  }, [infiniteLoop]);

  useEffect(() => {
    if (isRepeating) {
      if (currentIndex === Loop || currentIndex === length) {
        setTransitionEnabled(true);
      }
    }
  }, [currentIndex, isRepeating, length]);

  useEffect(() => {
    if (isRepeating) {
      if (currentIndex === Loop || currentIndex === length) {
        setTransitionEnabled(true);
      }
    }
  }, [currentIndex, isRepeating, length]);

  const onMoveSlider = (direction) => {
    if (direction === "prev") {
      if (currentIndex === 0) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    } else if (direction === "next") {
      if (currentIndex >= SliderTotal) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  const renderExtraPrev = () => {
    let output = [];
    if (currentIndex === 0) {
      for (let index = 0; index < Loop; index++) {
        output.push(children[index]);
      }
      return output;
    } else {
      for (let index = 0; index < Loop; index++) {
        output.push(children[length - 1 - index]);
      }
      output.reverse();
      return output;
    }
  };

  const renderExtraNext = () => {
    let output = [];
    for (let index = 0; index < Loop; index++) {
      output.push(children[index]);
    }
    return output;
  };

  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (currentIndex === 0) {
        // setTransitionEnabled(false);
        setCurrentIndex(length);
      } else if (currentIndex === length + Loop) {
        setTransitionEnabled(false);
        setCurrentIndex(Loop);
      }
    }
  };

  return (
    <div className="slider_container">
      <div className="slider_wrapper" ref={sliderRef}>
        <div className="slider_content_wrapper">
          <div
            className="slider_content"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: !transitionEnabled ? "none" : undefined,
            }}
            onTransitionEnd={() => handleTransitionEnd()}
          >
            {length > Loop && isRepeating && renderExtraPrev()}
            {children}
            {length > Loop && isRepeating && renderExtraNext()}
          </div>
        </div>
        <button
          className="slide_button prev_button"
          onClick={() => onMoveSlider("prev")}
        >
          <GrFormPrevious />
        </button>
        <button
          className="slide_button next_button"
          onClick={() => onMoveSlider("next")}
        >
          <GrFormNext />
        </button>
      </div>
    </div>
  );
};

export default Slider;
