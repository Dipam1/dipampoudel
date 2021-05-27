import React, { useState } from "react";
import meme from "../../Images/meme.png";
import "./GameMaybe.css";

const GameMaybe = () => {
  const [value, setValue] = useState("100");
  const valueChanged = (event) => {
    if (event.target.value < 60) {
      alert("Yoooo you wrong she fatter than this ew");
      return;
    }
    setValue(event.target.value);
  };
  return (
    <div>
      <h1>Get the correct size of mrs bhakada</h1>
      <input
        type="range"
        min="1"
        max="100"
        value={value}
        class="slider"
        id="myRange"
        onChange={valueChanged}
        style={{width:"800px"}}
      ></input>
      <br />
      <br />
      <br />
      <br />
      <img src={meme} alt="" width={value * 10} height="400px" />
    </div>
  );
};

export default GameMaybe;
