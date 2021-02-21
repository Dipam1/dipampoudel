import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
