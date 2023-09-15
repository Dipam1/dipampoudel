import Navbar from "./Components/Navbar/Navbar";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages";
import Resume from "./Pages/Resume/Resume";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Switch>
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
