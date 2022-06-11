import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import JavascriptLogo from "../../assets/images/skills-images/JavascriptLogo";
import HtmlLogo from "../../assets/images/skills-images/html";
import CSSLogo from "../../assets/images/skills-images/CSS";
import MongoDB from "../../assets/images/skills-images/MongoDB";
import Laravel from "../../assets/images/skills-images/Laravel";
import TypeScript from "../../assets/images/skills-images/TypeScript";
import Github from "../../assets/images/skills-images/Github";
import Node from "../../assets/images/skills-images/Node";
import ReactLogo from "../../assets/images/skills-images/ReactLogo";
import Sass from "../../assets/images/skills-images/Sass";
import Bootstrap from "../../assets/images/skills-images/Bootstrap";
import Express from "../../assets/images/skills-images/Express";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};
const SkillsCarousel = () => {
  return (
    <div>
      <Carousel
        swipeable={false}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={false}
        customTransition="all .5"
        transitionDuration={2000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        //  deviceType={props.deviceType}
        //  dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        arrows={false}
        
      >
        <HtmlLogo />
        <CSSLogo />
        <JavascriptLogo />
        <TypeScript />
        <ReactLogo />
        <MongoDB />
        <Laravel />
        <Github />
        <Node />
        <Sass />
        <Bootstrap />
        <Express />
      </Carousel>
    </div>
  );
};

export default SkillsCarousel;
