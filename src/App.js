import Navbar from "./Components/Navbar/Navbar";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { GameMaybe, Home } from "./Pages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/game" component={GameMaybe} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
