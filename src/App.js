import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, withRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Config from "./Config";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Login from "./components/Login";

class App extends Component {
  state = {
    logado: false
  };

  onLogin = event => {
    this.setState({ logado: true }, () => this.props.history.replace("/"));
  };

  onLogout = event => {
    this.setState({ logado: false }, () => this.props.history.replace("/"));
  };

  render() {
    const { logado } = this.state;

    return (
      <div className="App">
        <Header logado={logado} onLogout={this.onLogout} />

        {logado ? (
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/configuracao" exact component={Config} />
            <Route path="/profile" exact component={Profile} />
          </Switch>
        ) : (
          <Route
            path="/"
            exact
            render={props => <Login {...props} onLogin={this.onLogin} />}
          />
        )}
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);

const Router = () => (
  <BrowserRouter>
    <AppWithRouter />
  </BrowserRouter>
);

export default Router;
