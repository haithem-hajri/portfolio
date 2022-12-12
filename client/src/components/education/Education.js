import React from "react";
import "./Education.scss";
import EducationCard from "../cards/EducationCard/EducationCard";
import { useQuery } from "@tanstack/react-query";
import Experience from "../Experience/Experience";
import { fetchEducation } from "../../actions/actions";
import CardSkeleton from "../skeletons/CardSkeleton";
const Education = () => {
  const { isError, isLoading, isSuccess, data, error } = useQuery(
    ["education"],
    fetchEducation,
    { staleTime: 60000 }
  );
  if (isLoading || isError) {
    return (
      <div className="education" id="education">
        <div className="container-education">
          <h1 className="title">My Educations</h1>
          <div className="card-skeleton">
            <CardSkeleton />
            <CardSkeleton />
          </div>
          <Experience />
        </div>
      </div>
    );
  }
  return (
    <div className="education" id="education">
      <div className="container-education">
        <h1 className="title">My Educations</h1>
        <div className="educations">
          {data.map((education) => {
            return <EducationCard education={education} key={education._id} />;
          })}
        </div>
        <Experience />
      </div>
    </div>
  );
};

export default Education;
