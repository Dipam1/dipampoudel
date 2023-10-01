import Navbar from "./Components/Navbar/Navbar";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages";
import Resume from "./Pages/Resume/Resume";
import { useRef } from "react";
import { useScroll } from "./Context/ScrollContext";

function App() {
  const divRef = useRef();
  const { setScrollPositionHandler, scrollPosition } = useScroll();

  const handleScroll = () => {
    const { scrollTop } = divRef.current;
    setScrollPositionHandler(Math.floor((scrollTop / 4000) * 8));
  };

  return (
    <div className={`pointer_${scrollPosition}`}>
      <BrowserRouter>
        <Navbar />
        <div className="content" ref={divRef} onScroll={handleScroll}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <Switch>
            <Route exact path="/resume" component={Resume} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
