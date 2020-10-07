import React from "react";
import "./App.css";
import Header from "./components/header";
import Works from "./components/works";
import About from "./components/about";
import Home from "./components/home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
