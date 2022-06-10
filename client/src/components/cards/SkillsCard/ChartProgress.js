import React from "react";
import "./ChartProgress.scss";
const ChartProgress = (props) => {
  const { progress, title } = props;
  return (
    <div className="progressbar-container">
      <div className="progressbar-complete" style={{ width: `${progress}%` }}>
        <div className="progressbar-liquid"></div>
      </div>
      <p className="title-progress">{title}</p>
      <span className="progress">{progress}%</span>
    </div>
  );
};

export default ChartProgress;
