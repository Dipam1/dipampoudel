import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <>
      <div className="section">
        <h2>Projects</h2>

        {/* Professional Projects */}
        <h3>Professional Projects</h3>
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
              href="https://www.example.com/project2"
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
          <div className="project-box">
            <a
              href="https://www.example.com/project3"
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
        </div>
      </div>
      <div className="section">
        <h2>Projects(contd...)</h2>

        <h3>Personal Projects</h3>
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
              href="https://www.example.com/project2"
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
          <div className="project-box">
            <a
              href="https://www.example.com/project3"
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
        </div>
      </div>
    </>
  );
}

export default Projects;
