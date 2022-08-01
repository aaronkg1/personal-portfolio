import React from "react";
import "../styles/ProjectCard.css";
const ProjectCard = (props) => {
  const { title, description, url, position, liveLink, repository } = props;

  return (
    <li key={`${title}ID`} className="project-card">
      {position === "left" ? (
        <div className="image-wrapper">
          <img src={url} alt={title} className="hover-zoom" />
        </div>
      ) : null}
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
      {position === "right" ? (
        <div className="image-wrapper">
          <img src={url} alt={title} className="hover-zoom" />
        </div>
      ) : null}
    </li>
  );
};

export default ProjectCard;
