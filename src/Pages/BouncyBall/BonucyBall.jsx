import React, {useRef} from "react";
import "./BouncyBall.css";

function BonucyBall() {
    const ballRef= useRef();
    const winTextRef= useRef();
    Math.floor(Math.random()*1000);
    function ballClicked(){
        ballRef.current.classList.toggle("clicked");
        winTextRef.current.classList.toggle("display-none");

    }
     
  return <div>
      <div className="ball clicked" onClick={ballClicked} ref={ballRef}><h3>CLICKY MEEE</h3></div>
      <div className="display-none" onClick={ballClicked} ref={winTextRef}><h1>YOU GOT IT HOMES</h1></div>
      
  </div>;
}

export default BonucyBall;
