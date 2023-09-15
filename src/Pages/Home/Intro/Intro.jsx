import React from "react";
import Scroller from "../../../Components/Scroller/Scroller";

function Intro() {
  return (
    <div className="section intro">
      <h2>Hey, I'm Deepum Poudel! 👋</h2>
      <p>
        I'm a skilled developer based in Queens, NY, specializing in ReactJS,
        NodeJS, MongoDB, and Firebase. My passion lies in crafting seamless
        frontend experiences. Let's build something amazing together!
      </p>
      <Scroller scrollToClass="education" />
    </div>
  );
}

export default Intro;
