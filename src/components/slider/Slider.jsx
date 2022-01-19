import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  useMemo,
} from "react";
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

const Slider = ({ sliderData, setSlideTime }) => {
  const [items, setItems] = useState([]);
  const [length, setLength] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(5);
  const [transitionEnabled, setTransitionEnabled] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(true);
  const sliderRef = useRef();

  // useInterval(
  //   () => {
  //     onMove("next");
  //   },
  //   isMouseOver ? setSlideTime : null
  // );

  const onMouseOver = () => {
    setIsMouseOver(false);
  };

  const onMouseOut = () => {
    setIsMouseOver(true);
  };

  const middle = useMemo(() => {
    if (sliderData.lenght % 2 === 0) {
      return Math.floor(sliderData.lenght / 2) - 1;
    }
    return Math.floor(sliderData.lenght / 2);
  }, [sliderData]);

  const initList = useCallback(() => {
    const itemList = [...sliderData];
    for (let i = 0; i < middle; i++) {
      const data = itemList.pop();
      data && itemList.unshift(data);
    }
    setItems(itemList);
  }, [middle, sliderData]);

  const initTrnasform = useCallback(() => {
    const { current } = sliderRef;

    if (current) {
      current.style.transition = "none";
      current.style.transform = `translateX(-${middle * 100}%)`;
    }
  }, [middle]);

  const RepeatList = useCallback(
    (type) => {
      const itemList = [...sliderData];
      if (type === "next") {
        const data = itemList.pop();
        data && itemList.unshifth(data);
      } else if (type === "prev") {
        const data = itemList.shift();
        data && itemList.push(data);
      }

      setItems(itemList);
      setLength(itemList.length);
      setIsMoving(false);
    },
    [sliderData]
  );

  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      setTransitionEnabled(false);
      setCurrentIndex(length);
    } else if (currentIndex === length) {
      setTransitionEnabled(false);
      setCurrentIndex(0);
    }
  };

  const moveTransform = useCallback(
    (type) => {
      if (type === "next") {
        if (!transitionEnabled) {
          setTransitionEnabled(true);
        }
        setCurrentIndex((prevState) => {
          return prevState + 1;
        });
      } else if (type === "prev") {
        if (!transitionEnabled) {
          setTransitionEnabled(true);
        }
        setCurrentIndex((prevState) => {
          return prevState - 1;
        });
      }
    },
    [transitionEnabled]
  );

  const onMove = useCallback(
    (type) => {
      moveTransform(type);
      setIsMoving(true);

      if (!isMoving) {
        setTimeout(() => {
          RepeatList(type);
          initTrnasform();
        }, setSlideTime);
      }
    },
    [isMoving, setSlideTime, RepeatList, initTrnasform, moveTransform]
  );

  useEffect(() => {
    initList();
  }, [initList]);

  return (
    <Slide>
      <SlideContainer
        className="slider_container"
        ref={sliderRef}
        translateX={middle * 100}
        setSlideTime={setSlideTime}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onTransitionEnd={handleTransitionEnd}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {sliderData.map((item, index) => {
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
