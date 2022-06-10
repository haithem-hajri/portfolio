import React from "react";
import "./EducationCard.scss";
import { Fade } from "react-awesome-reveal";
const EducationCard = (props) => {
  const { education } = props;

  return (
    <Fade cascade>
      <div className="box box-down blue">
        <h2>{education.name}</h2>
        <p>{education.establishment}</p>
        <img className="img-establishment" src={education.img} alt="edu" />
      </div>
    </Fade>
  );
};

export default EducationCard;
