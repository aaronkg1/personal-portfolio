import React from "react";
import "../styles/Projects.css";
import wheresWally from "../assets/projects/where-is-wally.png";
import battleships from "../assets/projects/battleships.png";
import weather from "../assets/projects/weather.png";
import etchasketch from "../assets/projects/etch-a-sketch.png";
import cvcreator from "../assets/projects/cvproject.png";
import socialmedia from "../assets/projects/social-media-clone.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Social Media Clone",
      description:
        "Social media app based on the Facebook design built with React, Redux and Firebase.",
      url: socialmedia,
      liveLink: "https://aaronkg1.github.io/social-media-clone/",
      repository: "https://github.com/aaronkg1/social-media-clone",
    },
    {
      title: "Weather App",
      description: "Weather App built with vanilla JS.",
      url: weather,
      liveLink: "https://aaronkg1.github.io/weather-app/",
      repository: "https://github.com/aaronkg1/weather-app",
    },
    {
      title: "Where's Wally App",
      description:
        "Where's Wally game with leaderboard built using React and Firebase.",
      url: wheresWally,
      liveLink: "https://aaronkg1.github.io/where-is-wally/",
      repository: "https://github.com/aaronkg1/where-is-wally",
    },
    {
      title: "CV Creator App",
      description: "CV Creator App made with React.",
      url: cvcreator,
      liveLink: "https://aaronkg1.github.io/cv-project/",
      repository: "https://github.com/aaronkg1/cv-project",
    },
    {
      title: "Battleships",
      description: "One player battleships game with smart AI opponent.",
      url: battleships,
      liveLink: "https://aaronkg1.github.io/battleship/",
      repository: "https://github.com/aaronkg1/battleship",
    },
    {
      title: "Etch-a-sketch App",
      description: "Etch-a-sketch app created with vanilla JS.",
      url: etchasketch,
      liveLink: "https://aaronkg1.github.io/etch-a-sketch/",
      repository: "https://github.com/aaronkg1/etch-a-sketch",
    },
  ];
  return (
    <section className="projects-container" id="projects">
      <h1 className="section-title">Projects</h1>
      <ul className="project-grid">
        {projects.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </ul>
    </section>
  );
};

export default Projects;
