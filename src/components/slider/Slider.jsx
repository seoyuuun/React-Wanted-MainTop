import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  // useCallback,
} from "react";
import "../../css/slider.scss";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import styled from "styled-components";

const Slider = ({ children, show, infiniteLoop }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [sliderContents, setSliderContents] = useState([]);
  // const [browserWidth, setBrowserWidth] = useState(window.innerWidth);
  const [length, setLength] = useState(children.length);
  const sliderRef = useRef();

  const middle = useMemo(() => {
    if (children.lenght % 2 === 0) {
      return Math.floor(children.lenght / 2) - 1;
    }
    return Math.floor(children.lenght / 2);
  }, [children]);

  // const initList = useCallback(() => {
  //   const sliderList = [...children];
  //   for (let i = 0; i < middle; i++) {
  //     const data = sliderList.pop();
  //     data && sliderList.unshift(data);
  //   }
  //   setSliderContents(sliderList);
  // }, [middle, children]);

  const [isRepeating, setIsRepeating] = useState(
    infiniteLoop && children.length > show
  );
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    setLength(children.length);
    setIsRepeating(infiniteLoop && children.length > show);
  }, [children, infiniteLoop, show]);

  useEffect(() => {
    if (isRepeating) {
      if (currentIndex === show || currentIndex === length) {
        setTransitionEnabled(true);
      }
    }
  }, [currentIndex, isRepeating, show, length]);

  const prev = () => {
    if (isRepeating || currentIndex > 0) {
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

  const sliderWrapper = styled.div`
    flex-direction: column;
    width: 100%;
    height: 300px;
  `;

  return (
    <sliderWrapper ref={sliderRef}>
      <div className="slider_wrapper">
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
    </sliderWrapper>
  );
};

export default Slider;
