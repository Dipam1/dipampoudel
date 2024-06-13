import React, { useRef } from "react";
import "./Navbar.css";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
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
    <div className="navbar">
      <Link to="/" className="navlink logo">
        <img src={logo} alt="dipam" />
      </Link>
      <div className="navlinks" ref={burgerRef}>
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
            href="https://docs.google.com/document/d/1OuZBl-6L4_DiWR3cFjqBhr9vPw2glXBB/edit?usp=sharing&ouid=113765240664512260792&rtpof=true&sd=true"
          >
            RESUME
          </a>
        </div>
        <div className="navlink">
          <a target="_blank" rel="noreferrer" href="https://github.com/Dipam1">
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
  );
}

export default Navbar;
