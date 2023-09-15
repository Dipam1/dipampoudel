import React from "react";
import Scroller from "../../../Components/Scroller/Scroller";
import "./Bye.css";

function Bye() {
  return (
    <div className="section bye">
      <h2>Time to Bid Adieu!</h2>
      <p>
        Alright, you've had enough. Now, go do something fun. For my sake.
        <br />
        <br />
        Love you.
        <br />
        <br />
        Bye!
      </p>
      <Scroller scrollToClass="intro" direction="Up" />
    </div>
  );
}

export default Bye;
