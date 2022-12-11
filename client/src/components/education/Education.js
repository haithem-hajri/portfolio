import React, { useState, useEffect } from "react";
import "./Education.scss";
import EducationCard from "../cards/EducationCard/EducationCard";
import axios from "axios";

import Experience from "../Experience/Experience";
const Education = () => {
  const [educations, setEducations] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/getEducations`).then((res) => {
      setEducations(res.data);
    });
  }, []);
  return (
    <div className="education" id="education">
      <div className="container-education">
        <h1 className="title">My Educations</h1>
        <div className="educations">
          {educations.map((education) => {
            return <EducationCard education={education} key={education._id} />;
          })}
        </div>
        <Experience />
      </div>
    </div>
  );
};

export default Education;
