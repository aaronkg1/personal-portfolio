import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { HashLink } from "react-router-hash-link";
import "../styles/Nav.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className={showMenu ? "mobile-nav" : "mobile-nav hidden"}>
      <ul className="nav-links">
        <li className="nav-item">
          <HashLink to="#welcome-message" smooth>
            Home
          </HashLink>
        </li>
        <li className="nav-item">
          <HashLink to="#about" smooth>
            About
          </HashLink>
        </li>
        <li className="nav-item">
          <HashLink to="#projects" smooth>
            Projects
          </HashLink>
        </li>
        <li className="nav-item">
          <a
            href="https://github.com/aaronkg1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="nav-icon" />
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://www.linkedin.com/in/aaron-kenyon-gewirtz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="nav-icon" />
          </a>
        </li>
        <li className="nav-item">
          <a href="mailto:aaronkg1@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        icon={faBars}
        className="show-menu"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Nav;
