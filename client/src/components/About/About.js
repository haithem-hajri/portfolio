import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAbout } from "../../actions/actions";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./About.scss";

const About = () => {
  const {
    isLoading: isLoadingAbout,
    data: aboutData,
    isError,
  } = useQuery(["about"], fetchAbout, { staleTime: 120000 });

  if (isLoadingAbout || isError) {
    return (
      <div className="skeleton">
        <Skeleton height={30} width={140} />
        <Skeleton circle width={150} height={150} />
        <Skeleton width={300} height={30} count={3} />
      </div>
    );
  }
  return (
    <div className="about">
      <div className="about-container">
        {aboutData && (
          <div className="box-about box-down blue">
            <div className="about-content">
              <h1>{aboutData.name}</h1>
              <img
                loading="lazy"
                className="avatar"
                src={aboutData.img}
                alt="me"
              />
              <div
                className="about-message"
                dangerouslySetInnerHTML={{ __html: aboutData.message }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
