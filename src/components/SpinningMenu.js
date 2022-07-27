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

const Spinner = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <ul className={active ? `spinner-container active` : "spinner-container"}>
      <li className="avatar-picture" onClick={toggleMenu}></li>
      <li className="spinner-item" style={{ "--i": 0 }}>
        <FontAwesomeIcon icon={faHouse} className="menu-icon" />
      </li>
      <li className="spinner-item" style={{ "--i": 1 }}>
        <FontAwesomeIcon icon={faCircleInfo} className="menu-icon" />
      </li>
      <li className="spinner-item" style={{ "--i": 2 }}>
        <FontAwesomeIcon icon={faDiagramProject} className="menu-icon" />
      </li>
      <li className="spinner-item" style={{ "--i": 3 }}>
        <FontAwesomeIcon icon={faLinkedin} className="menu-icon" />
      </li>
      <li className="spinner-item" style={{ "--i": 4 }}>
        <FontAwesomeIcon icon={faGithub} className="menu-icon" />
      </li>
      <li className="spinner-item" style={{ "--i": 5 }}>
        <FontAwesomeIcon icon={faEnvelope} className="menu-icon" />
      </li>
    </ul>
  );
};

export default Spinner;
