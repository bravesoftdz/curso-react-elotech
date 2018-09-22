import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter,
  withRouter,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./Home";
import Config from "./Config";

class App extends Component {
  render() {
    console.log("history: ", this.props.history);

    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>Elo Twitter</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink exact className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink exact className="nav-link" to="/configuracao">
                Configuração
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/configuracao" exact component={Config} />
        </Switch>
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
