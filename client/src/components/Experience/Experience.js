import React from "react";
import "./Experience.scss";
import EducationCard from "../cards/EducationCard/EducationCard";
import { fetchExperience } from "../../actions/actions";
import { useQuery } from "@tanstack/react-query";
import CardSkeleton from "../skeletons/CardSkeleton";
const Experience = () => {
  const { isError, isLoading, isSuccess, data, error } = useQuery(
    ["experience"],
    fetchExperience,
    { staleTime: 60000 }
  );
  if (isLoading || isError) {
    return (
      <>
        <h1 className="title">My Experience</h1>
        <CardSkeleton/>
      </>
    );
  }

  return (
    <>
      <h1 className="title">My Experience</h1>
      <div className="experiences">
        {data.map((experience) => {
          return <EducationCard education={experience} key={experience._id} />;
        })}
      </div>
    </>
  );
};

export default Experience;
