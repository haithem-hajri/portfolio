import React, { useState, useEffect } from "react";
import "./Skills.scss";
import ChartProgress from "../cards/SkillsCard/ChartProgress";
import SkillsCarousel from "./SkillsCarousel";
import axios from "axios";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/getSkills`).then((res) => {
      setSkills(res.data);
    });
  }, []);

  return (
    <div>
      <SkillsCarousel />
      <div className="container-skills" id="skills">
        <h1 className="title-skills">My SKILLS</h1>
        {skills.map((skill) => {
          return (
            <ChartProgress
              progress={skill.percentage}
              title={skill.name}
              key={skill._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
