import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Home from "./pages/HomePage";
import Saved from "./pages/SavedGifs";
import NavBar from "./components/NavBar";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </Router>
      </div>
    );
  }
}
