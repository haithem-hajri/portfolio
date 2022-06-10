import React, { useState, useEffect } from "react";
import "./Skills.scss";
import ChartProgress from "../cards/SkillsCard/ChartProgress";
import SkillsCarousel from "./SkillsCarousel";
import axios from "axios";
import { API_URL } from "../../env";
const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/getSkills`).then((res) => {
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
