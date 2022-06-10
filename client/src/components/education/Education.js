import React, { useState, useEffect } from "react";
import "./Education.scss";
import EducationCard from "../cards/EducationCard/EducationCard";
import { Fade, Slide } from "react-awesome-reveal";
import axios from "axios";
import { API_URL } from "../../env";
import Experience from "../Experience/Experience";
const Education = () => {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/getEducations`).then((res) => {
      setEducations(res.data);
    });
  }, []);
  return (
    <div id="education" className="container-education">
      <h1 className="title">My Educations</h1>
      <div className="educations">
        {educations.map((education) => {
          return <EducationCard education={education} key={education._id} />;
        })}
      </div>
      <Experience />
    </div>
  );
};

export default Education;
