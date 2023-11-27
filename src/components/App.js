import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return 
  <div>
    <Actors/>
    <Directors/>
    <Home/>
    <Movies/>
    <NavBar/>
  </div>;
}

export default App;
