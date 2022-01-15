import React from "react";

const Slide = ({ content }) => {
  return (
    <div
      style={{
        height: "300px",
        width: "1060px",
        backgroundImage: `url(${content})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        margin: "25px 10px",
        borderRadius: "4px",
      }}
    ></div>
  );
};

export default Slide;
