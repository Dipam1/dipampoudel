import React, { useState, useEffect } from "react";
import image from "../../Images/RemoveBG.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-top">
          <div className="text">
            <div className="bg"></div>
            <h2>Hi.</h2>
            <h3>I'm Deepum.</h3>
            <h4>And I'm a web developer.</h4>
            <div class="wrapper">
              <a href="#">
                <span>Clicky!</span>
              </a>
            </div>
          </div>
          <div className="image-container">
            <div className="bg"></div>
            {/* <img src={image} alt="" onMouseOver="http://picsum.photos/600" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
