import React from "react";
// import image from "../../Images/RemoveBG.png";
import "./Home.css";
import Intro from "./Intro/Intro";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Bye from "./Bye/Bye";

const Home = () => {
  return (
    <>
      <div className="home">
        <Intro />
        <Education />
        <Experience />
        <Projects />
        <Bye />
      </div>
    </>
  );
};

export default Home;
