import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCircleInfo,
  faDiagramProject,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React, { useEffect, useState } from "react";
import "../styles/Spinner.css";
import { useDispatch } from "react-redux";
import { setLight, setDark } from "../features/themeSlice";
import { HashLink } from "react-router-hash-link";

const Spinner = () => {
  const [active, setActive] = useState(false);
  const [currentHover, setCurrentHover] = useState("");
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setActive(!active);
  };

  useEffect(() => {}, [currentHover]);

  useEffect(() => {
    active === true ? dispatch(setLight()) : dispatch(setDark());
  }, [active, dispatch]);

  const toggleCurrentHover = (value) => {
    setCurrentHover(value);
  };

  const unsetCurrentHoverValue = () => {
    setCurrentHover("");
  };

  return (
    <nav className="desktop-menu">
      <ul className={active ? `spinner-container active` : "spinner-container"}>
        <li className="spinner-title" onClick={toggleMenu}>
          Menu
        </li>
        <li className="avatar-picture" onClick={toggleMenu}>
          <p className="menu-label">{currentHover}</p>
        </li>
        <li className="spinner-item" style={{ "--i": 0 }}>
          <HashLink
            to="#welcome-message"
            smooth
            onMouseEnter={() => {
              toggleCurrentHover("Home");
            }}
            onMouseLeave={unsetCurrentHoverValue}
          >
            <FontAwesomeIcon icon={faHouse} className="menu-icon" />
          </HashLink>
        </li>
        <li
          className="spinner-item"
          style={{ "--i": 1 }}
          onMouseEnter={() => {
            toggleCurrentHover("About");
          }}
          onMouseLeave={unsetCurrentHoverValue}
        >
          <HashLink smooth to={"#about"}>
            <FontAwesomeIcon icon={faCircleInfo} className="menu-icon" />
          </HashLink>
        </li>
        <li
          className="spinner-item"
          style={{ "--i": 2 }}
          onMouseEnter={() => {
            toggleCurrentHover("Projects");
          }}
          onMouseLeave={unsetCurrentHoverValue}
        >
          <HashLink smooth to={"#projects"}>
            <FontAwesomeIcon icon={faDiagramProject} className="menu-icon" />
          </HashLink>
        </li>
        <li
          className="spinner-item"
          style={{ "--i": 3 }}
          onMouseEnter={() => {
            toggleCurrentHover("LinkedIn");
          }}
          onMouseLeave={unsetCurrentHoverValue}
        >
          <a
            href="https://www.linkedin.com/in/aaron-kenyon-gewirtz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="menu-icon" />
          </a>
        </li>
        <li
          className="spinner-item"
          style={{ "--i": 4 }}
          onMouseEnter={() => {
            toggleCurrentHover("Github");
          }}
          onMouseLeave={unsetCurrentHoverValue}
        >
          <a
            href="https://github.com/aaronkg1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="menu-icon" />
          </a>
        </li>
        <li
          className="spinner-item"
          style={{ "--i": 5 }}
          onMouseEnter={() => {
            toggleCurrentHover("Email");
          }}
          onMouseLeave={unsetCurrentHoverValue}
        >
          <a href="mailto:aaronkg1@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="menu-icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Spinner;
