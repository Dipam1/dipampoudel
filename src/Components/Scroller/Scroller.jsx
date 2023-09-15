import React from "react";
import "./Scroller.css";

const Scroller = ({ scrollToClass, direction="Down" }) => {
  const onScrollClick = () => {
    const element = document.querySelector(`.${scrollToClass}`);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="scroller">
        <div className={`button ${direction}`}  onClick={() => onScrollClick(scrollToClass)}>
          {direction==="Up" ? "Lets go up" : ""}
        </div>
      </div>
    </>
  );
};

export default Scroller;
