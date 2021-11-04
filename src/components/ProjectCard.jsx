import React from "react";
import './projectCard.css';

const ProjectButton = ({ name, url }) => {
  if (url)
    return (
      <button className="project-button">
        <a href={url} className="project-links">
          {name}
        </a>
      </button>
    );
  else {
    return null;
  }
};

const ProjectCard = ({ name, description, links }) => {
  return (
    <div>
      <header className="project-title">{name}</header>
      <div className="project-container">
        <p className="project-desc">{description}</p>
        <br></br>
        {links.map((link, i) => {
          return <ProjectButton key={i} name={link.name} url={link.url} />;
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
