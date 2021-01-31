import Navbar from "./Components/Navbar/Navbar";
import FrontPageTopCard from "./Components/FrontPageTopCard/FrontPageTopCard";
import TicTacToe from "./Components/TicTacToe/TicTacToe";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Navbar />
          <Route path="/" exact component={FrontPageTopCard} />
          <Route path="/tictactoe" exact component={TicTacToe} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
