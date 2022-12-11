import React from "react";
import "./Hero.scss";
import { Fade } from "react-awesome-reveal";
const Hero = () => {
  return (
    <div className="hero" id="about">
      <div className="hero-container">
      <Fade cascade className="hero-text">
        <h2 className="hero-title">Hello , I'M</h2>
        <h1 className="hero-name">HAITHEM HAJRI</h1>
        <h2 className="hero-title">WEB DEVELOPER</h2>
      </Fade>
      </div>
      
    </div>
  );
};

export default Hero;
