import React, { useState } from "react";
import "./TicTacToe.css";

function TicTacToe() {
  const [oneOrZero, setOneOrZero] = useState("0");
  const [toggle, setToggle] = useState([
    { value: "", disabled: false, theClassName: "tictactoe-small-div" },
    { value: "", disabled: false, theClassName: "tictactoe-small-div" },
    { value: "", disabled: false, theClassName: "tictactoe-small-div" },
    { value: "", disabled: false, theClassName: "tictactoe-small-div" },
    { value: "", disabled: false, theClassName: "tictactoe-small-div" },
    { value: "", disabled: false, theClassName: "tictactoe-small-div" },
    { value: "", disabled: false, theClassName: "tictactoe-small-div" },
    { value: "", disabled: false, theClassName: "tictactoe-small-div" },
    { value: "", disabled: false, theClassName: "tictactoe-small-div" },
  ]);

  const clicked = (index) => {
    const temp = toggle;
    temp[index].value = oneOrZero;
    temp[index].disabled = true;
    oneOrZero === "0"
      ? (temp[index].theClassName = temp[index].theClassName + " green")
      : (temp[index].theClassName = temp[index].theClassName + " red");

    setToggle(temp);
    console.log(temp[index].theClassName);
    oneOrZero === "0" ? setOneOrZero("X") : setOneOrZero("0");
    checkIfOver();
  };

  const checkIfOver = () => {
    console.log("values " + toggle[0].value);
    console.log("values " + toggle[1].value);
    console.log("values " + toggle[2].value);
    if (
      (toggle[0].value === toggle[1].value &&
        toggle[1].value === toggle[2].value &&
        toggle[1].value !== "") ||
      (toggle[3].value === toggle[4].value &&
        toggle[4].value === toggle[5].value &&
        toggle[4].value !== "") ||
      (toggle[6].value === toggle[7].value &&
        toggle[7].value === toggle[8].value &&
        toggle[7].value !== "") ||
      (toggle[0].value === toggle[3].value &&
        toggle[3].value === toggle[6].value &&
        toggle[3].value !== "") ||
      (toggle[1].value === toggle[4].value &&
        toggle[4].value === toggle[7].value &&
        toggle[4].value !== "") ||
      (toggle[2].value === toggle[5].value &&
        toggle[5].value === toggle[8].value &&
        toggle[5].value !== "") ||
      (toggle[0].value === toggle[4].value &&
        toggle[4].value === toggle[8].value &&
        toggle[4].value !== "") ||
      (toggle[2].value === toggle[4].value &&
        toggle[4].value === toggle[6].value &&
        toggle[4].value !== "")
    ) {
      console.log("OVER");
      winner();
    }
  };

  const winner = () => {
    alert("THE WINNER IS " + oneOrZero);
    const temp = [
      { value: "", disabled: false },
      { value: "", disabled: false },
      { value: "", disabled: false },
      { value: "", disabled: false },
      { value: "", disabled: false },
      { value: "", disabled: false },
      { value: "", disabled: false },
      { value: "", disabled: false },
      { value: "", disabled: false },
    ];
    setToggle(temp);
  };

  return (
    <>
      <h1 className="tictactoe-h1">TIC TAC TOE</h1>
      <div className="tictactoe-big-div">
        {toggle.map((box, index) => {
          return (
            <button
              key={index}
              disabled={toggle[index].disabled}
              className={toggle[index].theClassName}
              onClick={() => clicked(index)}
            >
              <h1>{toggle[index].value}</h1>
            </button>
          );
        })}
      </div>
    </>
  );
}
export default TicTacToe;
