import React, { useState, useRef, useMemo } from "react";
import useInterval from "../../hooks/useInterval";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import {
  Slide,
  SlideContainer,
  SliderContentWrapper,
  SliderImage,
  InfoBox,
} from "./style";
import "../../css/slider.scss";

const Slider = ({ sliderData, infiniteLoop, setSlideTime }) => {
  const Loop = 2;
  const SliderMaxLenght = sliderData.length - Loop;
  const SliderTotal = SliderMaxLenght * Loop;
  const itemList = [...sliderData, ...sliderData];

  const [currentIndex, setCurrentIndex] = useState(5);
  const [isMouseOver, setIsMouseOver] = useState(true);
  const sliderRef = useRef();

  useInterval(
    () => {
      onMove("next");
    },
    isMouseOver ? setSlideTime : null
  );

  const onMouseOver = () => {
    setIsMouseOver(false);
  };

  const onMouseOut = () => {
    setIsMouseOver(true);
  };

  const onMove = (direction) => {
    if (direction === "prev") {
      if (currentIndex === 0) {
        setCurrentIndex(5);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    } else if (direction === "next") {
      if (currentIndex > SliderTotal + Loop) {
        setCurrentIndex(5);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  return (
    <Slide>
      <SlideContainer
        className="slider_container"
        ref={sliderRef}
        setSlideTime={setSlideTime}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {itemList.map((item, index) => {
          return (
            <SliderContentWrapper
              className={
                currentIndex === index ? "slide_active" : "slide_stayed"
              }
              key={item.url + index}
            >
              <a href={item.link}>
                <SliderImage
                  src={item.url}
                  alt={item.title}
                  className="slider_image"
                />
              </a>
              <InfoBox
                className={
                  currentIndex === index ? "slide_active" : "slide_stayed"
                }
              >
                <h2>{item.title}</h2>
                <h3>{item.description}</h3>
                <hr />
                <a className="slider_link" href={item.link}>
                  바로가기 &#62;
                </a>
              </InfoBox>
            </SliderContentWrapper>
          );
        })}
      </SlideContainer>
      <button
        className="slide_button prev_button"
        onClick={() => onMove("prev")}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        <GrFormPrevious />
      </button>
      <button
        className="slide_button next_button"
        onClick={() => onMove("next")}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        <GrFormNext />
      </button>
    </Slide>
  );
};

export default Slider;
