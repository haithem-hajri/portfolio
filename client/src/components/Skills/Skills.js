import React from "react";
import "./Skills.scss";
import ChartProgress from "../cards/SkillsCard/ChartProgress";
import SkillsCarousel from "./SkillsCarousel";
import { fetchSkills } from "../../actions/actions";
import { useQuery } from "@tanstack/react-query";
import SkillsSkeleton from "../skeletons/SkillsSkeleton";
const Skills = () => {
  const {
    isError,
    isLoading,
    isSuccess,
    data: skills,
    error,
  } = useQuery(["skills"], fetchSkills, { staleTime: 60000 });
  if (isLoading) {
    return (
      <div>
        <SkillsCarousel />
        <div className="container-skills" id="skills">
          <h1 className="title-skills">My SKILLS</h1>
          <SkillsSkeleton />
        </div>
      </div>
    );
  }
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
