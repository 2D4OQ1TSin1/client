import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hero_image.png";
import hand_icon from "../Assets/electricity.svg";
import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>WE GOT IT ALL</h2>
        <div>
          <div className="hero-hand-icon">
            <p>cpu</p>
            <img src={hand_icon} alt="" width={100} />
          </div>
          <p>memory</p>
          <p>graphic cards</p>
        </div>
        <div className="hero-latest-btn">
          <div>View Offers</div>
          <img src={arrow_icon} alt="" width={50} />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
