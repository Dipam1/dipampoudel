import React from "react";
import "./FrontPageTopCard.css";
import mario from "../../Images/mario-run.gif";

function FrontPageTopCard() {
  return (
    <div>
      <div className="mario-marquee-path">
        <div className="mario-running">
          <img src={mario} alt="mario" />
        </div>
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
        And thats all you need to know right now. <br />
        Bye <br></br>
        P.S. Proxy is a hoe
      </h2>
    </div>
  );
}

export default FrontPageTopCard;
