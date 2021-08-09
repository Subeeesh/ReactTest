import "./App.css";
import Navbar from "./components/Navbar";
import login from "./components/Register";

import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Navbar}></Route>
      <Route path="/login" component={login}></Route>
    </div>
  );
}

export default App;
