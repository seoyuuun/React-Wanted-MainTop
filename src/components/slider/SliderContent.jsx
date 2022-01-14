import styled from "styled-components";

const SliderContent = styled.div`
  transform: translateX(-${(props) => props.translate}px);
  transition: transform ease-out ${(props) => props.transition}s;
  width: ${(props) => props.width}px;
  display: flex;
  margin: 50px 0;
  position: relative;
`;

export default SliderContent;
