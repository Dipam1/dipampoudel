import React from "react";
import "./Education.css";
import Scroller from "../../../Components/Scroller/Scroller";

function Education() {
  return (
    <div className="section education">
      <h2>Education</h2>
      <div className="education-container">
        <div className="branch">
          <div className="vertical-line"></div>
          <div className="info">
            <h3>Master's in Computer Science</h3>
            <p>Monroe College, New Rochelle, NY (Expected Mid 2024)</p>
          </div>
        </div>
        <div className="branch">
          <div className="vertical-line"></div>
          <div className="info">
            <h3>Bachelor's Degree in Computer Science</h3>
            <p>Tribhuvan University, Kathmandu, Nepal (2021)</p>
          </div>
        </div>
      </div>
      <Scroller scrollToClass="exp1" />
    </div>
  );
}

export default Education;
