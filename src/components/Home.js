import React from "react";
import "../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";
const Home = () => {
  return (
    <section className="welcome-container" id="welcome-message">
      <div className="message-container">
        <p>
          Hi, I'm <span className="emphasise">Aaron</span>.
        </p>
        <p>A Full-Stack Web Developer.</p>
        <HashLink smooth to="#about">
          <button className="learn-more">
            Learn More{" "}
            <FontAwesomeIcon icon={faArrowDown} className="down-arrow" />
          </button>
        </HashLink>
      </div>
    </section>
  );
};

export default Home;
