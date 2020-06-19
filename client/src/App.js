import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import API from "./utils/API";
import Saved from "./pages/SavedGifs";
import NavBar from "./components/NavBar";
import Forms from "./components/Form";
import SearchResults from "./pages/SearchResults";

export default class App extends Component {
  state = {
    query: "",
    gifs: [],
    redirect: false,
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    API.getGifs(this.state.query)
      .then((res) =>
        this.setState({
          gifs: res.data.data,
          redirect: true,
        })
      )
      .catch((err) => console.log(err));
  };

  handleClick = (event) => {
    const { name, value } = event.target;
    API.saveGifs({
      name: name,
      url: value,
    })
      .then((res) => alert("Gif saved successfully!"))
      .catch((err) => console.log(err));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Forms
                  {...props}
                  handleFormSubmit={this.handleFormSubmit}
                  handleChange={this.handleChange}
                  query={this.state.query}
                  redirect={this.state.redirect}
                />
              )}
            />
            <Route
              exact
              path="/results"
              render={(props) => (
                <SearchResults
                  {...props}
                  gifs={this.state.gifs}
                  handleClick={this.handleClick}
                />
              )}
            />
            <Route exact path="/favorites" component={Saved} />
          </Switch>
        </Router>
      </div>
    );
  }
}
