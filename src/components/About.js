import React from "react";
import "../styles/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import avatar from "../assets/aaron-avatar.jpeg";
import jsLogo from "../assets/tech-icons/javascript.svg";
import htmlLogo from "../assets/tech-icons/html-5.svg";
import cssLogo from "../assets/tech-icons/css3.svg";
import reactLogo from "../assets/tech-icons/react-native.svg";
import reduxLogo from "../assets/tech-icons/redux.svg";
import gitLogo from "../assets/tech-icons/git.svg";
import npmLogo from "../assets/tech-icons/npm.svg";
import webpackLogo from "../assets/tech-icons/webpack.svg";
import jestLogo from "../assets/tech-icons/jest.svg";
import { HashLink } from "react-router-hash-link";
const About = () => {
  return (
    <section className="about-container" id="about">
      <h1 className="section-title">About</h1>
      <div className="about-left">
        <img src={avatar} alt="Aaron avatar pic" className="avatar" />
        <p className="introduction">
          Why did a pharmacology graduate decide to venture into the world of
          software engineering? <br />
          <br />A <span className="word-highlight">logical</span> mindset
          instilled by my scientific background, a{" "}
          <span className="word-highlight">creative</span> flair nurtured by
          years of playing the guitar, a love of technology{" "}
          <span className="word-highlight">
            <strong>&&</strong>
          </span>{" "}
          a thirst for knowledge. A career in programming sounded{" "}
          <span className="word-highlight">
            <strong>PERFECT</strong>
          </span>
          ! <br />
          <br />I decided to learn straight away. In December 2021 I discovered{" "}
          <a
            href="https://www.theodinproject.com"
            alt="The Odin Project"
            className="word-highlight"
          >
            The Odin Project
          </a>
          , an open-source full-stack web development resource and it has been
          my obsession ever since.
        </p>
      </div>
      <div className="about-right">
        <ul className="tech-list">
          <li>
            {" "}
            <img src={htmlLogo} alt="HTML" className="tech-icon" />
            HTML
          </li>
          <li>
            <img src={cssLogo} alt="CSS" className="tech-icon" />
            CSS
          </li>
          <li>
            <img src={jsLogo} alt="Javascript" className="tech-icon" />
            Javascript
          </li>
          <li>
            <img src={reactLogo} alt="React" className="tech-icon" />
            React
          </li>
          <li>
            <img src={reduxLogo} alt="Redux" className="tech-icon" />
            Redux
          </li>
          <li>
            <img src={gitLogo} alt="Git" className="tech-icon" />
            Git
          </li>
          <li>
            <img src={npmLogo} alt="npm" className="tech-icon" />
            NPM
          </li>
          <li>
            <img src={webpackLogo} alt="Webpack" className="tech-icon" />
            Webpack
          </li>
          <li>
            <img src={jestLogo} alt="jest" className="tech-icon" />
            Jest
          </li>
        </ul>
        <HashLink smooth to="#projects">
          <button className="see-projects">
            See my projects
            <FontAwesomeIcon icon={faArrowDown} className="down-arrow" />
          </button>
        </HashLink>
      </div>
    </section>
  );
};

export default About;
