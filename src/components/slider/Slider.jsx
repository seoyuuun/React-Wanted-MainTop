import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { sliderData } from "./sliderData";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "../../css/slider.scss";
import styled from "styled-components";

const Slider = (props) => {
  const { children, show, infiniteLoop } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth);
  const [length, setLength] = useState(sliderData.length);
  const [isRepeating, setIsRepeating] = useState(
    infiniteLoop && sliderData.length > show
  );
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const sliderRef = useRef();

  useEffect(() => {
    setLength(sliderData.length);
    setIsRepeating(infiniteLoop && sliderData.length > show);
  }, [children, infiniteLoop, show]);

  useEffect(() => {
    if (isRepeating) {
      if (currentIndex === show || currentIndex === length) {
        setTransitionEnabled(true);
      }
    }
  }, [currentIndex, isRepeating, show, length]);

  useEffect(() => {
    if (isRepeating) {
      if (currentIndex === show || currentIndex === length) {
        setTransitionEnabled(true);
      }
    }
  }, [currentIndex, isRepeating, show, length]);

  const middle = useMemo(() => {
    if (sliderData.lenght % 2 === 0) {
      return Math.floor(sliderData.lenght / 2) - 1;
    }
    return Math.floor(sliderData.lenght / 2);
  }, []);

  const prev = () => {
    if (isRepeating || currentIndex >= 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const next = () => {
    if (isRepeating || currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (currentIndex === 0) {
        setTransitionEnabled(false);
        setCurrentIndex(length);
      } else if (currentIndex === length + show) {
        setTransitionEnabled(false);
        setCurrentIndex(show);
      }
    }
  };

  const renderExtraPrev = () => {
    let output = [];
    for (let index = 0; index < show; index++) {
      output.push(children[length - 1 - index]);
    }
    output.reverse();
    return output;
  };

  const renderExtraNext = () => {
    let output = [];
    for (let index = 0; index < show; index++) {
      output.push(children[index]);
    }
    return output;
  };

  const CarouselOpacityBlock = styled.div`
    z-index: 100;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    left: 6px;
    top: 0;
  `;

  return (
    <div className="slider_container">
      <div
        className="slider_wrapper"
        ref={sliderRef}
        style={{ transition: `translateX(-${middle * 100}%)` }}
      >
        <button className="slide_button prev_button" onClick={prev}>
          <GrFormPrevious />
        </button>
        <div className="slider_content_wrapper">
          <div
            className="slider_content"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: !transitionEnabled ? "none" : undefined,
            }}
            onTransitionEnd={() => handleTransitionEnd()}
          >
            {length > show && isRepeating && renderExtraPrev()}
            {children}
            {length > show && isRepeating && renderExtraNext()}
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
