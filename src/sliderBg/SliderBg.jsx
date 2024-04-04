import React from "react";
// import sliderBg from "../assets/all-images/drive.jpg";
import "../sliderBg/SliderBg.css";

const SliderBg = ({ title }) => {
  return (
    <div className="slider_bg">
      <h1 className="text-center text-2xl text-white font-bold">{title}</h1>
    </div>
  );
};

export default SliderBg;
