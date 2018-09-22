import React from "react";
import { Button } from "react-bootstrap";

const Login = ({ onLogin }) => (
  <h1>
    <Button onClick={onLogin}>Entrar com Google</Button>
  </h1>
);

export default Login;
