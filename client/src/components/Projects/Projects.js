import React from "react";
import "./Projects.scss";
import ProjectCard from "../cards/ProjectCard/ProjectCard";
import Paginate from "../../helpers/pagination/Paginate";
import axios from "axios";
import { API_URL } from "../../env";
import { SpinnerDiamond } from "spinners-react";
const Projects = () => {
  const [projects, setProjects] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${API_URL}/getProjects?page=${page}`)
      .then((res) => {
        setProjects(res.data.docs);
        setTotalPages(res.data.totalPages);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(true);
      });
  }, [page]);
  return (
    <div id="projects" className="container-projects">
      <h1 className="title-projects">My Projects</h1>
      <div className="projects">
        <div className="outer">
          {isLoading ? (
            <SpinnerDiamond
              size={200}
              style={{ marginTop: "40px", marginBottom: "40px" }}
            />
          ) : (
            projects &&
            projects.map((project) => {
              return <ProjectCard project={project} key={project._id} />;
            })
          )}
        </div>
      </div>
      {!isLoading && totalPages && totalPages > 1 && (
        <Paginate
          totalPages={totalPages && totalPages}
          currentPage={page}
          setCurrentPage={setPage}
        />
      )}
    </div>
  );
};

export default Projects;
