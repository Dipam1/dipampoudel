import React from "react";
import "./Experience.css";
import Scroller from "../../../Components/Scroller/Scroller";

function Experience() {
  return (
    <>
      <div className="section exp1">
        <h2>Work Experience</h2>
        <div className="experience-item">
          <h3>Front-End Developer, Nimble Clinical Research, New Jersey</h3>
          <p>Jan 2022 - Jan 2023</p>
          <ul>
            <li>
              Redesigned Nimble Clinical Research application, resulting in a
              modern and intuitive user interface that improved user
              satisfaction by 25%.
            </li>
            <li>
              Optimized the application's codebase and reduced its file size,
              leading to a 60% increase in load speed and better performance on
              slower connections.
            </li>
            <li>
              Led a team of 4 developers in implementing new features and
              resolving critical bugs, resulting in a stable and reliable
              application with high uptime.
            </li>
            <li>
              Collaborated with the backend development team to develop a robust
              API, resulting in a more seamless and integrated user experience.
            </li>
          </ul>
        </div>
        <Scroller scrollToClass="exp2" />
      </div>
      <div className="section exp2">
        <h2>Work Experience(contd..)</h2>
        <div className="experience-item">
          <h3>Web Developer, Pegotec Pte. Ltd, Singapore</h3>
          <p>June 2021 - Jan 2022</p>
          <ul>
            <li>
              Led a team of 3 front-end developers in designing and implementing
              multiple React-based web applications for 6 client companies resulting in improved operational efficiency
              and reduced errors across the board.
            </li>
            <li>
              Utilized React and Redux to develop scalable and modular
              architectures for each web application, resulting in streamlined
              development processes and reduced maintenance costs.
            </li>
            <li>
              Worked closely with backend development teams to integrate
              real-time data feeds and analytics, resulting in improved
              data-driven decision-making.
            </li>
          </ul>
        </div>
        <Scroller scrollToClass="exp3" />
      </div>
      <div className="section exp3">
        <h2>Work Experience(contd..)</h2>
        <div className="experience-item">
          <h3>Web Developer, PrismaSofts, Kathmandu</h3>
          <p>Oct 2020 - June 2021</p>
          <ul>
            <li>
              Led the development of a custom software application for a
              construction company, resulting in streamlined project management
              and improved collaboration between stakeholders.
            </li>
            <li>
              Utilized React and Node.js to develop a scalable and modular
              architecture for the software application, resulting in a
              streamlined development process and reduced maintenance costs.
            </li>
            <li>
              Conducted thorough testing and quality assurance for the software,
              resulting in a stable and reliable product with an uptime of
              99.9%.
            </li>
          </ul>
        </div>
        <Scroller scrollToClass="project1" />
      </div>
    </>
  );
}

export default Experience;
