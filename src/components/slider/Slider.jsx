import "../../css/slider.scss";
import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { sliderData } from "./sliderData";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const Slider = (props) => {
  const { children, show, infiniteLoop } = props;

  // const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const middle = useMemo(() => {
    if (sliderData.lenght % 2 === 0) {
      return Math.floor(sliderData.lenght / 2) - 1;
    }
    return Math.floor(sliderData.lenght / 2);
  }, []);

  // const initList = useCallback(() => {
  //   const sliderDataList = [...sliderData];
  //   for (let i = 0; i < middle; i++) {
  //     const data = sliderDataList.pop();
  //     data && sliderDataList.unshift(data);
  //   }
  //   setItems(sliderDataList);
  // }, [middle, sliderData]);

  // const initTrnasform = useCallback(() => {
  //   const { current } = sliderRef;

  //   if (current) {
  //     current.style.transition = "none";
  //     current.style.transform = `translateX(-${middle * 100}%)`;
  //   }
  // }, [middle]);

  // const moveTransform = useCallback(
  //   (type) => {
  //     const { current } = sliderRef;

  //     if (type === "next") {
  //       current.style.transform = `translateX(-${(middle + 1) * 100}%)`;
  //     }
  //     if (type === "prev") {
  //       current.style.transform = `translateX(-${(middle - 1) * 100}%)`;
  //     }
  //   },
  //   [middle]
  // );

  // const changeList = useCallback(
  //   (type) => {
  //     const sliderDataList = [...sliderData];

  //     if (type === "next") {
  //       const data = sliderDataList.shift();
  //       data && sliderDataList.push(data);
  //     } else {
  //       const data = sliderDataList.pop();
  //       data && sliderDataList.unshift(data);
  //     }
  //     setItems(sliderDataList);
  //     setIsRepeating(false);
  //   },
  //   [items]
  // );

  // const onMove = useCallback(
  //   (type) => {
  //     moveTransform(type);
  //     setIsMoving(true);

  //     if (!isMoving) {
  //       setTimeout(() => {
  //         changeList(type);
  //         initTrnasform();
  //       }, sliderTime);
  //     }
  //   },
  //   [isMoving, sliderTime, changeList, initTrnasform, moveTransform]
  // );

  // useEffect(() => {
  //   initList();
  // }, []);

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
