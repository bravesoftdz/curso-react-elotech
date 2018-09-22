import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Card } from "react-bootstrap";
import FormPessoa from "./FormPessoa";
import ListPessoa from "./ListPessoa";

class App extends Component {
  state = {
    nome: "",
    idade: "",
    pessoas: []
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  adicionarPessoa = () => {
    const novaPessoa = {
      nome: this.state.nome,
      idade: this.state.idade
    };

    this.setState(state => ({
      pessoas: [...state.pessoas, novaPessoa],
      nome: "",
      idade: ""
    }));
  };

  render() {
    const { nome, idade, pessoas } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Container>
          <FormPessoa
            nome={nome}
            idade={idade}
            onChange={this.onChange}
            adicionar={this.adicionarPessoa}
          />
          <div style={{ paddingTop: "10px" }}>
            <Card>
              <Card.Body>
                <Card.Title>Pessoas</Card.Title>
                <ListPessoa pessoas={pessoas} />
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
