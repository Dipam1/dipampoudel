import Navbar from "./Components/Navbar/Navbar";
import FrontPage from "./Components/FrontPage/FrontPage";
import TicTacToe from "./Components/TicTacToe/TicTacToe";
import BouncyBall from "./Pages/BouncyBall/BonucyBall";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <FrontPage />
          </Route>
          <Route exact path="/tictactoe">
            <TicTacToe />
          </Route>
          <Route exact path="/bounce-that-bitch">
            <BouncyBall />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
