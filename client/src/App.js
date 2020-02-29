import React, { Fragment } from "react";
import Landing from "./components/layouts/Landing";
import Navbar from "./components/layouts/Navbar";
import "./App.css";

const App = () => (
  <Fragment className="App">
    <Navbar />
    <Landing />
  </Fragment>
);

export default App;
