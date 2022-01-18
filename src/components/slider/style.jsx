import styled from "styled-components";

export const Slide = styled.div`
  display: block;
  position: relative;
  width: 100%;
  overflow: hidden-X;
`;

export const SlideContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: relative;
  user-select: none;
  transition: all 700ms ease;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const SliderContentWrapper = styled.div`
  display: inline-block;
  position: relative;
  overflow: hidden;
  margin: 0 12px;
  border-radius: 4px;
  @media (min-width: 1199px) {
    min-width: 1060px;
  }
  @media (max-width: 1198px) {
    transform: translateX(48%);
    min-width: 90%;
  }
`;

export const SliderImage = styled.img`
  position: relative;
  border-radius: 4px;
  cursor: pointer;
  object-fit: cover;
  @media (min-width: 1199px) {
    min-width: 1060px;
  }
  @media (max-width: 1198px) {
    min-width: calc(100vw - 100px);
    height: 183px;
  }
`;

export const InfoBox = styled.div`
  position: absolute;
  width: 330px;
  height: 146px;
  bottom: 30px;
  border-radius: 4px;
  background-color: #fff;
  text-align: left;
  left: 24px;

  @media (max-width: 1198px) {
    text-align: center;
    width: 90%;
    top: 100px;
    left: 5%;
  }

  h2 {
    margin: 20px 20px 0;
    line-height: 1.5;
    font-size: 20px;

    @media (max-width: 1198px) {
      margin-top: 20px;
      font-size: 18px;
      line-height: 1;
      font-weight: 700;
      color: #333;
      width: "auto";
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  h3 {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin: 5px 20px 0;
    height: 44px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.64;
    color: #333;

    @media (max-width: 1198px) {
      margin-top: 6px;
      font-size: 13px;
      font-weight: 500;
      line-height: 1.15;
      color: #666;
      width: "auto";
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  hr {
    height: 1px;
    margin: 0;
    border: none;
    flex-shrink: 0;
    background-color: #ececec;
    @media (max-width: 1198px) {
      display: none;
    }
  }

  .slider_link {
    display: block;
    text-align: left;
    padding: 8px 6px;
    margin: 3px 0 0 12px;
    height: 40px;
    line-height: 25px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    color: #36f;
    @media (max-width: 1198px) {
      text-align: center;
    }
  }
`;
