import React, { useRef } from "react";
import "./sliderItems.scss";

const SliderItems = () => {
  return (
    <div className="sliderItems">
      <ul className="sliderItem_container">
        <li className="sliderItem_wrapper">
          <img
            src="https://static.wanted.co.kr/images/banners/1452/be4ec643.jpg"
            alt="Git? GitHub?"
          />
          <div className="banner_info">
            <h2>h2</h2>
            <h3>h3</h3>
            <hr className="divider" />
            <a href="/" className="info_move_button">
              <span>바로가기</span>
              <span>화살표</span>
            </a>
          </div>
        </li>
        <li className="sliderItem_wrapper">
          <img
            src="https://static.wanted.co.kr/images/banners/1434/fdbbcb06.jpg"
            alt="요즘 MD가 일하는 방법"
          />
          <div className="banner_info">
            <h2>h2</h2>
            <h3>h3</h3>
            <hr className="divider" />
            <a href="/" className="info_move_button">
              <span className="button_label">바로가기</span>
              <span className="button_icon">화살표</span>
            </a>
          </div>
        </li>
        <li className="sliderItem_wrapper">
          <img
            src="https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg"
            alt="해, 커리어 EP 02 공개"
          />
          <div className="banner_info">
            <h2>h2</h2>
            <h3>h3</h3>
            <hr className="divider" />
            <a href="/" className="info_move_button">
              <span className="button_label">바로가기</span>
              <span className="button_icon">화살표</span>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SliderItems;
