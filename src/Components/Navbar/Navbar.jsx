import React, { useRef } from "react";
import "./Navbar.css";
import LOGO from "../../Images/logo.png";

function Navbar() {
  const burger = useRef();
  const burgerClicked = () => {
      burger.current.classList.toggle("burger-clicked");
  };

  const memeClicked=()=>{
      alert("YOU A HOE")
  }

  return (
    <div className="navbar">
      <div className="logo">
        <img src={LOGO} alt="vlc" />
      </div>
      <div ref={burger} className="nav-links">
        <a href="/" onClick={memeClicked}>HOME</a>
        <a href="twitter.com/deepum__poudel" onClick={memeClicked}>TWITTER</a>
        <a href="instagram.com/im.jack.skellington" onClick={memeClicked}>INSTAGRAM</a>
        <a href="github.com/dipam1" onClick={memeClicked}>GITHUB</a>
      </div>
      <div className="burger" onClick={burgerClicked}>
        <div className="bur"></div>
        <div className="bur"></div>
        <div className="bur"></div>
      </div>
    </div>
  );
}

export default Navbar;
