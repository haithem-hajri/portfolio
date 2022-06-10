import React from "react";
import "./ProjectCard.scss";

const ProjectCard = (props) => {
  const { project } = props;

  return (
    <div className="card-inner">
      <div className="card">
        <img className="img-card" src={project.image} alt="project" />
        <div className="card-content">
          <div className="card-item">
            <h2 className="card-title">{project.name}</h2>
            <small className="project-tools">{project.tools}</small>
          </div>

          <div className="card-item flexible">
            <small>{project.description}</small>
          </div>
        </div>
        <div className="card-footer">
          <a href={project.github} target="_blank" rel="noreferrer">
            <button className="btn">
              <small>GITHUB</small>
            </button>
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer">
            <button className="btn">
              <small>DEMO </small>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
