import React from "react";
import "./projectCard.css";

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

const ProjectCard = ({ name, description, links, image, altText }) => {
  return (
    <div>
      <header className="project-title">{name}</header>
      <div className="project-container">
        <div className="centered">
          <img
            className="project-image"
            src={require(`../resources/images/${image}`)} alt={altText}
          ></img>
        </div>
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
