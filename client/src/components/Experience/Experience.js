import React, { useState, useEffect } from "react";
import "./Experience.scss";
import EducationCard from "../cards/EducationCard/EducationCard";
import axios from "axios";
const Experience = () => {
  const [experiences, setExperience] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/getExperience`).then((res) => {
      setExperience(res.data);
    });
  }, []);
  return (
    <>
      <h1 className="title">My Experience</h1>
      <div className="experiences">
        {experiences.map((experience) => {
          return <EducationCard education={experience} key={experience._id} />;
        })}
      </div>
    </>
  );
};

export default Experience;
