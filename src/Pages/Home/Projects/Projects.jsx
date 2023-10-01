import React from "react";
import "./Projects.css";
import Scroller from "../../../Components/Scroller/Scroller";

function Projects() {
  return (
    <>
      <div className="section project1">
        <h2>Projects</h2>

        <div className="project-container">
          <div className="project-box">
            <a
              href="https://sidhakarobar.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://i.imgur.com/LB69QW8m.png" alt="Project 1" />
              <p>Sidha Karobar</p>
            </a>
            <p className="description">
              Website for selling and buying properties
            </p>
          </div>
          <div className="project-box">
            <a
              href="https://nimble-cr.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://i.imgur.com/ql8hxJcm.png" alt="Project 2" />
              <p>Nimble CR Website</p>
            </a>
            <p className="description">
              Website and in house CRM for Nimble CR
            </p>
          </div>
        </div>
        <Scroller scrollToClass="project2" />
      </div>
      <div className="section project2">
        <h2>Projects(contd...)</h2>

        <div className="project-container">
          <div className="project-box">
            <a
              href="https://pegotec.net/portfolio/asia-injury-protection-aip-eco-safe-driving/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://i.imgur.com/fsuFJ2Nm.png" alt="Project 3" />
              <p>EcoSafe Driving</p>
            </a>
            <p className="description">
              Dashboard and Analytics site for EcoSafe Driving Company{" "}
            </p>
          </div>
          <div className="project-box">
            <a
              href="https://deepum-components.netlify.app/wordle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://i.imgur.com/wniMNlDm.png" alt="Project 1" />
              <p>Worlde</p>
            </a>
            <p className="description">
              Created a wordle site in one day using React
            </p>
          </div>
        </div>
        <Scroller scrollToClass="bye" />
      </div>
    </>
  );
}

export default Projects;
