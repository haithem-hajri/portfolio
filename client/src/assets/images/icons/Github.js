import React from "react";

const GithubLogo = () => {
  return (
    <svg
      className="svg-icon"
      height={"50px"}
      width={"50px"}
      style={{
        verticalAlign: " middle",
        fill: "white",
        overflow: "hidden",
        borderRadius:"5px"
      }}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0v1024h1024V0H0z m585.6 716.8s-35.2 3.2-73.6 3.2-73.6-3.2-73.6-3.2C348.8 707.2 256 672 256 518.4c0-44.8 16-80 41.6-108.8-3.2-9.6-19.2-51.2 3.2-105.6 0 0 35.2-9.6 108.8 41.6 32-9.6 67.2-12.8 99.2-12.8 35.2 0 67.2 3.2 99.2 12.8 76.8-51.2 108.8-41.6 108.8-41.6 22.4 54.4 9.6 96 3.2 105.6 25.6 28.8 41.6 64 41.6 108.8 6.4 153.6-86.4 188.8-176 198.4z"
        fill="white"
      />
    </svg>
  );
};

export default GithubLogo;
