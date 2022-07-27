import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCircleInfo,
  faDiagramProject,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import React, { useState } from "react";
import "../styles/Spinner.css";
import { Link } from "react-router-dom";

const Spinner = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <ul className={active ? `spinner-container active` : "spinner-container"}>
      <li className="avatar-picture" onClick={toggleMenu}></li>
      <li className="spinner-item" style={{ "--i": 0 }}>
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} className="menu-icon" />
        </Link>
      </li>
      <li className="spinner-item" style={{ "--i": 1 }}>
        <Link to="/about">
          <FontAwesomeIcon icon={faCircleInfo} className="menu-icon" />
        </Link>
      </li>
      <li className="spinner-item" style={{ "--i": 2 }}>
        <Link to="/projects">
          <FontAwesomeIcon icon={faDiagramProject} className="menu-icon" />
        </Link>
      </li>
      <li className="spinner-item" style={{ "--i": 3 }}>
        <a
          href="https://www.linkedin.com/in/aaron-kenyon-gewirtz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="menu-icon" />
        </a>
      </li>
      <li className="spinner-item" style={{ "--i": 4 }}>
        <a
          href="https://github.com/aaronkg1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="menu-icon" />
        </a>
      </li>
      <li className="spinner-item" style={{ "--i": 5 }}>
        <a href="mailto:aaronkg1@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="menu-icon" />
        </a>
      </li>
    </ul>
  );
};

export default Spinner;
