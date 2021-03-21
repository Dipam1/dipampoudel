import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [textChange, settextChange] = useState("i like movies");
  useEffect(() => {
    setTimeout(() => {
      if (textChange === "i like movies") {
        settextChange("i like football");
      } else if (textChange === "i like football") {
        settextChange("i also kinda like me");
      } else {
        settextChange("but most importantly, i like you :)");
      }
    }, 2000);
  }, [textChange]);

  return (
    <>
      <div className="home">
        <h1>{textChange}</h1>
      </div>
      <h1 style={{ marginTop: "30vh" }}>
        Unless you like breathing. If you like breathing thats hella gross ew.
        🤢🤮
      </h1>
    </>
  );
};

export default Home;
