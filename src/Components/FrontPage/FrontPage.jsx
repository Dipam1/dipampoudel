import React from "react";
import "./FrontPage.css";
import mario from "../../Images/mario-run.gif";
// import { NavLink } from "react-router-dom";

function FrontPage() {
  return (
    <div>
      <div className="mario-marquee-path">
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO"
          target="_blank"
          rel="noreferrer"
        >
          <div className="mario-running">
            <img src={mario} alt="mario" />
          </div>
        </a>
      </div>
        <h1 style={{textAlign:"center"}}>HEY IM DEEPUM</h1>
    </div>
  );
}

export default FrontPage;
