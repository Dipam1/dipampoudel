import Navbar from "./Components/Navbar/Navbar";
import FrontPageTopCard from "./Components/FrontPageTopCard/FrontPageTopCard";
import TicTacToe from "./Components/TicTacToe/TicTacToe";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <FrontPageTopCard />
          </Route>
          <Route exact path="/tictactoe">
            <TicTacToe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
