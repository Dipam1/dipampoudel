import React from "react";
import "./FrontPageTopCard.css";
import mario from "../../Images/mario-run.gif";
import {NavLink} from 'react-router-dom'

function FrontPageTopCard() {
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
      <div className="front-page-top-card-body"></div>
      <div className="front-page-top-card-body-header">
        <h2>Hi.</h2>
        <h3>
          I'm Deepum or Dipam or Dipum. <br /> Or LeakyBucket.
        </h3>
        <h3>One of those.</h3>
      </div>
      <h2 className="meme">
        <NavLink to="/bounce-that-bitch">Play with balls</NavLink>
        <br />
        Bye <br></br>
      </h2>
    </div>
  );
}

export default FrontPageTopCard;
