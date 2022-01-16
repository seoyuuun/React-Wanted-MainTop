import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./carousel.scss";
import styled from "styled-components";

const Carousel = ({ carouselItems, sliderTime }) => {
  const [totalWidth, setTotalWidth] = useState(window.innerWidth);
  const [currentSlider, setCurrentSlider] = useState(0);
  const [carouselContents, setCarouselContents] = useState([]);
  const [isMoving, setIsMoving] = useState(false);

  const slideRef = useRef(null);

  const carouselFirst = carouselItems[0];
  const carouselLast = carouselItems[carouselItems.length - 1];

  const carouselWidth = () => {
    if (totalWidth > 1200) {
      return 1072;
    } else {
      return totalWidth * 0.9;
    }
  };

  const middle = useMemo(() => {
    if (carouselItems.lenght % 2 === 0) {
      return Math.floor(carouselItems.lenght / 2) - 1;
    }
    return Math.floor(carouselItems.lenght / 2);
  }, [carouselItems]);

  const initList = useCallback(() => {
    const carouselContentList = [...carouselItems];
    for (let i = 0; i < middle; i++) {
      const data = carouselContentList.pop();
      data && carouselContentList.unshift(data);
    }
    setCarouselContents(carouselContentList);
  }, [middle, carouselItems]);

  const initTrnasform = useCallback(() => {
    const { current } = slideRef;

    if (current) {
      current.style.transition = "none";
      current.style.transform = `translateX(-${middle * 100}%)`;
    }
  }, [middle]);

  const moveTransform = useCallback(
    (type) => {
      const { current } = slideRef;

      if (current) {
        current.style.transition = `transform ${sliderTime}ms`;

        if (type === "next") {
          current.style.transform = `translateX(-${(middle + 1) * 100}%)`;
        }
        if (type === "prev") {
          current.style.transform = `translateX(-${(middle - 1) * 100}%)`;
        }
      }
    },
    [middle, sliderTime]
  );

  const changeList = useCallback(
    (type) => {
      const carouselContentList = [...carouselContents];

      if (type === "next") {
        const data = carouselContentList.shift();
        data && carouselContentList.push(data);
      } else {
        const data = carouselContentList.pop();
        data && carouselContentList.unshift(data);
      }
      setCarouselContents(carouselContentList);
      setIsMoving(false);
    },
    [carouselContents]
  );

  const onMove = useCallback(
    (type) => {
      moveTransform(type);
      setIsMoving(true);

      if (!isMoving) {
        setTimeout(() => {
          changeList(type);
          initTrnasform();
        }, sliderTime);
      }
    },
    [isMoving, sliderTime, changeList, initTrnasform, moveTransform]
  );

  useEffect(() => {
    initList();
  }, []);

  const CarouselContainer = styled.div`
    width: 100%;
    display: flex;
    transition: transform ${(props) => props.sliderTime}ms;
    transform: translateX(${(props) => props.translateX * -1}%);
    img {
      width: 100%;
    }
  `;

  const HandleCarouselOpacity = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    width: ${carouselWidth() - 12}px;
    height: ${totalWidth > 1200 ? 300 : 183}px;
    left: 6px;
    top: 0;
    z-index: 199;
  `;

  return (
    <div>
      <div className="carousel_wrapper">
        <CarouselContainer
          ref={slideRef}
          translateX={middle * 100}
          sliderTime={sliderTime}
        >
          {carouselItems.map((item, index) => {
            return (
              <div
                className={
                  currentSlider === index + 1
                    ? "carousel_slide_active"
                    : "carousel_slide"
                }
                data-index={index}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="carousel_image"
                />
                {currentSlider === index + 1 ? (
                  <div className="carousel_slide_information">
                    <h2>{item.title}</h2>
                    <h3>{item.description}</h3>
                    <hr />
                    <a className="carousel_link" href={item.link}>
                      바로가기 &#62;
                    </a>
                  </div>
                ) : null}
                {currentSlider === index + 1 ? null : <HandleCarouselOpacity />}
              </div>
            );
          })}
        </CarouselContainer>
        <button className="prev_button" onClick={() => onMove("prev")}>
          &lt;
        </button>
        <button className="next_button" onClick={() => onMove("next")}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
