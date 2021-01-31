import React, { useRef } from "react";
import "./Navbar.css";
import logo from "../../Images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navlinksCSS = useRef();
  const bur1 = useRef();
  const bur2 = useRef();
  const bur3 = useRef();
  const burgerClicked = () => {
    navlinksCSS.current.classList.toggle("burger-clicked");
    bur1.current.classList.toggle("skew1");
    bur2.current.classList.toggle("skew2");
    bur3.current.classList.toggle("display-none");
  };

  return (
    <div>
      <div className="navbar">
        <NavLink to="/tictactoe">
          <div className="logo">
            <img src={logo} alt="dipam-logo" />
          </div>
        </NavLink>
        <div className="navlinks" ref={navlinksCSS}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/dipam-poudel/"
          >
            LINKEDIN
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/deepum__poudel"
          >
            TWITTER
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/im.jack.skellington/"
          >
            INSTAGRAM
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/Dipam1">
            GITHUB
          </a>
        </div>
        <div className="burger" onClick={burgerClicked}>
          <div className="bur1" ref={bur1}></div>
          <div className="bur2" ref={bur2}></div>
          <div className="bur3" ref={bur3}></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
