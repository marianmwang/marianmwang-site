import React from "react";

import ProjectCard from "../components/ProjectCard.jsx";
import projectsInfo from "../resources/projects/projectsInfo.json";
import "../pages/styles.css";

const Projects = () => {
  return (
    <div class="container">
      <h2>
        projects<br></br>—
      </h2>
      <ProjectCard {...projectsInfo["utccf-website"]} />
      <ProjectCard {...projectsInfo["flight-planner"]} />
    </div>
  );
};

export default Projects;
