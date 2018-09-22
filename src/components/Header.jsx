import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Header = ({ logado, onLogout }) => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand>Elo Twitter</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      {logado && (
        <Nav className="mr-auto">
          <NavLink exact className="nav-link" to="/">
            Início
          </NavLink>
          <NavLink exact className="nav-link" to="/profile">
            Profile
          </NavLink>
          <NavLink exact className="nav-link" to="/configuracao">
            Configuração
          </NavLink>
        </Nav>
      )}
      {logado && (
        <Nav pullright="true">
          <Link exact className="nav-link" to="/" onClick={onLogout} >
            Sair
          </Link>
        </Nav>
      )}
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
