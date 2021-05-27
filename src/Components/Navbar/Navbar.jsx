import React, { useRef } from "react";
import "./Navbar.css";
import { useHistory } from "react-router-dom";
import logo from "../../Images/logo.png";

function Navbar() {
  const history = useHistory();
  const burgerRef = useRef();
  const bur1 = useRef();
  const bur2 = useRef();
  const bur = useRef();
  const burgerClicked = () => {
    burgerRef.current.classList.toggle("burger-clicked");
    bur1.current.classList.toggle("bur1");
    bur2.current.classList.toggle("bur2");
    bur.current.classList.toggle("display-none");
  };
  return (
    <div>
      <div className="navbar">
        <a
          className="logo"
          target="_blank"
          rel="noreferrer"
          onClick={() => history.push("/game")}
        >
          <img src={logo} alt="dipam" />
        </a>
        <div className="navlinks" ref={burgerRef}>
          <div className="navlink">
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/deepum__poudel"
            >
              TWITTER
            </a>
          </div>
          <div className="navlink">
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/im.jack.skellington/"
            >
              INSTAGRAM
            </a>
          </div>
          <div className="navlink">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/dipam-poudel/"
            >
              LINKEDIN
            </a>
          </div>
          <div className="navlink">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Dipam1"
            >
              GITHUB
            </a>
          </div>
        </div>
        <div className="burger" onClick={burgerClicked}>
          <div className="bur" ref={bur1}></div>
          <div className="bur" ref={bur}></div>
          <div className="bur" ref={bur2}></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
