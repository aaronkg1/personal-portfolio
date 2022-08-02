import React from "react";
import "../styles/ProjectCard.css";
const ProjectCard = ({ project }) => {
  const { title, description, url, liveLink, repository } = project;

  return (
    <li key={`${title}ID`} className="project-card" data-testid="ProjectCard-1">
      <div className="image-wrapper">
        <img
          src={url}
          alt={title}
          className="hover-zoom"
          data-testid="card-image"
        />
      </div>
      <div className="info-container">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="button-wrapper">
          <button className="project-button">
            <a href={liveLink} alt={title}>
              Live App
            </a>
          </button>
          <button className="project-button">
            <a href={repository} alt={`${title} repository`}>
              Repository
            </a>
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
